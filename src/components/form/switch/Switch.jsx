import * as S from "./Switch.style";
function Switch({ id, name, desc, value }) {
  return (
    <S.SwitchWrap>
      <S.Swith
        type="checkbox"
        id={id}
        name={name}
        aria-describedby={desc}
        value={value}
        checked={value}
      />
      <S.SwitchBtn></S.SwitchBtn>
    </S.SwitchWrap>
  );
}

export default Switch;
