import { Link } from "react-router-dom";
import StateCard from "../../components/Card/StateCard";
import * as S from "./Home.style";
import PageHeader from "../../components/PageHeader/PageHeader";
function Home() {
  return (
    <main>
      <section>
        <PageHeader title="한눈에 보기" />
        <S.HomeTotalCard>
          <li>
            <StateCard
              title="총프로젝트"
              num="12"
              icon="total"
              footer="전체 진행 상황"
              graph
            />
          </li>
          <li>
            <StateCard title="총프로젝트" footer="하단" />
          </li>
          <li>
            <StateCard title="총프로젝트" num="12" icon="total" />
          </li>
        </S.HomeTotalCard>
      </section>
      <section>
        <div>
          <h2>진행중인 프로젝트</h2>
          <Link to="">더보기</Link>
        </div>
      </section>
      <section>
        <div>
          <h2>최근활동</h2>
          <Link to="">더보기</Link>
        </div>
      </section>
    </main>
  );
}
export default Home;
