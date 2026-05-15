import { Link } from "react-router-dom";
import StateCard from "../../components/Card/StateCard";
import * as S from "./Home.style";
import PageHeader from "../../components/PageHeader/PageHeader";
import Table from "../../components/Table/Table";
function Home() {
  return (
    <S.HomeLayout>
      <S.HomeTotal>
        <PageHeader title="한눈에 보기" subtitle="오늘 2개 작업 · 0% 완료, 마감 임박 작업 있습니다."/>
        <S.HomeTotalCard>
          <li>
            <StateCard
              title="총프로젝트"
              num="12"
              icon="total"
              footer="전체 진행 상황"
              graph="30%"
            />
          </li>
          <li>
            <StateCard title="총프로젝트" footer="하단" />
          </li>
          <li>
            <StateCard title="총프로젝트" num="12" icon="total" />
          </li>
        </S.HomeTotalCard>
      </S.HomeTotal>
      <S.HomeProject>
        <PageHeader title="진행중인 프로젝트" more="/projects"/>
        <Table></Table>
      </S.HomeProject>
      <S.HomeRecent>
        
        <PageHeader title="최근활동" more="/recent"/>
      </S.HomeRecent>
    </S.HomeLayout>
  );
}
export default Home;
