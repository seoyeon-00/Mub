"use client";

import { useUser } from "@/hooks/useUser";
import { getMovieById } from "@/services/movie";
import { useEffect, useState } from "react";
import MovieCard from "../Common/MovieCard";
import { Movie } from "@/types/movie";
import MovieListComponent from "../Common/MovieListComponent";

const LikesContainer = () => {
  const user = useUser();
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => {
    if (user.user.likes) {
      const fetchData = async () => {
        const promises = user.user.likes?.map(async (item) => {
          const result = await getMovieById(Number(item));
          return {
            id: result.id,
            poster_path: result.poster_path,
            title: result.title,
          };
        });
        const movies = await Promise.all(promises ?? []);
        setData(movies);
      };
      fetchData();
    }
  }, [user]);

  return (
    <div className="px-16 pt-[100px]">
      <div className="text-xl font-semibold">좋아요 영화</div>
      <div>
        {data ? (
          <MovieListComponent>
            {data.map((item, index) => (
              <div key={`movie-${index}`}>
                <MovieCard movie={item} />
              </div>
            ))}
          </MovieListComponent>
        ) : null}
      </div>
    </div>
  );
};

export default LikesContainer;
