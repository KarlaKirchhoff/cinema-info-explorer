export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetais {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: MovieDetails_Genres[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: MovieDetails_Production_companies[];
  production_countries: MovieDetails_Production_countries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: MovieDetails_Spoken_languages[];
  status: string;
  tagline: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number
}

interface MovieDetails_Production_companies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string
}

interface MovieDetails_Genres {
  id: number;
  name: string
}

interface MovieDetails_Production_countries {
  iso_3166_1: string;
  name: string
}

interface MovieDetails_Spoken_languages {
  english_name: string;
  iso_639_1: string;
  name: string
}

export interface MovieReview {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: number
  },
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string
}

export interface MovieCast {
  adult: boolean,
  gender: number,
  id: number,
  known_for_department: string,
  name: string,
  original_name: string,
  popularity: number,
  profile_path: string,
  cast_id: number,
  character: string,
  credit_id: string,
  order: number
}