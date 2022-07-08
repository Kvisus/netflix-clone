export interface Film {
  kinopoiskId: number;
  imdbId: string | null;
  nameRu: string | null;
  nameEn: string | null;
  nameOriginal: string | null;
  countries: {
    country: string;
  }[];
  genres: {
    genre: string;
  }[];
  ratingKinopoisk: number|null;
  ratingImdb: number | null;
  year: number|null;
  type: string;
  posterUrl: string | StaticImport;
  posterUrlPreview: string | StaticImport;
}
