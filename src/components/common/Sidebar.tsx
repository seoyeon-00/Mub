import Image from "next/image";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <div className="flex h-full">
      <div className="flex flex-col w-[150px] h-full items-center p-10">
        <div className="w-[100px] mx-auto">
          <Image src="/images/logo.png" width={68} height={30} alt={"logo"} />
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
            <li>
              <Image src="/icon/user.png" width={24} height={24} alt={"User"} />
            </li>
          </ul>
        </nav>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
