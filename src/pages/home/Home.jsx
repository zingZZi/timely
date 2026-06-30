import { Link } from "react-router-dom";
import StateCard from "../../components/Card/StateCard";
import * as S from "./Home.style";
import PageHeader from "../../components/PageHeader/PageHeader";
import StateLabel from "../../components/Label/StateLabel";
import BarChart from "../../components/graph/BarChart/BarChart";
import ProfileImg from "../../components/profileImg/ProfileImg";
import { CircleCheckBig, AlarmClockCheck, Loader } from "lucide-react";
function Home() {
  return (
    <S.HomeLayout>
      <S.HomeTotal>
        <PageHeader
          title="한눈에 보기"
          subtitle="오늘 2개 작업 · 0% 완료, 마감 임박 작업 있습니다."
        />
        <S.HomeTotalCard>
          <li>
            <StateCard
              title="총프로젝트"
              num="12"
              icon={<CircleCheckBig />}
              footer="전체 진행 상황"
              graph="30"
              color="main"
            />
          </li>
          <li>
            <StateCard
              title="다가오는일정"
              num="2"
              footer="2 마감 임박 작업"
              icon={<AlarmClockCheck />}
              color="orange"
            />
          </li>
          <li>
            <StateCard
              title="검토 대기"
              num="2"
              icon="total"
              icon={<Loader />}
              color="gray"
            />
          </li>
        </S.HomeTotalCard>
      </S.HomeTotal>
      <S.HomeProject>
        <PageHeader title="진행중인 프로젝트" more="/projects" />

        <S.ProjectStates>
          <S.StatesList>
            <S.ProjectState></S.ProjectState>진행중
          </S.StatesList>
          <S.StatesList>
            <S.ProjectState status="delay" />
            지연
          </S.StatesList>
          <S.StatesList>
            <S.ProjectState status="review" />
            검토중
          </S.StatesList>
          <S.StatesList>
            <S.ProjectState status="finish" />
            완료
          </S.StatesList>
        </S.ProjectStates>

        <S.TableWrap>
          <S.Table>
            <colgroup>
              <col style={{ width: "auto" }} />
              <col style={{ width: "15%" }} />
              <col style={{ width: "10%" }} />
              <col style={{ width: "27%" }} />
              <col style={{ width: "15%" }} />
            </colgroup>
            <S.TableHeader>
              <tr>
                <th>프로젝트</th>
                <th>담당자</th>
                <th>상태</th>
                <th>진행률</th>
                <th>마감일</th>
              </tr>
            </S.TableHeader>
            <S.TableBody>
              <tr>
                <td>
                  <S.ProjectName>
                    <S.ProjectState status="delay" />
                    프로젝트 이름
                  </S.ProjectName>
                </td>
                <td>김민수</td>
                <td>
                  <StateLabel status="delay" />
                </td>
                <td>
                  <S.GraphWrap>
                    <BarChart percent={20} />
                    <S.Percent>20%</S.Percent>
                  </S.GraphWrap>
                </td>
                <td>2026-06-30</td>
              </tr>
              <tr>
                <td>
                  <S.ProjectName>
                    <S.ProjectState status="delay" />
                    프로젝트 이름
                  </S.ProjectName>
                </td>
                <td>김민수</td>
                <td>
                  <StateLabel status="finish" />
                </td>
                <td>
                  <S.GraphWrap>
                    <BarChart percent={100} />
                    <S.Percent>100%</S.Percent>
                  </S.GraphWrap>
                </td>
                <td>2026-06-30</td>
              </tr>
            </S.TableBody>
          </S.Table>
        </S.TableWrap>
      </S.HomeProject>
      <S.HomeRecent>
        <PageHeader title="최근활동" more="/recent" />
        <S.RecentLists>
          <S.RecentList>
            <div>
              <ProfileImg size={3.2} />
              <S.Name>name</S.Name>
            </div>
            <S.RecentContent>
              <S.RecentMessage>작업을 생성했습니다 API 문서화</S.RecentMessage>
              <S.RecentMeta>마케팅 캠페인</S.RecentMeta>
              <S.RecentMeta>1시간 전</S.RecentMeta>
            </S.RecentContent>
          </S.RecentList>
        </S.RecentLists>
      </S.HomeRecent>
    </S.HomeLayout>
  );
}
export default Home;
