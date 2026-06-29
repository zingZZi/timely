import { useState } from "react";
import * as S from "./Comment.style";
import { useParams } from "react-router-dom";
import { postComments } from "../../api/boardApi";
import ProfileImg from "../profileImg/ProfileImg";

function CommentForm({ size, cancle, onCommentCreated }) {
  const { id } = useParams();
  const [textCount, setTextCount] = useState(0);
  const [commentText, setCommentText] = useState("");
  function commentHandler(value) {
    const num = value.length;
    setCommentText(value);
    setTextCount(num);
  }
  const handelSubmit = async () => {
    try {
      await postComments({
        boardPostSn: id,
        content: commentText,
      });
      setTextCount(0);
      setCommentText("");
      onCommentCreated();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Comment $size={size}>
      <h3 className="text-ir">댓글작성</h3>
      <ProfileImg size={3.6} />
      <S.CommentForm>
        <S.WriteBox
          maxLength={500}
          $size={size}
          value={commentText}
          onChange={(e) => {
            commentHandler(e.target.value);
          }}
          placeholder="댓글을 입력하세요."
        />
        <S.CommentFormFooter>
          <S.TextCount>{textCount}/500자</S.TextCount>
          <S.BtnsWrap>
            {size === "small" ? (
              <S.CanCleBtn type="button" $size={size} onClick={cancle}>
                취소
              </S.CanCleBtn>
            ) : null}
            <S.Btn
              type="button"
              $size={size}
              onClick={() => {
                handelSubmit();
              }}
            >
              등록
            </S.Btn>
          </S.BtnsWrap>
        </S.CommentFormFooter>
      </S.CommentForm>
    </S.Comment>
  );
}

export default CommentForm;
