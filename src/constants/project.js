export const VISIBILITY_LABEL = {
  PUBLIC: "공개",
  PRIVATE: "비공개",
};

//프로젝트 중요도
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

//프로젝트 상태
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

//작업상태
export const TASK_STATE = {
  PENDING: {
    label: "대기",
    color: "secondary",
  },
  IN_PROGRESS: {
    label: "진행중",
    color: "primary",
  },
  REVIEW: {
    label: "검토중",
    color: "chartDelay",
  },
  DONE: {
    label: "완료",
    color: "main",
  },
};

//작업중요도
export const TASK_PRIORITY = {
  HIGH: {
    label: "높음",
    color: "danger",
  },
  MEDIUM: {
    label: "보통",
    color: "chartReviw",
  },
  LOW: {
    label: "낮음",
    color: "mainDark",
  },
};

//업데이트 피드 유형
import { TrendingUp, Flag, Info, FileText, RefreshCw } from "lucide-react";
export const UPDATE_TYPE = {
  ALL: {
    label: "전체",
    color: "",
    icon: "",
  },
  PROGRESS: {
    label: "진행사항",
    color: "primary",
    icon: TrendingUp,
  },
  MILESTONE: {
    label: "마일스톤",
    color: "success",
    icon: Flag,
  },
  RISK: {
    label: "리스크",
    color: "chartDelay",
    icon: Info,
  },
  NOTE: {
    label: "노트",
    color: "secondary",
    icon: FileText,
  },
  TASK_CHANGE: {
    label: "작업 변경",
    color: "chartReviw",
    icon: RefreshCw,
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

export const UPDATE_TYPE_OPTIONS = Object.entries(UPDATE_TYPE).map(
  ([code, data]) => ({
    typeCd: code,
    typeNm: data.label,
    typeIcon: data.icon,
  }),
);
