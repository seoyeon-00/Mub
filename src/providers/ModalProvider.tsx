"use client";

import LoginModal from "@/components/Common/LoiginModal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return <>{isMounted ? <LoginModal /> : null}</>;
};

export default ModalProvider;
