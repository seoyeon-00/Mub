"use client";

import useProfileModal from "@/stores/useProfileModal";
import BasicModal from "./BasicModal";
import Button from "./Button";
import { useEffect, useState } from "react";
import { getAllProfile } from "@/services/profile";
import Image from "next/image";
import { Profile } from "@/types/types";

const ProfileModal = () => {
  const { isOpen, modalClose } = useProfileModal();
  const [profileData, setProfileData] = useState<Profile[] | null>(null);
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

  console.log(profileData);

  return (
    <>
      <BasicModal isOpen={isOpen} handleClose={modalHandler}>
        <h2 className="font-semibold text-xl">프로필 변경</h2>
        <div className="flex flex-wrap mt-4 gap-1">
          {profileData?.map((item, index) => (
            <div key={`profile-${index}`}>
              <Image
                src={item.image_url}
                width={100}
                height={100}
                alt={"이미지"}
              />
            </div>
          ))}
        </div>
        <div className="mt-2">
          <Button text="변경" onClick={() => {}} />
        </div>
      </BasicModal>
    </>
  );
};

export default ProfileModal;
