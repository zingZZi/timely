import { useState } from 'react';
import * as S from './Select.style';
import { ChevronDown } from 'lucide-react';

function SelectShell({ value, placeholder,...props }){
    return(
        <S.SelectBox type='button'  {...props}>
            {value ||  <S.Placeholder>{placeholder}</S.Placeholder>}
            <ChevronDown/>
        </S.SelectBox>
    )
}

export default SelectShell;