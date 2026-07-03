import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import * as S from "./Index.style";
import { User, Calendar, Eye, EyeOff } from "lucide-react";
import { fetchProjects } from "../../../api/projectApi";
import {
  VISIBILITY_LABEL,
  STATUS_LABEL,
  PRIORITY_LABEL,
} from "../../../constants/project";

function Projects() {
  const [pjList, setPjList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await fetchProjects();
      console.log(response.data);
      setPjList(response.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

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
          <S.TabNum>{pjList.length}</S.TabNum>
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
        {pjList.map((e, i) => {
          return (
            <S.ProjectList key={e.projectSn}>
              <S.ProjectCard>
                <Link to={`/projects/detail/${e.projectSn}`}>
                  <S.ProjectTitle>{e.projectNm}</S.ProjectTitle>
                  <S.ProjectSum>
                    기존 웹사이트의 UI/UX를 개선하고 반응형 디자인을 적용하는
                    프로젝트입니다.
                  </S.ProjectSum>
                  <S.ProjectState>
                    <S.Priority $color={PRIORITY_LABEL[e.priority].color}>
                      {PRIORITY_LABEL[e.priority].label}
                    </S.Priority>
                    <S.State $color={STATUS_LABEL[e.status].color}>
                      {STATUS_LABEL[e.status].label}
                    </S.State>
                  </S.ProjectState>
                  <S.GraphContent>
                    <S.GraphText>
                      진행률 <strong>{e.progressRate}%</strong>
                    </S.GraphText>
                    <S.Graph>
                      <S.GraphPerCent
                        style={{ width: `${e.progressRate}%` }}
                      ></S.GraphPerCent>
                    </S.Graph>
                  </S.GraphContent>
                  <S.ProjectInfo>
                    <User />
                    {e.ownerUserNm}
                  </S.ProjectInfo>
                  <S.ProjectInfo>
                    <Calendar />
                    {e.endDt}
                  </S.ProjectInfo>
                  <S.VisibilityTag>
                    {e.visibility === "PUBLIC" ? <Eye /> : <EyeOff />}
                    {VISIBILITY_LABEL[e.visibility]}
                  </S.VisibilityTag>
                  <S.TagWrap>
                    {e.tags.map((tag, index) => {
                      return <S.Tag key={index}>{tag.tagNm}</S.Tag>;
                    })}
                    <S.MoreTag>+ 1</S.MoreTag>
                  </S.TagWrap>
                </Link>
              </S.ProjectCard>
            </S.ProjectList>
          );
        })}
      </S.ProjectLists>
    </>
  );
}

export default Projects;
