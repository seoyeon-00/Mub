import MainImage from "@/components/Home/MainImage";
import RecommendCategory from "@/components/Home/RecommendCategory";
import MovieList from "@/components/Home/MovieList";

export default function Home() {
  return (
    <div className="w-full">
      <MainImage />
      <RecommendCategory />
      <MovieList title={"최신 개봉 TOP 10"} />
    </div>
  );
}
