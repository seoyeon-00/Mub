"use client";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { supabase } from "@/libs/supabase/supabase";

const Login = () => {
  const loginHanler = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000",
      },
    });
  };

  return (
    <div className="w-[60%] mx-auto pt-[100px]">
      <h2 className="text-white font-semibold text-2xl">Login</h2>
      <div className="w-full flex flex-col mt-10 gap-5">
        <div className="w-full">
          <div className="mb-3 text-sm">EMAIL</div>
          <CssTextField id="filled-basic" label="이메일" variant="filled" />
        </div>
        <div>
          <div className="mb-3 text-sm">PASSWORD</div>
          <CssTextField id="filled-basic" label="비밀번호" variant="filled" />
        </div>
      </div>
      <div className="mt-5 w-full">
        <Button onClick={loginHanler} variant="outlined">
          login
        </Button>
      </div>
    </div>
  );
};

export default Login;

const CssTextField = styled(TextField)({
  width: "100%",
  background: "#242424",
  "& label": {
    color: "#575757",
    width: "100%",
  },
  "& label.Mui-focused": {
    color: "#C5C5C5",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#aaaaaa",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#aaaaaa",
    },
    "&:hover fieldset": {
      borderColor: "#cdcdce",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#aeaeae",
    },
  },
});
