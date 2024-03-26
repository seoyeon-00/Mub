"use client";

import useLoginModal from "@/stores/useLoginModal";
import BasicModal from "./BasicModal";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { supabase } from "@/libs/supabase/supabase";
import Button from "./Button";
import OAuthButton from "./OAuthButton";
import GithubIcon from "./icons/GithubIcon";
import { useSignIn, useSignInWithOAuth } from "@/services/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

type inputType = {
  email: string;
  password: string;
};

const LoginModal = () => {
  const router = useRouter();
  const { isOpen, modalClose } = useLoginModal();
  const [input, setInput] = useState<inputType>({
    email: "",
    password: "",
  });

  const modalHander = () => {
    modalClose();
  };

  // OAuth Githhub 로그인
  const loginOAuthHandler = () => useSignInWithOAuth(router, "github");
  // Email 로그인
  const loginEmailHandler = () =>
    useSignIn(input.email, input.password, router);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = {
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    setInput(data);
  };

  return (
    <>
      <BasicModal isOpen={isOpen} handleClose={modalHander}>
        <div className="py-6">
          <h2 className="text-white font-semibold text-2xl mb-10">로그인</h2>
          <div>
            <OAuthButton
              icon={<GithubIcon color="#2c2c2c" width="24px" />}
              provider="Github"
              onClick={loginOAuthHandler}
            />
            <div className="flex my-8 items-center">
              <div className="w-[35%] h-[1px] bg-[#373737]"></div>
              <div className="w-[30%] text-center text-[#8e8e8e]">or</div>
              <div className="w-[35%] h-[1px] bg-[#373737]"></div>
            </div>
          </div>
          <div className="w-full flex flex-col mt-10 gap-3">
            <div className="w-full">
              <CssTextField
                id="filled-basic"
                label="이메일"
                variant="filled"
                name="email"
                onChange={onChange}
              />
            </div>
            <div>
              <CssTextField
                id="filled-basic"
                label="비밀번호"
                variant="filled"
                name="password"
                onChange={onChange}
              />
            </div>
          </div>
          <div className="mt-5 w-full">
            <Button onClick={loginEmailHandler}>로그인</Button>
          </div>
          <div className="text-fontGray text-center mt-4 text-sm">
            계정이 없으신가요?{" "}
            <span className=" text-sub">
              <Link href="/signup" onClick={modalHander}>
                회원가입
              </Link>
            </span>
          </div>
        </div>
      </BasicModal>
    </>
  );
};

export default LoginModal;

const CssTextField = styled(TextField)({
  width: "100%",
  background: "#1c1c1c",
  color: "#fff",
  "& label": {
    color: "#575757",
    width: "100%",
  },
  "& input": {
    color: "#575757",
  },
  "& label.Mui-focused": {
    color: "#C5C5C5",
  },
});
