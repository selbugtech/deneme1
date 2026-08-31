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
// Google Haritalar kaydı. CID biçimi işletme kartını doğrudan açar;
// eski /maps/place/... URL'i bozuktu (adres ile @lat,lng arasında fazladan bir paranteze
// takılıyordu) ve ham koordinat embed'i işletmeyi değil boş bir iğne gösteriyordu.
export const GOOGLE_MAPS_CID = '14342074565546867204';
export const GOOGLE_MAPS_URL = `https://maps.google.com/?cid=${GOOGLE_MAPS_CID}`;
export const GOOGLE_MAPS_EMBED_URL = `https://maps.google.com/maps?cid=${GOOGLE_MAPS_CID}&hl=tr&z=17&output=embed`;

// ————— Google puanı: ELLE güncellenir —————
// Google İşletme Profili'nden okuyup buradan güncelleyin.
// Otomatik çekilmiyor; Google, işletmenin kendi hakkındaki aggregateRating'ini
// LocalBusiness zengin sonuçlarında kullanmadığı için API'nin SEO katkısı yoktu.
// Son güncelleme: 2026-08-31
export const GOOGLE_RATING = '4,9';
export const GOOGLE_REVIEW_COUNT = 166;
export const OG_IMAGE = `${CANONICAL_BASE}/og-image.png`;

// Cloudinary görsel optimizasyonu
export const CLOUDINARY_CLOUD = 'dabltkglz';
