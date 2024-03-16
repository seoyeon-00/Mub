import { Movie } from "@/types/movie";
import Image from "next/image";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="">
      <div className="relative w-[full] h-[290px]">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          fill
          alt={movie.title}
        />
      </div>
      <div className="mt-2 font-medium">{movie.title}</div>
    </div>
  );
};

export default MovieCard;
