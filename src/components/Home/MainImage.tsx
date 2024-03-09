import Image from "next/image";

const MainImage = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden bg-bg">
      <Image
        src="/images/mainTemporary.jpg"
        width={900}
        height={400}
        alt={"logo"}
        placeholder="empty"
        className="scale-150 translate-y-[60px]"
      />
      <div className="w-[60%] xl:w-[90%] h-[400px] absolute top-0 right-0 bg-gradient-to-l from-bg from-10% via-bg via-40% to-transparent to-100%"></div>
    </div>
  );
};

export default MainImage;
