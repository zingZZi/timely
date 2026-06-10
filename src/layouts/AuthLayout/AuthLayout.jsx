import { Outlet } from "react-router-dom";
import * as S from "./AuthLayout.styles";
import { useState } from "react";
import Logo from "../../components/Logo/Logo";

function AuthLayout() {
  const [authText, setAuthText] = useState(null);

  return (
    <>
      <S.logo>
        <Logo />
      </S.logo>
      <S.LayoutBox>
        <S.AuthFormContainer>
          <S.AuthFormContent>
            <Outlet context={{ setAuthText }} />
          </S.AuthFormContent>
        </S.AuthFormContainer>
        <S.AuthTextContent>
          <h2 className="text-ir">서비스 소개</h2>
          {authText}
        </S.AuthTextContent>
      </S.LayoutBox>
      <S.Footer>© 2025 Timely. All rights reserved.</S.Footer>
    </>
  );
}

export default AuthLayout;
