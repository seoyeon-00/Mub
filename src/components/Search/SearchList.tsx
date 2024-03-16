import { Movie } from "@/types/movie";
import MovieCard from "../Common/MovieCard";
import MovieListComponent from "../Common/MovieListComponent";

type SearchListProps = {
  data: Movie[];
  search: string;
};

const SearchList = ({ data, search }: SearchListProps) => {
  return (
    <div className="px-16">
      <h1 className="font-medium text-2xl">검색 결과</h1>
      {search !== "" ? (
        <div className="text-fontGray mt-1">
          <span className="text-font font-semibold">{search}</span>에 대한 검색
          결과 입니다.
        </div>
      ) : null}
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

export default SearchList;
