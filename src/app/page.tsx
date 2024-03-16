import MainImage from "@/components/Home/MainImage";
import RecommendCategory from "@/components/Home/RecommendCategory";
import MovieList from "@/components/Home/MovieList";
import { getCategory } from "@/services/category";
import {
  getNowPlayingMovie,
  getMovieTopRated,
  getPopularMovie,
} from "@/services/movie";

export default async function Home() {
  const [category, movieTop, movieTopRated, moviePopular] = await Promise.all([
    getCategory(),
    getNowPlayingMovie(1),
    getMovieTopRated(1),
    getPopularMovie(1),
  ]);

  return (
    <div className="w-full px-16">
      <MainImage />
      <RecommendCategory category={category} />
      <MovieList title={"최신 개봉 TOP 10"} movie={movieTop.results} />
      <MovieList title={"최고의 명작 다시보기"} movie={movieTopRated.results} />
      <MovieList title={"현재 인기 최고 영화"} movie={moviePopular.results} />
    </div>
  );
}
