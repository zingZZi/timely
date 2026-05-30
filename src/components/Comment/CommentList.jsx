import { useState } from "react";
import * as S from "./Comment.style";
import { ThumbsUp, CornerDownRight } from "lucide-react";
import CommentForm from "./CommentForm";

function CommentList({ content }) {
  const [commentTumb, setCommentTumb] = useState("");
  const [reCommentBox, setReCommentBox] = useState(false);
  console.log(content);

  function recommentBoxShow() {
    setReCommentBox(!reCommentBox);
  }
  return (
    <S.Comment>
      <S.Profile>
        <img src="/public/img/sample.png" alt="프로필 이미지" />
      </S.Profile>
      <S.CommentListCont>
        <S.CommentListInfo>
          <S.Name>김아무개</S.Name>
          <S.Time>2025-01-15 15:20</S.Time>
        </S.CommentListInfo>
        <S.CommnetText>{content}</S.CommnetText>

        <S.CommentActions>
          <S.TumbBtn>
            <ThumbsUp />
            <S.TumbNum>0</S.TumbNum>
          </S.TumbBtn>

          <S.ReCommentBtn
            onClick={() => {
              recommentBoxShow();
            }}
          >
            <CornerDownRight />
            <span>답글</span>
            <span>0</span>
          </S.ReCommentBtn>
        </S.CommentActions>
        {reCommentBox ? <CommentForm /> : null}
      </S.CommentListCont>
    </S.Comment>
  );
}

export default CommentList;
