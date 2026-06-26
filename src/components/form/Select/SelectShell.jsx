import * as S from "./Select.style";
import { ChevronDown } from "lucide-react";

function SelectShell({
  value,
  renderSelected,
  placeholder,
  arrowIcon = true,
  ...props
}) {
  const hasValue = Array.isArray(value) ? value.length > 0 : !!value;
  return (
    <S.SelectBox type="button" {...props}>
      {hasValue ? (
        renderSelected ? (
          renderSelected(value)
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
