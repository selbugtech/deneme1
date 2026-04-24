// Merkezi URL konfigürasyonu
// Domain değiştiğinde sadece bu dosyayı güncelle — tüm canonical, sitemap ve JSON-LD otomatik güncellenir.

export const SITE_ORIGIN = 'https://www.mastericmimarlik.com';
export const BASE_PATH = '';
export const CANONICAL_BASE = `${SITE_ORIGIN}${BASE_PATH}`;

export const SITE_NAME = 'Master İç Mimarlık';
export const SITE_PHONE = '+90-533-039-15-65';
export const SITE_PHONE_DISPLAY = '0533 039 15 65';
export const WHATSAPP_URL = 'https://wa.me/905330391565';
export const WHATSAPP_URL_WITH_MESSAGE = 'https://wa.me/905330391565?text=Merhaba%2C%20i%C3%A7%20mimarl%C4%B1k%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.';
export const WHATSAPP_URL_PROJECT = 'https://wa.me/905330391565?text=Merhaba%2C%20proje%20hakk%C4%B1nda%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyorum.';
export const WHATSAPP_URL_SERVICE = 'https://wa.me/905330391565?text=Merhaba%2C%20hizmet%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.';
export const TEL_URL = 'tel:+905330391565';
export const EMAIL = 'mastericmimarlik@gmail.com';
export const EMAIL_URL = `mailto:${'mastericmimarlik@gmail.com'}`;
export const GOOGLE_MAPS_URL = 'https://www.google.com/maps/place/Master+%C4%B0%C3%A7+Mimarl%C4%B1k/(@41.001743,29.0517807,17z/data=!3m1!4b1!4m6!3m5!1s0x14cac7c6fa2bf56f:0xc70948d46d95fa04!8m2!3d41.001739!4d29.0543556!16s%2Fg%2F11fsx7788y?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D';
export const OG_IMAGE = `${CANONICAL_BASE}/og-image.png`;

// Cloudinary görsel optimizasyonu
export const CLOUDINARY_CLOUD = 'dabltkglz';
