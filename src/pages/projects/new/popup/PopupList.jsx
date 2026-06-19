import * as S from "./PopupList.style";
import ProfileImg from "./../../../../components/profileImg/ProfileImg";
function PopupList({ data, multiple }) {
  return (
    <S.FlexBox>
      <S.UserInfo>
        <ProfileImg size={4} img={data.profileImg} alt={data.userNm} />
        <div>
          <S.UserName>{data.userNm}</S.UserName>
          <S.UserMeta>
            <span>{data.companyNm}</span>
            <span>{data.positionNm}</span>
          </S.UserMeta>
        </div>
      </S.UserInfo>
      {
        multiple?<input type="checkbox" />:null
      }
    </S.FlexBox>
  );
}

export default PopupList;
