"use client";

import { Movie } from "@/types/movie";
import MovieCard from "../Common/MovieCard";
import SwiperComponent from "../Common/SwiperComponent";

type SimilarMovieProps = {
  movie: Movie[] | null;
};

const SimilarMovieList = ({ movie }: SimilarMovieProps) => {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold mb-3">비슷한 콘텐츠</h2>
      <SwiperComponent>
        {movie &&
          movie?.map((item, index) => (
            <div key={`movie-${index}`}>
              <MovieCard movie={item} />
            </div>
          ))}
      </SwiperComponent>
    </div>
  );
};

export default SimilarMovieList;
