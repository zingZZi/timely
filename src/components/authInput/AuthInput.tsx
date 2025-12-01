
import * as Styled from './AuthInputStyle';

type AuthInputProps = {
  labelText: string;        // 라벨 텍스트
  type?: string;            // input 타입 (text, password 등)
  placeholder?: string;     // placeholder (선택)
  required?: boolean;       // 필수 여부
  errorMessage?: string;    // 에러 메시지
  value?: string;           // 컨트롤 input용
  inputId:string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function AuthInput (
    {labelText,
        inputId,
        placeholder,
        type = "text",
        required = false,
        errorMessage,
        value,
        onChange
    }:AuthInputProps){
    return(
        <Styled.AuthInputWrap>
            <label htmlFor={inputId}>{labelText}</label>
            <input type={type} name={inputId} id={inputId} />
        </Styled.AuthInputWrap>
    )
}


export default AuthInput;