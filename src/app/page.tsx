import MainImage from "@/components/Home/MainImage";
import RecommendCategory from "@/components/Home/RecommendCategory";
import MovieList from "@/components/Home/MovieList";
import { getCategory } from "@/services/category";

export default async function Home() {
  const categies = await getCategory();

  return (
    <div className="w-full px-16">
      <MainImage />
      <RecommendCategory category={categies} />
      <MovieList title={"최신 개봉 TOP 10"} />
      <MovieList title={"현재 인기 최고 영화"} />
      <MovieList title={"현재 인기 최고 영화"} />
    </div>
  );
}
