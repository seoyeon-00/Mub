import SearchInput from "@/components/Common/SearchInput";
import SearchList from "@/components/Search/SearchList";

const Search = () => {
  return (
    <div>
      <div className="relative w-full h-[430px] overflow-hidden">
        <img
          src="/images/starwars.jpg"
          className="w-full"
          alt="search-background"
        />
        <div className="w-full h-[400px] absolute bottom-0 bg-gradient-to-t from-bg from-0% to-transparent to-100%"></div>
        <div className="absolute top-[120px] left-0 right-0 text-center z-10">
          <h1 className="font-bold text-3xl">SEARCH</h1>
          <div className="mt-5 w-[70%] mx-auto">
            <SearchInput />
          </div>
        </div>
      </div>
      <SearchList />
    </div>
  );
};

export default Search;
