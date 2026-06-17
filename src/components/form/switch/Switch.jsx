import * as S from "./Switch.style";
function Switch({ id, name, desc, value,onClick}) {
  return (
    <S.SwitchWrap>
      <S.Swith
        type="checkbox"
        id={id}
        name={name}
        aria-describedby={desc}
        value={value}
        checked={value}
        readOnly
      />
      <S.SwitchBtn type="button" onClick={onClick}></S.SwitchBtn>
    </S.SwitchWrap>
  );
}

export default Switch;
