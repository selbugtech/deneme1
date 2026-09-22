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

/** og:image / twitter:image için Cloudinary dönüşümü — 1200×630, akıllı kırpma. */
const OG_TRANSFORMS = 'f_auto,q_auto,w_1200,h_630,c_fill,g_auto';

/** Zaten Cloudinary fetch URL'ine sarılmış bir görselden kaynak URL'i çıkarır. */
function unwrapCloudinary(url: string): string | null {
  const prefix = `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/fetch/`;
  if (!CLOUDINARY_CLOUD || !url.startsWith(prefix)) return null;
  // Dönüşüm segmenti virgülle ayrılır, / içermez — ilk /'e kadar olan kısım odur.
  const rest = url.slice(prefix.length);
  const slash = rest.indexOf('/');
  if (slash < 0) return null;
  const origin = rest.slice(slash + 1);
  return origin.startsWith('http://') || origin.startsWith('https://') ? origin : null;
}

/**
 * og:image / twitter:image için mutlak ve 1200×630 URL üretir.
 *
 * İki sorunu birden çözüyor:
 * 1) Sosyal platformlar (Facebook, X, WhatsApp) göreli URL çözmez. ServiceLayout ve
 *    BlogPost `ogImage ?? heroImage` forward ettiği için 28 sayfa çıplak bir
 *    /images/... yolu geçiriyordu.
 * 2) Layout.astro og:image:width/height olarak 1200×630 bildiriyor. Çağıranların bir
 *    kısmı görseli kendisi optimizedImage() ile sarıyordu; bu URL'ler mutlaktı ama
 *    1200×630 değildi, yani bildirilen boyut yalan oluyordu. Önceden sarılmış
 *    Cloudinary URL'lerini açıp og dönüşümüyle yeniden sarıyoruz — böylece çağıranları
 *    tek tek düzenlemeye gerek kalmadan tüm sayfalar tutarlı hale geliyor.
 *
 * Tek nokta burası: ServiceLayout/BlogPost'ta ayrıca mutlaklaştırma YAPILMAYACAK.
 */
export function ogImageUrl(path: string): string {
  const unwrapped = unwrapCloudinary(path);
  if (unwrapped) return optimizedImage(unwrapped, OG_TRANSFORMS);
  // Bize ait olmayan mutlak URL'lere dokunmuyoruz (ör. config'teki hazır OG görseli).
  if (path.startsWith('http')) return path;
  const url = optimizedImage(path, OG_TRANSFORMS);
  // CLOUDINARY_CLOUD tanımsızsa optimizedImage yolu olduğu gibi döndürür.
  return url.startsWith('http') ? url : `${SITE_ORIGIN}${path}`;
}
