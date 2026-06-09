import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  fetchPostsComments,
  fetchPostsDetail,
  postLike,
  removeLike,
} from "../../api/boardApi";
import * as S from "./BoardDetail.style";
import { CATEGORYMAP, STATUSMAP } from "../../constants/boardBadge";
import CommentForm from "../../components/Comment/CommentForm";
import CommentList from "../../components/Comment/CommentList";

import { MessageCircle, Heart, Bookmark, Share2 } from "lucide-react";

function BoardDetail() {
  const { id } = useParams();
  const [pageData, setPageData] = useState({});
  const [comments, setComments] = useState({});
  const [like, setLike] = useState(false);
  const [likeNum, setLikeNum] = useState('');

  const categoryInfo = CATEGORYMAP[pageData.category];
  const statusInfo = STATUSMAP[pageData.status];

  useEffect(() => {
    const detailData = async () => {
      try {
        const res = await fetchPostsDetail(id);
        setPageData(res.data);
        setLike(res.data.likedByMe);
        setLikeNum(res.data.likeCount);
      } catch (error) {
        console.log(error);
      }
    };
    detailData();
  }, [id]);

  const getComments = async () => {
    try {
      const resComment = await fetchPostsComments(id);
      setComments(resComment.data);
    } catch (error) {
      console.log(error);
    }
  };


  const handleLike = async () => {
    try {
      if (like) {
        await removeLike(id);
        setLike(false);
        setLikeNum(likeNum-1)
      } else {
        await postLike(id);
        setLike(true);
        setLikeNum(likeNum+1)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
  getComments();
}, [id]);

  return (
    <>
      <S.BackLink to="">게시판으로 돌아가기</S.BackLink>
      <S.PageDetailWrap>
        <h2 className="text-ir">게시판 상세페이지</h2>
        <S.BoardInfo>
          <S.BoardTop>
            <S.LabelWrap>
              <S.Label
                style={{
                  color: categoryInfo?.color,
                  backgroundColor: categoryInfo?.bgColor,
                }}
              >
                {categoryInfo?.label}
              </S.Label>
              <S.Label
                style={{
                  backgroundColor: statusInfo?.bgColor,
                  color: statusInfo?.color,
                }}
              >
                {statusInfo?.label}
              </S.Label>
            </S.LabelWrap>

            <S.BoardActionBtns>
              <button
                type="button"
                onClick={() => {
                  handleLike();
                }}
              >
                <Heart className={like === true ? "active" : null} />
                <span className="text-ir">좋아요</span>
              </button>
              <button type="button">
                <Bookmark />
                <span className="text-ir">저장하기</span>
              </button>
              <button type="button">
                <Share2 />
                <span className="text-ir">공유하기</span>
              </button>
            </S.BoardActionBtns>
          </S.BoardTop>

          <S.Title>{pageData.title}</S.Title>

          <S.BoardMetaRow>
            <S.WriterInfo>
              <S.Thumb></S.Thumb>
              <div>
                <S.Name>{pageData.authorName}</S.Name>
                <S.Date dateTime={pageData.createDt}>
                  {pageData.createDt}
                </S.Date>
              </div>
            </S.WriterInfo>

            <S.BoardState>
              <p>
                <span className="text-ir">좋아요 갯수</span>
                <Heart />
                <span>{likeNum}</span>
              </p>

              <p>
                <span className="text-ir">댓글 갯수</span>
                <MessageCircle />
                <S.CommentCount>{comments.totalElements}</S.CommentCount>
              </p>
            </S.BoardState>
          </S.BoardMetaRow>
        </S.BoardInfo>

        <S.BoardContent
          dangerouslySetInnerHTML={{ __html: pageData.content }}
        />
      </S.PageDetailWrap>

      <section>
        <S.CommentTitle>
          <MessageCircle />
          댓글
          <S.MessageNum>{comments.totalElements}</S.MessageNum>
        </S.CommentTitle>

        <div>
          <CommentForm size="big" onCommentCreated={getComments} />
        </div>

        <S.CommentLists>
          {comments.content?.map((e, i) => {
            return (
              <S.CommentList key={i}>
                <CommentList data={e} />
              </S.CommentList>
            );
          })}
        </S.CommentLists>
      </section>
    </>
  );
}

export default BoardDetail;
