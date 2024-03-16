import Image from "next/image";

const SearchInput = () => {
  return (
    <div className="relative">
      <input
        placeholder="검색어를 입력해주세요"
        className="w-full bg-[#ffffff] bg-opacity-50 rounded-full px-6 py-4 font-medium placeholder-[#333] text-[#242424]"
      />
      <button className="absolute top-4 right-6">
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
