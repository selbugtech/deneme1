// Sitemap <lastmod> değerlerinin tek kaynağı.
//
// Neden git tarihi değil: Vercel depoyu sığ klonluyor ve bu depoda tüm sayfa
// dosyaları zaten aynı commit tarihini taşıyordu — git'ten türetilen lastmod her
// sayfaya aynı tarihi basardı. Google, lastmod'un güvenilir olmadığını fark ettiği
// sitemap'lerde bu alanı tamamen yok sayıyor; toptan ya da uydurma tarih, hiç
// olmamasından kötü.
//
// Model: BASELINE + değişiklik kaydı.
// - BASELINE: tüm sayfa dosyalarına dokunan son commit tarihi (git log).
// - CHANGELOG: sonrasında ANA İÇERİĞİ değişen sayfalar. Bir sayfanın metnini,
//   referanslarını ya da bölümlerini değiştirdiğinde buraya kayıt ekle.
//   Menü/link eklemek, CSS, og etiketi gibi değişiklikler kayda girmez — Google
//   bunları lastmod gerekçesi saymıyor ve abartılı lastmod güveni zedeliyor.
// - Blog yazılarında yayın tarihi de hesaba katılıyor.
// - lastmod = hepsinin en geç olanı.
//
// priority ve changefreq bilerek yok: Google ikisini de kullanmıyor.

import { districts } from './districts';
import { allPosts } from './blog-posts';

const BASELINE = '2026-08-31';

type Change = { date: string; note: string; paths: string[] };

const CHANGELOG: Change[] = [
  {
    date: '2026-09-15',
    note: 'İlçe sayfaları: gerçek proje referansları, bölge rehberleri, uydurma proje/yorum temizliği',
    paths: ['/istanbul', ...districts.map((d) => `/istanbul/${d.slug}`)],
  },
  {
    date: '2026-09-15',
    note: 'Ana sayfa: hizmet bölgeleri ve tasarım stilleri bölümü',
    paths: ['/'],
  },
  {
    date: '2026-09-15',
    note: 'Blog: doğrulanmamış müşteri yorumları ve bölge iddiaları kaldırıldı',
    paths: [
      'banyo-yenileme-rehberi',
      'ev-aydinlatma-rehberi',
      'ev-tadilati-ipuclari',
      'ev-yenileme-maliyeti-2025',
      'giyinme-odasi-tasarimi',
      'ic-mimar-danismanlik-ucreti',
      'ic-mimar-fiyatlari',
      'kartal-ev-tadilati',
      'kucuk-daire-dekorasyon-fikirleri',
      'mutfak-dekorasyon-fikirleri',
      'ofis-tadilat',
      'otel-tadilat',
      'salon-dekorasyon-fikirleri',
      'villa-tadilati-istanbul',
      'yatak-odasi-dekorasyon-fikirleri',
    ].map((slug) => `/blog/${slug}`),
  },
];

const published = new Map(allPosts.map((p) => [`/blog/${p.slug}`, p.date]));

export function lastmodFor(pathname: string): string {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const dates = [BASELINE];
  const pub = published.get(path);
  if (pub) dates.push(pub);
  for (const change of CHANGELOG) {
    if (change.paths.includes(path)) dates.push(change.date);
  }
  return dates.reduce((a, b) => (b > a ? b : a));
}
