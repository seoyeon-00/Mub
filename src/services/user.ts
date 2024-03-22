import { supabase } from "@/libs/supabase/supabase";

export const getUserById = async (uuid: string): Promise<any> => {
  const { data: user, error } = await supabase
    .from("user")
    .select(`*,profile_image (profile_images: id, image_url)`)
    .eq("id", uuid);

  if (error) console.log("error", error);

  return user;
};

export const updateUserProfile = async (
  uuid: string,
  imageNum: string
): Promise<any> => {
  console.log(imageNum);
  const { data: user, error } = await supabase
    .from("user")
    .update({
      profile_image: imageNum,
    })
    .eq("id", uuid)
    .select();

  if (error) console.log("error", error);

  return user;
};
