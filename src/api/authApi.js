import api from './api';


//회원가입 _ 회사검색
export const findCompany = () => {
  return api.get('/v1/companies');
};