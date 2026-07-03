import api from "./api";

//게시판 리스트
export const fetchPosts = () => api.get("/v1/board-posts");

//사이드정보 리스트
export const fetchPostsSideBar = () => api.get("/v1/board-posts/sidebar");

//게시글 생성
export const postBoard = ({ category, status, title, content }) =>
  api.post("/v1/board-posts", {
    category,
    status,
    title,
    content,
  });

//게시글 삭제
export const deletePosts = (boardPostSn) =>
  api.delete(`/v1/board-posts/${boardPostSn}`);

//게시판상세조회
export const fetchPostsDetail = (boardPostSn) =>
  api.get(`/v1/board-posts/${boardPostSn}`);

//댓글 목록 조회
export const fetchPostsComments = (boardPostSn) =>
  api.get(`/v1/board-posts/${boardPostSn}/comments`);

//댓글 작성
export const postComments = ({ boardPostSn, content }) =>
  api.post(`/v1/board-posts/${boardPostSn}/comments`, {
    content,
  });

//댓글 삭제
export const removePostsComments = (boardPostSn, boardCommentSn) =>
  api.delete(`/v1/board-posts/${boardPostSn}/comments/${boardCommentSn}`);

//게시글 좋아요
export const postLike = (boardPostSn) =>
  api.post(`/v1/board-posts/${boardPostSn}/likes`);

//게시글 좋아요 취소
export const removeLike = (boardPostSn) =>
  api.delete(`/v1/board-posts/${boardPostSn}/likes`);

//북마크 좋아요
export const addBookmark = (boardPostSn) =>
  api.post(`/v1/board-posts/${boardPostSn}/bookmarks`);

//북마크 좋아요 취소
export const removeBookmark = (boardPostSn) =>
  api.delete(`/v1/board-posts/${boardPostSn}/bookmarks`);

//댓글 좋아요
export const commentLike = (boardPostSn, boardCommentSn) =>
  api.post(`/v1/board-posts/${boardPostSn}/comments/${boardCommentSn}/likes`);
//댓글 좋아요 취소
export const removecommentLike = (boardPostSn, boardCommentSn) =>
  api.delete(`/v1/board-posts/${boardPostSn}/comments/${boardCommentSn}/likes`);
