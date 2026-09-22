#!/usr/bin/env node
/**
 * Build çıktısı üzerinde SEO ve bütünlük denetimi.
 *
 * Doğruluk kaynağı render edilmiş HTML: başlık, açıklama ve og etiketleri sayfa
 * dosyalarında inline prop olarak duruyor, Layout.astro bunları dönüştürüyor
 * (marka eki, og:image mutlaklaştırma). Kaynak dosyaları taramak bu dönüşümleri
 * kaçırır.
 *
 *   npm run seo:check        → mevcut build çıktısını denetle
 *   npm run seo:ci           → build al, sonra denetle
 *   ... -- --all             → her kategoride tüm satırları göster
 *
 * Hata varsa çıkış kodu 1. Uyarılar çıkış kodunu etkilemez.
 */
import { existsSync, promises as fs } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const SITE = 'https://www.mastericmimarlik.com';
const BRAND = 'Master İç Mimarlık';
const TITLE = { min: 30, max: 65 };
const DESC = { min: 120, max: 160 };

const dirArg = process.argv.indexOf('--dir');
const OUT = dirArg > -1
  ? path.resolve(process.argv[dirArg + 1])
  : [path.join(ROOT, '.vercel/output/static'), path.join(ROOT, 'dist')].find((d) => existsSync(d));

if (!OUT || !existsSync(OUT)) {
  console.error('✖ Build çıktısı bulunamadı. Önce: npm run build');
  process.exit(1);
}

// ——— yardımcılar ———

const issues = [];
const error = (cat, where, msg) => issues.push({ level: 'error', cat, where, msg });
const warn = (cat, where, msg) => issues.push({ level: 'warn', cat, where, msg });

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');

const safeDecodeURI = (s) => {
  try { return decodeURIComponent(s); } catch { return s; }
};

function tagAttr(html, tagRe, attr) {
  const tag = html.match(tagRe)?.[0];
  if (!tag) return '';
  const m = tag.match(new RegExp(`\\b${attr}="([^"]*)"`, 'i'));
  return m ? decode(m[1]) : '';
}

async function walk(dir, out = []) {
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p, out);
    else out.push(p);
  }
  return out;
}

const toPosix = (abs) => '/' + path.relative(OUT, abs).split(path.sep).join('/');
const allFiles = (await walk(OUT)).map(toPosix);
const fileSet = new Set(allFiles);

const stripSlash = (p) => (p.length > 1 ? p.replace(/\/+$/, '') : p);

function routeExists(href) {
  const clean = stripSlash(safeDecodeURI(href.split('#')[0].split('?')[0])) || '/';
  if (clean === '/') return fileSet.has('/index.html');
  return fileSet.has(`${clean}/index.html`) || fileSet.has(`${clean}.html`) || fileSet.has(clean);
}

const vercel = JSON.parse(await fs.readFile(path.join(ROOT, 'vercel.json'), 'utf8'));
const redirects = vercel.redirects ?? [];
const redirectSources = new Set(redirects.map((r) => r.source));

// ——— sayfaları oku ———

const pages = [];
for (const rel of allFiles.filter((f) => f.endsWith('.html'))) {
  if (/^\/google[0-9a-f]+\.html$/.test(rel)) continue; // Search Console doğrulama dosyası
  const html = await fs.readFile(path.join(OUT, rel), 'utf8');
  const url = rel === '/index.html' ? '/' : rel.replace(/\/index\.html$/, '').replace(/\.html$/, '');
  pages.push({
    url,
    html,
    is404: url === '/404',
    title: decode(html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim() ?? ''),
    desc: tagAttr(html, /<meta[^>]*\bname="description"[^>]*>/i, 'content'),
    canonical: tagAttr(html, /<link[^>]*\brel="canonical"[^>]*>/i, 'href'),
    ogImage: tagAttr(html, /<meta[^>]*\bproperty="og:image"[^>]*>/i, 'content'),
    twImage: tagAttr(html, /<meta[^>]*\bname="twitter:image"[^>]*>/i, 'content'),
    robots: tagAttr(html, /<meta[^>]*\bname="robots"[^>]*>/i, 'content'),
    h1: (html.match(/<h1[\s>]/gi) ?? []).length,
  });
}

// ——— 1) Sayfa başına metadata ———

for (const p of pages) {
  const { url } = p;

  if (!p.title) error('Başlık', url, 'title yok');
  else if (!p.is404) {
    const n = [...p.title].length;
    if (n < TITLE.min || n > TITLE.max) warn('Başlık uzunluğu', url, `${n} karakter (${TITLE.min}–${TITLE.max}) — "${p.title}"`);
    if (!p.title.includes(BRAND)) warn('Marka eki yok', url, `"${p.title}"`);
  }

  if (!p.desc) error('Açıklama', url, 'meta description yok');
  else if (!p.is404) {
    const n = [...p.desc].length;
    if (n < DESC.min || n > DESC.max) warn('Açıklama uzunluğu', url, `${n} karakter (${DESC.min}–${DESC.max})`);
  }

  if (!p.canonical) error('Canonical', url, 'canonical yok');
  else if (!p.is404) {
    const expected = url === '/' ? `${SITE}/` : `${SITE}${url}`;
    if (p.canonical !== expected) error('Canonical', url, `"${p.canonical}" — beklenen "${expected}"`);
  }

  for (const [label, value] of [['og:image', p.ogImage], ['twitter:image', p.twImage]]) {
    if (!value) error('Paylaşım görseli', url, `${label} yok`);
    else if (!value.startsWith('https://')) error('Paylaşım görseli', url, `${label} mutlak değil: ${value}`);
  }

  if (p.h1 !== 1) error('H1', url, `${p.h1} adet h1 (tam 1 olmalı)`);
  if (!p.is404 && /noindex/i.test(p.robots)) warn('Robots', url, `robots: ${p.robots}`);
}

// ——— 2) Sayfalar arası tekrar ———

function duplicates(field, report, cat) {
  const seen = new Map();
  for (const p of pages) {
    if (p.is404 || !p[field]) continue;
    seen.set(p[field], [...(seen.get(p[field]) ?? []), p.url]);
  }
  for (const [value, urls] of seen) {
    if (urls.length > 1) report(cat, urls.join(', '), `aynı değer: "${value.slice(0, 70)}${value.length > 70 ? '…' : ''}"`);
  }
}
duplicates('title', error, 'Kopya başlık');
duplicates('canonical', error, 'Kopya canonical');
duplicates('desc', warn, 'Kopya açıklama');

// ——— 3) Kendi hakkında puan işaretlemesi ———
// Google, işletmenin kendi sitesinde kendisi hakkındaki puanı işaretlemesini
// ("self-serving review") yapısal veri politikasıyla yasaklıyor — manuel işlem
// sebebi. Görünür metin olarak Google puanını göstermek (GoogleRatingCard) sorun
// değil; sorun JSON-LD'de aggregateRating/Review üretmek.

for (const p of pages) {
  for (const m of p.html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    if (/"aggregateRating"|"@type"\s*:\s*"Review"/.test(m[1])) {
      error('Yapısal veri', p.url, 'aggregateRating / Review işaretlemesi — self-serving review, manuel işlem riski');
      break;
    }
  }
}

// ——— 4) Kırık iç linkler ———

const brokenLinks = new Map();
for (const p of pages) {
  for (const m of p.html.matchAll(/\bhref="(\/(?!\/)[^"]*)"/g)) {
    const target = decode(m[1]).split('#')[0].split('?')[0];
    if (routeExists(target) || redirectSources.has(stripSlash(target) || '/')) continue;
    brokenLinks.set(target, new Set([...(brokenLinks.get(target) ?? []), p.url]));
  }
}
for (const [target, from] of brokenLinks) {
  error('Kırık iç link', target, `${from.size} sayfadan linkleniyor (ör. ${[...from][0]})`);
}

// ——— 5) Kırık görsel yolları ———
// Doğrudan site yolları (/img/..., /images/...) ve Cloudinary fetch URL'lerinin
// arkasındaki kaynak dosya birlikte kontrol ediliyor: Cloudinary görseli canlı
// siteden çektiği için kaynak dosya yayında yoksa görsel sessizce boş çıkar.

const CLOUDINARY_ORIGIN = /res\.cloudinary\.com\/[^/]+\/image\/fetch\/[^/]+\/https?:\/\/www\.mastericmimarlik\.com(\/[^"'\s,)]+)/g;
const brokenImages = new Map();
const markBroken = (file, page) => brokenImages.set(file, new Set([...(brokenImages.get(file) ?? []), page]));

for (const p of pages) {
  const direct = [];
  for (const m of p.html.matchAll(/\b(?:src|data-bg)="(\/(?!\/)[^"]+)"/g)) direct.push(m[1]);
  for (const m of p.html.matchAll(/\bsrcset="([^"]+)"/g)) {
    for (const part of m[1].split(',')) {
      const u = part.trim().split(/\s+/)[0];
      if (u.startsWith('/') && !u.startsWith('//')) direct.push(u);
    }
  }
  for (const u of direct) {
    if (!fileSet.has(safeDecodeURI(decode(u)))) markBroken(u, p.url);
  }
  for (const m of p.html.matchAll(CLOUDINARY_ORIGIN)) {
    const origin = safeDecodeURI(decode(m[1]));
    if (!fileSet.has(origin)) markBroken(`${origin} (Cloudinary kaynağı)`, p.url);
  }
}
for (const [file, from] of brokenImages) {
  error('Kırık görsel', file, `${from.size} sayfada (ör. ${[...from][0]})`);
}

// ——— 6) Kaynak ↔ veri tutarlılığı ———

// Blog: sayfa dosyası ↔ blog-posts.ts kaydı. Biri eklenip diğeri unutulursa
// /blog listesi eksik kalır ya da ilgili-yazılar ölü sayfaya link üretir.
const blogFiles = new Set(
  (await fs.readdir(path.join(ROOT, 'src/pages/blog')))
    .filter((f) => f.endsWith('.astro') && f !== 'index.astro')
    .map((f) => f.replace(/\.astro$/, ''))
);
const blogData = await fs.readFile(path.join(ROOT, 'src/data/blog-posts.ts'), 'utf8');
const blogSlugs = new Set([...blogData.matchAll(/^\s*slug:\s*'([^']+)'/gm)].map((m) => m[1]));
for (const s of blogFiles) if (!blogSlugs.has(s)) error('Blog verisi', `/blog/${s}`, "sayfa var ama blog-posts.ts'te kaydı yok — /blog listesinde görünmez");
for (const s of blogSlugs) if (!blogFiles.has(s)) error('Blog verisi', `/blog/${s}`, "blog-posts.ts'te kaydı var ama sayfa dosyası yok — ölü link üretir");

// Projeler: projects.ts kaydı ↔ galeri manifesti. Galerisi olmayan proje
// projects.ts'teki filtre yüzünden sessizce listeden düşüyor; build-images.mjs
// manifesti koşulsuz yazdığı için boş bir çalıştırma tüm galerileri silebilir.
const projectsSrc = await fs.readFile(path.join(ROOT, 'src/data/projects.ts'), 'utf8');
const metaBlock = projectsSrc.slice(projectsSrc.indexOf('const META'), projectsSrc.indexOf('const DISPLAY_ORDER'));
const projectSlugs = [...metaBlock.matchAll(/^\s+slug:\s*'([^']+)'/gm)].map((m) => m[1]);
const gallery = JSON.parse(await fs.readFile(path.join(ROOT, 'src/data/projects-gallery.json'), 'utf8'));
if (projectSlugs.length === 0) error('Proje galerisi', 'src/data/projects.ts', 'proje kayıtları okunamadı');
for (const s of projectSlugs) {
  if (!(gallery[s]?.files?.length > 0)) {
    error('Proje galerisi', `/projeler/${s}`, "projects-gallery.json'da görsel yok — proje sessizce listeden düşer (npm run images)");
  }
}

// Yönlendirmeler: hedef gerçek bir sayfa olmalı; kaynak mevcut bir sayfayı gölgelememeli.
for (const r of redirects) {
  const parametric = (s) => /:[a-z]/i.test(s.replace(/^https?:/, ''));
  if (!parametric(r.destination) && !r.destination.startsWith('http') && !routeExists(r.destination)) {
    error('Yönlendirme', r.source, `hedef sayfa yok: ${r.destination}`);
  }
  if (!parametric(r.source) && routeExists(r.source)) {
    error('Yönlendirme', r.source, 'kaynak mevcut bir sayfa — yönlendirme sayfayı gölgeler');
  }
}

// ——— 7) Sitemap ———

const sitemapFiles = allFiles.filter((f) => /^\/sitemap-\d+\.xml$/.test(f));
if (sitemapFiles.length === 0) error('Sitemap', '/sitemap-0.xml', 'sitemap bulunamadı');
const inSitemap = new Set();
for (const rel of sitemapFiles) {
  const xml = await fs.readFile(path.join(OUT, rel), 'utf8');
  for (const m of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = m[1].match(/<loc>([^<]+)<\/loc>/)?.[1] ?? '';
    const pathname = stripSlash(loc.startsWith(SITE) ? loc.slice(SITE.length) || '/' : loc);
    inSitemap.add(pathname);
    // Ana sayfanın slash'sız ("https://host") çıkması hata sayılmıyor: kök URL'de boş yol
    // "/" demek ve Google ikisini aynı URL kabul ediyor. @astrojs/sitemap bunu
    // trailingSlash:'never' için kasıtlı yapıyor (write-sitemap.js, serialize sonrası).
    if (!/<lastmod>/.test(m[1])) error('Sitemap', pathname, 'lastmod yok');
    if (!routeExists(pathname)) error('Sitemap', pathname, "sitemap'te var ama sayfa yok");
  }
}
for (const p of pages) {
  if (p.is404 || /noindex/i.test(p.robots)) continue;
  if (!inSitemap.has(p.url)) warn('Sitemap', p.url, "sayfa sitemap'te yok");
}

// ——— Rapor ———

const errs = issues.filter((i) => i.level === 'error');
const warns = issues.filter((i) => i.level === 'warn');
const LIMIT = process.argv.includes('--all') ? Infinity : 8;

function report(list, icon) {
  const byCat = new Map();
  for (const i of list) byCat.set(i.cat, [...(byCat.get(i.cat) ?? []), i]);
  for (const [cat, items] of byCat) {
    console.log(`\n  ${icon} ${cat} (${items.length})`);
    for (const i of items.slice(0, LIMIT)) console.log(`      ${i.where}  —  ${i.msg}`);
    if (items.length > LIMIT) console.log(`      … ve ${items.length - LIMIT} tane daha (tamamı için: -- --all)`);
  }
}

console.log(`\nSEO denetimi — ${pages.length} sayfa, ${path.relative(ROOT, OUT) || OUT}`);
if (warns.length) {
  console.log(`\n⚠  ${warns.length} uyarı`);
  report(warns, '⚠');
}
if (errs.length) {
  console.log(`\n✖  ${errs.length} hata`);
  report(errs, '✖');
} else {
  console.log('\n✓ Hata yok.');
}
process.exit(errs.length ? 1 : 0);
