import Image from "next/image";

type SearchInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchHandler: () => void;
};

const SearchInput = ({ onChange, searchHandler }: SearchInputProps) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        placeholder="검색어를 입력해주세요"
        className="w-full bg-[#ffffff] bg-opacity-60 rounded-full px-6 py-5 font-medium placeholder-[#525252] text-[#333] text-sm"
      />
      <button className="absolute top-5 right-6" onClick={searchHandler}>
        <Image
          src="/icon/search.png"
          width={20}
          height={20}
          alt={"Search"}
          className="brightness-[15%]"
        />
      </button>
    </div>
  );
};

export default SearchInput;
