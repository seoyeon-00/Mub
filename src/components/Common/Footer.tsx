import TextBar from "./TextBar";

const Footer = () => {
  return (
    <div className="text-fontGray py-5 text-sm leading-6">
      <ul>
        <li className="flex gap-4 items-center">
          <span className="font-semibold">MUB</span>
          <TextBar />
          <span className="">대표이사 : 김서연</span>
        </li>
        <li className="flex gap-4 items-center">
          <div className="flex gap-2">
            <span>주소</span>
            <span>서울특별시 용산구 영화로123 영화빌딩 14</span>
          </div>
          <TextBar />
          <div className="flex gap-2">
            <span>고객센터</span>
            <span>1000-1234 (평일 09시 ~ 17시)</span>
          </div>
        </li>
        <li className="flex gap-4 items-center">
          <div className="flex gap-2">
            <span>사업자등록번호</span>
            <span>123-45-67890</span>
          </div>
          <TextBar />
          <div className="flex gap-2">
            <span>포트폴리오</span>
            <span>웹페이지 MUB은 포트폴리오로 제작된 페이지입니다.</span>
          </div>
        </li>
      </ul>
      <p className="mt-4">Copyright(c)2024 MUB All rights reserved.</p>
    </div>
  );
};

export default Footer;
