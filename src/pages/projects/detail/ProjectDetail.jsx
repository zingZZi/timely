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
import { useEffect, useState } from "react";
import { BackPageLink } from "../../../components/Button/Button";
import OverviewTab from "./tabs/OverviewTab";
import TaskListTab from "./tabs/TaskList/TaskListTab";
import ProgressUpdateTab from "./tabs/ProgressUpdate/ProgressUpdateTab";
import TimelineTab from "./tabs/TimeLine/TimelineTab";
import { useParams } from "react-router-dom";
import { fetchProjectDetail } from "../../../api/projectApi";
import { STATUS_LABEL, VISIBILITY_LABEL } from "../../../constants/project";

function ProjectDetail() {
  const pageId = useParams().id;
  const [activeBtn, setActiveBtn] = useState(0);
  const [projectDatas, setProjectDatas] = useState({});
  const tabs = [
    {
      icon: <LayoutDashboard />,
      menu: "개요",
      component: <OverviewTab data={projectDatas} />,
    },
    {
      icon: <ListTodo />,
      menu: "작업목록",
      component: <TaskListTab />,
    },
    {
      icon: <Activity />,
      menu: "진행 상황 및 업데이트",
      component: <ProgressUpdateTab />,
    },
    { icon: <GitBranch />, menu: "타임라인", component: <TimelineTab /> },
  ];

  const projectDetailData = async () => {
    try {
      const res = await fetchProjectDetail(pageId);
      setProjectDatas(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    projectDetailData();
  }, []);
  return (
    <>
      <BackPageLink to="/projects">프로젝트페이지로 돌아가기</BackPageLink>
      <S.ProjectDetail>
        <S.ProjectInfoTop>
          <S.ProjectTitle>{projectDatas.projectNm}</S.ProjectTitle>
          <S.TagWrap>
            <S.Visibility>
              {VISIBILITY_LABEL[projectDatas.visibility] ? <Eye /> : <EyeOff />}
              {VISIBILITY_LABEL[projectDatas.visibility]}
            </S.Visibility>
            <S.Exception>
              <Shield />
              예외2건
            </S.Exception>
            <S.ProjectState $color={STATUS_LABEL[projectDatas.status]?.color}>
              {STATUS_LABEL[projectDatas.status]?.label}
            </S.ProjectState>
          </S.TagWrap>
        </S.ProjectInfoTop>
        <S.ProjectDescription>{projectDatas.description}</S.ProjectDescription>
        <S.PrjoectSummary>
          <S.SummaryList>
            <S.GraphContent>
              <S.GraphText>
                진행률 <strong>{projectDatas.progressRate}%</strong>
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
            <S.SummeyValue>{projectDatas.ownerUserNm}</S.SummeyValue>
          </S.SummaryList>
          <S.SummaryList>
            <S.SummaryItem>
              <Calendar />
              마감일
            </S.SummaryItem>
            <S.SummeyValue>{projectDatas.endDt}</S.SummeyValue>
          </S.SummaryList>
          <S.SummaryList>
            <S.SummaryItem>
              <DollarSign />
              예산
            </S.SummaryItem>
            <S.SummeyValue>{projectDatas.budgetAmt}</S.SummeyValue>
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
