import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section>
        <h2>한눈에 보기</h2>
        <p>오늘 2개 작업 · 0% 완료, 마감 임박 작업 있습니다.</p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
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
