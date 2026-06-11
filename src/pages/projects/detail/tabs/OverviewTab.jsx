import * as S from "./OverViewTab.style";
import {
  CircleCheck,
  CirclePlay,
  Clock4,
  Eye,
  EyeOff,
  Shield,
} from "lucide-react";

function OverviewTab() {
  return (
    <S.OverView>
      <h3 className="text-ir">개요</h3>
      <S.OverViewContent>
        <S.SectionTitle>프로젝트 정보</S.SectionTitle>
        <S.ProjectInfos>
          <S.InfoLabel>클라이언트</S.InfoLabel>
          <S.InfoValue>(주)테크놀로지</S.InfoValue>

          <S.InfoLabel>시작일</S.InfoLabel>
          <S.InfoValue>2024-01-10</S.InfoValue>

          <S.InfoLabel>우선순위</S.InfoLabel>
          <S.InfoValue>
            <S.Priority>높음</S.Priority>
          </S.InfoValue>

          <S.InfoLabel>태그</S.InfoLabel>
          <S.InfoValue>
            <S.TagLists>
              <li>웹개발</li>
              <li>UI/UX</li>
              <li>반응형</li>
              <li>React</li>
              <li>TypeScript</li>
            </S.TagLists>
          </S.InfoValue>

          <S.InfoLabel>참여 인원</S.InfoLabel>
          <S.InfoValue>
            <ul>
              <S.ProjectMembers>
                <S.OwnerLabel>Owner</S.OwnerLabel>
                <S.MemberName>김민수</S.MemberName>
              </S.ProjectMembers>
              <S.ProjectMembers>
                <S.MemberLabel>작업자</S.MemberLabel>
                <S.MemberName>
                  이지은, 박준호, 최수연 이지은, 박준호
                </S.MemberName>
              </S.ProjectMembers>
            </ul>
          </S.InfoValue>

          <S.InfoLabel>접근 권한</S.InfoLabel>
          <S.InfoValue>
            <S.Visibility>
              <EyeOff />
              비공개 프로젝트
            </S.Visibility>
            <S.Exception>
              <Shield />
              예외 조회: <span>한소영,관리자</span>
            </S.Exception>
          </S.InfoValue>
        </S.ProjectInfos>
      </S.OverViewContent>
      <S.OverViewContent>
        <S.SectionTitle>작업 진행 상황</S.SectionTitle>
        <S.WorkStateLists>
          <S.WorkStateList>
            <S.WorkStateLabel>
              <CircleCheck /> 완료된 작업
            </S.WorkStateLabel>
            <S.WorkStateValue>2개</S.WorkStateValue>
          </S.WorkStateList>
          <S.WorkStateList>
            <S.WorkStateLabel>
              <CirclePlay /> 진행 중인 작업
            </S.WorkStateLabel>
            <S.WorkStateValue>2개</S.WorkStateValue>
          </S.WorkStateList>
          <S.WorkStateList>
            <S.WorkStateLabel>
              <Clock4 />
              대기 중인 작업
            </S.WorkStateLabel>
            <S.WorkStateValue>2개</S.WorkStateValue>
          </S.WorkStateList>
        </S.WorkStateLists>
      </S.OverViewContent>
    </S.OverView>
  );
}

export default OverviewTab;
