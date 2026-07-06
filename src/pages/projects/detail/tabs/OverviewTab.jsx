import {
  PRIORITY_LABEL,
  VISIBILITY_LABEL,
} from "../../../../constants/project";
import * as S from "./OverViewTab.style";
import {
  CircleCheck,
  CirclePlay,
  Clock4,
  Eye,
  EyeOff,
  Shield,
} from "lucide-react";

function OverviewTab({ data }) {
  const tags = data.tags;
  const members = data.members;
  const workStateData = data?.summary?.task;
  return (
    <S.OverView>
      <h3 className="text-ir">개요</h3>
      <S.OverViewContent>
        <S.SectionTitle>프로젝트 정보</S.SectionTitle>
        <S.ProjectInfos>
          <S.InfoLabel>클라이언트</S.InfoLabel>
          <S.InfoValue>{data.clientNm}</S.InfoValue>

          <S.InfoLabel>시작일</S.InfoLabel>
          <S.InfoValue>{data?.startDt}</S.InfoValue>

          <S.InfoLabel>우선순위</S.InfoLabel>
          <S.InfoValue>
            <S.Priority $color={PRIORITY_LABEL[data.priority]?.color}>
              {PRIORITY_LABEL[data.priority]?.label}
            </S.Priority>
          </S.InfoValue>

          <S.InfoLabel>태그</S.InfoLabel>
          <S.InfoValue>
            <S.TagLists>
              <S.TagLists>
                {tags?.map((e) => {
                  return <li key={e.projectTagSn}>{e.tagNm}</li>;
                })}
              </S.TagLists>
            </S.TagLists>
          </S.InfoValue>

          <S.InfoLabel>참여 인원</S.InfoLabel>
          <S.InfoValue>
            <ul>
              <S.ProjectMembers>
                <S.OwnerLabel>Owner</S.OwnerLabel>
                <S.MemberName>{data.ownerUserNm}</S.MemberName>
              </S.ProjectMembers>
              <S.ProjectMembers>
                <S.MemberLabel>작업자</S.MemberLabel>
                <S.MemberName>
                  {members?.map((e) => {
                    return <span key={e.userSn}>{e.userNm}</span>;
                  })}
                </S.MemberName>
              </S.ProjectMembers>
            </ul>
          </S.InfoValue>

          <S.InfoLabel>접근 권한</S.InfoLabel>
          <S.InfoValue>
            <S.Visibility>
              {VISIBILITY_LABEL[data.visibility] === "PRIVATE" ? (
                <Eye />
              ) : (
                <EyeOff />
              )}
              {VISIBILITY_LABEL[data.visibility]}
            </S.Visibility>
            {VISIBILITY_LABEL[data.visibility] ? null : (
              <S.Exception>
                <Shield />
                예외 조회: <span>한소영,관리자</span>
              </S.Exception>
            )}
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
            <S.WorkStateValue>
              {workStateData?.completedCount}개
            </S.WorkStateValue>
          </S.WorkStateList>
          <S.WorkStateList>
            <S.WorkStateLabel>
              <CirclePlay /> 진행 중인 작업
            </S.WorkStateLabel>
            <S.WorkStateValue>
              {workStateData?.inProgressCount}개
            </S.WorkStateValue>
          </S.WorkStateList>
          <S.WorkStateList>
            <S.WorkStateLabel>
              <Clock4 />
              대기 중인 작업
            </S.WorkStateLabel>
            <S.WorkStateValue>{workStateData?.pendingCount}개</S.WorkStateValue>
          </S.WorkStateList>
        </S.WorkStateLists>
      </S.OverViewContent>
    </S.OverView>
  );
}

export default OverviewTab;
