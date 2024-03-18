import MovieDetail from "@/components/Movie/MovieDetail";

interface MovieProps {
  params: {
    movieId: number;
  };
}

const Movie: React.FC<MovieProps> = ({ params }) => {
  return (
    <>
      <MovieDetail id={params.movieId} />
    </>
  );
};

export default Movie;
