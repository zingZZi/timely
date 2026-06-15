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
function UpdateFeedCard() {
  let [commentLitsShow, setCommentLitsShow] = useState(false);
  return (
    <S.UpdateFeedCard>
      <ProfileImg size={3.2} img="/img/sample.png" alt="홍길동 프로필 이미지" />

      <S.CardContent>
        <S.CardMeta>
          <S.Name>홍길동</S.Name>
          <S.DateTime dateTime="2024-06-01">2024-06-01</S.DateTime>
        </S.CardMeta>

        <S.CardType>
          <S.CardTypeSvgWrap aria-hidden="true">
            <RefreshCw />
          </S.CardTypeSvgWrap>
          <span>작업 변경</span>
          <span>자동</span>
        </S.CardType>

        <S.CardTitle>작업 완료: UI/UX 디자인 설계</S.CardTitle>

        <S.CardSummary>
          "UI/UX 디자인 설계" 작업을 완료 처리했습니다.
        </S.CardSummary>

        <S.TaskListBtn aria-label="해당업데이트 작업내역">
          <SquareArrowOutUpRight />
          UI/UX 디자인 설계 보기
        </S.TaskListBtn>

        <S.FileLists>
          <S.FileList>
            <FileText />
            프론트엔드_진행현황_20240205.pdf <S.FileBite>(2.3MB)</S.FileBite>
          </S.FileList>
          <S.FileList>
            <FileText />
            프론트엔드_진행현황_20240205.pdf <S.FileBite>(2.3MB)</S.FileBite>
          </S.FileList>
        </S.FileLists>

        <S.CommentBtn
          onClick={() => {
            setCommentLitsShow(!commentLitsShow);
          }}
        >
          <MessageSquare />
          댓글 2개
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
