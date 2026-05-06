import gallery from './projects-gallery.json';

export type GalleryFile = { src: string; srcset: string; original: string };

export type ProjectMeta = {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  size: 'small' | 'large';
  year: string;
  location: string;
  area: string;
  duration: string;
  services: string[];
  description: string[];
  metaTitle: string;
  metaDesc: string;
};

const META: ProjectMeta[] = [
  {
    slug: 'beyoglu-galata',
    title: 'Beyoğlu Galata Daire',
    category: 'Anahtar Teslim Ev Yenileme',
    categorySlug: 'anahtar-teslim',
    size: 'large',
    year: '2023',
    location: 'Beyoğlu, İstanbul',
    area: '95 m²',
    duration: '7 Hafta',
    services: ['İç Mimari Tasarım', '3D Görselleştirme', 'Komple Yenileme', 'Mutfak & Banyo', 'Zemin Kaplama', 'Boya & Dekor'],
    description: [
      'Beyoğlu\'nun tarihi Galata semtinde konumlanan bu 95 m² daire, tarihin dokusunu modern yaşam konforuyla buluşturmak amacıyla anahtar teslim olarak yenilendi. Asma tavan ve yüksek pencerelerin yarattığı ışıklı atmosfer, tasarımın çıkış noktasını oluşturdu.',
      'Oturma ve yemek alanı açık plan anlayışıyla bütünleştirildi; renk paleti olarak kırık beyaz, doğal taş ve koyu ahşap detaylar seçildi. Mutfak dolapları ve tezgah, tarihi yapının karakterine uyum sağlayan mat yüzeyler ve bakır aksesuar grubuyla tamamlandı.',
      'Banyo baştan sona yenilenerek terazo görünümlü büyük format seramikler ve rainfall duş başlığıyla lüks bir his yaratıldı. Tüm proje, binanın kültürel dokusuna saygı gösterilerek ve belirlenen bütçe dahilinde 7 haftada teslim edildi.',
    ],
    metaTitle: 'Beyoğlu Galata Ev Yenileme Projesi | Anahtar Teslim | Master İç Mimarlık',
    metaDesc: 'Beyoğlu Galata\'da 95 m² tarihi dairenin komple anahtar teslim yenileme projesi. Modern iç mimari tasarım, özel mutfak ve banyo çalışmaları. Master İç Mimarlık İstanbul.',
  },
  {
    slug: 'beykoz-pasabahce',
    title: 'Beykoz Paşabahçe Villa',
    category: 'Villa Yenileme',
    categorySlug: 'villa-yenileme',
    size: 'small',
    year: '2022',
    location: 'Beykoz, İstanbul',
    area: '280 m²',
    duration: '12 Hafta',
    services: ['Villa İç Mimari Tasarımı', '3D Görselleştirme', 'Yapısal Düzenlemeler', 'Özel Mobilya Tasarımı', 'Bahçe & Teras Entegrasyonu', 'Komple Yenileme'],
    description: [
      'Boğaz\'ın kıyısında, Beykoz Paşabahçe\'nin yeşil dokusu içinde yer alan bu 280 m² villa; doğayla bütünleşik, çağdaş bir yaşam alanına dönüştürülmek üzere anahtar teslim yenilendi. Proje, villayı karaktersizleştirmeden modern çizgiye taşımayı hedefledi.',
      'Ana yaşam katında, manzarayı öne çıkarmak için bölücü duvarlar kaldırılarak panoramik bir oturma—yemek—mutfak sirkülasyonu oluşturuldu. Geniş terastan iç mekana akan doğal ışık, açık renkli mermer zemin ve bej-gri ton mobilyalarla güçlendirildi.',
      'Üst kattaki yatak odaları, her birinde ayrı banyo ve giyinme odası bulunacak şekilde yeniden planlandı. Bahçeye inen teras, dış mekan döşeme ve peyzaj düzenlemesiyle ailenin dört mevsim kullanabileceği bir yaşam alanına kavuştu. Proje 12 haftada eksiksiz teslim edildi.',
    ],
    metaTitle: 'Beykoz Paşabahçe Villa Yenileme Projesi | Master İç Mimarlık İstanbul',
    metaDesc: 'Beykoz Paşabahçe\'de 280 m² villanın komple yenilenmesi. Özel mobilya tasarımı ve bahçe-teras entegrasyonu. Master İç Mimarlık.',
  },
  {
    slug: 'caddebostan',
    title: 'Caddebostan Daire',
    category: 'Anahtar Teslim Ev Yenileme',
    categorySlug: 'anahtar-teslim',
    size: 'small',
    year: '2022',
    location: 'Caddebostan, İstanbul',
    area: '110 m²',
    duration: '8 Hafta',
    services: ['İç Mimari Tasarım', '3D Görselleştirme', 'Komple Yenileme', 'Alçıpan & Asma Tavan', 'Mutfak Yenileme', 'Zemin Kaplama'],
    description: [
      'Kadıköy Caddebostan\'da sahile yürüme mesafesinde yer alan bu 110 m² daire, aile yaşamına uygun ferah ve modern bir iç mekana dönüştürüldü. Tasarımın önceliği; işlevselliği ön planda tutarken sade bir estetik dil oluşturmaktı.',
      'Giriş holü ile oturma alanı birleştirilerek derinlik hissi artırıldı. Mutfakta ankastre beyaz cihazlar ve mat antrasit dolap kapakları tercih edildi; ada tipi tezgah hem hazırlık hem de sosyal alan olarak çift işlev görüyor. Zemin kaplaması olarak büyük formatlı porselen kullanıldı.',
      'Çocuk odası ve ana yatak odası, pratik depolama çözümleri gözetilerek ayrı ayrı tasarlandı. Alçıpan çalışmalarıyla güçlendirilen tavan; gizli aydınlatma ve spot gruplarıyla katmanlı bir ışık atmosferi yaratıyor. Proje 8 hafta içinde anahtar teslim tamamlandı.',
    ],
    metaTitle: 'Caddebostan Ev Yenileme Projesi | Anahtar Teslim | Master İç Mimarlık',
    metaDesc: 'Kadıköy Caddebostan\'da 110 m² dairenin komple anahtar teslim yenileme projesi. Açık plan mutfak, asma tavan ve özel depolama çözümleri. Master İç Mimarlık İstanbul.',
  },
  {
    slug: 'mecidiyekoy-dublex',
    title: 'Mecidiyeköy Dublex',
    category: 'Anahtar Teslim Ev Yenileme',
    categorySlug: 'anahtar-teslim',
    size: 'small',
    year: '2024',
    location: 'Mecidiyeköy, İstanbul',
    area: '180 m²',
    duration: '10 Hafta',
    services: ['İç Mimari Tasarım', '3D Görselleştirme', 'Komple Yenileme', 'Mutfak & Banyo', 'Zemin Kaplama', 'Boya & Dekor'],
    description: [
      'İstanbul\'un iş merkezi Mecidiyeköy\'de konumlanan bu 180 m² dubleks daire; modern şehir yaşamının dinamizmiyle ev konforunu bir arada sunan bir mekana dönüştürüldü. İki kat arasında akıcı bir geçiş kurulurken, her katın kendi karakteri korundu.',
      'Alt katta oturma, yemek ve mutfak açık plan anlayışıyla bütünleştirildi; özel tasarım ankastre raf sistemi ve nötr renk paleti ile sıcak ama sade bir atmosfer kurgulandı. Merdiven boşluğu mekanın odak noktası haline getirildi.',
      'Üst katta yatak odaları ve banyolar, akıllı depolama çözümleriyle her metrekareyi verimli kullanacak şekilde planlandı. Tüm elektrik ve sıhhi tesisat yenilenerek proje 10 haftada eksiksiz teslim edildi.',
    ],
    metaTitle: 'Mecidiyeköy Dubleks Yenileme Projesi | Anahtar Teslim | Master İç Mimarlık',
    metaDesc: 'Mecidiyeköy\'de 180 m² dubleks dairenin komple anahtar teslim yenileme projesi. Modern iç mimari tasarım, açık plan mutfak ve banyo renovasyonu. Master İç Mimarlık İstanbul.',
  },
  {
    slug: 'artas-ofis',
    title: 'Artaş Ofis',
    category: 'Ofis Yenileme',
    categorySlug: 'ofis-yenileme',
    size: 'small',
    year: '2024',
    location: 'Artaş, İstanbul',
    area: '200 m²',
    duration: '8 Hafta',
    services: ['Ofis İç Mimari Tasarımı', 'Açık Ofis Planlaması', 'Toplantı Odası Tasarımı', 'Akustik Çözümler', 'Teknik Altyapı', 'Mobilya Seçimi'],
    description: [
      'İstanbul Artaş\'ta faaliyet gösteren bu 200 m² kurumsal ofis, çalışan verimliliğini ve marka imajını güçlendirmek amacıyla baştan tasarlandı. Eski bölmeli ofis düzeni tamamen kaldırılarak esnek ve ferah bir çalışma ortamı oluşturuldu.',
      'Açık çalışma alanları, farklı kapasiteli toplantı odaları ve dinlenme köşeleri işlevsel bir denge içinde konumlandırıldı. Kurumsal renk paleti mekana yansıtılırken cam bölmeler sayesinde hem şeffaflık hem de gizlilik ihtiyacı karşılandı.',
      'Akustik panel uygulamaları, LED aydınlatma tasarımı ve yükseltilmiş döşeme ile teknik altyapı modernize edildi. Proje, ofisin kapalı kalma süresini minimize eden bir çalışma takviminde 8 haftada tamamlanarak teslim edildi.',
    ],
    metaTitle: 'Artaş Ofis Yenileme Projesi | Kurumsal İç Mimarlık | Master İç Mimarlık',
    metaDesc: 'Artaş\'ta 200 m² kurumsal ofis yenileme projesi. Açık ofis planlaması, toplantı odası tasarımı ve akustik çözümler. Master İç Mimarlık İstanbul.',
  },
  {
    slug: 'artas-ofis-2',
    title: 'Artaş Ofis 2',
    category: 'Ofis Yenileme',
    categorySlug: 'ofis-yenileme',
    size: 'small',
    year: '2023',
    location: 'Artaş, İstanbul',
    area: '150 m²',
    duration: '6 Hafta',
    services: ['Ofis İç Mimari Tasarımı', 'Açık Ofis Planlaması', 'Toplantı Odası Tasarımı', 'Aydınlatma Tasarımı', 'Kaplama & Boya', 'Mobilya Seçimi'],
    description: [
      'Artaş\'taki bu 150 m² ikinci ofis projesi, büyüyen ekibin yeni çalışma düzenine uygun olarak tasarlandı. Birinci ofisle kurumsal uyum sağlanırken bu mekanda farklı bir kat planı ve farklı ihtiyaçlar söz konusuydu.',
      'Giriş lobisi kurumsal kimliği yansıtacak şekilde markalı bir karşılama alanına dönüştürüldü. Ortak çalışma adaları ile bireysel odaklanma kabinleri aynı mekan içinde tasarlandı; farklı çalışma modlarını destekleyen esnek bir ofis elde edildi.',
      'Doğal ışık odaklı pencere düzenlemesi ve açık renkli zemin kaplama ile iç mekan ferahlatıldı. Teknik altyapı ve kablolama gizlenerek temiz ve düzenli bir görünüm sağlandı. Proje 6 hafta içinde tamamlanarak kullanıma alındı.',
    ],
    metaTitle: 'Artaş Ofis II Yenileme Projesi | Kurumsal İç Mimarlık | Master İç Mimarlık',
    metaDesc: 'Artaş\'ta 150 m² kurumsal ofis yenileme projesi. Esnek çalışma alanları, aydınlatma tasarımı ve mobilya seçimi. Master İç Mimarlık İstanbul.',
  },
  {
    slug: 'tepekent',
    title: 'Tepekent Villa',
    category: 'Anahtar Teslim Ev Yenileme',
    categorySlug: 'anahtar-teslim',
    size: 'large',
    year: '2024',
    location: 'Tepekent, İstanbul',
    area: '140 m²',
    duration: '10 Hafta',
    services: ['İç Mimari Tasarım', '3D Görselleştirme', 'Komple Yenileme', 'Özel Mobilya & Dekor', 'Zemin Kaplama', 'Mutfak & Banyo'],
    description: [
      'Tepekent\'in sakin ve yeşil dokusunda konumlanan bu 140 m² ev, aile hayatının tüm ihtiyaçlarını karşılayacak şekilde yeniden tasarlandı. Dış çevrenin doğallığını iç mekana taşıyan toprak tonlar ve ahşap dokular tasarımın temelini oluşturdu.',
      'Oturma alanı ve mutfak, çocuklu aile yaşamına uygun geniş ve gözetimli bir düzen içinde planlandı. Yüksek kapasiteli gizli depolama çözümleri ile mekanda sade ve düzenli bir görünüm korundu. Mutfak adası hem yemek hazırlama hem de aile buluşma noktası olarak tasarlandı.',
      'Ana yatak odası, giyinme odası ve banyo bütünlüğüyle kullanıcıya suite otel konforu sunuyor. Çocuk odası ergonomik mobilya ve oyun alanı tasarımıyla büyümeye uygun bir düzen içinde kurgulandı. 10 haftalık titiz bir sürecin ardından ev anahtar teslim teslim edildi.',
    ],
    metaTitle: 'Tepekent Ev Yenileme Projesi | Anahtar Teslim | Master İç Mimarlık',
    metaDesc: 'Tepekent\'te 140 m² dairenin komple anahtar teslim yenileme projesi. Doğal malzemeler, özel mobilya tasarımı ve aile yaşamına uygun iç mekan. Master İç Mimarlık.',
  },
  {
    slug: 'kozyatagi-banyo',
    title: 'Kozyatağı Banyo',
    category: 'Kısmi Yenileme',
    categorySlug: 'kismi-yenileme',
    size: 'small',
    year: '2022',
    location: 'Kozyatağı, İstanbul',
    area: '12 m²',
    duration: '2 Hafta',
    services: ['Banyo Tasarımı', 'Seramik & Kaplama', 'Sıhhi Tesisat Yenileme', 'Armatür & Aksesuar', 'Aydınlatma', 'Alçıpan Çalışması'],
    description: [
      'Kozyatağı\'ndaki bu dairenin banyosu; eskiyen kaplamaları ve yetersiz depolama alanıyla yenilenmesi gereken bir noktaya gelmişti. Küçük alanı en verimli şekilde kullanmak ve butik otel estetiği yaratmak temel hedef olarak belirlendi.',
      'Büyük format gri mermer görünümlü seramikler zemin ve duvarda bütünlüklü bir yüzey oluşturdu. Yağmur başlıklı duş sistemi ve nişler tasarım içinde konumlandırıldı; gizli bir ek dolap ile depolama kapasitesi artırıldı. Cam duş bölmesi mekana ferahlık kattı.',
      'Mat siyah batarya ve armatürler ile antrasit aksesuar grubu seçilerek mekan boyunca tutarlı bir estetik dil korundu. LED aydınlatma, hem görevsel hem dekoratif işlev görecek şekilde konumlandırıldı. Proje 2 haftada eksiksiz teslim edildi.',
    ],
    metaTitle: 'Kozyatağı Banyo Yenileme Projesi | Master İç Mimarlık İstanbul',
    metaDesc: 'Kozyatağı\'nda 12 m² banyonun komple yenilenmesi. Büyük format seramik, yağmur başlıklı duş ve mat siyah armatürler. Master İç Mimarlık banyo renovasyonu.',
  },
  {
    slug: 'zeytinburnu',
    title: 'Zeytinburnu Daire',
    category: 'Anahtar Teslim Ev Yenileme',
    categorySlug: 'anahtar-teslim',
    size: 'small',
    year: '2023',
    location: 'Zeytinburnu, İstanbul',
    area: '100 m²',
    duration: '8 Hafta',
    services: ['İç Mimari Tasarım', '3D Görselleştirme', 'Komple Yenileme', 'Mutfak & Banyo', 'Zemin Kaplama', 'Boya & Dekor'],
    description: [
      'Zeytinburnu\'ndaki bu 100 m² daire; yeni sahibinin taşınmadan önce komple yenilenmesi talebiyle projelendirildi. Sınırlı metrekareyi daha büyük ve kullanışlı hissettirmek tasarımın odak noktasını oluşturdu.',
      'Girişten oturma alanına uzanan açık plan kurgu, mekanı görsel olarak genişletirken pratik bir sirkülasyon sağladı. Mutfakta beyaz lake dolap cephesi ve geniş tezgah yüzeyi tercih edildi; mutfak ile yemek masası aynı ada üzerinde konumlandırıldı.',
      'Banyo, su bazlı görünümlü yüzeyler ve mat altın donanımlarla yenilendi. İnce çerçeveli iç kapılar ve dolaylı aydınlatma uygulamaları tavan yüksekliği algısını artırdı. Proje zamanında ve bütçe dahilinde 8 haftada anahtar teslim tamamlandı.',
    ],
    metaTitle: 'Zeytinburnu Ev Yenileme Projesi | Anahtar Teslim | Master İç Mimarlık',
    metaDesc: 'Zeytinburnu\'nda 100 m² dairenin komple anahtar teslim yenileme projesi. Açık plan düzeni, modern mutfak ve banyo yenileme. Master İç Mimarlık İstanbul.',
  },
  {
    slug: 'atakoy',
    title: 'Ataköy Daire',
    category: 'Anahtar Teslim Ev Yenileme',
    categorySlug: 'anahtar-teslim',
    size: 'small',
    year: '2022',
    location: 'Ataköy, İstanbul',
    area: '120 m²',
    duration: '8 Hafta',
    services: ['İç Mimari Tasarım', 'Komple Yenileme', 'Mutfak & Banyo', 'Zemin Kaplama', 'Boya & Dekor', 'Aydınlatma Tasarımı'],
    description: [
      'Ataköy\'de konumlanan bu 120 m² daire, modern bir aile yaşamının ihtiyaçlarına uygun olarak komple yenilendi. Mevcut planın gözden geçirilmesiyle daha akıcı bir sirkülasyon ve daha geniş ortak alanlar oluşturuldu.',
      'Salon ve mutfak açık plan anlayışıyla bütünleştirildi; nötr bir renk paleti ve doğal ahşap detaylar ile sade ama sıcak bir atmosfer kurgulandı. Mutfakta ada tipi tezgah ve ankastre cihazlar tercih edildi.',
      'Yatak odaları ve banyolar, kullanım konforu önceliklendirilerek yeniden tasarlandı. Tüm elektrik ve sıhhi tesisat yenilendi; proje 8 haftada anahtar teslim tamamlandı.',
    ],
    metaTitle: 'Ataköy Ev Yenileme Projesi | Anahtar Teslim | Master İç Mimarlık',
    metaDesc: 'Ataköy\'de 120 m² dairenin komple anahtar teslim yenileme projesi. Açık plan mutfak, modern banyo ve özel iç mimari tasarım. Master İç Mimarlık İstanbul.',
  },
];

type GalleryEntry = { folder: string; files: GalleryFile[] };
const galleryMap = gallery as Record<string, GalleryEntry>;

export type Project = ProjectMeta & {
  heroImage: string;
  heroSrcset: string;
  gallery: GalleryFile[];
};

export const projects: Project[] = META.filter((m) => galleryMap[m.slug]?.files?.length).map((m) => {
  const files = galleryMap[m.slug].files;
  return {
    ...m,
    heroImage: files[0].src,
    heroSrcset: files[0].srcset,
    gallery: files,
  };
});

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
