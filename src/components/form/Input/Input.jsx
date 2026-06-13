import * as S from './Input.style';

function Input({type="text",id,size="normal",placeholder,value,onChange}){
    return(
        <S.Input 
          type={type} 
          id={id} 
          placeholder={placeholder} 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          size={size}
        />
    )
}

export default Input