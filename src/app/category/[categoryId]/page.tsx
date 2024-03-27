import CategoryContainer from "@/components/Category/CategoryContainer";
import { getCategoryById } from "@/services/category";

interface CategoryProps {
  params: {
    categoryId: string;
  };
}

const Category = async ({ params }: CategoryProps) => {
  const category = await getCategoryById(params.categoryId);

  return (
    <div className="px-16 pt-[100px]">
      <CategoryContainer
        categoryName={category[0].name}
        categoryData={category[0].movie}
      />
    </div>
  );
};

export default Category;
