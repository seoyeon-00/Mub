"use client";

import { useUser } from "@/hooks/useUser";
import Button from "../Common/Button";
import { useUserLogout } from "@/services/useAuth";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import useProfileModal from "@/stores/useProfileModal";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";

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
          <div className="w-[100px]">
            {user.user.profile.image_url ? (
              <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                <Image
                  src={user.user.profile.image_url}
                  width={100}
                  height={100}
                  alt={"User"}
                />
              </div>
            ) : (
              <Skeleton variant="circular" width={100} height={100} />
            )}
          </div>
          <div className="px-10 w-[50%]">
            {user.user.email ? (
              <>
                <div className=" text-fontGray">{user.user.email}</div>
                <div className="font-medium text-lg">{user.user.nickname}</div>
              </>
            ) : (
              <Skeleton variant="rounded" width={210} height={60} />
            )}
          </div>
        </div>
        <div className="flex flex-col w-[10%] gap-2">
          <Button onClick={() => modalOpen()}>프로필 변경</Button>
          <Button onClick={logoutHandler}>로그아웃</Button>
        </div>
      </div>
    </>
  );
};

export default Profile;
