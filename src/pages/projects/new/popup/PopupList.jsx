import * as S from "./PopupList.style";
import ProfileImg from "./../../../../components/profileImg/ProfileImg";
function PopupList({ data }) {
  return (
    <S.FlexBox>
      <div>
        <ProfileImg size={4} img={data.profileImg} alt={data.userNm} />
        <div>
          <S.UserName>{data.userNm}</S.UserName>
          <S.UserMeta>
            <span>{data.companyNm}</span>
            <span>{data.positionNm}</span>
          </S.UserMeta>
        </div>
      </div>
      <input type="checkbox" />
    </S.FlexBox>
  );
}

export default PopupList;
