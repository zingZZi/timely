import styled from "styled-components";
import { hexToRgba } from "../../../styles/utils/color";

export const TagInputWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.8rem;
  row-gap: 0.8rem;
  padding: 1rem 1.6rem;
  min-height: ${(props) => `${props.size}rem`};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  //error state
  border: ${({ isEmptyValue, theme }) => {
    if (isEmptyValue) return `1px solid ${theme.colors.danger}`;
    return `1px solid ${theme.colors.gray[200]}`;
  }};
  box-shadow: ${({ isEmptyValue, theme }) => {
    if (isEmptyValue) return `0 0 3px 2px ${hexToRgba(theme.colors.danger, 0.4)}`;
    return `none`;
  }};
  &:focus-within {
    outline: none;
    box-shadow: 0 0 3px 2px ${({ theme }) => hexToRgba(theme.colors.main, 0.4)};
    border-color: ${({ theme }) => theme.colors.main};
  }


`;

export const Input = styled.input`
  height: 100%;
  border: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;
export const Tag = styled.li`
  display: flex;
  padding: 0.2rem 1rem;
  color: ${({ theme }) => theme.colors.main};
  gap: 0.3rem;
  align-items: center;
  justify-content: center;
  border-radius: 1.2rem;
`;

export const Delete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.main};
  svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`;

export const NoticeText = styled.p`
  color: ${({ theme }) => theme.colors.gray[500]};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-top: 0.4rem;
`;
