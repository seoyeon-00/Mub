"use client";

import { useUser } from "@/hooks/useUser";
import Skeleton from "@mui/material/Skeleton";
import useLoginModal from "@/stores/useLoginModal";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";
import { useEffect, useState } from "react";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  const { modalOpen } = useLoginModal();
  const loginModal = () => {
    modalOpen();
  };
  const user = useUser();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const resizeHandler = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="flex h-full">
      <div className="flex flex-col w-[110px] h-full items-center fixed bg-bg">
        <div className="w-[60px] mt-10">
          <Image src="/images/logo.png" width={78} height={30} alt={"logo"} />
        </div>
        <nav className="mt-[200px]">
          <ul className="flex flex-col gap-20 items-center">
            <li>
              <Link href="/">
                <Image
                  src="/icon/home.png"
                  width={24}
                  height={24}
                  alt={"Home"}
                  style={{ width: "24px", height: "24px" }}
                />
              </Link>
            </li>
            <li>
              <Link href="/search">
                <Image
                  src="/icon/search.png"
                  width={24}
                  height={24}
                  alt={"Search"}
                />
              </Link>
            </li>
            <li>
              <Link href="/likes">
                <Image
                  src="/icon/heart.png"
                  width={24}
                  height={24}
                  alt={"Liked"}
                  style={{ width: "24px", height: "24px" }}
                />
              </Link>
            </li>
            <li>
              {!user.accessToken ? (
                <Image
                  src="/icon/user.png"
                  width={24}
                  height={24}
                  alt={"User"}
                  onClick={loginModal}
                />
              ) : (
                <div className="w-[50px] rounded-full overflow-hidden">
                  <Link href="/mypage">
                    {user.user.profile.image_url ? (
                      <Image
                        src={user.user.profile.image_url}
                        width={50}
                        height={50}
                        alt={"User"}
                      />
                    ) : (
                      <Skeleton variant="circular" width={50} height={50} />
                    )}
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <div className="h-screen flex-1 overflow-y-auto ml-[110px]">
        <div className="flex flex-col h-full">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
