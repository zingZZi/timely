import { useState } from "react";
import * as S from "./Comment.style";
import { ThumbsUp, CornerDownRight, Trash2 } from "lucide-react";
import CommentForm from "./CommentForm";
import { removePostsComments } from "../../api/boardApi";
import { useSelector } from "react-redux";

function CommentList({ data }) {
  let userInfo = useSelector((state) => {
    return state.userInfo;
  });

  //const [commentTumb, setCommentTumb] = useState("");
  const [reCommentBox, setReCommentBox] = useState(false);

  function recommentBoxShow() {
    setReCommentBox(!reCommentBox);
  }
  function recommentBoxHidden() {
    setReCommentBox(false);
  }

  const remvoeComment = async () => {
    try {
      removePostsComments(data.boardPostSn, data.boardCommentSn);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Comment $size="big">
      <S.Profile>
        <img src="/public/img/sample.png" alt="프로필 이미지" />
      </S.Profile>
      <S.CommentListCont>
        <S.CommentListInfo>
          <S.Name>{data.authorName}</S.Name>
          <S.Time>{data.createDt}</S.Time>
        </S.CommentListInfo>
        <S.CommnetText>{data.content}</S.CommnetText>

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
        {reCommentBox ? (
          <CommentForm size="small" cancle={recommentBoxHidden} />
        ) : null}
      </S.CommentListCont>
      {userInfo.userSn === data.authorUserSn ? (
        <S.DeleteBtn
          onClick={() => {
            // 삭제 로직 추가
            remvoeComment();
          }}
        >
          <Trash2 />
        </S.DeleteBtn>
      ) : null}
    </S.Comment>
  );
}

export default CommentList;
