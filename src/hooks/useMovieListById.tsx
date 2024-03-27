"use client";

import { getMovieById } from "@/services/movie";
import { Movie } from "@/types/movie";
import { useEffect, useState } from "react";

interface CategoryProps {
  categoryData: string[];
}

export const useMovieListById = ({ categoryData }: CategoryProps) => {
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => {
    if (categoryData) {
      const fetchData = async () => {
        const promises = categoryData?.map(async (item) => {
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
  }, [categoryData]);

  return data;
};
