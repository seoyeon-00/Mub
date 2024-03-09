import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <div className="relative w-full h-[400px] overflow-hidden bg-white">
        <Image
          src="/images/mainTemporary.jpg"
          width={900}
          height={400}
          alt={"logo"}
          placeholder="empty"
          className="scale-150 translate-y-[60px]"
        />
        <div className="w-[60%] xl:w-[80%] h-[400px] absolute top-0 right-0 bg-gradient-to-l from-bg from-10% via-bg via-65% to-transparent to-100%"></div>
      </div>
    </div>
  );
}
