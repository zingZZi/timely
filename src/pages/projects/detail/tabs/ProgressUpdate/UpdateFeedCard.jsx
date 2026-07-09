import {
  RefreshCw,
  SquareArrowOutUpRight,
  FileText,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
import * as S from "./UpdateFeedCard.style";
import ProfileImg from "../../../../../components/profileImg/ProfileImg";
import CommentLists from "./CommentLists";
import { useState } from "react";
import { fetchFeedCommentList } from "../../../../../api/projectApi";
function UpdateFeedCard({ data }) {
  let [commentLitsShow, setCommentLitsShow] = useState(false);
  let [commentLits, setCommentLits] = useState(false);

  const fetchCommentList = async () => {
    if (!commentLitsShow) return;

    try {
      const res = fetchFeedCommentList(data.projectSn, data.projectUpdateSn);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.UpdateFeedCard>
      <ProfileImg size={3.2} img="/img/sample.png" alt="홍길동 프로필 이미지" />

      <S.CardContent>
        <S.CardMeta>
          <S.Name>{data.authorUserNm}</S.Name>
          <S.DateTime dateTime={data.updateDt}>{data.updateDt}</S.DateTime>
        </S.CardMeta>

        <S.CardType>
          <S.CardTypeSvgWrap aria-hidden="true" $type={data.updateType}>
            <RefreshCw />
          </S.CardTypeSvgWrap>
          <span>{data.updateTypeNm}</span>
          {data.updateType === "TASK_CHANGE" ? <span>자동</span> : null}
        </S.CardType>

        <S.CardTitle>{data.title}</S.CardTitle>

        <S.CardSummary>{data.content}</S.CardSummary>

        <S.TaskListBtn aria-label="해당업데이트 작업내역">
          <SquareArrowOutUpRight />
          UI/UX 디자인 설계 보기
        </S.TaskListBtn>

        {/* <S.FileLists>
          <S.FileList>
            <FileText />
            프론트엔드_진행현황_20240205.pdf <S.FileBite>(2.3MB)</S.FileBite>
          </S.FileList>
          <S.FileList>
            <FileText />
            프론트엔드_진행현황_20240205.pdf <S.FileBite>(2.3MB)</S.FileBite>
          </S.FileList>
        </S.FileLists> */}

        <S.CommentBtn
          onClick={() => {
            setCommentLitsShow(!commentLitsShow);
            fetchCommentList();
          }}
        >
          <MessageSquare />
          댓글 {data.commentCount}개
          <S.CommentArrowWrap $active={commentLitsShow}>
            <ChevronDown />
          </S.CommentArrowWrap>
        </S.CommentBtn>
        {commentLitsShow ? <CommentLists /> : null}
      </S.CardContent>
    </S.UpdateFeedCard>
  );
}

export default UpdateFeedCard;
