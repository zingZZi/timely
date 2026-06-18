import * as S from "./ProfileImg.style";
import DefaultImg from "/public/img/logo.png";
function ProfileImg({ size, img, alt }) {
  return (
    <S.ProfileWrap size={size}>
      <img src={img || DefaultImg} alt={alt || "프로필이미지"} />
    </S.ProfileWrap>
  );
}

export default ProfileImg;
