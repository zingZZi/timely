import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Aside = styled.aside`
  width: ${({ $asideopen }) => ($asideopen ? "22rem" : "6.4rem")};
  height: 100vh;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  border-right: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const AsideLogo = styled.h1`
  padding: 1.4rem;
  span {
    font-size: 1.8rem;
  }
`;
export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ $asideopen }) => ($asideopen ? ".3rem" : null)};
  justify-content: ${({ $asideopen }) => ($asideopen ? null : "center")};
`;
export const LogoIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.8rem;
  background-color: pink;
  color: white;
`;

export const AsideBtnWrap = styled.div`
  padding: 0 1.2rem;
  margin-bottom: 0.4rem;
`;

export const AsideBtn = styled.button`
  width: 2.2rem;
  height: 2.24rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ $asideopen }) => ($asideopen ? "0 0 0 auto" : "auto")};
  svg {
    width: 1.4rem;
    height: 1.4rem;
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;
export const AsideNav = styled.nav``;
export const AsideMenu = styled.ul`
  padding: 0 1.2rem;
`;

export const MenuList = styled.li``;
const asideMenuCommonStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  padding: 0.8rem 1.2rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs2};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.black : theme.colors.gray[600]};
  border: ${({ $active, theme }) =>
    $active ? `1px solid ${theme.colors.gray[300]}` : null};
  background: ${({ $active }) => ($active ? "#ffffff" : "transparent")};
  svg {
    width: 1.8rem;
    height: 1.8rem;
    color: ${({ $active, theme }) => ($active ? theme.colors.main : null)};
  }
`;

export const MenuBtn = styled.button`
  ${asideMenuCommonStyle}
`;
export const MenuLink = styled(Link)`
  ${asideMenuCommonStyle}
`;

export const MenuBtnArrow = styled.span`
  svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`;
export const MenuName = styled.span`
  flex: 1 1 0%;
  text-align: left;
`;

export const Menu2Depth = styled.ul`
  width: 100%;
  padding-left: 1.6rem;
`;

export const Menu2DepthList = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.2rem;
  padding: 0.8rem 1.2rem;
  color: ${({ theme }) => theme.colors.gray[600]};
  cursor: pointer;
  color: ${({ $active, theme }) => ($active ? theme.colors.main : null)};
  &::before {
    content: "";
    display: block;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.gray[400]};
  }
`;
