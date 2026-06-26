import styled from "styled-components";
import { hexToRgba } from "../../../styles/utils/color";

export const SelectBox = styled.button`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 1rem 5.6rem 1rem 1.6rem;
  min-height: ${({ size }) => (size === "small" ? "4.2rem" : "5.4rem")};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.colors.white};
  > svg {
    position: absolute;
    right: 1.6rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const Placeholder = styled.span`
  color: ${({ theme }) => theme.colors.gray[500]};
`;
export const Wrapper = styled.div`
  position: relative;
`;

export const HiddenSelect = styled.select`
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
`;

/*팝업영역*/
export const SearchPop = styled.div`
  width: 600px;
  height: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid red;
  background-color: white;
  z-index: 99;
`;

export const SearchLists = styled.ul`
  height: 240px;
  overflow-y: scroll;
  margin-top: 1.6rem;
`;

export const SearchList = styled.li`
  border-radius: 1.4rem;
  overflow: hidden;
  margin-bottom: 0.3rem;
`;

export const SearchListBtn = styled.button`
  width: 100%;
  text-align: left;
  font-size: 1.4rem;
  line-height: 2rem;
  padding: 1.2rem;
  &:hover {
    background: ${({ $active, theme }) =>
      $active ? null : hexToRgba(theme.colors.gray[200], 0.3)};
  }
  background: ${({ $active, theme }) =>
    $active ? hexToRgba(theme.colors.main, 0.1) : "white"};
`;

/* 다중선택시 */

export const SeletedLists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;
export const SeletedList = styled.li`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;
export const DeleteBtn = styled.button`
  display: flex;
  align-items: center;
  svg {
    width: 1.2rem;
    height: 1.2rem;
    color: ${({ theme }) => theme.colors.main};
    &:hover {
      color: ${({ theme }) => theme.colors.danger};
    }
  }
`;
