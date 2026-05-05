import { useEffect, useState } from 'react';
import * as S from './Select.style';
import SelectShell from "./SelectShell";

function NativeSelect({placeholder,value,datalists}){
    let [selectValue,SetSelectValue] = useState(null);
    useEffect(()=>{
        SetSelectValue(value)
    },[])
     const handleChange = (event) => {
        SetSelectValue(event.target.value);
    };
    return(
        <S.Wrapper>
            <SelectShell placeholder={placeholder} value={selectValue}/>
            <S.HiddenSelect onChange={handleChange}>
                {
                    datalists.map((data,e)=>{
                        return(
                            <option key={e} value={data.value}>{data.label}</option>
                        )
                    })
                }
            </S.HiddenSelect>
        </S.Wrapper>
    )
}

export default NativeSelect;