"use client";

import useProfileModal from "@/stores/useProfileModal";
import BasicModal from "./BasicModal";
import Button from "./Button";
import { useEffect, useState } from "react";
import { getAllProfile } from "@/services/profile";
import Image from "next/image";
import { Profile } from "@/types/types";
import { useUser } from "@/hooks/useUser";
import { updateUserProfile } from "@/services/user";
import { toast } from "react-hot-toast";

const ProfileModal = () => {
  const user = useUser();
  const { isOpen, modalClose } = useProfileModal();
  const [profileData, setProfileData] = useState<Profile[] | null>(null);
  const [selectImage, setSelectImage] = useState<String | null>(null);

  const modalHandler = () => {
    modalClose();
  };

  useEffect(() => {
    const fetch = async () => {
      const data = await getAllProfile();
      setProfileData(data);
    };

    fetch();
  }, []);

  const updateProfileHandler = async () => {
    const userId = user.user.id;
    await updateUserProfile(
      userId as string,
      selectImage?.toString() as string
    );

    toast.success("프로필 변경 완료!");
    modalClose();
  };

  return (
    <>
      <BasicModal isOpen={isOpen} handleClose={modalHandler}>
        <h2 className="font-semibold text-xl">프로필 변경</h2>
        <div className="flex flex-wrap mt-4 gap-1">
          {profileData?.map((item, index) => (
            <div
              key={`profile-${index}`}
              className={`
                relative
              ${
                selectImage === item.id
                  ? "border-[2px] border-solid border-point"
                  : user.user.profile.image_url === item.image_url
                  ? "border-[2px] border-solid border-transparent"
                  : "bg-transparent"
              }`}
              onClick={(e) => {
                setSelectImage(item.id);
              }}
            >
              <div
                className={`${
                  user.user.profile.image_url === item.image_url
                    ? "absolute w-8 h-4 top-0 left-0 text-xs bg-point text-white text-center"
                    : "absolute top-0 left-0 opacity-0"
                }`}
              >
                기본
              </div>
              <Image
                src={item.image_url}
                width={100}
                height={100}
                alt={"이미지"}
              />
            </div>
          ))}
        </div>
        <div className="mt-5">
          <Button text="변경" onClick={updateProfileHandler} />
        </div>
      </BasicModal>
    </>
  );
};

export default ProfileModal;
