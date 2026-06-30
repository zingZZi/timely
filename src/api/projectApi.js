import api from "./api";

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
