import SelectShell from "./SelectShell";
import * as S from "./Select.style";
import { useState } from "react";
import { usePopup } from "../../../providers/popup/usePopup";
import FormField from "../FormField/FormField";
import Input from "../Input/Input";
import { X } from "lucide-react";
import ProfileImg from "../../profileImg/ProfileImg";

function SearchSelect({
  popTitle,
  placeholder,
  value,
  onChange,
  datalists,
  labelKey,
  subtext,
  headerIcon,
  arrowIcon,
  renderItem, // 추가: 커스텀 렌더링 함수
  searchKeys, // 추가: 검색할 키 목록 (없으면 labelKey로 검색)
  popFooter,
  renderSelected,
  multiple,
  compareKey,
  isEmptyValue
}) {
  const { openPopup } = usePopup();
  return (
    <SelectShell
      placeholder={placeholder}
      arrowIcon={arrowIcon}
      value={value}
      renderSelected={renderSelected}
      isEmptyValue={isEmptyValue}
      onClick={() =>
        openPopup({
          headerIcon: headerIcon,
          title: popTitle,
          subtext: subtext,
          popFooter: popFooter,
          content: (
            <SearchSelectPop
              onSelect={onChange}
              datalists={datalists}
              labelKey={labelKey}
              renderItem={renderItem}
              searchKeys={searchKeys}
              multiple={multiple}
              value={value}
              compareKey={compareKey}
            />
          ),
        })
      }
    />
  );
}
function SearchSelectPop({
  onSelect,
  datalists,
  labelKey,
  renderItem,
  searchKeys,
  multiple,
  value,
  compareKey,
}) {
  //다중선택관련
  const [values, setValues] = useState(value);

  const { closePopup } = usePopup();
  const handleClick = (data) => {
    if (multiple) {
      //다중선택 Action
      const isChecked = values.some(
        (item) => item[compareKey] === data[compareKey],
      );
      if (isChecked) {
        //선택 해제
        const newValues = values.filter(
          (item) => item[compareKey] !== data[compareKey],
        );

        setValues(newValues);
        onSelect(newValues);
      } else {
        const newValues = [...values, data];
        setValues(newValues);
        onSelect(newValues);
      }
    } else {
      //단일선택 Action
      onSelect(data);
      closePopup();
    }
  };

  //리스트 삭제버튼
  function Delete(data) {
    const newValues = values.filter(
      (item) => item[compareKey] !== data[compareKey],
    );
    setValues(newValues);
    onSelect(newValues);
  }

  //input 검색관련
  const [searchInput, setSearchInput] = useState("");
  // searchKeys가 있으면 여러 키에서 검색, 없으면 기존 labelKey로 검색
  const filteredData = datalists.filter((item) => {
    if (!searchInput) return true; // ← searchInput이 "" 일때 true 리턴하는데
    const keys = searchKeys ?? [labelKey];
    return keys.some((key) => item[key]?.includes(searchInput));
  });

  return (
    <>
      <FormField placeholder="회사명을 검색하세요" id="searchCompany">
        <Input
          value={searchInput}
          onChange={(value) => {
            setSearchInput(value);
          }}
        />
      </FormField>

      {multiple && values ? (
        <S.SeletedLists>
          {values.map((e, i) => {
            return (
              <S.SeletedList key={i}>
                <ProfileImg size={1.6} />
                {e.userNm}
                <S.DeleteBtn
                  onClick={() => {
                    Delete(e);
                  }}
                >
                  <X />
                </S.DeleteBtn>
              </S.SeletedList>
            );
          })}
        </S.SeletedLists>
      ) : null}

      <S.SearchLists>
        {filteredData.map((data, i) => {
          const isChecked = multiple
            ? values.some((value) => value[compareKey] === data[compareKey])
            : null;
          return (
            <S.SearchList key={i}>
              <S.SearchListBtn
                onClick={() => handleClick(data)}
                $active={
                  multiple
                    ? values.some(
                        (value) => value[compareKey] === data[compareKey],
                      )
                    : null
                }
              >
                {renderItem ? renderItem(data, isChecked) : data[labelKey]}
              </S.SearchListBtn>
            </S.SearchList>
          );
        })}
      </S.SearchLists>
    </>
  );
}

export default SearchSelect;
