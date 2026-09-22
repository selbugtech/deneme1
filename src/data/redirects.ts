// Eski siteden devralınan URL’lerin 301 haritası. TEK KAYNAK burası.
//
// Liste Wayback CDX arşivinden çıkarıldı (425 arşivlenmiş URL), her biri canlı
// sitede tek tek HTTP ile doğrulandı: 315’i 404 dönüyordu. Bunların 286’sı
// aşağıda niyetine en yakın MEVCUT sayfaya eşlendi; kalan 29 teknik artık
// (sayfalama numaraları, /feed, /panel/login, WhatsApp görsel yolları) bilerek
// dışarıda bırakıldı — anlamsız bir hedefe yönlendirmek soft-404 sayılıyor.
//
// Kural: her giriş niyeti en yakın sayfaya gitmeli. Toplu olarak ana sayfaya
// ya da /404’e yönlendirme YOK.
//
// Değişiklikten sonra: npm run redirects:sync  (vercel.json’a yazar)

export const legacyRedirects: Record<string, string> = {

  // Villa tadilat anahtar kelime kümesi — eski sitenin en büyük organik kümesi.
  // → /hizmetler/anahtar-teslim/villa-tadilat  (39)
  '/anadolu-yakasi-villa-tadilat': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/anahtar-teslim-villa-tadilat': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/anahtar-teslim-villa-tadilat-firmalari': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/anahtar-teslim-villa-tadilat-fiyatlari-2021': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/anahtar-teslim-villa-tadilat-fiyatlari-2022': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/anahtar-teslim-villa-tadilat-maliyeti-2021': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/anahtar-teslim-villa-tadilat-maliyeti-2022': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/anahtar-teslim-villa-tadilat-ve-mimarlik-hizmeti': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/anahtar-teslim-villa-tadilatlari': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/ant-villa': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/avrupa-yakasi-villa-tadilat': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/en-uygun-villa-tadilat-fiyatlari-ve-maliyetleri': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/ev-ve-villa-tadilat-fiyatlari': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/istanbul-tadilat-komple-ev-villa-anahtar-teslim-fiyatlari': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/istanbul-villa-tadilat-firmalari': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/komple-villa-tadilat': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/villa-dizayn-ve-tadilat': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/villa-tadilat': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/villa-tadilat-fiyat-2021': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/villa-tadilat-fiyati-hesapla': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/villa-tadilat-fiyatlari-2021': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/villa-tadilat-fiyatlari-2022': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/villa-tadilat-islemleri': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/villa-tadilat-maliyeti-2021': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/villa-tadilat-maliyeti-2022': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/villa-tadilat-maliyeti-hesaplama': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/villa-tadilat-nasil-yaptirilir': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/villa-tadilat-sureci-nasil-isler': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/villa-tadilat-ve-bahce-duzeni': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/villa-tadilat-ve-boyama-islemleri': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/villa-tadilat-ve-maliyet': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/villa-tadilat-ve-mimarlik': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/villa-tadilat-ve-yenileme-asamalari': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/villa-tadilati': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/villa-tadilati-neden-gereklidir': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/villa-tadilati-ozen-ister': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/villa-tadilatinda-dogayla-uyumlu-yasam-alanlari-yarat': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/villa-tadilatinda-essiz-tasarim-dokunuslariyla-evini-kisisellestir': '/hizmetler/anahtar-teslim/villa-tadilat',
  '/yakip-su-villa': '/hizmetler/anahtar-teslim/villa-tadilat',

  // Cafe, restoran, lokanta, börek salonu ve düğün salonu projeleri.
  // → /hizmetler/anahtar-teslim/cafe-restaurant-tadilat  (34)
  '/acibadem-cafe': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/almanya-dugun-salonu': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/avm-restoran': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/basha-cafe': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/besiktas-cafe-of-thrones': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/borek-istanbul': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/cafe-dekorasyon-dizayni': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/cafe-dekorasyonlarinda-yeni-tarz': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/cafe-tadilat': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/cafe-tadilat-proje': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/cafe-ve-restoran-tadilatinda-ic-mekan-tasariminin-onemi': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/cafe-ve-restoran-tadilatinda-mobilya-ve-dekorasyon-trendleri': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/catalca-cafe': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/catalca-kafe': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/dugun-salonu-dizayn-ve-tadilat': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/erzurum-ekmekkafe': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/garnish-bap-cafe': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/hilton-teras-cafe': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/kadikoy-borek': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/kadikoy-cafe': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/kafe-dekorasyon': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/ki-dugun-salonu': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/musteri-deneyimini-artirmak-icin-cafe-ve-restoran-tadilati-ipuclari': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/otel-ve-restoran-tasarimi:': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/ozlem-borek': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/pamuk-ova-lokanta': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/pasha-cafe': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/pendik-cafe': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/pukka-cafe': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/restoran-dekorasyon-dizayni': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/restoran-dekorasyonu': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/tekirdag-cafe': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/venezia-cafe-tadilat': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',
  '/zinde-dugun-salonu': '/hizmetler/anahtar-teslim/cafe-restaurant-tadilat',

  // Kişi veya yer adıyla anılan eski proje sayfaları. Birebir karşılığı olmadığı için galeriye.
  // → /projeler  (28)
  '/betul-hanim': '/projeler',
  '/cavus-basi': '/projeler',
  '/copcu-mehmet': '/projeler',
  '/dis-klinigi': '/projeler',
  '/elazig-yapim': '/projeler',
  '/erten-bey-ev': '/projeler',
  '/esenler': '/projeler',
  '/essenora-sitesi': '/projeler',
  '/firat-dis-ticaret': '/projeler',
  '/garnish': '/projeler',
  '/gulcan-hanim': '/projeler',
  '/gunduz-bey': '/projeler',
  '/hasan-bey': '/projeler',
  '/hayat-park': '/projeler',
  '/istanbul-forum': '/projeler',
  '/katibim': '/projeler',
  '/merdiven-projeleri': '/projeler',
  '/pergola-projeler-karisik': '/projeler',
  '/remoil': '/projeler',
  '/sakarya-koy-emel-hanim': '/projeler',
  '/saroglu-yapim': '/projeler',
  '/serdar-bey': '/projeler',
  '/silivri-anne': '/projeler',
  '/tente-projeler': '/projeler',
  '/topcular': '/projeler',
  '/vatan-cad-erkan-bey': '/projeler',
  '/veysel-bey': '/projeler',
  '/zemin-sistemleri': '/projeler',

  // Genel ev / daire / komple tadilat kelimeleri (ilçe adı geçmeyenler).
  // → /hizmetler/anahtar-teslim/ev-tadilat  (26)
  '/anasayfa/blog/ev-tadilati-ve-insaati-yaparken-nelere-dikkat-edilmelidir': '/hizmetler/anahtar-teslim/ev-tadilat',
  '/anasayfa/blog/komple-ev-tadilat-asamalari-nelerdir': '/hizmetler/anahtar-teslim/ev-tadilat',
  '/anasayfa/blog/komple-ev-tadilati-ve-insaatinda-kullanilan-malzemeler': '/hizmetler/anahtar-teslim/ev-tadilat',
  '/and-dublex': '/hizmetler/anahtar-teslim/ev-tadilat',
  '/eski-ev-tadilati': '/hizmetler/anahtar-teslim/ev-tadilat',
  '/ev-tadilat-projeleri': '/hizmetler/anahtar-teslim/ev-tadilat',
  '/ev-tadilat-surecleri': '/hizmetler/anahtar-teslim/ev-tadilat',
  '/ev-tadilat-surecleri-2': '/hizmetler/anahtar-teslim/ev-tadilat',
  '/ev-tadilat-ve-musteri-memnuniyeti': '/hizmetler/anahtar-teslim/ev-tadilat',
  '/ev-tadilati': '/hizmetler/anahtar-teslim/ev-tadilat',
  '/ev-tadilati-ev-dekorasyonu-ve-ic-mekan-yenileme': '/hizmetler/anahtar-teslim/ev-tadilat',
  '/ev-tadilati-ve-dekorasyonu': '/hizmetler/anahtar-teslim/ev-tadilat',
  '/ev-tadilati-ve-insaati-yaparken-nelere-dikkat-edilmelidir': '/hizmetler/anahtar-teslim/ev-tadilat',
  '/ev-tadilati-ve-malzeme-kalitesi': '/hizmetler/anahtar-teslim/ev-tadilat',
  '/ev-tadilatinda-tesisat-islemleri': '/hizmetler/anahtar-teslim/ev-tadilat',
  '/istanbul-anadolu-yakasi-ev-tadilati': '/hizmetler/anahtar-teslim/ev-tadilat',
  '/istanbul-avrupa-yakasi-ev-tadilat': '/hizmetler/anahtar-teslim/ev-tadilat',
  '/istanbul-ev-tadilati-yapana-firmalar': '/hizmetler/anahtar-teslim/ev-tadilat',
  '/komple-daire-tadilati': '/hizmetler/anahtar-teslim/ev-tadilat',
  '/komple-ev-tadilat-asamalari-nelerdir': '/hizmetler/anahtar-teslim/ev-tadilat',
  '/komple-ev-tadilati': '/hizmetler/anahtar-teslim/ev-tadilat',
  '/komple-ev-tadilati-nasil-yapilir': '/hizmetler/anahtar-teslim/ev-tadilat',
  '/komple-ev-tadilati-ve-insaatinda-kullanilan-malzemeler': '/hizmetler/anahtar-teslim/ev-tadilat',
  '/profesyonel-ev-tadilat': '/hizmetler/anahtar-teslim/ev-tadilat',
  '/sifirdan-ev-tadilati': '/hizmetler/anahtar-teslim/ev-tadilat',
  '/ucretsiz-kesif-ve-anahtar-teslim-ev-tadilat': '/hizmetler/anahtar-teslim/ev-tadilat',

  // Fiyat, maliyet, bütçe ve hesaplama sayfaları — bilgi amaçlı niyet.
  // → /blog/ev-yenileme-maliyeti-2025  (20)
  '/anadolu-yakasi-ev-tadilat-fiyatlari-2022': '/blog/ev-yenileme-maliyeti-2025',
  '/anahtar-teslim-ev-tadilat-butcesi': '/blog/ev-yenileme-maliyeti-2025',
  '/anahtar-teslim-ev-tadilat-fiyat-2021': '/blog/ev-yenileme-maliyeti-2025',
  '/anahtar-teslim-tadilat-fiyati-hesapla': '/blog/ev-yenileme-maliyeti-2025',
  '/anasayfa/blog/ev-tadilat-fiyatlari': '/blog/ev-yenileme-maliyeti-2025',
  '/detayli-ev-tadilat-uygulama-fiyatlari-2022': '/blog/ev-yenileme-maliyeti-2025',
  '/en-uygun-fiyatli-ev-tadilatlari-istanbul': '/blog/ev-yenileme-maliyeti-2025',
  '/ev-tadilat-fiyati-hesapla': '/blog/ev-yenileme-maliyeti-2025',
  '/ev-tadilat-fiyatlari': '/blog/ev-yenileme-maliyeti-2025',
  '/ev-tadilat-maliyeti-hesaplama': '/blog/ev-yenileme-maliyeti-2025',
  '/ev-tadilat-maliyeti-hesaplama-2022': '/blog/ev-yenileme-maliyeti-2025',
  '/guncel-ev-tadilat-fiyatlari-2022': '/blog/ev-yenileme-maliyeti-2025',
  '/guncel-ev-tadilat-maliyeti-nasil-hesaplanir': '/blog/ev-yenileme-maliyeti-2025',
  '/her-butceye-uygun-ev-tadilati': '/blog/ev-yenileme-maliyeti-2025',
  '/konut-tadilat-kredisi-hesaplama-2022': '/blog/ev-yenileme-maliyeti-2025',
  '/modern-teslim-ev-tadilat-fiyati-hesaplama': '/blog/ev-yenileme-maliyeti-2025',
  '/rustik-ev-tadilat-fiyati-hesaplama': '/blog/ev-yenileme-maliyeti-2025',
  '/tadilat-fiyatlari-2022': '/blog/ev-yenileme-maliyeti-2025',
  '/tadilat-ve-dekorasyon-fiyatlari': '/blog/ev-yenileme-maliyeti-2025',
  '/uygun-maliyetli-ev-tadilat': '/blog/ev-yenileme-maliyeti-2025',

  // Genel dekorasyon ve iç mimarlık sayfaları.
  // → /hizmetler  (20)
  '/anasayfa/blog/her-ihtiyaca-yonelik-tasarim-anlayisi': '/hizmetler',
  '/dekorasyon-icin-harekete-gecmenin-tam-sirasi': '/hizmetler',
  '/dekorasyon-ve-tadilat': '/hizmetler',
  '/dekorasyonda-renk-uyumu-nasil-yapilir': '/hizmetler',
  '/ev-dekorasyon-dizayni': '/hizmetler',
  '/ev-ic-mekan-tasarimi': '/hizmetler',
  '/evi-kucuk-olanlara-dekorasyon-fikirleri': '/hizmetler',
  '/her-ihtiyaca-yonelik-tasarim-anlayisi': '/hizmetler',
  '/hizmetlerimiz': '/hizmetler',
  '/ic-mekan-dekorasyonu': '/hizmetler',
  '/ic-mimarlik-dekorasyon': '/hizmetler',
  '/ic-mimarlik-firmalari': '/hizmetler',
  '/ic-mimarlik-firmalarinin-calisma-sekli': '/hizmetler',
  '/ic-mimarlik-istanbul': '/hizmetler',
  '/istanbul-dekorasyon-firmalari': '/hizmetler',
  '/istanbul-mimarlik-firmasi': '/hizmetler',
  '/istanbul-ozel-dekorasyon-ve-tadilat': '/hizmetler',
  '/master-ic-mimarlik-olarak-hizmetlerimiz-nelerdir': '/hizmetler',
  '/modern-ic-mimarlik-ornekleri': '/hizmetler',
  '/tadilat-ve-dekorasyon': '/hizmetler',

  // → /hizmetler/anahtar-teslim/ofis-tadilat  (12)
  '/cakir-hukuk': '/hizmetler/anahtar-teslim/ofis-tadilat',
  '/ertan-bey-ofis': '/hizmetler/anahtar-teslim/ofis-tadilat',
  '/gulcan-hanim-ofis': '/hizmetler/anahtar-teslim/ofis-tadilat',
  '/kadikoy-anahtar-teslimi-ofis-ev-daire-dekorasyonu-komple-mutfak-banyo-tadilati': '/hizmetler/anahtar-teslim/ofis-tadilat',
  '/kadikoy-avukatlik-burosu': '/hizmetler/anahtar-teslim/ofis-tadilat',
  '/mimarlik-ofisleri-istanbul': '/hizmetler/anahtar-teslim/ofis-tadilat',
  '/modern-ofis-dekorasyonu-fikirleri': '/hizmetler/anahtar-teslim/ofis-tadilat',
  '/ofis-dekorasyonu-ve-tasarimi': '/hizmetler/anahtar-teslim/ofis-tadilat',
  '/ofis-tadilat-fiyati-hesapla': '/hizmetler/anahtar-teslim/ofis-tadilat',
  '/ofis-ve-is-yeri-tasarimi:': '/hizmetler/anahtar-teslim/ofis-tadilat',
  '/tuzla-ofis': '/hizmetler/anahtar-teslim/ofis-tadilat',
  '/zeyport-ofis': '/hizmetler/anahtar-teslim/ofis-tadilat',

  // → /hizmetler/anahtar-teslim/otel-tadilat  (12)
  '/anasayfa/blog/otel-ve-hotel-dekorasyonlari': '/hizmetler/anahtar-teslim/otel-tadilat',
  '/anasayfa/projeler/otel-ve-hotel-dekorasyonlari': '/hizmetler/anahtar-teslim/otel-tadilat',
  '/antalya-otel': '/hizmetler/anahtar-teslim/otel-tadilat',
  '/antalya-otel-2': '/hizmetler/anahtar-teslim/otel-tadilat',
  '/antalya-otel-dekorasyon-tadilat': '/hizmetler/anahtar-teslim/otel-tadilat',
  '/elazig-doubletree': '/hizmetler/anahtar-teslim/otel-tadilat',
  '/hilton-proje': '/hizmetler/anahtar-teslim/otel-tadilat',
  '/luks-otel-dekorasyonlari': '/hizmetler/anahtar-teslim/otel-tadilat',
  '/otel-dekorasyonu': '/hizmetler/anahtar-teslim/otel-tadilat',
  '/otel-lobisi-dekorasyonlari': '/hizmetler/anahtar-teslim/otel-tadilat',
  '/otel-tadilat-fiyat-hesaplama': '/hizmetler/anahtar-teslim/otel-tadilat',
  '/otel-ve-hotel-dekorasyonlari': '/hizmetler/anahtar-teslim/otel-tadilat',

  // → /hizmetler/3d-tasarim  (8)
  '/3d-modelleme': '/hizmetler/3d-tasarim',
  '/3d-projeler': '/hizmetler/3d-tasarim',
  '/anahtar-teslim-ev-tadilat-projelendirme': '/hizmetler/3d-tasarim',
  '/anahtar-teslim-ev-tadilat-ve-mimari-projelendirme': '/hizmetler/3d-tasarim',
  '/anahtar-teslim-projelendirme': '/hizmetler/3d-tasarim',
  '/ev-tadilat-ve-projelendirme-maliyeti': '/hizmetler/3d-tasarim',
  '/ucretsiz-3d-tadilat-projelendirme': '/hizmetler/3d-tasarim',
  '/villa-tadilat-ve-projelendirme-istanbul': '/hizmetler/3d-tasarim',

  // → /istanbul/kadikoy-ic-mimarlik  (7)
  '/caddebostan-daire': '/istanbul/kadikoy-ic-mimarlik',
  '/caddebostan-tadilat-projesi': '/istanbul/kadikoy-ic-mimarlik',
  '/kadikoy-banyo-tadilati': '/istanbul/kadikoy-ic-mimarlik',
  '/kadikoy-brol': '/istanbul/kadikoy-ic-mimarlik',
  '/kozyatagi-daire': '/istanbul/kadikoy-ic-mimarlik',
  '/saskinbakkal-daire': '/istanbul/kadikoy-ic-mimarlik',
  '/suadiye-tadilat-projesi': '/istanbul/kadikoy-ic-mimarlik',

  // → /istanbul/umraniye-ic-mimarlik  (7)
  '/ayhan-bey-umraniye': '/istanbul/umraniye-ic-mimarlik',
  '/burak-umraniye': '/istanbul/umraniye-ic-mimarlik',
  '/cakmak-proje': '/istanbul/umraniye-ic-mimarlik',
  '/emin-bey-umraniye': '/istanbul/umraniye-ic-mimarlik',
  '/umraniye-daire-mutfak': '/istanbul/umraniye-ic-mimarlik',
  '/yaman-evleri-umraniye': '/istanbul/umraniye-ic-mimarlik',
  '/yaman-evleri-umraniye-banyo': '/istanbul/umraniye-ic-mimarlik',

  // → /hakkimizda  (6)
  '/anasayfa/blog/beklentiye-uygun-hizmet-ve-sektor-analizi': '/hakkimizda',
  '/anasayfa/blog/profesyonel-ekip': '/hakkimizda',
  '/beklentiye-uygun-hizmet-ve-sektor-analizi': '/hakkimizda',
  '/kurumsal': '/hakkimizda',
  '/kurumsal-2': '/hakkimizda',
  '/profesyonel-ekip': '/hakkimizda',

  // → /hizmetler/anahtar-teslim/magaza-dukkan-tadilat  (6)
  '/al-nalbur': '/hizmetler/anahtar-teslim/magaza-dukkan-tadilat',
  '/ankara-mobilya': '/hizmetler/anahtar-teslim/magaza-dukkan-tadilat',
  '/ant-avm': '/hizmetler/anahtar-teslim/magaza-dukkan-tadilat',
  '/isik-gaz-showroom': '/hizmetler/anahtar-teslim/magaza-dukkan-tadilat',
  '/perakende-magaza-tasarimi:': '/hizmetler/anahtar-teslim/magaza-dukkan-tadilat',
  '/umraniye-giyim-magaza': '/hizmetler/anahtar-teslim/magaza-dukkan-tadilat',

  // → /hizmetler/banyo-yenileme  (6)
  '/anasayfa/blog/banyo-tadilati': '/hizmetler/banyo-yenileme',
  '/banyo-aydinlatmasi-icin-oneriler': '/hizmetler/banyo-yenileme',
  '/banyo-tadilati': '/hizmetler/banyo-yenileme',
  '/banyolara-siklik-katmak-icin-oneriler': '/hizmetler/banyo-yenileme',
  '/banyosunu-yenilemek-isteyenlere-oneriler': '/hizmetler/banyo-yenileme',
  '/komple-banyo-tadilati-dekorasyon': '/hizmetler/banyo-yenileme',

  // → /hizmetler/mutfak-yenileme  (6)
  '/anasayfa/blog/mutfak-tadilat-ve-hazir-mutfak-uygulamalari': '/hizmetler/mutfak-yenileme',
  '/bahar-icin-renkli-mutfak-dekorasyon': '/hizmetler/mutfak-yenileme',
  '/duzenli-mutfak-icin-tuyolar': '/hizmetler/mutfak-yenileme',
  '/en-guzel-mutfak-perdeleri-modelleri': '/hizmetler/mutfak-yenileme',
  '/mutfak-proje': '/hizmetler/mutfak-yenileme',
  '/mutfak-tadilat-ve-hazir-mutfak-uygulamalari': '/hizmetler/mutfak-yenileme',

  // Eski rehber yazıları; birebir karşılığı olmayanlar blog hub’ına.
  // → /blog  (5)
  '/duvarlarinizi-yeniliyoruz': '/blog',
  '/eskiyen-yapi-sorunlari': '/blog',
  '/evde-tadilat-isleri-yaparken-hangi-sirayi-izlemeliyiz': '/blog',
  '/evinizin-konforunu-ve-emlak-degerini-artirin': '/blog',
  '/hayallerinizdeki-evler-tadilat-sureci': '/blog',

  // → /istanbul/beykoz-ic-mimarlik  (4)
  '/beykoz-anahtar-teslim-ev-villa-tadilat': '/istanbul/beykoz-ic-mimarlik',
  '/beykoz-pasabahce-villa': '/istanbul/beykoz-ic-mimarlik',
  '/beykoz-villa': '/istanbul/beykoz-ic-mimarlik',
  '/pasabahce-villa': '/istanbul/beykoz-ic-mimarlik',

  // → /hizmetler/anahtar-teslim  (3)
  '/anahtar-teslim-dekorasyon': '/hizmetler/anahtar-teslim',
  '/anahtar-teslim-tadilat': '/hizmetler/anahtar-teslim',
  '/hizmetler/anahtar-teslim-ev-yenileme': '/hizmetler/anahtar-teslim',

  // → /hizmetler/anahtar-teslim/klinik-muayenehane  (3)
  '/hastane-tadilati': '/hizmetler/anahtar-teslim/klinik-muayenehane',
  '/nisantasi-estetik-merkezi': '/hizmetler/anahtar-teslim/klinik-muayenehane',
  '/saglik-ve-egitim-kurumlari:': '/hizmetler/anahtar-teslim/klinik-muayenehane',

  // → /hizmetler/cocuk-odasi-tasarimi  (3)
  '/bebek-odasi-nasil-hazirlanmali': '/hizmetler/cocuk-odasi-tasarimi',
  '/cocuk-odasi-hali-modelleri': '/hizmetler/cocuk-odasi-tasarimi',
  '/genc-odasi-dekorasyon-fikirleri': '/hizmetler/cocuk-odasi-tasarimi',

  // → /istanbul/atasehir-ic-mimarlik  (3)
  '/atasehir-beyaz-konutlar-daire': '/istanbul/atasehir-ic-mimarlik',
  '/atasehir-ev-tadilat': '/istanbul/atasehir-ic-mimarlik',
  '/atasehir-kolej': '/istanbul/atasehir-ic-mimarlik',

  // → /istanbul/bakirkoy-ic-mimarlik  (3)
  '/atakoy-daire': '/istanbul/bakirkoy-ic-mimarlik',
  '/bakirkoy-daire': '/istanbul/bakirkoy-ic-mimarlik',
  '/bakirkoy-tadilat-projesi': '/istanbul/bakirkoy-ic-mimarlik',

  // → /istanbul/basaksehir-ic-mimarlik  (3)
  '/bahcesehir-dublex-genc-kiz-odasi-gulden-hanim': '/istanbul/basaksehir-ic-mimarlik',
  '/basaksehir-villa': '/istanbul/basaksehir-ic-mimarlik',
  '/yalcin-bey-bahcesehir-dublex': '/istanbul/basaksehir-ic-mimarlik',

  // → /istanbul/maltepe-ic-mimarlik  (3)
  '/kucuk-yali': '/istanbul/maltepe-ic-mimarlik',
  '/maltepe-aydinevler-dublex': '/istanbul/maltepe-ic-mimarlik',
  '/maltepe-daire': '/istanbul/maltepe-ic-mimarlik',

  // → /hizmetler/anahtar-teslim/kuafor-guzellik-salonu  (2)
  '/kuafor-salonu': '/hizmetler/anahtar-teslim/kuafor-guzellik-salonu',
  '/nisantasi-guzellik-merkezi': '/hizmetler/anahtar-teslim/kuafor-guzellik-salonu',

  // → /hizmetler/anahtar-teslim/spor-salonu  (2)
  '/dans-okulu': '/hizmetler/anahtar-teslim/spor-salonu',
  '/spor-salonu': '/hizmetler/anahtar-teslim/spor-salonu',

  // → /istanbul/acibadem-ic-mimarlik  (2)
  '/acibadem-brol': '/istanbul/acibadem-ic-mimarlik',
  '/kosu-yolu': '/istanbul/acibadem-ic-mimarlik',

  // → /istanbul/kartal-ic-mimarlik  (2)
  '/kartal-tadilat-projesi': '/istanbul/kartal-ic-mimarlik',
  '/yakacik': '/istanbul/kartal-ic-mimarlik',

  // → /hizmetler/anahtar-teslim/:path*  (1)
  '/hizmetler/anahtar-teslim-ev-yenileme/:path*': '/hizmetler/anahtar-teslim/:path*',

  // → /iletisim  (1)
  '/contact': '/iletisim',

  // → /istanbul/bagcilar-ic-mimarlik  (1)
  '/nurol-park-daire': '/istanbul/bagcilar-ic-mimarlik',

  // → /istanbul/besiktas-ic-mimarlik  (1)
  '/arnavutkoy-villa': '/istanbul/besiktas-ic-mimarlik',

  // → /istanbul/beylikduzu-ic-mimarlik  (1)
  '/yakuplu-villa': '/istanbul/beylikduzu-ic-mimarlik',

  // → /istanbul/beyoglu-ic-mimarlik  (1)
  '/beyoglu-airbnb': '/istanbul/beyoglu-ic-mimarlik',

  // → /istanbul/buyukcekmece-ic-mimarlik  (1)
  '/hadim-koy': '/istanbul/buyukcekmece-ic-mimarlik',

  // → /istanbul/cekmekoy-ic-mimarlik  (1)
  '/alemdag-dublex-emir-bey': '/istanbul/cekmekoy-ic-mimarlik',

  // → /istanbul/nisantasi-ic-mimarlik  (1)
  '/nisantasi-daire': '/istanbul/nisantasi-ic-mimarlik',

  // → /istanbul/sariyer-ic-mimarlik  (1)
  '/sariyer-villa': '/istanbul/sariyer-ic-mimarlik',

  // → /istanbul/sisli-ic-mimarlik  (1)
  '/mecidiyekoy-dubleks-tadilat': '/istanbul/sisli-ic-mimarlik',

  // → /istanbul/zekeriyakoy-ic-mimarlik  (1)
  '/kemerburgaz': '/istanbul/zekeriyakoy-ic-mimarlik',

  // → /istanbul/zeytinburnu-ic-mimarlik  (1)
  '/zeytinburnu-tadilat-projesi': '/istanbul/zeytinburnu-ic-mimarlik',
};
