import SelectShell from "./SelectShell";
import * as S from './Select.style';
import { useEffect, useState } from "react";
import { usePopup } from "../../../providers/popup/usePopup";
import FormField from "../FormField/FormField";
import Input from "../Input/Input";


function SearchSelect({popTitle,placeholder,value,onChange,datalists}) {
    const { openPopup } = usePopup();
    return (
        <SelectShell placeholder={placeholder} value={value}
            onClick={() => openPopup({
                title: popTitle,
                content: <SearchSelectPop onSelect={onChange} datalists={datalists}/>
            })}
        />
    );
}
function SearchSelectPop({onSelect,datalists}){
    const { closePopup } = usePopup();
    const handleClick = (data)=>{
        onSelect(data);
        closePopup();
    }

    //input 검색관련
    const [searchInput, setSearchInput] = useState('');
    const filteredData = datalists.filter((item) =>{
       return item.companyNm.includes(searchInput)
    }
    );
    return(
        <>
            <FormField placeholder="회사명을 검색하세요" id="searchCompany">
                <Input value={searchInput} onChange={(value)=>{
                    setSearchInput(value)
                }}/>
            </FormField>
            
            <S.SearchLists>
                {
                    filteredData.map((data)=>{
                        return(
                            <S.SearchList key={data.id}>
                                <S.SearchListBtn onClick={() => handleClick(data)}>
                                    {data.companyNm}
                                </S.SearchListBtn>
                            </S.SearchList>
                        )
                    })
                }
            </S.SearchLists>


        </>
    )
}

export default SearchSelect;