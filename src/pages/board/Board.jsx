import PageHeader from "../../components/PageHeader/PageHeader";
import * as S from "./Board.style";
import CardList from "../../components/board/CardList/CardList";
import { useEffect, useState } from "react";
import { fetchPosts } from "../../api/boardApi";

function Board() {
  const [boardList, setBoardList] = useState([]);

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
  return (
    <S.BoardWrap>
      <S.BoardSection>
        <PageHeader
          title="게시판"
          subtitle="프로젝트 관련 공지와 아이디어를 공유하세요."
        />
        <S.BoardFilter>
          <S.BtnFilters>
            <S.FilterBtn className="active">전체</S.FilterBtn>
            <S.FilterBtn>공지</S.FilterBtn>
            <S.FilterBtn>아이디어</S.FilterBtn>
            <S.FilterBtn>Q&A</S.FilterBtn>
            <S.FilterBtn>회의록</S.FilterBtn>
          </S.BtnFilters>
          <S.Input type="text" placeholder="제목, 작성자, 내용 검색..." />
        </S.BoardFilter>

        <S.BoardLists>
          {boardList.map((e, i) => {
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
