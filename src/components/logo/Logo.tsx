import { LogoText } from "./Logo.style";

interface TextProps {
  size?: "small" | "medium" | "large";
}
function Logo ({size}:TextProps){
    return(
        <LogoText size={size}>Timely♧</LogoText>
    )
}

export default Logo;