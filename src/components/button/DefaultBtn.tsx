import { ChevronDownIcon } from "../icons/icons.style";
import { DefaultBtnStyle } from "./button.style";

interface BtnProps{
    type:"button"|"submit",
    text:string,
    color:"default"|"blue"|"red",
    icon?:"arrow",
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // 추가!
    
}

function DefaultBtn(props:BtnProps){
    return(
        <DefaultBtnStyle type={props.type} onClick={props.onClick}>
            {props.text}
            {
                props.icon === 'arrow' ? <ChevronDownIcon/>:null
            }
        </DefaultBtnStyle>
    )
}

export default DefaultBtn;