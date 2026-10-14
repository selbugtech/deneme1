import manifest from '../data/images-manifest.json';
import { SITE_ORIGIN } from '../config';

/**
 * Site görselleri kendi sunucumuzdan servis edilir.
 * scripts/build-site-images.mjs her kaynak görseli (public/images, public/beforeafter)
 * 400…1920 px WebP olarak public/img-opt/ altına üretir ve src/data/images-manifest.json'a
 * yazar. Buradaki yardımcılar o manifestten en uygun genişliği seçer.
 *
 * Fonksiyon adları eski haliyle aynı kaldı (≈120 dosya kullanıyor).
 * Manifestte olmayan yollar (ör. /img/<proje>/... zaten optimize WebP) olduğu gibi döner.
 * Yeni bir kaynak görsel eklerseniz: node scripts/build-site-images.mjs
 */

type Entry = { key: string; width: number; height: number; widths: number[] };
const M = manifest as Record<string, Entry>;
const byKey = new Map(Object.values(M).map((e) => [e.key, e]));

const variantUrl = (key: string, w: number) => `/img-opt/${key}-${w}w.webp`;
const pick = (e: Entry, want: number) => e.widths.find((w) => w >= want) ?? e.widths[e.widths.length - 1];

/** Site-göreli yolu mutlak URL'e çevirir (JSON-LD ve paylaşım etiketleri için). */
export function absoluteUrl(path: string): string {
  return path.startsWith('http') ? path : `${SITE_ORIGIN}${path}`;
}

/** Sınırsız boyut yerine makul bir üst sınırla (1600 px) WebP döner. */
export function optimizedImage(path: string): string {
  return optimizedImageW(path, 1600);
}

/** İstenen genişliğe en yakın (≥) hazır WebP varyantı. */
export function optimizedImageW(path: string, width: number): string {
  const e = M[path];
  return e ? variantUrl(e.key, pick(e, width)) : path;
}

/** <img srcset> / preload imagesrcset için: yinelenen varyantlar birleştirilir. */
export function srcsetImage(path: string, widths = [400, 800, 1200, 1920]): string {
  const e = M[path];
  if (!e) return '';
  const used = [...new Set(widths.map((w) => pick(e, w)))];
  return used.map((w) => `${variantUrl(e.key, w)} ${w}w`).join(', ');
}

/** Küçük resimler için daha dar varyant (ör. ilgili yazı kartları). */
export function thumbImage(url: string, width = 480): string {
  const m = url.match(/^\/img-opt\/(.+)-(\d+)w\.webp$/);
  const e = m && byKey.get(m[1]);
  return e ? variantUrl(e.key, pick(e, width)) : url;
}

/**
 * og:image / twitter:image için mutlak ve 1200×630 URL.
 * Sosyal platformlar göreli URL çözmez ve Layout 1200×630 bildirir; bu yüzden hazır
 * kırpılmış varyantlar (public/img-opt/*-og.jpg, og-<proje>.jpg) kullanılır.
 */
export function ogImageUrl(path: string): string {
  if (path.startsWith(SITE_ORIGIN)) path = path.slice(SITE_ORIGIN.length);
  if (path.startsWith('http')) return path; // bize ait olmayan mutlak URL

  const direct = M[path];
  if (direct) return absoluteUrl(`/img-opt/${direct.key}-og.jpg`);

  const variant = path.match(/^\/img-opt\/(.+)-\d+w\.webp$/);
  if (variant && byKey.has(variant[1])) return absoluteUrl(`/img-opt/${variant[1]}-og.jpg`);

  const project = path.match(/^\/img\/([^/]+)\//);
  if (project) return absoluteUrl(`/img-opt/og-${project[1]}.jpg`);

  return absoluteUrl(path);
}
