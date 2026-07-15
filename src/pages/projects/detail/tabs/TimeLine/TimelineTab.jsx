import { useEffect, useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import * as S from "./TimelineTab.style";
import AddTimeLine from "./AddTimeLine";
import { BasicBtn } from "../../../../../components/Button/Button";
import { useParams } from "react-router-dom";
import { fetchTimeline } from "../../../../../api/projectApi";

function TimelineTab() {
  const projectSn = useParams().id;
  const [editingId, setEditingId] = useState(null);
  const [timeLineForm, setTimeLineForm] = useState(false);
  const [timeLineDatas, setTimeLineDatas] = useState([]);
  let testData = [
    {
      id: "1",
      title: "기획 및 분석",
      date: "2024-10-10~2016-12-12",
      summary: "요구사항 수집, 벤치마킹, 기능 정의서 작성",
      state: "완료",
    },
    {
      id: "2",
      title: "디자인",
      date: "2026-10-10~2016-12-12",
      summary: "와이어프레임, UI/UX 디자인, 클라이언트 컨펌",
      state: "진행중",
    },
    {
      id: "3",
      title: "개발",
      date: "2026-10-10~2016-12-12",
      summary: "와이어프레임, UI/UX 디자인, 클라이언트 컨펌",
      state: "예정",
    },
  ];
  const fetchDatas = async () => {
    try {
      const res = await fetchTimeline(projectSn);
      setTimeLineDatas(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDatas();
  }, []);
  return (
    <S.TimeLineWrap>
      <S.ProjectTimeLine>
        <S.Header>
          <S.SectionTitle>프로젝트 타임라인</S.SectionTitle>
          <BasicBtn
            onClick={() => {
              setTimeLineForm(!timeLineForm);
            }}
          >
            <Plus />
            단계 추가
          </BasicBtn>
        </S.Header>
        {timeLineForm ? <AddTimeLine fetchDatas={fetchDatas} /> : null}
        <ol>
          {timeLineDatas.map((e, i) => {
            return (
              <S.TimeLineList key={e.projectTimelineSn} state={e.status}>
                <S.StateSticker state={e.status}></S.StateSticker>
                <article>
                  <S.TimeLineHeader>
                    <S.TimeTitle>{e.phaseNm}</S.TimeTitle>
                    <S.TimeLineControls>
                      <S.StateLabel state={e.status} state={e.status}>
                        {e.statusNm}
                      </S.StateLabel>
                      <button
                        onClick={() => {
                          setEditingId(i);
                        }}
                      >
                        <Pencil />
                      </button>
                      <button>
                        <Trash2 />
                      </button>
                    </S.TimeLineControls>
                  </S.TimeLineHeader>
                  <S.Statedate>
                    {e.startDt}~{e.endDt}
                  </S.Statedate>
                  <S.StateSummary>{e.description}</S.StateSummary>
                </article>
                {editingId === i ? <section>수정내용 컨텐츠</section> : null}
              </S.TimeLineList>
            );
          })}
        </ol>
      </S.ProjectTimeLine>
      <S.TimeLineSummary>
        <S.SectionTitle>타임라인 요약</S.SectionTitle>
        <S.SummaryLists>
          <S.SummaryList color="main">
            <S.SummaryLabel>완료된 단계</S.SummaryLabel>
            <S.SummaryData>2개</S.SummaryData>
          </S.SummaryList>
          <S.SummaryList color="primary">
            <S.SummaryLabel>진행 중</S.SummaryLabel>
            <S.SummaryData>2개</S.SummaryData>
          </S.SummaryList>
          <S.SummaryList>
            <S.SummaryLabel>예정된 단계</S.SummaryLabel>
            <S.SummaryData>2개</S.SummaryData>
          </S.SummaryList>
          <S.SummaryList>
            <S.SummaryLabel>전체 기간</S.SummaryLabel>
            <S.SummaryDate>2024-01-10 ~ 2024-02-15</S.SummaryDate>
          </S.SummaryList>
        </S.SummaryLists>
      </S.TimeLineSummary>
    </S.TimeLineWrap>
  );
}

export default TimelineTab;
