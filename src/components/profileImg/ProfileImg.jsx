import * as S from "./ProfileImg.style";
function ProfileImg({ size, img, alt }) {
  return (
    <S.ProfileWrap size={size}>
      <img src={img} alt={alt} />
    </S.ProfileWrap>
  );
}

export default ProfileImg;
