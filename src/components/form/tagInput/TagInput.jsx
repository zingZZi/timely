import { useState } from "react";
import { X } from "lucide-react";
import * as S from "./TagInput.style";
function TagInput({ size, placeholder, value, onChange, id }) {
  let tagLists = value;
  let [inputValue, setInputValue] = useState("");
  function Delete(index) {
    let copy = [...tagLists];
    copy.splice(index, 1);
    onChange(copy);
  }

  function InputKeyDown(value) {
    let copy = [...tagLists];
    const tag = value.trim();
    if (!tag) return;
    if (copy.includes(tag)) return;
    copy.push(value);
    onChange(copy);
    setInputValue("");
  }

  function BackSpace() {
    let copy = [...tagLists];
    copy.pop();
    onChange(copy);
  }

  return (
    <>
      <S.TagInputWrap size={size}>
        {tagLists.length > 0 ? (
          <S.Tags>
            {tagLists.map((e, i) => {
              return (
                <S.Tag key={i}>
                  {e}
                  <S.Delete
                    type="button"
                    onClick={() => {
                      Delete(i);
                    }}
                  >
                    <X />
                  </S.Delete>
                </S.Tag>
              );
            })}
          </S.Tags>
        ) : null}

        <S.Input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          id={id}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.nativeEvent.isComposing) return;
            if (e.key === "Enter") {
              InputKeyDown(e.target.value);
            } else if (e.key === "Backspace" && e.target.value === "") {
              BackSpace();
            }
          }}
        />
      </S.TagInputWrap>
      <S.NoticeText>
        Enter 키로 태그를 추가하고, Backspace 키로 삭제할 수 있습니다
      </S.NoticeText>
    </>
  );
}

export default TagInput;
