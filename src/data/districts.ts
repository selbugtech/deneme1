// Hizmet verilen İstanbul ilçelerinin tek kaynağı.
// Buraya eklenen bir ilçe otomatik olarak footer'da, /istanbul hub sayfasında
// ve RelatedDistricts bileşeninde görünür.

export type Side = 'anadolu' | 'avrupa';

export type District = {
  /** /istanbul/<slug> */
  slug: string;
  name: string;
  side: Side;
  /** Bulunma hali eki uygulanmış hali — "Fatih'te", "Beyoğlu'nda" */
  locative: string;
  /** Kart alt başlığı — ilçenin öne çıkan hizmet odağı */
  focus: string;
  /** Sayfa metinlerinde ve hub'da kullanılan mahalleler */
  neighborhoods: string[];
};

export const districts: District[] = [
  // ————— Anadolu Yakası —————
  {
    slug: 'kadikoy-ic-mimarlik',
    name: 'Kadıköy',
    locative: "Kadıköy'de",
    side: 'anadolu',
    focus: 'Daire yenileme ve iç mimarlık',
    neighborhoods: ['Moda', 'Caddebostan', 'Fenerbahçe', 'Göztepe', 'Suadiye', 'Bostancı', 'Kalamış', 'Erenköy', 'Sahrayıcedit'],
  },
  {
    slug: 'uskudar-ic-mimarlik',
    name: 'Üsküdar',
    locative: "Üsküdar'da",
    side: 'anadolu',
    focus: 'Karma yapı stokunda tadilat',
    neighborhoods: ['Acıbadem', 'Altunizade', 'Kuzguncuk', 'Beylerbeyi', 'Çengelköy', 'Bulgurlu', 'Kısıklı', 'Ünalan', 'Burhaniye'],
  },
  {
    slug: 'acibadem-ic-mimarlik',
    name: 'Acıbadem',
    locative: "Acıbadem'de",
    side: 'anadolu',
    focus: 'Villa ve daire yenileme',
    neighborhoods: ['Acıbadem Merkez', 'Koşuyolu', 'Bağlarbaşı'],
  },
  {
    slug: 'atasehir-ic-mimarlik',
    name: 'Ataşehir',
    locative: "Ataşehir'de",
    side: 'anadolu',
    focus: 'Site dairesi ve ofis yenileme',
    neighborhoods: ['Barbaros', 'Yenisahra', 'İçerenköy', 'Atatürk Mahallesi'],
  },
  {
    slug: 'maltepe-ic-mimarlik',
    name: 'Maltepe',
    locative: "Maltepe'de",
    side: 'anadolu',
    focus: 'Sahil rezidansları ve daire yenileme',
    neighborhoods: ['Cevizli', 'Bağlarbaşı', 'Küçükyalı', 'Altayçeşme', 'Zümrütevler'],
  },

  {
    slug: 'beykoz-ic-mimarlik',
    name: 'Beykoz',
    side: 'anadolu',
    locative: "Beykoz'da",
    focus: 'Boğaz villaları ve korular',
    neighborhoods: ['Paşabahçe', 'Kanlıca', 'Anadoluhisarı', 'Çubuklu', 'Acarkent', 'Beykoz Konakları', 'Kavacık'],
  },
  {
    slug: 'umraniye-ic-mimarlik',
    name: 'Ümraniye',
    side: 'anadolu',
    locative: "Ümraniye'de",
    focus: 'Site dairesi ve ofis yenileme',
    neighborhoods: ['Atakent', 'Çakmak', 'Ihlamurkuyu', 'Tepeüstü', 'Esenşehir', 'Yukarı Dudullu'],
  },
  {
    slug: 'cekmekoy-ic-mimarlik',
    name: 'Çekmeköy',
    side: 'anadolu',
    locative: "Çekmeköy'de",
    focus: 'Müstakil villa ve site konutları',
    neighborhoods: ['Taşdelen', 'Alemdağ', 'Ömerli', 'Merkez', 'Mimar Sinan', 'Ekşioğlu'],
  },
  {
    slug: 'kartal-ic-mimarlik',
    name: 'Kartal',
    side: 'anadolu',
    locative: "Kartal'da",
    focus: 'Sahil rezidansları ve dönüşüm',
    neighborhoods: ['Kordonboyu', 'Soğanlık', 'Yakacık', 'Cevizli', 'Esentepe', 'Yalı'],
  },
  {
    slug: 'pendik-ic-mimarlik',
    name: 'Pendik',
    side: 'anadolu',
    locative: "Pendik'te",
    focus: 'Yeni site daireleri',
    neighborhoods: ['Kaynarca', 'Batı', 'Çamçeşme', 'Velibaba', 'Kurtköy', 'Yenişehir', 'Güzelyalı'],
  },

  // ————— Avrupa Yakası —————
  {
    slug: 'besiktas-ic-mimarlik',
    name: 'Beşiktaş',
    locative: "Beşiktaş'ta",
    side: 'avrupa',
    focus: 'Daire yenileme ve iç mimarlık',
    neighborhoods: ['Bebek', 'Etiler', 'Arnavutköy', 'Ortaköy', 'Abbasağa', 'Dikilitaş', 'Sinanpaşa'],
  },
  {
    slug: 'sisli-ic-mimarlik',
    name: 'Şişli',
    locative: "Şişli'de",
    side: 'avrupa',
    focus: 'Daire ve ofis yenileme',
    neighborhoods: ['Mecidiyeköy', 'Fulya', 'Bomonti', 'Şişli Merkez', 'Esentepe'],
  },
  {
    slug: 'nisantasi-ic-mimarlik',
    name: 'Nişantaşı',
    locative: "Nişantaşı'nda",
    side: 'avrupa',
    focus: 'Lüks mekan tasarımı',
    neighborhoods: ['Teşvikiye', 'Maçka', 'Harbiye'],
  },
  {
    slug: 'levent-ic-mimarlik',
    name: 'Levent',
    locative: "Levent'te",
    side: 'avrupa',
    focus: 'Plaza ofisi ve rezidans',
    neighborhoods: ['1. Levent', '4. Levent', 'Gültepe', 'Sanayi Mahallesi'],
  },
  {
    slug: 'beyoglu-ic-mimarlik',
    name: 'Beyoğlu',
    locative: "Beyoğlu'nda",
    side: 'avrupa',
    focus: 'Tarihi apartman dairesi yenileme',
    neighborhoods: ['Galata', 'Cihangir', 'Karaköy', 'Asmalımescit', 'Çukurcuma', 'Şişhane', 'Kasımpaşa'],
  },
  {
    slug: 'fatih-ic-mimarlik',
    name: 'Fatih',
    locative: "Fatih'te",
    side: 'avrupa',
    focus: 'Tarihi doku ve restorasyon',
    neighborhoods: ['Balat', 'Fener', 'Zeyrek', 'Süleymaniye', 'Çapa', 'Samatya', 'Cerrahpaşa', 'Aksaray'],
  },
  {
    slug: 'bakirkoy-ic-mimarlik',
    name: 'Bakırköy',
    locative: "Bakırköy'de",
    side: 'avrupa',
    focus: 'Daire yenileme ve iç mimarlık',
    neighborhoods: ['Ataköy', 'Yeşilköy', 'Yeşilyurt', 'Bakırköy Merkez', 'Florya'],
  },
  {
    slug: 'beylikduzu-ic-mimarlik',
    name: 'Beylikdüzü',
    locative: "Beylikdüzü'nde",
    side: 'avrupa',
    focus: 'Yeni site daireleri ve villa',
    neighborhoods: ['Barış', 'Gürpınar', 'Adnan Kahveci', 'Cumhuriyet', 'Kavaklı', 'Yakuplu', 'Marmara'],
  },
  {
    slug: 'sariyer-ic-mimarlik',
    name: 'Sarıyer',
    locative: "Sarıyer'de",
    side: 'avrupa',
    focus: 'Boğaz villaları ve yalı daireleri',
    neighborhoods: ['Tarabya', 'Yeniköy', 'İstinye', 'Emirgan', 'Baltalimanı', 'Maslak', 'Kilyos'],
  },
  {
    slug: 'zekeriyakoy-ic-mimarlik',
    name: 'Zekeriyaköy',
    locative: "Zekeriyaköy'de",
    side: 'avrupa',
    focus: 'Villa yenileme',
    neighborhoods: ['Zekeriyaköy Merkez', 'Göktürk', 'Kemerburgaz', 'Uskumruköy'],
  },
  {
    slug: 'zeytinburnu-ic-mimarlik',
    name: 'Zeytinburnu',
    side: 'avrupa',
    locative: "Zeytinburnu'nda",
    focus: 'Kentsel dönüşüm daireleri',
    neighborhoods: ['Merkezefendi', 'Kazlıçeşme', 'Seyitnizam', 'Telsiz', 'Veliefendi', 'Yeşiltepe'],
  },
  {
    slug: 'bagcilar-ic-mimarlik',
    name: 'Bağcılar',
    side: 'avrupa',
    locative: "Bağcılar'da",
    focus: 'Kentsel dönüşüm ve site daireleri',
    neighborhoods: ['Güneşli', 'Kirazlı', 'Mahmutbey', 'Yenimahalle', 'Demirkapı', 'Göztepe'],
  },
  {
    slug: 'bahcelievler-ic-mimarlik',
    name: 'Bahçelievler',
    side: 'avrupa',
    locative: "Bahçelievler'de",
    focus: 'Yoğun apartman stokunda yenileme',
    neighborhoods: ['Şirinevler', 'Siyavuşpaşa', 'Kocasinan', 'Yenibosna', 'Soğanlı', 'Zafer'],
  },
  {
    slug: 'kucukcekmece-ic-mimarlik',
    name: 'Küçükçekmece',
    side: 'avrupa',
    locative: "Küçükçekmece'de",
    focus: 'Karma yapı stokunda tadilat',
    neighborhoods: ['Halkalı', 'Sefaköy', 'Atakent', 'İnönü', 'Cennet', 'Kanarya', 'Yeşilova'],
  },
  {
    slug: 'basaksehir-ic-mimarlik',
    name: 'Başakşehir',
    side: 'avrupa',
    locative: "Başakşehir'de",
    focus: 'Planlı toplu konut daireleri',
    neighborhoods: ['Kayaşehir', 'Başak', 'Ziya Gökalp', 'Bahçeşehir sınırı', 'Altınşehir', 'Şahintepe'],
  },
  {
    slug: 'esenyurt-ic-mimarlik',
    name: 'Esenyurt',
    side: 'avrupa',
    locative: "Esenyurt'ta",
    focus: 'Yeni rezidans ve site daireleri',
    neighborhoods: ['Cumhuriyet', 'Yenikent', 'Balıkyolu', 'Saadetdere', 'Ardıçlı', 'İnönü'],
  },
  {
    slug: 'buyukcekmece-ic-mimarlik',
    name: 'Büyükçekmece',
    side: 'avrupa',
    locative: "Büyükçekmece'de",
    focus: 'Villa siteleri ve sahil konutları',
    neighborhoods: ['Tepekent', 'Mimaroba', 'Sinanoba', 'Kumburgaz', 'Güzelce', 'Karaağaç', 'Atatürk'],
  },
];

export const bySide = (side: Side): District[] =>
  districts.filter((d) => d.side === side);

export const getDistrict = (slug: string): District | undefined =>
  districts.find((d) => d.slug === slug);
