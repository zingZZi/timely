import api from "./api";


//프로젝트 리스트
export const fetchProjects = (params) => api.get("/v1/projects");


//프로젝트 상세조회
export const fetchProjectDetail = (projectSn) => api.get(`/v1/projects/${projectSn}`);

//프로젝트 생성
export const postProject = ({
  projectNm,
  description,
  ownerUserSn,
  status,
  priority,
  show,
  endDt,
  budgetAmt,
  clientNm,
  tagNames,
  memberUserSns,
  accessUserSns,
  files,
}) =>
  api.post("/v1/board-posts", {
    projectNm,
    description,
    ownerUserSn,
    status,
    priority,
    show,
    endDt,
    budgetAmt,
    clientNm,
    tagNames,
    memberUserSns,
    accessUserSns,
    files,
  });
