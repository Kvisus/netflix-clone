const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://kinopoiskapiunofficial.tech/";


const requests = {
  fetch_keyword: `${BASE_URL}/api/v2.1/search-by-keyword?keyword=shrek&page=1`,
  fetch_top100: `${BASE_URL}/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1`,
  fetch_top250: `${BASE_URL}/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1`,
  fetch_triller: `${BASE_URL}/api/v2.2/films?genres=1&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1`,
  fetch_love: `${BASE_URL}/api/v2.2/films?genres=4&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1`,
  fetch_fantasy: `${BASE_URL}/api/v2.2/films?genres=6&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1`,
  fetch_noire: `${BASE_URL}/api/v2.2/films?genres=9&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1`,
  fetch_western: `${BASE_URL}/api/v2.2/films?genres=10&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1`,
  fetch_pewpow: `${BASE_URL}/api/v2.2/films?genres=11&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1`,
};

export default requests;
