"use client";

import MovieCard from "@/components/Common/MovieCard";
import { Movie } from "@/types/movie";
import SwiperComponent from "../Common/SwiperComponent";

type MovieListProps = {
  title: string;
  movie?: Movie[];
};

const MovieList = ({ title, movie }: MovieListProps) => {
  return (
    <div className="w-full mb-[45px]">
      <div className="text-xl font-semibold text-white my-6">{title}</div>
      <div>
        <SwiperComponent>
          {movie &&
            movie?.map((item, index) => (
              <div key={`movie-${index}`}>
                <MovieCard movie={item} />
              </div>
            ))}
        </SwiperComponent>
      </div>
    </div>
  );
};

export default MovieList;
