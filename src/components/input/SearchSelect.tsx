import { useState } from "react";

function  SearchSelect(){
    const [open,setOpen] = useState(false);
    const [selectValue,setValue] =useState('값을 선택해주세요');

    function PopOpen(){
        setOpen(true);
    };
    return(
        <button type="button" onClick={PopOpen}>
            <span>{selectValue}</span>
            <i>화살표 버튼</i>
        </button>
    )
}

export default SearchSelect;