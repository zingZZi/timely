import { LayoutDashboard,ListTodo,Activity,GitBranch } from 'lucide-react';
import * as S from './ProjectDetail.style'

function ProjectDetail(){
    return(
        <>
            <a href="">프로젝트페이지로 돌아가기</a>
            <S.ProjectDetail>
                <S.ProjectTitle>웹사이트 리뉴얼 프로젝트</S.ProjectTitle>
                <S.ProjectSummery>기존 웹사이트의 UI/UX를 개선하고 반응형 디자인을 적용하는 프로젝트입니다. 사용자 경험을 향상시키고 모던한 디자인으로 브랜드 이미지를 강화하는 것이 주요 목표입니다.</S.ProjectSummery>
                <S.ProjectState>진행중</S.ProjectState>
                <S.ProjectInfos>
                    <li>진행률</li>
                    <li>담당자</li>
                    <li>마감일</li>
                    <li>예산</li>
                </S.ProjectInfos>
            </S.ProjectDetail>

            <div>
                <button><LayoutDashboard/>개요</button>
                <button><ListTodo/>작업목록</button>
                <button><Activity/>진행 상황 및 업데이트</button>
                <button><GitBranch/>타임라인</button>
            </div>
        </>
    )
}

export default ProjectDetail