import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import vercel from '@astrojs/vercel/static';
import { lastmodFor } from './src/data/sitemap-meta';
import gallery from './src/data/projects-gallery.json';

const SITE = 'https://www.mastericmimarlik.com';

export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      // priority ve changefreq bilerek yok: Google ikisini de kullanmıyor.
      serialize(item) {
        // Ana sayfa sitemap'te slash'sız ("https://www.mastericmimarlik.com") çıkıyor,
        // canonical ise ".../". Bu bir tutarsızlık değil: kök URL'de boş yol "/" demek,
        // Google ikisini aynı URL sayıyor. Eklenti bunu trailingSlash:'never' için
        // serialize'dan SONRA çıktı akışında string değiştirerek yapıyor
        // (@astrojs/sitemap/dist/write-sitemap.js) — buradan değiştirilemiyor.
        const pathname = new URL(item.url).pathname;
        item.lastmod = lastmodFor(pathname);
        // Görsel sitemap: proje sayfalarındaki galeri görselleri (sayfa başına ilk 30).
        // Galeri lightbox ile açıldığı için Google görselleri yalnızca HTML'den zor buluyor.
        const m = pathname.startsWith('/projeler/') ? [null, pathname.slice('/projeler/'.length)] : null;
        const files = m && gallery[m[1]]?.files;
        if (files?.length) item.img = files.slice(0, 30).map((f) => ({ url: `${SITE}${f.src}` }));
        return item;
      },
    }),
    robotsTxt({
      policy: [{ userAgent: '*', allow: '/' }],
      sitemap: true,
    }),
  ],
  site: 'https://www.mastericmimarlik.com',
  trailingSlash: 'never',
  // Tam statik. Sitede isteğe özel hiçbir içerik yok: Astro.request / cookies /
  // redirect / response kullanımı sıfır, endpoint ve form yok, 125 sayfadan 124'ü
  // zaten açık canonicalUrl geçiyor. SSR her istekte serverless fonksiyon
  // çalıştırıyordu (Cache-Control: max-age=0) — statikte hepsi CDN'den servis edilir.
  // Tek CSS dosyası (~32 KB) render'ı engelliyordu (mobil FCP). Satır içi: ek istek yok.
  build: { inlineStylesheets: 'always' },
  output: 'static',
  adapter: vercel(),
});
