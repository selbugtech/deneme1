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
  {
    slug: 'beylikduzu-villa',
    title: 'Beylikdüzü Villa',
    category: 'Villa Yenileme',
    categorySlug: 'villa-yenileme',
    size: 'large',
    year: '2023',
    location: 'Beylikdüzü, İstanbul',
    area: '320 m²',
    duration: '14 Hafta',
    services: ['Villa İç Mimari Tasarımı', '3D Görselleştirme', 'Komple Yenileme', 'Özel Mobilya Tasarımı', 'Bahçe & Teras', 'Mutfak & Banyo'],
    description: [
      'Beylikdüzü\'nde geniş bahçeli bu villa, modern bir aile yaşamını destekleyecek şekilde baştan tasarlandı. Açık plan yaşam alanları ve doğayla bütünleşen geçişler tasarımın çıkış noktasını oluşturdu.',
      'Sıcak ve nötr renk paleti seçilerek mekana zamansız bir karakter kazandırıldı. Mutfak ve yemek alanı bütünleştirildi; ada tipi tezgah hem hazırlık hem sosyal alan olarak çift işlev görüyor.',
      'Üst kattaki yatak odaları suite konforuyla planlandı; her birine özel banyo ve giyinme alanları tasarlandı. 14 haftalık titiz bir süreçle proje anahtar teslim tamamlandı.',
    ],
    metaTitle: 'Beylikdüzü Villa Yenileme Projesi | Master İç Mimarlık İstanbul',
    metaDesc: 'Beylikdüzü\'nde 320 m² villanın komple yenileme projesi. Modern iç mimari, özel mobilya ve bahçe-teras düzenlemesi. Master İç Mimarlık.',
  },
  {
    slug: 'selimpasa-villa',
    title: 'Selimpaşa Villa',
    category: 'Villa Yenileme',
    categorySlug: 'villa-yenileme',
    size: 'large',
    year: '2022',
    location: 'Selimpaşa, İstanbul',
    area: '260 m²',
    duration: '12 Hafta',
    services: ['Villa İç Mimari Tasarımı', '3D Görselleştirme', 'Komple Yenileme', 'Mutfak & Banyo', 'Özel Mobilya', 'Aydınlatma Tasarımı'],
    description: [
      'Selimpaşa\'da deniz manzaralı konumda yer alan bu 260 m² villa, sahibi için yıllarca konfor sağlayacak şekilde komple yenilendi. Manzarayı içeri taşıyan geniş açıklıklar tasarımın temelini oluşturdu.',
      'Doğal taş, ahşap ve nötr tonlar bir araya getirilerek mekan boyunca tutarlı bir estetik dil korundu. Salon-mutfak ilişkisi açık planla kurgulandı; özel tasarım mobilyalarla kişiselleştirildi.',
      'Yatak odaları ve banyolar otel konforunda planlandı. Aydınlatma tasarımı katmanlı yapıldı; gizli, dekoratif ve görevsel ışıklar bir arada kullanıldı. Proje 12 haftada anahtar teslim tamamlandı.',
    ],
    metaTitle: 'Selimpaşa Villa Yenileme Projesi | Master İç Mimarlık İstanbul',
    metaDesc: 'Selimpaşa\'da 260 m² villanın komple yenileme projesi. Manzara odaklı tasarım, özel mobilya ve aydınlatma. Master İç Mimarlık.',
  },
  {
    slug: 'beykoz-villa',
    title: 'Beykoz Villa',
    category: 'Villa Yenileme',
    categorySlug: 'villa-yenileme',
    size: 'small',
    year: '2022',
    location: 'Beykoz, İstanbul',
    area: '240 m²',
    duration: '11 Hafta',
    services: ['Villa İç Mimari Tasarımı', 'Komple Yenileme', 'Mutfak & Banyo', 'Özel Mobilya', 'Bahçe & Teras', 'Aydınlatma Tasarımı'],
    description: [
      'Beykoz\'un yeşil dokusu içinde konumlanan bu villa, doğayla bütünleşik bir yaşam için yeniden tasarlandı. Mevcut yapısal düzen korunarak iç mekan tamamen yenilendi.',
      'Açık plan oturma-yemek-mutfak ilişkisi kuruldu; bahçeye açılan geniş cam yüzeyler iç ve dış mekan arasında akıcı bir geçiş sağladı.',
      'Yatak katı kullanıcı konforu önceliklendirilerek planlandı; banyo ve giyinme odaları suite mantığıyla entegre edildi. Proje 11 haftada teslim edildi.',
    ],
    metaTitle: 'Beykoz Villa Yenileme Projesi | Master İç Mimarlık',
    metaDesc: 'Beykoz\'da 240 m² villanın komple yenileme projesi. Doğayla bütünleşik tasarım, özel mobilya ve bahçe entegrasyonu. Master İç Mimarlık.',
  },
  {
    slug: 'cafe',
    title: 'Cafe Projesi',
    category: 'Ticari Mekan',
    categorySlug: 'ticari',
    size: 'small',
    year: '2021',
    location: 'İstanbul',
    area: '90 m²',
    duration: '4 Hafta',
    services: ['Ticari Mekan Tasarımı', 'Mobilya Tasarımı', 'Aydınlatma', 'Marka Kimliği Entegrasyonu', 'Mutfak Altyapısı', 'Kaplama & Boya'],
    description: [
      'Bu cafe projesi; sıcak, davetkar ve markaya özgü bir atmosfer hedefiyle tasarlandı. Müşteri deneyimini önceliklendiren bir oturma düzeni ve sirkülasyon kurgusu oluşturuldu.',
      'Doğal ahşap, sıcak metaller ve dokulu yüzeyler bir araya getirilerek karakterli bir mekan yaratıldı. Bar ve servis bölümleri operasyonel verimlilik gözetilerek konumlandırıldı.',
      'Aydınlatma tasarımı, gün içinde değişen kullanıma uyum sağlayacak şekilde katmanlı planlandı. Proje 4 haftada işletmeye hazır şekilde teslim edildi.',
    ],
    metaTitle: 'Cafe Tasarım Projesi | Ticari Mekan İç Mimarlık | Master',
    metaDesc: 'Marka odaklı cafe iç mimari tasarım projesi. Mobilya, aydınlatma ve mutfak altyapısı. Master İç Mimarlık.',
  },
  {
    slug: 'hilton-otel',
    title: 'Hilton Otel',
    category: 'Otel & Konaklama',
    categorySlug: 'otel',
    size: 'large',
    year: '2022',
    location: 'İstanbul',
    area: '—',
    duration: '—',
    services: ['Otel İç Mimari Uygulaması', 'Lobi & Ortak Alan', 'Oda Yenileme', 'Kaplama & Boya', 'Mobilya', 'Aydınlatma'],
    description: [
      'Uluslararası bir otel zincirinin İstanbul lokasyonunda gerçekleştirilen bu iç mimari uygulama projesi, marka standartlarına tam uyumlu bir teslimat hedefiyle yürütüldü.',
      'Lobi ve ortak alanlar konuk deneyimini önceliklendiren bir düzenle yenilendi. Detay işçiliği ve malzeme seçiminde kalite çıtası yüksek tutuldu.',
      'Proje, otelin operasyonunu minimum etkileyecek bir çalışma takviminde tamamlandı.',
    ],
    metaTitle: 'Hilton Otel İç Mimari Projesi | Master İç Mimarlık',
    metaDesc: 'Uluslararası otel zinciri için iç mimari uygulama projesi. Lobi, ortak alan ve oda yenileme. Master İç Mimarlık.',
  },
  {
    slug: 'kadikoy-moda',
    title: 'Kadıköy Moda Daire',
    category: 'Anahtar Teslim Ev Yenileme',
    categorySlug: 'anahtar-teslim',
    size: 'small',
    year: '2023',
    location: 'Moda, Kadıköy, İstanbul',
    area: '115 m²',
    duration: '8 Hafta',
    services: ['İç Mimari Tasarım', 'Komple Yenileme', 'Mutfak & Banyo', 'Zemin Kaplama', 'Boya & Dekor', 'Aydınlatma'],
    description: [
      'Kadıköy Moda\'da denize yürüme mesafesindeki bu 115 m² daire, sahili ve mahalle dokusunu evin içine taşıyacak şekilde tasarlandı. Açık plan kurgu mekanı görsel olarak genişletti.',
      'Doğal tonlar, mat yüzeyler ve doku detaylarıyla zamansız bir iç mekan elde edildi. Mutfak ve oturma alanı bütünleştirildi; banyo yenileme ile modern bir his yakalandı.',
      'Tüm elektrik ve sıhhi tesisat yenilendi; proje 8 haftada anahtar teslim tamamlandı.',
    ],
    metaTitle: 'Kadıköy Moda Ev Yenileme | Anahtar Teslim | Master İç Mimarlık',
    metaDesc: 'Kadıköy Moda\'da 115 m² dairenin komple anahtar teslim yenileme projesi. Modern iç mimari tasarım. Master İç Mimarlık İstanbul.',
  },
  {
    slug: 'karisik-projeler',
    title: 'Karışık Projeler',
    category: 'Seçilmiş Çalışmalar',
    categorySlug: 'karisik',
    size: 'small',
    year: '—',
    location: 'İstanbul',
    area: '—',
    duration: '—',
    services: ['İç Mimari Tasarım', 'Komple Yenileme', 'Mutfak & Banyo', 'Mobilya', 'Aydınlatma', 'Dekor'],
    description: [
      'Farklı projelerden seçilmiş detay ve uygulama görsellerinin bir araya getirildiği bu galeri, ekibin çalışma yelpazesini gösteren bir özet niteliğindedir.',
      'Detay işçiliği, malzeme seçimleri ve atmosfer kurgusu açısından çeşitli örnekler bir arada sunuluyor.',
    ],
    metaTitle: 'Seçilmiş Çalışmalar | Master İç Mimarlık İstanbul',
    metaDesc: 'Master İç Mimarlık\'ın farklı projelerinden seçilmiş detay ve uygulama görselleri.',
  },
  {
    slug: 'maltepe',
    title: 'Maltepe Daire',
    category: 'Anahtar Teslim Ev Yenileme',
    categorySlug: 'anahtar-teslim',
    size: 'small',
    year: '2021',
    location: 'Maltepe, İstanbul',
    area: '105 m²',
    duration: '7 Hafta',
    services: ['İç Mimari Tasarım', 'Komple Yenileme', 'Mutfak & Banyo', 'Zemin Kaplama', 'Boya & Dekor', 'Aydınlatma'],
    description: [
      'Maltepe\'de bu 105 m² daire; aile yaşamına uygun, sade ve fonksiyonel bir iç mekan hedefiyle yenilendi. Mevcut planın gözden geçirilmesiyle daha geniş ortak alanlar oluşturuldu.',
      'Nötr renk paleti ve doğal dokular bir araya getirildi; mutfakta ankastre çözümler ve pratik depolama önceliklendirildi.',
      'Banyo ve yatak odaları kullanıcı konforu gözetilerek yeniden düzenlendi. Proje 7 haftada anahtar teslim tamamlandı.',
    ],
    metaTitle: 'Maltepe Ev Yenileme Projesi | Anahtar Teslim | Master İç Mimarlık',
    metaDesc: 'Maltepe\'de 105 m² dairenin komple yenileme projesi. Modern iç mimari, mutfak ve banyo renovasyonu. Master İç Mimarlık.',
  },
  {
    slug: 'nurol-park',
    title: 'Nurol Park Daire',
    category: 'Anahtar Teslim Ev Yenileme',
    categorySlug: 'anahtar-teslim',
    size: 'small',
    year: '2021',
    location: 'Nurol Park, İstanbul',
    area: '125 m²',
    duration: '8 Hafta',
    services: ['İç Mimari Tasarım', 'Komple Yenileme', 'Mutfak & Banyo', 'Mobilya Seçimi', 'Boya & Dekor', 'Aydınlatma'],
    description: [
      'Nurol Park\'taki bu 125 m² daire, modern site yaşamının ihtiyaçlarına uygun olarak baştan tasarlandı. Açık plan oturma-mutfak ilişkisi kuruldu.',
      'Nötr ton paleti ve doğal ahşap detaylar ile sıcak bir atmosfer kurgulandı. Mutfakta ada tipi tezgah ve ankastre cihazlar tercih edildi.',
      'Banyolar ve yatak odaları kullanıcı konforu önceliklendirilerek yenilendi. Proje 8 haftada anahtar teslim tamamlandı.',
    ],
    metaTitle: 'Nurol Park Ev Yenileme | Anahtar Teslim | Master İç Mimarlık',
    metaDesc: 'Nurol Park\'ta 125 m² dairenin komple yenileme projesi. Modern iç mimari ve mutfak-banyo renovasyonu. Master İç Mimarlık.',
  },
  {
    slug: 'ofis',
    title: 'Ofis Projesi',
    category: 'Ofis Yenileme',
    categorySlug: 'ofis-yenileme',
    size: 'small',
    year: '2022',
    location: 'İstanbul',
    area: '180 m²',
    duration: '7 Hafta',
    services: ['Ofis İç Mimari Tasarımı', 'Açık Ofis Planlaması', 'Toplantı Odası', 'Aydınlatma', 'Mobilya', 'Akustik Çözümler'],
    description: [
      'Kurumsal bir ekip için tasarlanan bu ofis projesinde, esnek çalışma alanları ve fonksiyonel toplantı bölümleri önceliklendirildi.',
      'Açık çalışma adaları, odaklanma kabinleri ve dinlenme köşeleri birlikte planlandı; marka kimliği renk ve detaylarla mekana yansıtıldı.',
      'Aydınlatma ve akustik çözümler çalışma verimliliğini desteklemek üzere katmanlı kurgulandı. Proje 7 haftada teslim edildi.',
    ],
    metaTitle: 'Ofis İç Mimari Projesi | Kurumsal Tasarım | Master İç Mimarlık',
    metaDesc: 'Kurumsal ofis için iç mimari tasarım ve uygulama. Açık ofis planlaması, toplantı odası ve aydınlatma. Master İç Mimarlık.',
  },
];

// Display order: Beylikdüzü ve Selimpaşa villaları en üstte; gerisi karma bir
// dağılımla (büyük/küçük, kategori ve yıl bakımından dengeli) listelenir.
const DISPLAY_ORDER = [
  'beylikduzu-villa',
  'selimpasa-villa',
  'beykoz-pasabahce',
  'tepekent',
  'beyoglu-galata',
  'beykoz-villa',
  'mecidiyekoy-dublex',
  'kadikoy-moda',
  'caddebostan',
  'artas-ofis',
  'zeytinburnu',
  'nurol-park',
  'ofis',
  'atakoy',
  'hilton-otel',
  'maltepe',
  'artas-ofis-2',
  'cafe',
  'kozyatagi-banyo',
  'karisik-projeler',
];

type GalleryEntry = { folder: string; files: GalleryFile[] };
const galleryMap = gallery as Record<string, GalleryEntry>;

export type Project = ProjectMeta & {
  heroImage: string;
  heroSrcset: string;
  gallery: GalleryFile[];
};

const byOrder = (slug: string) => {
  const i = DISPLAY_ORDER.indexOf(slug);
  return i === -1 ? Number.MAX_SAFE_INTEGER : i;
};

export const projects: Project[] = META
  .filter((m) => galleryMap[m.slug]?.files?.length)
  .map((m) => {
    const files = galleryMap[m.slug].files;
    return {
      ...m,
      heroImage: files[0].src,
      heroSrcset: files[0].srcset,
      gallery: files,
    };
  })
  .sort((a, b) => byOrder(a.slug) - byOrder(b.slug));

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
