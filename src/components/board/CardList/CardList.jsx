import { Link } from "react-router-dom";
import * as S from "./CardList.style";
import { CATEGORY_MAP, STATUS_MAP } from "../../constants/boardBadge";

function CardList({ data }) {
  const categoryInfo = CATEGORY_MAP[data.category];
  const statusInfo = STATUS_MAP[data.status];
  return (
    <S.BoardCard>
      <Link to="">
        <S.IconWrap>
          <S.Icon>{data.category}</S.Icon>
          <S.Icon>{data.status}</S.Icon>
        </S.IconWrap>
        <S.Title>{data.title}</S.Title>
        <S.SubText>서브내용</S.SubText>
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
