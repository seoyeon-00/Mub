import { supabase } from "@/libs/supabase/supabase";

export const getUserById = async (uuid: string): Promise<any> => {
  const { data: user, error } = await supabase
    .from("user")
    .select(
      `*,
  profile_image (profile_images: id, image_url)
`
    )
    .eq("id", uuid);

  if (error) console.log("error", error);

  return user;
};
