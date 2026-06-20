import * as S from "./Select.style";
import { ChevronDown } from "lucide-react";

function SelectShell({
  value,
  renderSelected,
  placeholder,
  arrowIcon = true,
  ...props
}) {
  return (
    <S.SelectBox type="button" {...props}>
      {/* {value || <S.Placeholder>{placeholder}</S.Placeholder>} */}
      {value ? (
        renderSelected ? (
          renderSelected()
        ) : (
          value
        )
      ) : (
        <S.Placeholder>{placeholder}</S.Placeholder>
      )}
      {arrowIcon ? <ChevronDown /> : null}
    </S.SelectBox>
  );
}

export default SelectShell;
