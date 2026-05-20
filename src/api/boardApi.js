import api from "./api";

//게시판 리스트
export const fetchPosts = () => api.get("/v1/board-posts");
