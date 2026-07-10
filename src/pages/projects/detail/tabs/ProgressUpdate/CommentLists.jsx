import ProfileImg from "../../../../../components/profileImg/ProfileImg";
import { CornerDownLeft } from "lucide-react";
import * as S from "./CommentLists.style";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  deleteFeedCommentList,
  postFeedCommentList,
} from "../../../../../api/projectApi";
import { Trash } from "lucide-react";

function CommentLists({ projectSn, projectUpdateSn, data, updateLists }) {
  let userInfo = useSelector((state) => {
    return state.userInfo;
  });
  const [form, setForm] = useState({
    content: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // 필수: 새로고침 방지
    if (form.content === "") return; //input 빈값체크
    let now = new Date(); //시간정보 가져오기
    const submitData = {
      authorUserSn: userInfo.userSn,
      authorUserNm: userInfo.userNm,
      content: form.content,
      createDt: now.toISOString().slice(0, 10),
    };
    try {
      await postFeedCommentList(projectSn, projectUpdateSn, submitData);
      updateLists();
      setForm({
        content: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSubmit = async (e) => {
    try {
      const projectUpdateCommentSn = e;
      await deleteFeedCommentList(
        projectSn,
        projectUpdateSn,
        projectUpdateCommentSn,
      );
      updateLists();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <S.CommentLists>
        {data?.map((e, i) => {
          return (
            <S.CommentList key={i}>
              <ProfileImg size={2.4} alt={`${e.authorUserNm} 프로필 이미지`} />
              <S.CommentContainer>
                <S.CommentMeta>
                  <span>{e.authorUserNm}</span>
                  <S.MetaDate>{e.createDt.slice(0, 10)}</S.MetaDate>
                  {userInfo.userSn === e.authorUserSn ? (
                    <S.DeleteBtn
                      onClick={() => {
                        deleteSubmit(e.projectUpdateCommentSn);
                      }}
                    >
                      <Trash />
                    </S.DeleteBtn>
                  ) : null}
                </S.CommentMeta>
                <S.CommnetContent>{e.content}</S.CommnetContent>
              </S.CommentContainer>
            </S.CommentList>
          );
        })}
      </S.CommentLists>
      <S.CommentWrite onSubmit={handleSubmit}>
        <ProfileImg
          size={2.4}
          img="/img/sample.png"
          alt="홍길동 프로필 이미지"
        />
        <S.CommentTextarea
          placeholder="댓글을 입력하세요....(Enter로 전송)"
          value={form.content}
          onChange={(e) => {
            setForm((prev) => ({
              ...prev,
              content: e.target.value,
            }));
          }}
        />
        <CornerDownLeft />
      </S.CommentWrite>
    </>
  );
}

export default CommentLists;
