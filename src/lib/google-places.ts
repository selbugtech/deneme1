export interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  author_url: string;
  profile_photo_url: string;
  relative_time_description?: string;
}

export interface PlaceDetails {
  reviews: GoogleReview[];
  rating: number;
  user_ratings_total: number;
}

// ── Sabitler ──────────────────────────────────────────────
const PLACE_ID = 'ChIJb_Ur-sbHyhQRBPqVbdRICcc';
const CACHE_TTL = 60 * 60 * 1000; // 1 saat

// ── In-memory cache (serverless warm instance'larda tekrar API'ye gitmez) ──
interface CachedResponse {
  data: { reviews: GoogleReview[]; rating: number; totalRatings: number };
  timestamp: number;
}
let cache: CachedResponse | null = null;

// ── Türkçe küfür / hakaret filtresi ──
const PROFANITY_LIST = [
  'amk', 'aq', 'amq', 'orospu', 'oruspu', 'piç', 'pic', 'siktir',
  'siktir', 'yarrak', 'yarak', 'göt', 'got', 'bok', 'sik', 'taşak',
  'tasak', 'pezevenk', 'gavat', 'kaltak', 'fahişe', 'fahise', 'ibne',
  'puşt', 'pust', 'gerizekalı', 'gerizekali', 'salak', 'aptal',
  'mal', 'dangalak', 'hıyar', 'hiyar', 'kodumun', 'ananı', 'anani',
  'bacını', 'bacini', 'hassiktir', 'lan', 'mq', 'mk',
];

function containsProfanity(text: string): boolean {
  const lower = text.toLocaleLowerCase('tr');
  return PROFANITY_LIST.some((word) => {
    const regex = new RegExp(`(?:^|\\s|[.,!?;:])${word}(?:$|\\s|[.,!?;:])`, 'i');
    return regex.test(lower);
  });
}

// ── API fetch (cached) ──
async function fetchGoogleReviews(
  apiKey: string
): Promise<{ reviews: GoogleReview[]; rating: number; totalRatings: number }> {
  // Cache kontrol
  if (cache && Date.now() - cache.timestamp < CACHE_TTL) {
    return cache.data;
  }

  if (!apiKey) {
    return { reviews: [], rating: 0, totalRatings: 0 };
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${apiKey}&language=tr&reviews_sort=most_relevant`;

  try {
    const res = await fetch(url);
    if (!res.ok) return { reviews: [], rating: 0, totalRatings: 0 };
    const data = await res.json();
    if (data.status !== 'OK') return { reviews: [], rating: 0, totalRatings: 0 };

    const result = {
      reviews: data.result?.reviews ?? [],
      rating: data.result?.rating ?? 0,
      totalRatings: data.result?.user_ratings_total ?? 0,
    };

    // Cache'e kaydet
    cache = { data: result, timestamp: Date.now() };
    return result;
  } catch {
    return { reviews: [], rating: 0, totalRatings: 0 };
  }
}

// ── Filtreleme — 125 karakter ile başlar, yeterli yorum bulamazsa 1'er 1'er düşürür ──
function filterReviews(reviews: GoogleReview[], minLength = 125): GoogleReview[] {
  return reviews.filter((r) => {
    if (r.rating < 4) return false;
    if (r.text.length < minLength) return false;
    if (containsProfanity(r.text)) return false;
    return true;
  });
}

function filterReviewsAdaptive(reviews: GoogleReview[], targetCount = 3): GoogleReview[] {
  const MIN_FLOOR = 30; // asla bu değerin altına düşme
  for (let minLen = 125; minLen >= MIN_FLOOR; minLen--) {
    const result = filterReviews(reviews, minLen);
    if (result.length >= targetCount) return result;
  }
  // hâlâ yetmezse kalan ne varsa dön
  return filterReviews(reviews, MIN_FLOOR);
}

// ── Rastgele seçim ──
function selectRandom(reviews: GoogleReview[], count: number): GoogleReview[] {
  if (reviews.length <= count) return [...reviews];
  const shuffled = [...reviews].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// ── Public: Görüntüleme için 3 rastgele filtreli yorum ──
export async function getReviewsForDisplay(): Promise<{
  reviews: GoogleReview[];
  rating: number;
  totalRatings: number;
}> {
  const apiKey = import.meta.env.GOOGLE_PLACES_API_KEY ?? '';
  const raw = await fetchGoogleReviews(apiKey);

  // 125 karakter ile başlar, 3 yorum bulamazsa 124, 123... diye iner
  const filtered = filterReviewsAdaptive(raw.reviews, 3);

  return {
    reviews: selectRandom(filtered, 3),
    rating: raw.rating,
    totalRatings: raw.totalRatings,
  };
}

// ── Public: Sadece aggregateRating (Layout.astro için) ──
export async function getAggregateRating(): Promise<{
  rating: number;
  totalRatings: number;
}> {
  const apiKey = import.meta.env.GOOGLE_PLACES_API_KEY ?? '';
  const raw = await fetchGoogleReviews(apiKey);
  return { rating: raw.rating, totalRatings: raw.totalRatings };
}
