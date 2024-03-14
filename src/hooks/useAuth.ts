import { supabase } from "@/libs/supabase/supabase";
import { toast } from "react-hot-toast";

type inputType = {
  email: string;
  password: string;
  nickname: string;
};

export const useSignUp = async (input: inputType, router: any) => {
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

export const useSignIn = async (
  email: string,
  password: string,
  router: any
) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (!error) {
      toast.success("로그인 성공!");
      router.push("/");
    } else {
      toast.error("로그인 실패.");
    }
  } catch (error) {
    console.error(error);
  }
};

export const useSignInWithOAuth = async (router: any, prodiver: any) => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: prodiver,
      options: {
        redirectTo: "http://localhost:3000",
      },
    });

    if (!error) {
      toast.success("로그인 성공!");
      router.push("/");
    } else {
      toast.error("로그인 실패.");
    }
  } catch (error) {
    console.error(error);
  }
};
