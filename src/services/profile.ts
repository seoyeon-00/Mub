import { supabase } from "@/libs/supabase/supabase";

export const getAllProfile = async (): Promise<any> => {
  const { data: profile_images, error } = await supabase
    .from("profile_images")
    .select("*");

  if (error) console.log("error", error);

  return profile_images || [];
};
