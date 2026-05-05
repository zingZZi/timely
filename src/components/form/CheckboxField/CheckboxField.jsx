import React from "react";
import * as S from './CheckboxField.style';
import { Check } from 'lucide-react';

function CheckboxField({text,id,children,checkBoxState}){
    return(
        <S.CheckBoxWrap>
            <S.CheckBox $active={checkBoxState}>
                {checkBoxState && <Check color="white"/>}
            </S.CheckBox>
            {React.cloneElement(children, { id })}
            <S.CheckBoxLabel htmlFor={id}>{text}</S.CheckBoxLabel>
        </S.CheckBoxWrap>
    )
}

export default CheckboxField;