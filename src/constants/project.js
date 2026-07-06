export const VISIBILITY_LABEL = {
  PUBLIC: "공개",
  PRIVATE: "비공개",
};

export const PRIORITY_LABEL = {
  HIGH: {
    label: "높음",
    color: "cahrtDanger",
  },
  MEDIUM: {
    label: "중간",
    color: "success",
  },
  LOW: {
    label: "낮음",
    color: "secondary",
  },
};

export const STATUS_LABEL = {
  IN_PROGRESS: {
    label: "진행중",
    color: "main",
  },
  COMPLETED: {
    label: "완료",
    color: "primary",
  },
  ON_HOLD: {
    label: "보류",
    color: "chartDelay",
  },
};

export const TASK_STATE = {
  HIGH: {
    label: "완료",
    color: "main",
  },
  MEDIUM: {
    label: "진행중",
    color: "success",
  },
  LOW: {
    label: "대기",
    color: "secondary",
  },
};

export const TASK_PRIORITY = {
  HIGH: {
    label: "높음",
    color: "main",
  },
  MEDIUM: {
    label: "보통",
    color: "chartDelay",
  },
  LOW: {
    label: "낮음",
    color: "mainDark",
  },
};



//array형식 만들기
export const PROJECT_STATUS_OPTIONS = Object.entries(STATUS_LABEL).map(
  ([code, data]) => ({
    stateCd: code,
    stateNm: data.label,
  }),
);

export const PROJECT_PRIORITY_OPTIONS = Object.entries(PRIORITY_LABEL).map(
  ([code, data]) => ({
    priorityCd: code,
    priorityNm: data.label,
  }),
);