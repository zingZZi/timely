
import React from "react";
import * as S from './FormField.style';

function FormField({label,must=false,children,id}){
    return(
        <S.FormFieldBox>
            <S.Label htmlFor={id}>
                {label}
                {
                    must?"*":null
                }
            </S.Label>
            {React.cloneElement(children, {id})}
        </S.FormFieldBox>
    )
}

export default FormField;