import { Link } from "react-router-dom";
import PageHeader from "../../../components/PageHeader/PageHeader";
import * as S from "./Index.style";
import { User, Calendar, Eye, EyeOff } from "lucide-react";

function Projects() {
  return (
    <>
      <PageHeader
        title="프로젝트 관리"
        subtitle="진행 중인 프로젝트들을 효율적으로 관리하세요"
        linkText="새 프로젝트"
        link="/projects/new"
      />

      <S.Tab>
        <S.TabBtn className="active">
          전체
          <S.TabNum>10</S.TabNum>
        </S.TabBtn>
        <S.TabBtn>
          진행중
          <S.TabNum>100</S.TabNum>
        </S.TabBtn>
        <S.TabBtn>
          완료
          <S.TabNum>100</S.TabNum>
        </S.TabBtn>
        <S.TabBtn>
          보류
          <S.TabNum>0</S.TabNum>
        </S.TabBtn>
      </S.Tab>

      <S.ProjectLists>
        <S.ProjectList>
          <S.ProjectCard>
            <Link to="/projects/detail/1">
              <S.ProjectTitle>웹사이트 리뉴얼 프로젝트</S.ProjectTitle>
              <S.ProjectSum>
                기존 웹사이트의 UI/UX를 개선하고 반응형 디자인을 적용하는
                프로젝트입니다.
              </S.ProjectSum>
              <S.ProjectState>
                <S.Priority>높음</S.Priority>
                <S.State>진행중</S.State>
              </S.ProjectState>
              <S.GraphContent>
                <S.GraphText>
                  진행률 <strong>76%</strong>
                </S.GraphText>
                <S.Graph>
                  <S.GraphPerCent></S.GraphPerCent>
                </S.Graph>
              </S.GraphContent>
              <S.ProjectInfo>
                <User />
                김민수
              </S.ProjectInfo>
              <S.ProjectInfo>
                <Calendar />
                2024-02-13
              </S.ProjectInfo>
              <S.VisibilityTag>
                <Eye />
                공개
              </S.VisibilityTag>
              <S.TagWrap>
                <S.Tag>웹개발</S.Tag>
                <S.Tag>UI/UX</S.Tag>
                <S.Tag>반응형</S.Tag>
                <S.MoreTag>+ 1</S.MoreTag>
              </S.TagWrap>
            </Link>
          </S.ProjectCard>
        </S.ProjectList>
      </S.ProjectLists>
    </>
  );
}

export default Projects;
