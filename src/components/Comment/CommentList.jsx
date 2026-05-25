import * as S from "./Comment.style";

function CommentList({ content }) {
  console.log(content);
  return (
    <S.Comment>
      <S.Profile>
        <img src="/sample/img.jpg" alt="프로필 이미지" />
      </S.Profile>
      <S.CommentListCont>
        <S.CommentListInfo>
          <S.Name>김아무개</S.Name>
          <S.Time>2025-01-15 15:20</S.Time>
        </S.CommentListInfo>
        <p>{content}</p>
      </S.CommentListCont>
    </S.Comment>
  );
}

export default CommentList;
