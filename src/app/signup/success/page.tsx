"use client";

import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

const Success = () => {
  const router = useRouter();

  return (
    <div className="">
      <div className="w-[60%] mx-auto py-[140px] text-fontSub">
        <p className="text-xl text-center">회원 가입이 완료되었습니다.</p>
        <p className="text-2xl text-center">
          <b>이메일 인증</b>을 진행해주세요.
        </p>
        <div className="bg-subBg h-[300px] my-10 rounded-md"></div>
        <div className="mt-3 text-center">
          <Button variant="outlined" onClick={() => router.push("/")}>
            메인으로 돌아가기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;
