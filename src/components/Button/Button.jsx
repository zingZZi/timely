import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const sharedBaseStyle = css`
  width: ${(props) => (props.size === "full-size" ? "100%" : "auto")};
  margin: 0;
  padding: ${(props) => props.padding};
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  font-weight: ${(props) => (props.fontWeight === "bold" ? 500 : 400)};

  //disabled
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const BasicBtnStyle = css`
  ${sharedBaseStyle}
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
`;

export const CancleBtnStyle = css`
  ${sharedBaseStyle}
  border:1px solid ${({ theme }) => theme.colors.gray[400]};
  color: ${({ theme }) => theme.colors.black};
`;

export const BasicBtn = styled.button`
  ${BasicBtnStyle}
`;
export const BasicLink = styled(Link)`
  ${BasicBtnStyle}
`;

export const BackPageLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: start;
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-bottom: 2.4rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  gap:.8rem;
  svg{
    width: 1.6rem;
    height: 1.6rem;
  }

`