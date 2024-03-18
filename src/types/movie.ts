// export interface Movie {
//   adult: boolean;
//   backdrop_path: string;
//   genre_ids: number[];
//   id: number;
//   original_language: string;
//   original_title: string;
//   overview: string;
//   popularity: number;
//   poster_path: string;
//   release_date: string;
//   title: string;
//   video: boolean;
//   vote_average: number;
//   vote_count: number;
// }

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: string | null;
  budget?: number;
  genre_ids?: number[];
  genres?: {
    id: number;
    name: string;
  }[];
  hompage?: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  runtime?: number;
  tagline?: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieVideo {
  id: string;
  key: string;
  name: string;
  official: boolean;
}
