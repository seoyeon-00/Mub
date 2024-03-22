"use client";

import { useUser } from "@/hooks/useUser";
import Button from "../Common/Button";
import { useUserLogout } from "@/services/useAuth";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import useProfileModal from "@/stores/useProfileModal";
import Image from "next/image";

const Profile = () => {
  const user = useUser();
  const router = useRouter();
  const { modalOpen } = useProfileModal();

  const logoutHandler = async () => {
    await useUserLogout();
    toast.success("로그아웃!");
    router.push("/");
  };

  return (
    <>
      <div className="flex bg-subBg p-10 justify-between rounded-md">
        <div className="flex">
          <div className="w-[100px] h-[100px] bg-transparent rounded-full overflow-hidden">
            <Image
              src={user.user.profile.image_url || ""}
              width={120}
              height={120}
              alt={"User"}
            />
          </div>
          <div className="px-10 w-[50%]">
            <div className=" text-fontGray">{user.user.email}</div>
            <div className="font-medium text-lg">{user.user.nickname}</div>
          </div>
        </div>
        <div className="flex flex-col w-[10%] gap-2">
          <Button text="프로필 변경" onClick={() => modalOpen()} />
          <Button text="로그아웃" onClick={logoutHandler} />
        </div>
      </div>
    </>
  );
};

export default Profile;
