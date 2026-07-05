import api from "./api";

//프로젝트 리스트
export const fetchProjects = () => api.get("/v1/projects");

//프로젝트 상세조회
export const fetchProjectDetail = (projectSn) =>
  api.get(`/v1/projects/${projectSn}`);

//프로젝트 생성
export const postProject = ({
  projectNm,
  description,
  ownerUserSn,
  status,
  priority,
  visibility,
  startDt,
  endDt,
  budgetAmt,
  clientNm,
  tagNames,
  memberUserSns,
  accessUserSns,
  //files,
  progressRate,
}) =>
  api.post("/v1/projects", {
    projectNm,
    description,
    ownerUserSn,
    status,
    priority,
    visibility,
    startDt,
    endDt,
    budgetAmt,
    clientNm,
    tagNames,
    memberUserSns,
    accessUserSns,
    progressRate,
    files: [],
  });

//프로젝트 상세 api들

//작업목록 생성 api
export const postProjectTask = ({ projectSn }) =>
  api.post(`/v1/projects/${projectSn}/tasks`);
