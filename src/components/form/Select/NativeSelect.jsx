import { useEffect, useState } from 'react';
import * as S from './Select.style';
import SelectShell from "./SelectShell";

function NativeSelect({placeholder,datalists,onSelect,value}){
    return(
        <S.Wrapper>
            <SelectShell placeholder={placeholder} value={value}/>
            <S.HiddenSelect 
                onChange={(e)=>{
                    onSelect(e.target.value)
                }}>
                {
                    datalists.map((data,e)=>{
                        return(
                            <option key={e} value={data.label}>{data.label}</option>
                        )
                    })
                }
            </S.HiddenSelect>
        </S.Wrapper>
    )
}

export default NativeSelect;