import Image from "next/image";

const MovieCard = () => {
  return (
    <div className="">
      <div className="relative w-[200px] h-[300px]">
        <Image src="/images/poster.jpg" fill alt="영화포스터" />
      </div>
      <div className="mt-2 font-medium">듄 파트 2</div>
    </div>
  );
};

export default MovieCard;
