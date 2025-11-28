import axios from "axios";

// 주소를 그냥 고정
const BASE_URL =
  "https://port-0-timely-api-mhdbum4l0f5d8237.sel3.cloudtype.app/v1/";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

export default api;
