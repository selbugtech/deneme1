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

export async function fetchGoogleReviews(
  placeId: string,
  apiKey: string
): Promise<{ reviews: GoogleReview[]; rating: number; totalRatings: number }> {
  if (!apiKey || !placeId) {
    return { reviews: [], rating: 5.0, totalRatings: 0 };
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}&language=tr&reviews_sort=most_relevant`;

  try {
    const res = await fetch(url);
    if (!res.ok) return { reviews: [], rating: 5.0, totalRatings: 0 };
    const data = await res.json();
    if (data.status !== 'OK') return { reviews: [], rating: 5.0, totalRatings: 0 };
    return {
      reviews: data.result?.reviews ?? [],
      rating: data.result?.rating ?? 5.0,
      totalRatings: data.result?.user_ratings_total ?? 0,
    };
  } catch {
    return { reviews: [], rating: 5.0, totalRatings: 0 };
  }
}
