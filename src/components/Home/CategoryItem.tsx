import Image from "next/image";

type CategoryItemProps = {
  name: string;
  imageUrl: string;
};

const CategoryItem = ({ name, imageUrl }: CategoryItemProps) => {
  return (
    <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden transition-all hover:-translate-y-1 hover:transition-all">
      <Image src={imageUrl} fill alt={name} className="brightness-[45%]" />
      <div className="absolute top-10 left-0 right-0 text-center z-10 font-semibold text-sm">
        {name}
      </div>
    </div>
  );
};

export default CategoryItem;
