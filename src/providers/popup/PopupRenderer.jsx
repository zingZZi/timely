import { createPortal } from "react-dom";
import * as S from "./Popup.style";
import { X } from "lucide-react";
import { BasicBtn } from "../../components/Button/Button";

function PopupRenderer({ popup, closePopup }) {
  if (!popup) return null;

  return createPortal(
    <S.Dim>
      <S.Layout onClick={(e) => e.stopPropagation()}>
        <S.Header>
          <S.HeaderWrap>
            {popup.headerIcon ? (
              <S.HeaderIconWrap>{popup.headerIcon}</S.HeaderIconWrap>
            ) : null}
            <div>
              <S.Title>{popup.title}</S.Title>
              {popup.subtext ? <S.SubText>{popup.subtext}</S.SubText> : null}
            </div>
          </S.HeaderWrap>
          <button onClick={closePopup}>
            <span className="text-ir">닫기</span>
            <X />
          </button>
        </S.Header>
        {popup.content}
        {popup.popFooter ? (
          <S.PopFooter>
            <BasicBtn onClick={closePopup}>완료</BasicBtn>
          </S.PopFooter>
        ) : null}
      </S.Layout>
    </S.Dim>,
    document.body,
  );
}

export default PopupRenderer;
