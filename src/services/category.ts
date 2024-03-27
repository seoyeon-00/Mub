import { supabase } from "@/libs/supabase/supabase";

export const getCategory = async (): Promise<any> => {
  const { data: categories, error } = await supabase
    .from("categories")
    .select("*");

  if (error) console.log("error", error);

  return categories || [];
};

export const getCategoryById = async (id: string): Promise<any> => {
  const { data: categories, error } = await supabase
    .from("categories")
    .select("*")
    .eq("id", id);

  if (error) console.log("error", error);

  return categories || [];
};
