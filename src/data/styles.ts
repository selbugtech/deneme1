// İç mimarlık stil / konsept sayfalarının tek kaynağı.
// Buraya eklenen bir stil otomatik olarak footer'da ve /ic-mimarlik hub sayfasında görünür.

import { optimizedImage } from '../lib/cloudinary';

export type StyleItem = {
  /** /ic-mimarlik/<slug> */
  slug: string;
  /** Sayfa başlığında kullanılan ad, örn. "Modern" */
  name: string;
  /** Tam anahtar kelime, örn. "Modern İç Mimarlık" */
  fullName: string;
  /** Kart alt başlığı */
  tagline: string;
  /** Hub kartında gösterilen kısa tanım */
  desc: string;
  /** Renk ve malzeme paleti özeti */
  palette: string;
  image: string;
};

export const styles: StyleItem[] = [
  {
    slug: 'modern',
    name: 'Modern',
    fullName: 'Modern İç Mimarlık',
    tagline: 'Temiz çizgi, açık plan',
    desc: 'Yalın çizgiler, açık plan kurgusu ve gösterişten kaçınan bir malzeme dili. Türkiye’de en çok talep edilen yaklaşım.',
    palette: 'Kırık beyaz · gri tonları · doğal ahşap · mat metal',
    image: optimizedImage('/images/salon5.jpeg'),
  },
  {
    slug: 'minimalist',
    name: 'Minimalist',
    fullName: 'Minimalist İç Mimarlık',
    tagline: 'Az eleman, çok boşluk',
    desc: 'Görsel gürültüyü sıfıra indiren, gizli depolamaya ve kesintisiz yüzeylere dayanan disiplinli bir yaklaşım.',
    palette: 'Beyaz · bej · açık gri · tek doku vurgusu',
    image: optimizedImage('/images/salon1.png'),
  },
  {
    slug: 'iskandinav',
    name: 'İskandinav',
    fullName: 'İskandinav İç Mimarlık',
    tagline: 'Açık ahşap, yumuşak ışık',
    desc: 'Az ışık alan mekanları aydınlatmak için geliştirilmiş bir dil: açık tonlu ahşap, sade formlar ve sıcak tekstil.',
    palette: 'Açık ahşap · kırık beyaz · yumuşak gri · yün ve keten',
    image: optimizedImage('/images/oturmaodasi.jpeg'),
  },
  {
    slug: 'klasik',
    name: 'Klasik',
    fullName: 'Klasik İç Mimarlık',
    tagline: 'Simetri, kornis, derinlik',
    desc: 'Simetriye, oranlara ve el işçiliğine dayanan; yüksek tavanlı mekanlarda en güçlü sonucu veren yaklaşım.',
    palette: 'Koyu ahşap · krem · derin yeşil ve bordo · pirinç',
    image: optimizedImage('/images/salon8.jpeg'),
  },
  {
    slug: 'endustriyel',
    name: 'Endüstriyel',
    fullName: 'Endüstriyel İç Mimarlık',
    tagline: 'Ham yüzey, açık tesisat',
    desc: 'Yapının kendisini gizlemek yerine gösteren, ham beton ve metali malzeme olarak kullanan karakterli bir dil.',
    palette: 'Ham beton · tuğla · siyah metal · yaşlandırılmış ahşap',
    image: optimizedImage('/images/merdiven3.jpeg'),
  },
];

export const getStyle = (slug: string): StyleItem | undefined =>
  styles.find((s) => s.slug === slug);
