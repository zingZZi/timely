import LineBtn from "../button/LineBtn";

interface SearchSelectProps {
  text: string;
  color?: "default" | "blue" | "red";
  icon?: "arrow";
  onClick?: () => void;
}

function SearchSelect({ text, color = "default", icon = "arrow", onClick }: SearchSelectProps) {
  return (
    <LineBtn 
      type="button" 
      text={text}
      color={color}
      icon={icon}
      onClick={onClick}
    />
  );
}

export default SearchSelect;