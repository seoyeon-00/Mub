"use client";

import { useUser } from "@/hooks/useUser";
import Button from "../Common/Button";

const Profile = () => {
  const user = useUser();
  console.log(user);

  return (
    <>
      <div className="flex bg-subBg p-10 justify-between rounded-md">
        <div className="flex">
          <div className="w-[100px] h-[100px] bg-point rounded-full"></div>
          <div className="px-10 w-[50%]">
            <div className=" text-fontGray">{user.user.email}</div>
            <div className="font-medium text-lg">{user.user.nickname}</div>
          </div>
        </div>
        <div className="flex flex-col w-[10%] gap-2">
          <Button text="프로필 변경" onClick={() => {}} />
          <Button text="로그아웃" onClick={() => {}} />
        </div>
      </div>
    </>
  );
};

export default Profile;
