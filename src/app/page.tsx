import MainImage from "@/components/Home/MainImage";
import RecommendCategory from "@/components/Home/RecommendCategory";
import MovieList from "@/components/Home/MovieList";

export default function Home() {
  return (
    <div className="w-full px-16">
      <MainImage />
      <RecommendCategory />
      <MovieList title={"최신 개봉 TOP 10"} />
      <MovieList title={"현재 인기 최고 영화"} />
      <MovieList title={"현재 인기 최고 영화"} />
    </div>
  );
}
