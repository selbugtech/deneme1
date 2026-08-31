// Tüm hizmetlerin tek kaynağı.
// Buraya eklenen bir hizmet otomatik olarak footer'da, /hizmetler hub sayfasında
// ve ServiceLayout'un "Diğer Hizmetler" bölümünde görünür.

import { optimizedImage } from '../lib/cloudinary';

export type ServiceGroup = 'ana' | 'anahtar-teslim' | 'tadilat' | 'oda' | 'mekan';

export type ServiceItem = {
  /** Sayfa yolunun son segmenti — ServiceLayout bununla eşleştirme yapar */
  slug: string;
  /** Sayfanın tam yolu */
  href: string;
  title: string;
  /** Kart açıklaması (uzun) */
  desc: string;
  /** Çapraz link kartlarında kullanılan kısa açıklama */
  shortDesc: string;
  image: string;
  icon: string;
  keyword?: string;
  group: ServiceGroup;
};

const ICON = {
  home: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,
  bulb: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`,
  cube: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>`,
  cafe: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>`,
  office: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
  shop: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>`,
  villa: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,
  flat: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>`,
  hotel: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"/></svg>`,
  kitchen: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 3.75v16.5h16.5V3.75H3.75zM3.75 9.75h16.5M7.5 6.75h.008v.008H7.5V6.75zm3 0h.008v.008H10.5V6.75zM8.25 13.5h7.5a.75.75 0 01.75.75v6h-9v-6a.75.75 0 01.75-.75z"/></svg>`,
  bath: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12h18M4.5 12v4.5A3.75 3.75 0 008.25 20.25h7.5A3.75 3.75 0 0019.5 16.5V12M6.75 12V6a2.25 2.25 0 014.5 0v.75M9 6.75h.008v.008H9V6.75zM6.75 20.25L5.25 22.5m12-2.25l1.5 2.25"/></svg>`,
  sofa: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 10.5V7.5A2.25 2.25 0 016.75 5.25h10.5A2.25 2.25 0 0119.5 7.5v3M3 12.75A2.25 2.25 0 015.25 10.5h13.5A2.25 2.25 0 0121 12.75v3.75H3v-3.75zM5.25 16.5V18m13.5-1.5V18M7.5 10.5h9"/></svg>`,
  bed: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 18V6m0 6h18m0 6V10.5a2.25 2.25 0 00-2.25-2.25H12V18M3 18h18M5.25 18v1.5m13.5-1.5v1.5M6.75 11.25a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/></svg>`,
  wardrobe: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 3h15v18h-15V3zm7.5 0v18M9.75 10.5v2.25m4.5-2.25v2.25M4.5 21l-1.5 1.5M19.5 21l1.5 1.5"/></svg>`,
  child: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 7.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM8.25 21v-4.5l-1.5-3 1.5-3h7.5l1.5 3-1.5 3V21M9 12h6"/></svg>`,
  clinic: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8.25v7.5m3.75-3.75h-7.5M4.5 3.75h15a.75.75 0 01.75.75v15a.75.75 0 01-.75.75h-15a.75.75 0 01-.75-.75v-15a.75.75 0 01.75-.75z"/></svg>`,
  scissors: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l5.232 3.021M9.523 11.98a2.25 2.25 0 00-1.675 2.437 3 3 0 11-5.196 3 3 3 0 015.196-3m1.675-2.437l5.093 2.94m0 0l1.536.887m-1.536-.887a2.165 2.165 0 00-1.083 1.839c-.005.351-.054.695-.14 1.024m1.223-2.863L20.25 5.25"/></svg>`,
  pill: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 3.75a5.25 5.25 0 013.712 8.962l-6.75 6.75A5.25 5.25 0 015.288 12L12.038 5.25a5.23 5.23 0 013.712-1.5zM8.625 8.625l6.75 6.75"/></svg>`,
  display: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4.5h18v11.25H3V4.5zm6.75 11.25V21m4.5-5.25V21M8.25 21h7.5M7.5 8.25h3v4h-3v-4z"/></svg>`,
  dumbbell: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75v10.5m-3-8.25v6m13.5-8.25v10.5m3-8.25v6M6.75 12h10.5M2.25 12h1.5m16.5 0h1.5"/></svg>`,
  blocks: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 13.5h6.75v6.75H3.75V13.5zm9.75 0h6.75v6.75H13.5V13.5zM3.75 3.75h6.75V10.5H3.75V3.75zm12.75-.75l4.5 4.5-4.5 4.5-4.5-4.5 4.5-4.5z"/></svg>`,
};

export const services: ServiceItem[] = [
  // ————— Ana hizmetler —————
  {
    slug: 'anahtar-teslim',
    href: '/hizmetler/anahtar-teslim',
    title: 'Anahtar Teslim Hizmetler',
    desc: 'Cafe, ofis, mağaza veya ev — tasarımdan uygulamaya tüm süreci biz yönetiyoruz. Siz anahtarı teslim alırken mekanınız hazır.',
    shortDesc: 'Tasarımdan uygulamaya tüm süreci biz yönetiyoruz.',
    image: optimizedImage('/images/salon2.jpeg'),
    icon: ICON.home,
    keyword: 'En çok tercih edilen',
    group: 'ana',
  },
  {
    slug: 'ic-mimarlik-danismanligi',
    href: '/hizmetler/ic-mimarlik-danismanligi',
    title: 'İç Mimarlık Danışmanlığı',
    desc: 'Projeniz için profesyonel görüş, malzeme seçimi ve uygulama sürecinde uzman rehberlik.',
    shortDesc: 'Uzman görüş, malzeme seçimi ve rehberlik.',
    image: optimizedImage('/images/salon4.jpeg'),
    icon: ICON.bulb,
    keyword: 'Esnek paketler',
    group: 'ana',
  },
  {
    slug: '3d-tasarim',
    href: '/hizmetler/3d-tasarim',
    title: '3D Tasarım & Proje',
    desc: 'Uygulamaya başlamadan önce mekanınızı gerçekçi 3D görseller ile deneyimleyin.',
    shortDesc: 'Uygulamadan önce mekanınızı gerçekçi görselle görün.',
    image: optimizedImage('/images/mutfak3.jpeg'),
    icon: ICON.cube,
    keyword: 'Tüm projelerde standart',
    group: 'ana',
  },

  // ————— Anahtar teslim yenileme (altyapıya dokunmadan estetik güncelleme) —————
  {
    slug: 'cafe-restaurant-yenileme',
    href: '/hizmetler/anahtar-teslim/cafe-restaurant-yenileme',
    title: 'Cafe & Restaurant Yenileme',
    desc: 'Müşteri deneyimini ve ciro potansiyelini artıran cafe, restoran ve bar iç mekan tasarımı.',
    shortDesc: 'Cafe, restoran ve bar iç mekan tasarımı.',
    image: optimizedImage('/images/restoran1.jpeg'),
    icon: ICON.cafe,
    group: 'anahtar-teslim',
  },
  {
    slug: 'ofis-yenileme',
    href: '/hizmetler/anahtar-teslim/ofis-yenileme',
    title: 'Ofis Yenileme',
    desc: 'Çalışan verimliliğini ve marka imajını güçlendiren kurumsal ofis iç mekan çözümleri.',
    shortDesc: 'Kurumsal ofis iç mekan çözümleri.',
    image: optimizedImage('/images/ofis.jpeg'),
    icon: ICON.office,
    group: 'anahtar-teslim',
  },
  {
    slug: 'magaza-dukkan-yenileme',
    href: '/hizmetler/anahtar-teslim/magaza-dukkan-yenileme',
    title: 'Mağaza & Dükkan Yenileme',
    desc: 'Markanızı yansıtan, müşteri yolculuğunu optimize eden mağaza ve dükkan tasarımı.',
    shortDesc: 'Marka kimliğini yansıtan perakende mekan tasarımı.',
    image: optimizedImage('/images/salon6.jpeg'),
    icon: ICON.shop,
    group: 'anahtar-teslim',
  },
  {
    slug: 'villa-yenileme',
    href: '/hizmetler/anahtar-teslim/villa-yenileme',
    title: 'Villa Yenileme',
    desc: 'Lüks villalar için kapsamlı iç mimari tasarım, yapısal dönüşüm ve anahtar teslim uygulama.',
    shortDesc: 'Lüks villalar için anahtar teslim iç mimari.',
    image: optimizedImage('/images/salon7.jpeg'),
    icon: ICON.villa,
    group: 'anahtar-teslim',
  },
  {
    slug: 'ev-yenileme',
    href: '/hizmetler/anahtar-teslim/ev-yenileme',
    title: 'Ev Yenileme',
    desc: 'Küçük daireden geniş konuta, kısmi yenilemeden komple dönüşüme konut yenileme projeleri.',
    shortDesc: 'Daire ve konutlarda komple yenileme.',
    image: optimizedImage('/images/salon5.jpeg'),
    icon: ICON.flat,
    group: 'anahtar-teslim',
  },
  {
    slug: 'otel-yenileme',
    href: '/hizmetler/anahtar-teslim/otel-yenileme',
    title: 'Otel Yenileme',
    desc: 'Misafir deneyimini ve doluluk oranını artıran kapsamlı otel renovasyonu ve iç mimarlık.',
    shortDesc: 'Otel oda, lobi ve ortak alan renovasyonu.',
    image: optimizedImage('/images/salon9.jpeg'),
    icon: ICON.hotel,
    group: 'anahtar-teslim',
  },

  // ————— Tadilat (elektrik, tesisat ve yapısal müdahale dahil) —————
  {
    slug: 'ev-tadilat',
    href: '/hizmetler/anahtar-teslim/ev-tadilat',
    title: 'Ev & Daire Tadilat',
    desc: 'Elektrik ve tesisat yenilemesinden yapısal dönüşüme kadar kapsamlı konut tadilat projeleri.',
    shortDesc: 'Elektrik, tesisat ve yapısal müdahale dahil konut tadilat.',
    image: optimizedImage('/images/salon3.jpeg'),
    icon: ICON.flat,
    group: 'tadilat',
  },
  {
    slug: 'villa-tadilat',
    href: '/hizmetler/anahtar-teslim/villa-tadilat',
    title: 'Villa Tadilat',
    desc: 'Yapısal dönüşümden dış cephe ve bahçe düzenlemesine kadar lüks villalar için kapsamlı renovasyon.',
    shortDesc: 'Yapısal dönüşüm dahil lüks villa renovasyonu.',
    image: optimizedImage('/images/salon8.jpeg'),
    icon: ICON.villa,
    group: 'tadilat',
  },
  {
    slug: 'ofis-tadilat',
    href: '/hizmetler/anahtar-teslim/ofis-tadilat',
    title: 'Ofis Tadilat',
    desc: 'Elektrik altyapısından bölme duvar sistemlerine, HVAC ve akustik iyileştirmeye kapsamlı ofis dönüşümü.',
    shortDesc: 'Altyapı, bölme duvar ve akustik dahil ofis dönüşümü.',
    image: optimizedImage('/images/ofis2.jpeg'),
    icon: ICON.office,
    group: 'tadilat',
  },
  {
    slug: 'magaza-dukkan-tadilat',
    href: '/hizmetler/anahtar-teslim/magaza-dukkan-tadilat',
    title: 'Mağaza & Dükkan Tadilat',
    desc: 'Elektrik altyapısından vitrin sistemine, zemin değişiminden yapısal düzenlemeye perakende mekan tadilatı.',
    shortDesc: 'Vitrin, zemin ve altyapı dahil perakende tadilat.',
    image: optimizedImage('/images/salonvemutfak.jpeg'),
    icon: ICON.shop,
    group: 'tadilat',
  },
  {
    slug: 'cafe-restaurant-tadilat',
    href: '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
    title: 'Cafe & Restaurant Tadilat',
    desc: 'Mutfak altyapısından havalandırmaya, elektrik güçlendirmesinden yapısal düzenlemeye F&B mekan dönüşümü.',
    shortDesc: 'Mutfak altyapısı ve havalandırma dahil F&B tadilat.',
    image: optimizedImage('/images/restoran1.jpeg'),
    icon: ICON.cafe,
    group: 'tadilat',
  },
  {
    slug: 'otel-tadilat',
    href: '/hizmetler/anahtar-teslim/otel-tadilat',
    title: 'Otel Tadilat',
    desc: 'Oda tadilatından lobi dönüşümüne kadar kapsamlı otel renovasyonu; operasyon sürerken fazlı uygulama.',
    shortDesc: 'Operasyon sürerken fazlı otel renovasyonu.',
    image: optimizedImage('/images/merdiven1.jpeg'),
    icon: ICON.hotel,
    group: 'tadilat',
  },

  // ————— Özel mekan tipleri —————
  {
    slug: 'klinik-muayenehane',
    href: '/hizmetler/anahtar-teslim/klinik-muayenehane',
    title: 'Klinik & Muayenehane',
    desc: 'Hijyen odaklı tasarım, ruhsat şartlarına uygun mahal kurgusu ve mahremiyet çözümleri.',
    shortDesc: 'Ruhsat şartlarına uygun sağlık mekanı tasarımı.',
    image: optimizedImage('/images/salon4.jpeg'),
    icon: ICON.clinic,
    group: 'mekan',
  },
  {
    slug: 'kuafor-guzellik-salonu',
    href: '/hizmetler/anahtar-teslim/kuafor-guzellik-salonu',
    title: 'Kuaför & Güzellik Salonu',
    desc: 'Yıkama ünitesi tesisatı, kokuyu tutmayan havalandırma ve rengi doğru gösteren aydınlatma.',
    shortDesc: 'Tesisat, havalandırma ve ayna aydınlatması.',
    image: optimizedImage('/images/giyinmeodasi.jpeg'),
    icon: ICON.scissors,
    group: 'mekan',
  },
  {
    slug: 'eczane',
    href: '/hizmetler/anahtar-teslim/eczane',
    title: 'Eczane',
    desc: 'Ölçüye özel raf sistemi, tezgah kurgusu, soğuk zincir alanı ve mevzuata uygun mahal düzeni.',
    shortDesc: 'Raf sistemi, tezgah ve soğuk zincir kurgusu.',
    image: optimizedImage('/images/salon6.jpeg'),
    icon: ICON.pill,
    group: 'mekan',
  },
  {
    slug: 'showroom',
    href: '/hizmetler/anahtar-teslim/showroom',
    title: 'Showroom',
    desc: 'Ürün odaklı aydınlatma, müşteri yolculuğu kurgusu ve ölçüye özel sergileme üniteleri.',
    shortDesc: 'Ürün odaklı aydınlatma ve sergileme kurgusu.',
    image: optimizedImage('/images/salon9.jpeg'),
    icon: ICON.display,
    group: 'mekan',
  },
  {
    slug: 'spor-salonu',
    href: '/hizmetler/anahtar-teslim/spor-salonu',
    title: 'Spor Salonu',
    desc: 'Darbe emici zemin, titreşim ve akustik yalıtımı, kapasiteye göre hesaplanmış havalandırma.',
    shortDesc: 'Darbe emici zemin ve titreşim yalıtımı.',
    image: optimizedImage('/images/merdiven2.jpeg'),
    icon: ICON.dumbbell,
    group: 'mekan',
  },
  {
    slug: 'kres',
    href: '/hizmetler/anahtar-teslim/kres',
    title: 'Kreş & Anaokulu',
    desc: 'Güvenlik odaklı tasarım, çocuk ölçüsünde ıslak hacim ve mevzuata uygun mahal kurgusu.',
    shortDesc: 'Güvenlik odaklı, mevzuata uygun kreş tasarımı.',
    image: optimizedImage('/images/yatakodasi2.jpeg'),
    icon: ICON.blocks,
    group: 'mekan',
  },

  // ————— Oda bazlı hizmetler —————
  {
    slug: 'mutfak-yenileme',
    href: '/hizmetler/mutfak-yenileme',
    title: 'Mutfak Yenileme',
    desc: 'Tezgah, dolap ve altyapı dahil komple mutfak yenileme; ölçüye özel dolap tasarımı ve montaj.',
    shortDesc: 'Ölçüye özel dolap, tezgah ve altyapı yenileme.',
    image: optimizedImage('/images/mutfak1.jpeg'),
    icon: ICON.kitchen,
    keyword: 'En çok talep edilen',
    group: 'oda',
  },
  {
    slug: 'banyo-yenileme',
    href: '/hizmetler/banyo-yenileme',
    title: 'Banyo Yenileme',
    desc: 'Sıhhi tesisat, su yalıtımı, seramik ve vitrifiye dahil anahtar teslim banyo yenileme.',
    shortDesc: 'Tesisat, yalıtım ve seramik dahil banyo yenileme.',
    image: optimizedImage('/images/banyo1.webp'),
    icon: ICON.bath,
    keyword: 'Kısa sürede biter',
    group: 'oda',
  },
  {
    slug: 'salon-tasarimi',
    href: '/hizmetler/salon-tasarimi',
    title: 'Salon & Oturma Odası Tasarımı',
    desc: 'Evin en çok kullanılan alanı için plan kurgusu, aydınlatma tasarımı ve mobilya seçimi.',
    shortDesc: 'Plan kurgusu, aydınlatma ve mobilya seçimi.',
    image: optimizedImage('/images/salon7.jpeg'),
    icon: ICON.sofa,
    group: 'oda',
  },
  {
    slug: 'yatak-odasi-tasarimi',
    href: '/hizmetler/yatak-odasi-tasarimi',
    title: 'Yatak Odası Tasarımı',
    desc: 'Dinlendirici bir yatak odası için renk paleti, depolama çözümleri ve katmanlı aydınlatma.',
    shortDesc: 'Renk paleti, depolama ve katmanlı aydınlatma.',
    image: optimizedImage('/images/yatakodasi.jpeg'),
    icon: ICON.bed,
    group: 'oda',
  },
  {
    slug: 'giyinme-odasi-tasarimi',
    href: '/hizmetler/giyinme-odasi-tasarimi',
    title: 'Giyinme Odası Tasarımı',
    desc: 'Küçük bir nişten ayrı bir odaya, ölçüye özel dolap sistemleriyle giyinme odası kurgusu.',
    shortDesc: 'Ölçüye özel dolap sistemleriyle giyinme odası.',
    image: optimizedImage('/images/giyinmeodasi.jpeg'),
    icon: ICON.wardrobe,
    group: 'oda',
  },
  {
    slug: 'cocuk-odasi-tasarimi',
    href: '/hizmetler/cocuk-odasi-tasarimi',
    title: 'Çocuk Odası Tasarımı',
    desc: 'Yaşla birlikte büyüyebilen, güvenli malzemeli ve depolaması güçlü çocuk ve genç odaları.',
    shortDesc: 'Güvenli malzeme, güçlü depolama, büyüyen kurgu.',
    image: optimizedImage('/images/yatakodasi1.jpeg'),
    icon: ICON.child,
    group: 'oda',
  },
];

export const byGroup = (g: ServiceGroup): ServiceItem[] =>
  services.filter((s) => s.group === g);

export const getService = (slug: string): ServiceItem | undefined =>
  services.find((s) => s.slug === slug);
