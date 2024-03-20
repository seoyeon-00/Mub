"use client";

import LoginModal from "@/components/Common/LoiginModal";
import ProfileModal from "@/components/Common/ProfileModal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted ? (
        <>
          <LoginModal />
          <ProfileModal />
        </>
      ) : null}
    </>
  );
};

export default ModalProvider;
