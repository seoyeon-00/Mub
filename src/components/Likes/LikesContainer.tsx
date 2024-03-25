"use client";

import { useUser } from "@/hooks/useUser";
import { getMovieById } from "@/services/movie";
import { useEffect, useState } from "react";
import MovieCard from "../Common/MovieCard";
import { Movie } from "@/types/movie";

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
    <div className="px-16 pt-[50px]">
      <div className="text-xl font-semibold mb-5">좋아요 영화</div>
      <div className="flex flex-wrap gap-5">
        {data &&
          data?.map((item, index) => (
            <div key={`movie-${index}`} className="w-[20%]">
              <MovieCard movie={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default LikesContainer;
