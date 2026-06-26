import * as S from "./PopupList.style";
import ProfileImg from "./../../../../components/profileImg/ProfileImg";
import { Check } from "lucide-react";
function PopupList({ data, multiple, checked }) {
  return (
    <S.FlexBox>
      <S.UserInfo>
        <S.MultipleProfileWrap>
          <ProfileImg size={4} img={data.profileImg} alt={data.userNm} />
          {checked ? <Check /> : null}
        </S.MultipleProfileWrap>
        <div>
          <S.UserName>{data.userNm}</S.UserName>
          <S.UserMeta>
            <span>{data.companyNm}</span>
            <span>{data.positionNm}</span>
          </S.UserMeta>
        </div>
      </S.UserInfo>
      {multiple ? (
        <S.MultipleCheckBox className={checked ? "hi" : null}>
          {checked ? <Check /> : null}
        </S.MultipleCheckBox>
      ) : null}
    </S.FlexBox>
  );
}

export default PopupList;
