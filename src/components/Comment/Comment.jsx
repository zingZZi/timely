import * as S from "./Comment.style";

function Comment({ padding, radius }) {
  return (
    <S.Comment>
      <h3 className="text-ir">댓글작성</h3>
      <S.Profile>
        <img src="/sample/img.jpg" alt="프로필 이미지" />
      </S.Profile>
      <S.CommentForm>
        <S.WriteBox maxLength={500} padding={padding} radius={radius} />

        <S.CommentFormFooter>
          <span>/500자</span>
          <S.Btn type="submit">등록</S.Btn>
        </S.CommentFormFooter>
      </S.CommentForm>
    </S.Comment>
  );
}

export default Comment;
