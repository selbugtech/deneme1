#!/usr/bin/env node
/**
 * Site görsellerini (public/images, public/beforeafter) kendi sunucumuzdan servis
 * edilecek şekilde optimize eder. Cloudinary fetch'inin yerine geçer.
 *
 *   node scripts/build-site-images.mjs            # eksik çıktıları üret
 *   node scripts/build-site-images.mjs --force    # hepsini yeniden üret
 *
 * Üretilenler (public/img-opt/):
 *   <anahtar>-<genişlik>w.webp   400/600/800/1200/1600/1920 (kaynaktan büyük olanlar atlanır)
 *   <anahtar>-og.jpg             1200×630 paylaşım görseli (akıllı kırpma)
 *   og-<proje-slug>.jpg          her projenin ilk fotoğrafından 1200×630
 * ve src/data/images-manifest.json (yardımcılar src/lib/images.ts bunu okur).
 *
 * Yalnızca kaynak kodda geçen görseller işlenir (kullanılmayan 9 MB'lık dosyalar çıkmaz).
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, 'public', 'img-opt');
const MANIFEST = path.join(ROOT, 'src', 'data', 'images-manifest.json');
const GALLERY = path.join(ROOT, 'src', 'data', 'projects-gallery.json');
const WIDTHS = [400, 600, 800, 1200, 1600, 1920];
const FORCE = process.argv.includes('--force');

// Türkçe karakterli/boşluklu dosya adlarından güvenli anahtar üret.
const keyOf = (file) =>
  path
    .basename(file, path.extname(file))
    .toLowerCase()
    .replace(/ı/g, 'i').replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ö/g, 'o').replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

async function walk(dir, out = []) {
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p, out);
    else out.push(p);
  }
  return out;
}

// Kaynak kodda geçen metinler (kullanılmayan görselleri atlamak için)
const srcFiles = (await walk(path.join(ROOT, 'src'))).filter((f) => /\.(astro|ts|mjs)$/.test(f));
let srcText = '';
for (const f of srcFiles) srcText += (await fs.readFile(f, 'utf8')) + '\n';

const candidates = [];
for (const dir of ['images', 'beforeafter']) {
  const abs = path.join(ROOT, 'public', dir);
  for (const f of await fs.readdir(abs)) {
    if (!/\.(jpe?g|png|webp)$/i.test(f)) continue;
    const urlPath = `/${dir}/${f}`;
    if (srcText.includes(urlPath)) candidates.push({ urlPath, file: path.join(abs, f) });
    else console.log(`· atlandı (kodda geçmiyor): ${urlPath}`);
  }
}

await fs.mkdir(OUT_DIR, { recursive: true });
const manifest = {};
const keys = new Map();

for (const { urlPath, file } of candidates) {
  const key = keyOf(file);
  if (keys.has(key)) throw new Error(`Anahtar çakışması: ${key} (${keys.get(key)} / ${urlPath})`);
  keys.set(key, urlPath);

  const meta = await sharp(file).metadata();
  const origW = meta.width;
  const widths = WIDTHS.filter((w) => w <= origW);
  if (widths.length === 0 || origW > widths[widths.length - 1]) {
    // Kaynak, en büyük hedeften küçükse kendi genişliğini de ekle (büyütme yok)
    if (origW < WIDTHS[WIDTHS.length - 1] && !widths.includes(origW)) widths.push(origW);
  }
  widths.sort((a, b) => a - b);

  for (const w of widths) {
    const out = path.join(OUT_DIR, `${key}-${w}w.webp`);
    if (!FORCE && (await fs.stat(out).catch(() => null))) continue;
    await sharp(file).rotate().resize({ width: w, withoutEnlargement: true }).webp({ quality: w >= 1600 ? 80 : 78, effort: 5 }).toFile(out);
  }
  const og = path.join(OUT_DIR, `${key}-og.jpg`);
  if (FORCE || !(await fs.stat(og).catch(() => null))) {
    await sharp(file).rotate().resize(1200, 630, { fit: 'cover', position: sharp.strategy.attention }).jpeg({ quality: 82, mozjpeg: true }).toFile(og);
  }
  manifest[urlPath] = { key, width: origW, height: meta.height, widths };
  console.log(`✓ ${urlPath} → ${widths.join('/')}w + og`);
}

// Proje OG görselleri: her projenin ilk galeri fotoğrafı
const gallery = JSON.parse(await fs.readFile(GALLERY, 'utf8'));
for (const [slug, g] of Object.entries(gallery)) {
  const first = g.files?.[0]?.src;
  if (!first) continue;
  const out = path.join(OUT_DIR, `og-${slug}.jpg`);
  if (!FORCE && (await fs.stat(out).catch(() => null))) continue;
  await sharp(path.join(ROOT, 'public', first)).resize(1200, 630, { fit: 'cover', position: sharp.strategy.attention }).jpeg({ quality: 82, mozjpeg: true }).toFile(out);
  console.log(`✓ og-${slug}.jpg`);
}

await fs.writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
console.log(`\nManifest: ${Object.keys(manifest).length} görsel.`);
