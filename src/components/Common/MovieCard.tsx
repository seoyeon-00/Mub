import { Movie } from "@/types/movie";
import Image from "next/image";
import Link from "next/link";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div>
      <Link href={`/movie/${movie.id}`}>
        <div className="relative w-[full] h-[290px] rounded overflow-hidden">
          {movie.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              fill
              alt={movie.title}
            />
          ) : (
            <Image src="/images/preview.png" fill alt={movie.title} />
          )}
        </div>
        <div className="mt-2 font-medium text-fontSub">{movie.title}</div>
      </Link>
    </div>
  );
};

export default MovieCard;
