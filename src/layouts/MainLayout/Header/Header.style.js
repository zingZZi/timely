import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";
//공통 stylecss

const HeaderPop = css`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 24px 0px;
  position: absolute;
  top: calc(100% + 0.8rem);
  right: 0;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const Header = styled.header`
  padding: 0 2.4rem;
  position: sticky;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;
export const HeaderMenu = styled.ul`
  display: flex;
  gap: 0.2rem;
`;
export const MenuList = styled.li``;

export const MenuLink = styled(Link)`
  display: block;
  color: ${({ theme }) => theme.colors.gray[500]};
  padding: 0 1rem;
`;
export const MenuText = styled.span`
  position: relative;
  display: block;
  padding: 1.5rem 0.4rem;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.black : theme.colors.gray[600]};
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background-color: ${({ $active, theme }) =>
      $active ? theme.colors.main : "transparent"};
    left: 0;
    bottom: 0%;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

export const AlarmContainer = styled.div`
  position: relative;
`;
export const AlarmBtn = styled.button``;
export const AlarmPop = styled.div`
  ${HeaderPop}
  width:22rem;
`;

export const HeaderUserInfo = styled.div`
  position: relative;
`;
export const HeaderUserPop = styled.div`
  ${HeaderPop}
  width:19rem;
`;

export const UserInfo = styled.div`
  padding: 1.2rem 1rem;
`;
