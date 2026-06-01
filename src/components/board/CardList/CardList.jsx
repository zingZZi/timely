import { Link } from "react-router-dom";
import * as S from "./CardList.style";
import { CATEGORYMAP, STATUSMAP } from "../../../constants/boardBadge";

function CardList({ data }) {
  const categoryInfo = CATEGORYMAP[data.category];
  const statusInfo = STATUSMAP[data.status];
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
        <S.SubText>{data.content}</S.SubText>
        <S.BoardInfos>
          <S.WriterInfo>
            <S.Thumb></S.Thumb>
            <span>{data.authorName}</span>

            <S.Date>{data.createDt.split("T")[0]}</S.Date>
          </S.WriterInfo>

          <div></div>
        </S.BoardInfos>
      </Link>
    </S.BoardCard>
  );
}

export default CardList;
