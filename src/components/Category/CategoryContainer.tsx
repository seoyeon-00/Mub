"use client";

import MovieCard from "../Common/MovieCard";
import MovieListComponent from "../Common/MovieListComponent";
import { useMovieListById } from "@/hooks/useMovieListById";

interface CategoryProps {
  categoryData: string[];
  categoryName: string;
}

const CategoryContainer: React.FC<CategoryProps> = ({
  categoryData,
  categoryName,
}) => {
  const data = useMovieListById({ categoryData });

  return (
    <div>
      <h2 className="text-2xl font-semibold">{categoryName}</h2>
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
  );
};

export default CategoryContainer;
