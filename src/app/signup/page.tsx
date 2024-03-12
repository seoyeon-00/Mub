"use client";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { supabase } from "@/libs/supabase/supabase";
import { FormEvent, useState } from "react";
import { useInputValidation } from "@/utils/useInputValidation";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

type inputType = {
  email: string;
  password: string;
  nickname: string;
};

type errorType = {
  message: {
    email: string;
    password: string;
    nickname: string;
  };
  status: boolean;
};

const Signup = () => {
  const [input, setInput] = useState<inputType>({
    email: "",
    password: "",
    nickname: "",
  });

  const [error, setError] = useState<errorType>({
    message: {
      email: "",
      password: "",
      nickname: "",
    },
    status: false,
  });

  const router = useRouter();

  const signupHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: input.email,
        password: input.password,
        options: {
          data: {
            nickname: input.nickname,
          },
        },
      });

      if (!error) {
        toast.success("이메일 인증을 진행해주세요.");
        router.push("/signup/success");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = {
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    setInput(data);
    setError(useInputValidation({ inputValues: data }));
  };

  return (
    <div className="w-[60%] mx-auto pt-[100px]">
      <h2 className="text-white font-semibold text-2xl">Sign Up</h2>
      <div className="w-full flex flex-col mt-10 gap-5">
        <div className="w-full">
          <div className="mb-3 text-sm">EMAIL</div>
          <CssTextField
            id="filled-basic"
            label="이메일"
            variant="filled"
            name="email"
            onChange={onChange}
            error={error.message.email !== "" ? true : false}
            helperText={error.message.email}
          />
        </div>
        <div>
          <div className="mb-3 text-sm">PASSWORD</div>
          <CssTextField
            id="filled-basic"
            label="비밀번호"
            variant="filled"
            name="password"
            onChange={onChange}
            error={error.message.password !== "" ? true : false}
            helperText={error.message.password}
          />
        </div>
        <div>
          <div className="mb-3 text-sm">NICKNAME</div>
          <CssTextField
            id="filled-basic"
            label="닉네임"
            variant="filled"
            name="nickname"
            onChange={onChange}
            error={error.message.nickname !== "" ? true : false}
            helperText={error.message.password}
          />
        </div>
      </div>
      <div className="mt-5 w-full">
        <Button variant="outlined" onClick={signupHandler}>
          가입하기
        </Button>
      </div>
    </div>
  );
};

export default Signup;

const CssTextField = styled(TextField)({
  width: "100%",
  background: "#242424",
  "& label": {
    color: "#575757",
    width: "100%",
  },
});
