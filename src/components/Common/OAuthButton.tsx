import Image from "next/image";

type OAuthButtonProps = {
  provider: string;
  icon: any;
  onClick: () => void;
};

const OAuthButton = ({ icon, provider, onClick }: OAuthButtonProps) => {
  return (
    <div
      onClick={onClick}
      className="w-full bg-white px-4 py-3 text-center relative"
    >
      <div className="absolute top-[10px] left-6">{icon}</div>
      <div className="text-[#6a6a6a] text-sm font-medium">
        {provider} 계정으로 로그인
      </div>
    </div>
  );
};

export default OAuthButton;
