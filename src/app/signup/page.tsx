"use client";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const Signup = () => {
  return (
    <div className="w-[60%] mx-auto pt-[100px]">
      <h2 className="text-white font-semibold text-2xl">Sign Up</h2>
      <div className="flex flex-col mt-10 gap-3">
        <CssTextField id="outlined-basic" label="이메일" variant="outlined" />
        <CssTextField id="outlined-basic" label="비밀번호" variant="outlined" />
      </div>
      <div className="mt-3 w-full">
        <Button variant="outlined">가입하기</Button>
      </div>
    </div>
  );
};

export default Signup;

const CssTextField = styled(TextField)({
  "& label": {
    color: "#C5C5C5",
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
