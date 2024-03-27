import MovieDetail from "@/components/Movie/MovieDetail";
import SimilarMovieList from "@/components/Movie/SimilarMovieList";
import {
  getMovieById,
  getMovieSimilarById,
  getMovieVideoById,
} from "@/services/movie";

interface MovieProps {
  params: {
    movieId: number;
  };
}

const Movie: React.FC<MovieProps> = async ({ params }) => {
  const [video, data, similarMovie] = await Promise.all([
    getMovieVideoById(params.movieId),
    getMovieById(params.movieId),
    getMovieSimilarById(params.movieId),
  ]);

  return (
    <div className="px-16">
      <MovieDetail
        id={params.movieId}
        movieData={data}
        video={video.results[0]}
      />
      <SimilarMovieList movie={similarMovie.results} />
    </div>
  );
};

export default Movie;
