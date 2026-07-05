import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./Header.style";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProfileImg from "../../../components/profileImg/ProfileImg";
import { Bell, Settings, LogOut } from "lucide-react";

function Header({ menus }) {
  let userInfo = useSelector((state) => {
    return state.userInfo;
  });
  let navigate = useNavigate();
  const location = useLocation();
  const [headerPop, setHeaderPop] = useState({
    alarm: false,
    user: false,
  });

  const togglePop = (type) => {
    setHeaderPop((prev) => ({
      alarm: false,
      user: false,
      [type]: !prev[type],
    }));
  };

  console.log(userInfo);
  return (
    <S.Header>
      <nav>
        <S.HeaderMenu>
          {menus.map((e, i) => {
            return e.children.length ? (
              <S.MenuList key={i}>
                <S.MenuLink to={e.children[0].path}>
                  <S.MenuText
                    $active={
                      e.path === "/"
                        ? location.pathname === "/"
                        : location.pathname.startsWith(e.path)
                    }
                  >
                    {e.name}
                  </S.MenuText>
                </S.MenuLink>
              </S.MenuList>
            ) : (
              <S.MenuList key={i}>
                <S.MenuLink to={e.path}>
                  <S.MenuText
                    $active={
                      e.path === "/"
                        ? location.pathname === "/"
                        : location.pathname.startsWith(e.path)
                    }
                  >
                    {e.name}
                  </S.MenuText>
                </S.MenuLink>
              </S.MenuList>
            );
          })}
        </S.HeaderMenu>
      </nav>
      <S.HeaderActions>
        <S.AlarmContainer>
          <S.AlarmBtn
            onClick={() => {
              togglePop("alarm");
            }}
          >
            <Bell />
          </S.AlarmBtn>
          {headerPop.alarm ? (
            <S.AlarmPop>
              <p>알람</p>
            </S.AlarmPop>
          ) : null}
        </S.AlarmContainer>
        <S.HeaderUserInfo>
          <button
            onClick={() => {
              togglePop("user");
            }}
          >
            <ProfileImg size={3.2} img={userInfo.ProfileImg} />
          </button>
          {headerPop.user ? (
            <S.HeaderUserPop>
              <S.UserInfo>
                <p>
                  {userInfo.userNm}
                  <span>{userInfo.email}</span>
                </p>
              </S.UserInfo>
              <S.UserLinks>
                <S.UserLink>
                  <Settings />
                  개인정보수정
                </S.UserLink>
                <S.UserBtn>
                  <LogOut />
                  로그아웃
                </S.UserBtn>
              </S.UserLinks>
            </S.HeaderUserPop>
          ) : null}
        </S.HeaderUserInfo>
      </S.HeaderActions>
    </S.Header>
  );
}

export default Header;
