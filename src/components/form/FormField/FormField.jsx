import React from "react";
import * as S from "./FormField.style";

function FormField({
  label,
  must = false,
  children,
  id,
  error = true,
  errorText,
}) {
  return (
    <>
      <S.FormFieldBox>
        <S.Label htmlFor={id}>
          {label}
          {must ? <S.MustIcon>*</S.MustIcon> : null}
        </S.Label>
        {React.cloneElement(children, { id })}
      </S.FormFieldBox>
      {error ? null : <S.ErrorText>{errorText}</S.ErrorText>}
    </>
  );
}

export default FormField;
