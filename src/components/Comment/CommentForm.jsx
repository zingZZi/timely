import { useState } from "react";
import * as S from "./Comment.style";
import { useParams } from "react-router-dom";
import { postComments } from "../../api/boardApi";

function CommentForm({ size }) {
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Comment>
      <h3 className="text-ir">댓글작성</h3>
      <S.Profile>
        <img src="/public/img/sample.png" alt="프로필 이미지" />
      </S.Profile>
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
          <S.Btn
            type="button"
            onClick={() => {
              handelSubmit();
            }}
          >
            등록
          </S.Btn>
        </S.CommentFormFooter>
      </S.CommentForm>
    </S.Comment>
  );
}

export default CommentForm;
