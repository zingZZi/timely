import {
  Plus,
  CircleCheck,
  TrendingUp,
  Info,
  FileText,
  Flag,
  RefreshCw,
} from "lucide-react";
import ProgressGraph from "../../../../../components/progressGraph/ProgressGraph";
import UpdateFeedCard from "./UpdateFeedCard";
import ProgressUpdateForm from "./ProgressUpdateForm";
import * as S from "./ProgressUpdateTab.style";
import { useState } from "react";

function ProgressUpdateTab({ projectData }) {
  const [formShow, setFormShow] = useState(false);
  console.log(projectData);
  return (
    <>
      <h3 className="text-ir">진행 상황 및 업데이트</h3>
      <S.SummaryList>
        <S.SummaryCard>
          <dl>
            <S.CardTitle $color="main">
              <span aria-hidden="true">
                <CircleCheck />
              </span>
              완료된 작업
            </S.CardTitle>
            <S.CardValue>2개</S.CardValue>
            <S.CardDescription>총 6개 중</S.CardDescription>
          </dl>
        </S.SummaryCard>
        <S.SummaryCard>
          <dl>
            <S.CardTitle $color="primary">
              <span aria-hidden="true">
                <TrendingUp />
              </span>
              전체 진행률
            </S.CardTitle>
            <S.CardValue>
              <strong>{projectData.progressRate}%</strong>
              <ProgressGraph percent={projectData.progressRate} />
            </S.CardValue>
          </dl>
        </S.SummaryCard>
        <S.SummaryCard>
          <dl>
            <S.CardTitle $color="chartDelay">
              <span aria-hidden="true">
                <Info />
              </span>
              리스크 알림
            </S.CardTitle>
            <S.CardValue>1개</S.CardValue>
            <S.CardDescription>주의가 필요한 항목</S.CardDescription>
          </dl>
        </S.SummaryCard>
        <S.SummaryCard>
          <dl>
            <S.CardTitle $color="secondary">
              <span aria-hidden="true">
                <FileText />
              </span>
              총 업데이트
            </S.CardTitle>
            <S.CardValue>6개</S.CardValue>
            <S.CardDescription>작업 변경 포함</S.CardDescription>
          </dl>
        </S.SummaryCard>
      </S.SummaryList>

      <S.UpdateFeedWrap>
        <S.UpdateFeed>
          <S.UpdateFeedHeader>
            <S.FeedTitle>업데이트 피드</S.FeedTitle>
            <S.AddUpdateButton
              onClick={() => {
                setFormShow(!formShow);
              }}
            >
              <Plus />새 업데이트 작성
            </S.AddUpdateButton>
          </S.UpdateFeedHeader>
          <S.Filters>
            <button>전체</button>
            <button>
              <TrendingUp />
              진행사항
            </button>
            <button>
              <Flag />
              마일스톤
            </button>
            <button>
              <Info />
              리스크
            </button>
            <button>
              <FileText />
              노트
            </button>
            <button>
              <RefreshCw />
              작업변경 <span>자동</span>
            </button>
          </S.Filters>

          {/* 입력폼 */}
          {formShow ? <ProgressUpdateForm /> : null}

          {/* 리스트 */}
          <ul>
            <li>
              <UpdateFeedCard />
            </li>
          </ul>
        </S.UpdateFeed>

        {/* 마일스톤영역 */}
        <S.Milestone>
          <S.FeedTitle>마일스톤</S.FeedTitle>
          <S.MilestoneLists>
            <S.MilestoneList>
              <S.MileStoneSvgWrap>
                <CircleCheck />
              </S.MileStoneSvgWrap>
              <div>
                <S.MileStoneHeader>
                  <S.MileStoneTitle>디자인 완료 </S.MileStoneTitle>
                  <S.MileStoneLabel>완료</S.MileStoneLabel>
                </S.MileStoneHeader>
                <S.MileStoneDate>2024-01-20</S.MileStoneDate>
                <S.MileStoneDescription>
                  디자인 작업이 완료되었습니다. 모든 화면의 UI가 완성되어
                  개발팀에 전달되었습니다.
                </S.MileStoneDescription>
              </div>
            </S.MilestoneList>

            <S.MilestoneList className="active">
              <S.MileStoneSvgWrap>
                <CircleCheck />
              </S.MileStoneSvgWrap>
              <div>
                <S.MileStoneHeader>
                  <S.MileStoneTitle>프론트엔드 개발 완료</S.MileStoneTitle>
                  <S.MileStoneLabel>진행중</S.MileStoneLabel>
                </S.MileStoneHeader>
                <S.MileStoneDate>2024-01-20</S.MileStoneDate>
                <S.MileStoneDescription>
                  디자인 작업이 완료되었습니다. 모든 화면의 UI가 완성되어
                  개발팀에 전달되었습니다.
                </S.MileStoneDescription>
              </div>
            </S.MilestoneList>
          </S.MilestoneLists>
        </S.Milestone>
      </S.UpdateFeedWrap>
    </>
  );
}

export default ProgressUpdateTab;
