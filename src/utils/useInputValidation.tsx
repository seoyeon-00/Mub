type validationProps = {
  inputValues: {
    email: string;
    password: string;
    nickname: string;
  };
};

export const useInputValidation = ({ inputValues }: validationProps) => {
  let errors = {
    message: {
      email: "",
      password: "",
      nickname: "",
    },
    status: false,
  };

  // 패턴
  var emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  var passwordPattern =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])[a-zA-Z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\-]{8,20}$/;

  // Email 유효성 검사
  if (inputValues.email !== "" && !emailPattern.test(inputValues.email)) {
    errors.message.email = "이메일을 정확하게 입력해주세요";
  } else {
    errors.message.email = "";
  }

  // Password 유효성 검사
  if (
    inputValues.password !== "" &&
    !passwordPattern.test(inputValues.password)
  ) {
    errors.message.password = "8~20자의 특수문자, 영문자, 숫자를 포함한 조합";
  } else {
    errors.message.password = "";
  }

  // Nickname 유효성 검사
  if (inputValues.nickname.length == 1) {
    errors.message.nickname = "2글자 이상 입력하세요";
  } else {
    errors.message.nickname = "";
  }

  // 전체 유효성 검사 모든 항목이 통과 시 status 값 true
  const isCheckEmpty =
    Object.values(errors.message).every((error) => error === "") &&
    inputValues.email !== "" &&
    inputValues.password !== "" &&
    inputValues.nickname !== "";

  errors.status = isCheckEmpty;

  return errors;
};
