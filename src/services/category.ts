import { supabase } from "@/libs/supabase/supabase";

export const getCategory = async (): Promise<any> => {
  const { data: categories, error } = await supabase
    .from("categories")
    .select("*");

  if (error) console.log("error", error);

  return categories || ["오잉"];
};
