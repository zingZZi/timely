import * as S from './Input.style';

function Input({type="text",id,placeholder,value,onChange}){
    return(
        <S.Input 
          type={type} 
          id={id} 
          placeholder={placeholder} 
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default Input