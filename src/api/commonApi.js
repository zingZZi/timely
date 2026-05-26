
import api from "./api";

//공통코드 Api
export const fetchCommonCode = () => {
  return api.get('/v1/common-codes');
};