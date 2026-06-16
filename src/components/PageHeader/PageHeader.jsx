import * as S from "./PageHeader.style";
import { Plus } from "lucide-react";

function PageHeader({ title, subtitle, more = false, link = false, linkText }) {
  return (
    <S.PageHeaderWrap>
      <S.PageTitleWrap>
        <S.PageTitle>{title}</S.PageTitle>
        {more ? <S.MoreBtn to={more}>전체 보기</S.MoreBtn> : null}

        {link ? (
          <S.AddBtn to={link}>
            <Plus />
            {linkText}
          </S.AddBtn>
        ) : null}
      </S.PageTitleWrap>
      {subtitle ? <S.Description>{subtitle}</S.Description> : null}
    </S.PageHeaderWrap>
  );
}

export default PageHeader;
