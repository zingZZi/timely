import { FlexBox } from "../../styles/flex";


type InputProps = {
  labelText: string;        // 라벨 텍스트
  placeholder?: string;     // placeholder (선택)
  required?: boolean;       // 필수 여부
  errorMessage?: string;    // 에러 메시지
  inputId:string;
};

export function RadioInput({labelText,placeholder,required,errorMessage,inputId}:InputProps){
    return(
        <div>
            <label htmlFor="">{labelText}</label>
            <input name={inputId} id={inputId}  type="radio" />
        </div>
    )
} 


export function CheckboxInput({labelText,placeholder,required,errorMessage,inputId}:InputProps){
    return(
        <FlexBox xs={20}>
        <label htmlFor={inputId}>{labelText}</label>
        <input type="checkbox" name={inputId} id={inputId} />
        </FlexBox>
    )
} 