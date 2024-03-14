import MovieCard from "@/components/Common/MovieCard";

type MovieListProps = {
  title: string;
};

const MovieList = ({ title }: MovieListProps) => {
  return (
    <div className="w-full mb-[45px]">
      <div className="text-xl font-semibold text-white my-6">{title}</div>
      <div>
        <MovieCard />
      </div>
    </div>
  );
};

export default MovieList;
