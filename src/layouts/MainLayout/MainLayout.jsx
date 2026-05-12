import { useState } from "react";
import Aside from "./Aside/Aside";
import Header from "./Header/Header";
import * as S from "./MainLayout.styles";
import { menus } from "../../data/sampleData";
import { Outlet } from "react-router-dom";

function MainLayout() {
  let [asideOpen, setAsideOpen] = useState(true);
  function asideClick() {
    setAsideOpen(!asideOpen);
  }
  return (
    <S.MainLayout>
      <Aside asideOpen={asideOpen} asideHandle={asideClick} menus={menus} />
      <S.MainContainer>
        <Header menus={menus} />
        <Outlet />
      </S.MainContainer>
    </S.MainLayout>
  );
}

export default MainLayout;
