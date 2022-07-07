export interface Film {
  kinopoiskId: number;
  imdbId: string;
  nameRu: string;
  nameEn: null;
  nameOriginal: string;
  countries: {
    country: string;
  }[];
  genres: {
    genre: string;
  }[];
  ratingKinopoisk: number;
  ratingImdb: number;
  year: number;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
}
