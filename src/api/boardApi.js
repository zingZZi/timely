import api from "./api";

//게시판 리스트
export const fetchPosts = () => api.get("/v1/board-posts");

//게시판상세조회
export const fetchPostsDetail = (boardPostSn) =>
  api.get(`/v1/board-posts/${boardPostSn}`);

//댓글 목록 조회
export const fetchPostsComments = (boardPostSn) =>
  api.get(`/v1/board-posts/${boardPostSn}/comments`);

//댓글 작성
export const postComments = ({boardPostSn,content}) =>
  api.post(`/v1/board-posts/${boardPostSn}/comments`,{
    content
  });


  //게시글 생성
export const postBoard = ({category,status,title,content}) =>
  api.post('/v1/board-posts',{
  category ,
  status,
  title,
  content
  });
