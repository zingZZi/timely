import { forwardRef } from "react";
import * as S from './Input.style';

const Input = forwardRef(({ type = "text", id, size = "normal", placeholder, value, onChange, isEmptyValue }, ref) => {
    return (
        <S.Input 
            ref={ref}
            type={type} 
            id={id} 
            placeholder={placeholder} 
            value={value}
            onChange={(e) => onChange(e.target.value)}
            size={size}
            isEmptyValue={isEmptyValue}
        />
    )
});

export default Input