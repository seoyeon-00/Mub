import Image from "next/image";

const MainImage = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden bg-bg rounded-full">
      <Image
        src="/images/mainTemporary.jpg"
        width={900}
        height={400}
        alt={"logo"}
        placeholder="empty"
        className="scale-150 translate-y-[60px]"
      />
      <div className="absolute w-[400px] top-[70px] left-[620px] z-10">
        <Image
          src="/images/hobbit-logo.webp"
          width={270}
          height={600}
          alt={"logo"}
          placeholder="empty"
        />
        <div className="flex mt-4 gap-3 items-center">
          <div className="text-sub font-semibold">뭅 스페셜</div>
          <div className="border-solid border-[1px] border-font rounded-full text-xs px-2 py-1">
            판타지
          </div>
          <div className="border-solid border-[1px] border-font rounded-full text-xs px-2 py-1">
            2012
          </div>
        </div>
        <div className="mt-3 text-fontSub text-[15px]">
          호빗족 ‘빌보 배긴스’는 어느 날 갑자기 찾아온 회색의 마법사
          ‘간달프’로부터 뜻밖의 제안을 받는다. 오래 전 난쟁이족의 영토였지만
          무시무시한 용 ‘스마우그’에게 빼앗겨 지금은 황무지로 변한 동쪽의
          ‘외로운 산’ 에레보르 왕국을 되찾기 위해 함께 떠나자는 것.
        </div>
      </div>
      <div className="w-[60%] xl:w-[90%] h-[400px] absolute top-0 right-0 bg-gradient-to-l from-bg from-10% via-bg via-40% to-transparent to-100%"></div>
    </div>
  );
};

export default MainImage;
