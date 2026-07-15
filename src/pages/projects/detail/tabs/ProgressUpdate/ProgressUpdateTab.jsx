import {
  Plus,
  CircleCheck,
  TrendingUp,
  Info,
  FileText,
  Flag,
  RefreshCw,
  FlagOff,
} from "lucide-react";
import ProgressGraph from "../../../../../components/progressGraph/ProgressGraph";
import UpdateFeedCard from "./UpdateFeedCard";
import ProgressUpdateForm from "./ProgressUpdateForm";
import * as S from "./ProgressUpdateTab.style";
import { useEffect, useState } from "react";
import {
  fetchMileStone,
  fetchProjectUpdateList,
} from "../../../../../api/projectApi";
import { useParams } from "react-router-dom";
import { UPDATE_TYPE_OPTIONS } from "../../../../../constants/project";

function ProgressUpdateTab({ projectData }) {
  const projectSn = useParams().id;
  const [formShow, setFormShow] = useState(false);
  const [feedDatas, setfeedDatas] = useState([]);
  const [mileStoneDatas, setMileStoneDatas] = useState([]);

  const [selectedFeedType, setSelectedFeedType] = useState("ALL");

  const fetchData = async () => {
    try {
      const res = await fetchProjectUpdateList(projectSn);
      setfeedDatas(res.data);
      const mileRes = await fetchMileStone(projectSn);
      setMileStoneDatas(mileRes.data);
    } catch (error) {
      console.log(error);
    }
  };
  const filteredData = feedDatas.filter((data) =>
    selectedFeedType === "ALL" ? true : data.updateType === selectedFeedType,
  );

  function feedtypeBtn(type) {
    setSelectedFeedType(type);
  }
  useEffect(() => {
    fetchData();
    console.log(mileStoneDatas);
  }, [projectSn]);

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
            {UPDATE_TYPE_OPTIONS.map((type, i) => {
              return (
                <S.FilterBtn
                  key={i}
                  onClick={() => {
                    feedtypeBtn(type.typeCd);
                  }}
                  className={selectedFeedType === type.typeCd ? "on" : null}
                >
                  {type.icon}
                  {type.typeNm}
                  {type.typeCd === "TASK_CHANGE" ? <span>자동</span> : null}
                </S.FilterBtn>
              );
            })}
          </S.Filters>

          {/* 입력폼 */}
          {formShow ? (
            <ProgressUpdateForm
              setFormShow={setFormShow}
              cardData={fetchData}
            />
          ) : null}

          {/* 리스트 */}
          <ul>
            {filteredData?.map((data) => {
              return (
                <li key={data.projectUpdateSn}>
                  <UpdateFeedCard data={data} />
                </li>
              );
            })}
          </ul>
        </S.UpdateFeed>

        {/* 마일스톤영역 */}
        <S.Milestone>
          <S.FeedTitle>마일스톤</S.FeedTitle>
          <S.MilestoneLists>
            {mileStoneDatas.totalCount > 0 ? (
              <>
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
              </>
            ) : (
              <S.MilestoneNoList>
                <FlagOff />
                현재 마일스톤이 없습니다.
              </S.MilestoneNoList>
            )}
          </S.MilestoneLists>
        </S.Milestone>
      </S.UpdateFeedWrap>
    </>
  );
}

export default ProgressUpdateTab;
