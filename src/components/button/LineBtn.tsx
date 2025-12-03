import { ChevronDownIcon } from "../icons/icons.style";
import { LineBtnStyle } from "./button.style";

interface BtnProps{
    type:"button"|"submit",
    text:string,
    color:"default"|"blue"|"red",
    icon?:"arrow",
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // 추가!
    
}

function LineBtn(props:BtnProps){
    return(
        <LineBtnStyle type={props.type} onClick={props.onClick}>
            {props.text}
            {
                props.icon === 'arrow' ? <ChevronDownIcon/>:null
            }
        </LineBtnStyle>
    )
}

export default LineBtn;