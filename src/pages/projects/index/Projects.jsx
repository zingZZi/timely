import PageHeader from "../../../components/PageHeader/PageHeader";

function Projects() {
  return (
    <>
      <PageHeader
        title="프로젝트 관리"
        subtitle="진행 중인 프로젝트들을 효율적으로 관리하세요"
      />

      <ul>
        <li>
          <button>전체</button>
          <button>진행중</button>
          <button>완료</button>
          <button>보류</button>
        </li>
      </ul>

      <ul>
        <li>
          <div>
            <h3>웹사이트 리뉴얼 프로젝트</h3>
            <p>
              기존 웹사이트의 UI/UX를 개선하고 반응형 디자인을 적용하는
              프로젝트입니다. 사용자 경험을 향상시키고 모던한 디자인으로 브랜드
              이미지를 강화하는 것이 주요 목표입니다.
            </p>
            <div>
              <span>높음</span>
              <span>진행중</span>
            </div>
            <div>
              <p>
                진행률 <strong>76%</strong>
                <i>
                  <b></b>
                </i>
              </p>
            </div>
            <strong>김민수</strong>
            <span>2024-02-13</span>
            <div>
              <span>웹개발</span>
              <span>UI/UX</span>
              <span>반응형</span>
              <b>+ 1</b>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}

export default Projects;
