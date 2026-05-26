import PageHeader from "../../components/PageHeader/PageHeader";
import * as S from "./Board.style";
import CardList from "../../components/board/CardList/CardList";
import { useEffect, useState } from "react";
import { fetchPosts } from "../../api/boardApi";
import { BOARDFILTERLIST } from "./filterlists";
import { Link } from "react-router-dom";

function Board() {
  const filterList = BOARDFILTERLIST;
  const [boardList, setBoardList] = useState([]);
  const [activeBtn, setActiveBtn] = useState(0);
  const [selectCategory, setSelectCategory] = useState("");

  function btnHandler(index, category) {
    setActiveBtn(index);
    setSelectCategory(category);
  }

  //초반 데이터 불러오기
  useEffect(() => {
    const getBoardData = async () => {
      try {
        const res = await fetchPosts();
        setBoardList(res.data.content);
      } catch (error) {
        console.log(error);
      }
    };
    getBoardData();
  }, []);

  //카테고리 설정시 데이터 재정렬
  const filteredList =
    selectCategory === ""
      ? boardList
      : boardList.filter((item) => item.category === selectCategory);

  return (
    <S.BoardWrap>
      <S.BoardSection>
        <PageHeader
          title="게시판"
          subtitle="프로젝트 관련 공지와 아이디어를 공유하세요."
        />
        <S.BoardFilter>
          <S.BtnFilters>
            {filterList.map((e, i) => {
              return (
                <S.FilterBtn
                  key={i}
                  className={activeBtn === i ? "active" : ""}
                  onClick={() => {
                    btnHandler(i, e.dataSet);
                  }}
                >
                  {e.label}
                </S.FilterBtn>
              );
            })}
          </S.BtnFilters>
          <S.Input type="text" placeholder="제목, 작성자, 내용 검색..." />
        </S.BoardFilter>

        <S.BoardTotal>
          <S.TotalText>총 <S.TotalNum>{filteredList.length}</S.TotalNum>개</S.TotalText>
          <S.WriteBtn padding="1rem 2.6rem" to="/board/write">글작성</S.WriteBtn>
        </S.BoardTotal>

        <S.BoardLists>
          {filteredList.map((e, i) => {
            return (
              <li key={i}>
                <CardList data={e} />
              </li>
            );
          })}
        </S.BoardLists>
      </S.BoardSection>

      <S.BoardAside>
        <S.AsideCard>
          <h3>최근공지</h3>
        </S.AsideCard>

        <S.AsideCard>
          <h3>다가오는 일정</h3>
        </S.AsideCard>

        <S.AsideCard>
          <h3>활발한 사용자</h3>
        </S.AsideCard>
      </S.BoardAside>
    </S.BoardWrap>
  );
}

export default Board;
