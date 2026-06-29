import {
  User,
  Calendar,
  DollarSign,
  LayoutDashboard,
  ListTodo,
  Activity,
  GitBranch,
  Shield,
  Eye,
  EyeOff,
} from "lucide-react";
import * as S from "./ProjectDetail.style";
import { useState } from "react";
import { BackPageLink } from "../../../components/Button/Button";
import OverviewTab from "./tabs/OverviewTab";
import TaskListTab from "./tabs/TaskList/TaskListTab";
import ProgressUpdateTab from "./tabs/ProgressUpdate/ProgressUpdateTab";
import TimelineTab from "./tabs/TimeLine/TimelineTab";

function ProjectDetail() {
  const tabs = [
    { icon: <LayoutDashboard />, menu: "개요", component: <OverviewTab /> },
    { icon: <ListTodo />, menu: "작업목록", component: <TaskListTab /> },
    {
      icon: <Activity />,
      menu: "진행 상황 및 업데이트",
      component: <ProgressUpdateTab />,
    },
    { icon: <GitBranch />, menu: "타임라인", component: <TimelineTab /> },
  ];
  const [activeBtn, setActiveBtn] = useState(3);
  return (
    <>
      <BackPageLink to="/projects">프로젝트페이지로 돌아가기</BackPageLink>
      <S.ProjectDetail>
        <S.ProjectInfoTop>
          <S.ProjectTitle>웹사이트 리뉴얼 프로젝트</S.ProjectTitle>
          <S.TagWrap>
            <S.Visibility>
              <EyeOff />
              비공개
            </S.Visibility>
            <S.Exception>
              <Shield />
              예외2건
            </S.Exception>
            <S.ProjectState>진행중</S.ProjectState>
          </S.TagWrap>
        </S.ProjectInfoTop>
        <S.ProjectDescription>
          기존 웹사이트의 UI/UX를 개선하고 반응형 디자인을 적용하는
          프로젝트입니다. 사용자 경험을 향상시키고 모던한 디자인으로 브랜드
          이미지를 강화하는 것이 주요 목표입니다.
        </S.ProjectDescription>
        <S.PrjoectSummary>
          <S.SummaryList>
            <S.GraphContent>
              <S.GraphText>
                진행률 <strong>76%</strong>
              </S.GraphText>
              <S.Graph>
                <S.GraphPerCent></S.GraphPerCent>
              </S.Graph>
            </S.GraphContent>
          </S.SummaryList>
          <S.SummaryList>
            <S.SummaryItem>
              <User />
              담당자
            </S.SummaryItem>
            <S.SummeyValue>김민수</S.SummeyValue>
          </S.SummaryList>
          <S.SummaryList>
            <S.SummaryItem>
              <Calendar />
              마감일
            </S.SummaryItem>
            <S.SummeyValue>2024-02-15</S.SummeyValue>
          </S.SummaryList>
          <S.SummaryList>
            <S.SummaryItem>
              <DollarSign />
              예산
            </S.SummaryItem>
            <S.SummeyValue>5,000만원</S.SummeyValue>
          </S.SummaryList>
        </S.PrjoectSummary>
      </S.ProjectDetail>

      <S.TabWrap>
        {tabs.map((e, i) => {
          return (
            <S.TabBtn
              key={i}
              className={activeBtn === i ? "active" : null}
              onClick={() => {
                setActiveBtn(i);
              }}
            >
              {e.icon}
              {e.menu}
            </S.TabBtn>
          );
        })}
      </S.TabWrap>

      <S.TabContent>
        {tabs.find((tab, index) => index === activeBtn)?.component}
      </S.TabContent>
    </>
  );
}

export default ProjectDetail;
