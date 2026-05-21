import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchPostsComments, fetchPostsDetail } from "../../api/boardApi";
import * as S from "./BoardDetail.style";
import { CATEGORYMAP, STATUSMAP } from "../../constants/boardBadge";
import Comment from "../../components/Comment/Comment";

function BoardDetail() {
  const { id } = useParams();
  const [pageData, setPageData] = useState({});
  const [comments, setComments] = useState({});

  const categoryInfo = CATEGORYMAP[pageData.category];
  const statusInfo = STATUSMAP[pageData.status];

  useEffect(() => {
    const detailData = async () => {
      try {
        const res = await fetchPostsDetail(id);
        const resComment = await fetchPostsComments(id);
        setPageData(res.data);
        setComments(resComment.data);
        console.log(resComment.data);
      } catch (error) {
        console.log(error);
      }
    };
    detailData();
  }, []);
  return (
    <>
      <S.BackLink to="">게시판으로 돌아가기</S.BackLink>
      <S.PageDetailWrap>
        <h2 className="text-ir">게시판 상세페이지</h2>
        <div>
          <div>
            <span>{categoryInfo?.label}</span>
            <span>{statusInfo?.label}</span>

            <div>
              <button type="button">좋아요</button>
              <button type="button">저장하기</button>
              <button type="button">공유하기</button>
            </div>
          </div>

          <div>
            <S.Title>{pageData.title}</S.Title>

            <div>
              <span>좋아요 개수</span>
              <span>{pageData.commentCount}</span>
            </div>
          </div>

          <div>
            <span>{pageData.authorName}</span>
            <time dateTime={pageData.createDt}>{pageData.createDt}</time>
          </div>
        </div>

        <div>{pageData.content}</div>
      </S.PageDetailWrap>

      <section>
        <S.CommentTitle>댓글 {comments.totalElements}</S.CommentTitle>

        <div>
          <Comment size="big"  radius="" />
        </div>

        <ul>
          {
            comments.content?.map((e,i)=>{
              return(
                <li key={i}>
                  {e.content}
                </li>
              )
            })
          }
        </ul>
      </section>
    </>
  );
}

export default BoardDetail;
