# Master İç Mimarlık

[mastericmimarlik.com](https://www.mastericmimarlik.com) — İstanbul merkezli iç mimarlık ve anahtar teslim yenileme firmasının kurumsal sitesi.

## Stack

- **Astro 4** — `output: 'server'` (SSR)
- **Tailwind CSS 3**
- **Vercel** — `@astrojs/vercel/serverless` adaptörü; deploy Vercel'in git entegrasyonuyla otomatik yapılır
- **Cloudinary** — `image/fetch` modunda görsel optimizasyonu (`src/lib/cloudinary.ts`)
- **Google Places API** — canlı puan ve yorumlar (`src/lib/google-places.ts`)

## Komutlar

```bash
npm install
npm run dev      # geliştirme sunucusu — http://localhost:4321
npm run images   # public/images/<klasör> → public/img/<slug> WebP türevleri
npm run build    # görsel pipeline + astro build → .vercel/output/
npm run preview
```

`npm run build` önce `scripts/build-images.mjs`'i çalıştırır; bu script kaynak fotoğrafları HEIC dönüşümü dahil 800/1600/2000 px WebP'ye çevirip `src/data/projects-gallery.json` manifestini üretir.

## İçerik nereden yönetilir

Sayfa içerikleri `.astro` dosyalarında, listeler ise tek kaynaklı veri modüllerinde tutulur:

| Dosya | İçerik |
|---|---|
| `src/config.ts` | Domain, telefon, e-posta, WhatsApp, Cloudinary hesabı |
| `src/data/services.ts` | Tüm hizmetler (ana / anahtar-teslim / tadilat / mekan / oda) |
| `src/data/districts.ts` | İstanbul ilçeleri — ad, yaka, bulunma hali eki, mahalleler |
| `src/data/styles.ts` | İç mimarlık stil sayfaları |
| `src/data/projects.ts` | Proje referansları (görseller `projects-gallery.json`'dan gelir) |
| `src/data/blog-posts.ts` | Blog yazıları — `/blog` listesi ve ilgili yazılar buradan beslenir |

Bir hizmet, ilçe veya stil eklendiğinde footer, hub sayfaları ve ilgili bileşenler otomatik güncellenir; ayrıca sayfa dosyasının oluşturulması gerekir.

## Yapı

```
src/
  components/   Header, Footer, Hero, Projects, Contact, DistrictFAQ, ProcessStrip …
  layouts/      Layout (SEO + JSON-LD), ServiceLayout (hizmet/ilçe/stil), BlogPost
  pages/        hizmetler/ · istanbul/ · ic-mimarlik/ · blog/ · projeler/
  data/         tek kaynaklı içerik listeleri
  lib/          cloudinary, google-places
scripts/        build-images.mjs (görsel pipeline)
public/
  images/       kaynak fotoğraflar (build girdisi)
  img/          üretilen WebP türevleri (runtime'da kullanılan)
```

## SEO notları

- Her sayfa `canonicalUrl` verir; `trailingSlash: 'never'` (astro.config.mjs + vercel.json).
- `Layout.astro` her sayfaya `WebSite`, `Organization` ve `InteriorDesigner` JSON-LD basar; sayfalar `structuredData` prop'uyla kendi şemasını ekler.
- Sitemap ve robots.txt build sırasında `@astrojs/sitemap` + `astro-robots-txt` ile üretilir.
- Fiyat bilgisi sitede yayımlanmaz; teklif ücretsiz keşif sonrası projeye özel verilir.
