import * as S from "./Textarea.style";

function Textarea({ name, value, onChange }) {
  return (
    <S.Textarea
      name={name}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    ></S.Textarea>
  );
}

export default Textarea;
