import axios from 'axios';

const BASE_URL = 'https://timely-apis.duckdns.org';

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;