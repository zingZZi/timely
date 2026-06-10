import api from "./api";

//로그인
export const signIn = (email, password) => {
  return api.post("/v1/auth/login", {
    email: email,
    password: password,
  });
};

//로그인_ 유저정보
export const getUserInfo = () => {
  return api.get("/v1/auth/me");
};

//회원가입 _ 회사검색
export const findCompany = () => {
  return api.get("/v1/companies");
};

//회원가입 _ 부서리스트
export const findDepartments = () => {
  return api.get("/v1/departments");
};

//회원가입 _ 직급리스트
export const findRanks = () => {
  return api.get("/v1/positions");
};

export const signUp = ({
  companySn,
  deptSn,
  position,
  name,
  email,
  password,
  passwordConfirm,
  phone,
}) => {
  return api.post("/v1/auth/signup", {
    companySn,
    deptSn,
    position,
    name,
    password,
    passwordConfirm,
    phoneNo: phone,
    email,
    avatarUrl: "",
  });
};
