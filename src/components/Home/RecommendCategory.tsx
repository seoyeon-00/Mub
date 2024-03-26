"use client";

import Image from "next/image";
import CategoryItem from "./CategoryItem";
import { Category } from "@/types/types";

type categoryProp = {
  category: Category[];
};

const RecommendCategory = ({ category }: categoryProp) => {
  return (
    <div className="py-[60px] px-[30px]">
      <ul className="flex gap-5">
        <li className="bg-subBg w-[230px] h-[100px] rounded-md flex items-center justify-center gap-1">
          <span>
            <Image src="/images/logo.png" width={55} height={30} alt={"logo"} />
          </span>
          <span>추천 카테고리</span>
        </li>
        <li className="flex w-[calc(100% - 230px)] gap-5">
          {category.map((item, index) => (
            <div key={`category-${index}`}>
              <CategoryItem name={item.name} imageUrl={item.imageUrl} />
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default RecommendCategory;
