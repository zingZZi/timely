import { useEffect, useState } from 'react';
import * as S from './Select.style';
import SelectShell from "./SelectShell";

function NativeSelect({size="normal",placeholder,datalists,onChange,value,dataValue,dataText}){
    
  const selectedText =
    datalists?.find((item) => item[dataValue] === value)?.[dataText] || "";
    return(
        <S.Wrapper>
            <SelectShell size={size} placeholder={placeholder} value={selectedText}/>
            <S.HiddenSelect 
                name={dataValue}
                onChange={(e) => {
                    onChange(e.target.value); // 코드값 전달
                }}
            >
                {
                    datalists.map((data,e)=>{
                        return(
                            <option 
                                key={e} 
                                value={data[dataValue]} 
                            >
                                {data[dataText]}
                            </option>
                        )
                    })
                }
            </S.HiddenSelect>
        </S.Wrapper>
    )
}

export default NativeSelect;