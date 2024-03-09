"use client";

import Image from "next/image";

const RecommendCategory = () => {
  return (
    <div className="p-[30px]">
      <ul>
        <li className="bg-subBg w-[230px] h-[90px] rounded-md flex items-center justify-center gap-1">
          <span>
            <Image src="/images/logo.png" width={55} height={30} alt={"logo"} />
          </span>
          <span>추천 카테고리</span>
        </li>
        <li></li>
      </ul>
    </div>
  );
};

export default RecommendCategory;
