"use client";

import { useState } from "react";
import SearchInput from "../Common/SearchInput";
import SearchList from "./SearchList";
import { getSearchMovie } from "@/services/movie";

const SearchContainer = () => {
  const [value, setValue] = useState<string>("");
  const [searchData, setSearchData] = useState<any>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const searchHandler = async () => {
    try {
      const fetchData = await getSearchMovie(value, 1);
      console.log(fetchData);
      setSearchValue(value);
      setSearchData(fetchData);
    } catch (error) {
      console.error("Error fetching search:", error);
    }
  };

  return (
    <>
      <div className="relative w-full h-[430px] overflow-hidden">
        <img
          src="/images/starwars.jpg"
          className="w-full opacity-35"
          alt="search-background"
        />
        <div className="w-full h-[400px] absolute bottom-0 bg-gradient-to-t from-bg from-0% to-transparent to-100%"></div>
        <div className="absolute top-[120px] left-0 right-0 text-center z-10">
          <h1 className="font-bold text-3xl">SEARCH</h1>
          <div className="mt-5 w-[70%] mx-auto">
            <SearchInput onChange={onChange} searchHandler={searchHandler} />
          </div>
        </div>
      </div>
      <SearchList data={searchData.results} search={searchValue} />
    </>
  );
};

export default SearchContainer;
