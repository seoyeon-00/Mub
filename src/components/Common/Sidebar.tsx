"use client";

import useLoginModal from "@/stores/useLoginModal";
import Image from "next/image";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  const { modalOpen } = useLoginModal();
  const loginModal = () => {
    modalOpen();
  };

  return (
    <div className="flex h-full">
      <div className="flex flex-col w-[110px] h-full items-center p-10 fixed bg-subBg">
        <div className="w-[60px]">
          <Image src="/images/logo.png" width={78} height={30} alt={"logo"} />
        </div>
        <nav className="mt-[200px]">
          <ul className="flex flex-col gap-20">
            <li>
              <Image src="/icon/home.png" width={24} height={24} alt={"Home"} />
            </li>
            <li>
              <Image
                src="/icon/search.png"
                width={24}
                height={24}
                alt={"Search"}
              />
            </li>
            <li>
              <Image
                src="/icon/heart.png"
                width={24}
                height={24}
                alt={"Liked"}
              />
            </li>
            <li onClick={loginModal}>
              <Image src="/icon/user.png" width={24} height={24} alt={"User"} />
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
