"use client";

import { useUser } from "@/hooks/useUser";
import useLoginModal from "@/stores/useLoginModal";
import Image from "next/image";
import Link from "next/link";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  const { modalOpen } = useLoginModal();
  const loginModal = () => {
    modalOpen();
  };

  const user = useUser();

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
              <Image
                src="/icon/heart.png"
                width={24}
                height={24}
                alt={"Liked"}
              />
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
                <div className="w-[55px] rounded-full overflow-hidden">
                  <Link href="/mypage">
                    <Image
                      src={user.user.profile.image_url || ""}
                      width={55}
                      height={55}
                      alt={"User"}
                    />
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <main className="h-full flex-1 overflow-y-auto ml-[110px]">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
