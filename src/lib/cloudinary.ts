import { CLOUDINARY_CLOUD, SITE_ORIGIN } from '../config';

/**
 * Cloudinary fetch URL ile görseli optimize eder.
 * f_auto: tarayıcıya uygun format (webp/avif)
 * q_auto: otomatik kalite optimizasyonu
 */
export function optimizedImage(path: string, transforms = 'f_auto,q_auto'): string {
  if (!CLOUDINARY_CLOUD) return path;
  const fullUrl = path.startsWith('http')
    ? path
    : `${SITE_ORIGIN}${path.split('/').map(s => encodeURIComponent(s)).join('/')}`;
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/fetch/${transforms}/${fullUrl}`;
}

/**
 * Belirli bir genişlik için Cloudinary URL'i üretir.
 * Responsive images için kullanılır.
 */
export function optimizedImageW(path: string, width: number, extra = ''): string {
  const transforms = `f_auto,q_auto,w_${width}${extra ? ',' + extra : ''}`;
  return optimizedImage(path, transforms);
}

/**
 * <img srcset="..."> için Cloudinary srcset string'i üretir.
 * Tarayıcı viewport genişliğine göre doğru boyutu seçer.
 */
export function srcsetImage(path: string, widths = [400, 800, 1200, 1920]): string {
  return widths.map(w => `${optimizedImageW(path, w)} ${w}w`).join(', ');
}
