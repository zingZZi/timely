import {
  User,
  Calendar,
  DollarSign,
  LayoutDashboard,
  ListTodo,
  Activity,
  GitBranch,
} from "lucide-react";
import * as S from "./ProjectDetail.style";

function ProjectDetail() {
  return (
    <>
      <a href="">프로젝트페이지로 돌아가기</a>
      <S.ProjectDetail>
        <S.ProjectTitle>웹사이트 리뉴얼 프로젝트</S.ProjectTitle>
        <S.ProjectDescription>
          기존 웹사이트의 UI/UX를 개선하고 반응형 디자인을 적용하는
          프로젝트입니다. 사용자 경험을 향상시키고 모던한 디자인으로 브랜드
          이미지를 강화하는 것이 주요 목표입니다.
        </S.ProjectDescription>
        <S.ProjectState>진행중</S.ProjectState>
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
        <S.TabBtn className="active">
          <LayoutDashboard />
          개요
        </S.TabBtn>
        <S.TabBtn>
          <ListTodo />
          작업목록
        </S.TabBtn>
        <S.TabBtn>
          <Activity />
          진행 상황 및 업데이트
        </S.TabBtn>
        <S.TabBtn>
          <GitBranch />
          타임라인
        </S.TabBtn>
      </S.TabWrap>

      <S.TabContent>
        <h2>개요</h2>
      </S.TabContent>
    </>
  );
}

export default ProjectDetail;
