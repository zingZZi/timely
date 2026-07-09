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
export const postProjectTask = ({
  projectSn,
  taskNm,
  priority,
  assigneeUserSn,
  dueDt,
}) =>
  api.post(`/v1/projects/${projectSn}/tasks`, {
    taskNm,
    status: "PENDING",
    priority: priority || "MEDIUM",
    assigneeUserSn,
    dueDt,
  });

//작업목록 조회 api
export const fetchProjectTasks = ({ projectSn }) =>
  api.get(`/v1/projects/${projectSn}/tasks`);

//프로젝트 작업 상태변경
export const editeStatus = (pageId, projectTaskSn, status) =>
  api.patch(`/v1/projects/${pageId}/tasks/${projectTaskSn}/status`, {
    status,
  });

//프로젝트 업데이트 목록 조회 api
export const fetchProjectUpdateList = (projectSn) =>
  api.get(`/v1/projects/${projectSn}/updates`);

export const postProjectUpdateList = ({
  projectSn,
  projectTaskSn,
  updateType,
  title,
  content,
  files,
}) =>
  api.post(`/v1/projects/${projectSn}/updates`, {
    projectTaskSn,
    updateType,
    title,
    content,
    files: [],
  });

//각 피드 데이터 목록 조회
export const fetchFeedCommentList = (projectSn, projectUpdateSn) =>
  api.get(`/v1/projects/${projectSn}/updates/${projectUpdateSn}/comments`);
