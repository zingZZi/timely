import { Link } from "react-router-dom";
import * as S from "./CardList.style";
import { MessageCircle, Heart } from "lucide-react";
import { CATEGORYMAP, STATUSMAP } from "../../../constants/boardBadge";
import ProfileImg from "../../profileImg/ProfileImg";

function CardList({ data }) {
  const categoryInfo = CATEGORYMAP[data.category];
  const statusInfo = STATUSMAP[data.status];
  const content = data.content.replace(/<[^>]*>/g, "").substring(0, 50);
  return (
    <S.BoardCard>
      <Link to={`detail/${data.boardPostSn}`}>
        <S.IconWrap>
          <S.Icon
            style={{
              backgroundColor: categoryInfo.bgColor,
              color: categoryInfo.color,
            }}
          >
            {categoryInfo.label}
          </S.Icon>
          <S.Icon
            style={{
              backgroundColor: statusInfo.bgColor,
              color: statusInfo.color,
            }}
          >
            {statusInfo.label}
          </S.Icon>
        </S.IconWrap>
        <S.Title>{data.title}</S.Title>
        <S.SubText>{content}</S.SubText>
        <S.BoardInfos>
          <S.WriterInfo>
            <ProfileImg size={2.8} />
            <span>{data.authorName}</span>

            <S.Date>{data.createDt.split("T")[0]}</S.Date>
          </S.WriterInfo>

          <S.CardActionsList>
            <S.Actions>
              <Heart className={data.likedByMe === true ? "active" : null} />
              {data.likeCount}
            </S.Actions>
            <S.Actions>
              <MessageCircle />
              {data.commentCount}
            </S.Actions>
          </S.CardActionsList>
        </S.BoardInfos>
      </Link>
    </S.BoardCard>
  );
}

export default CardList;
