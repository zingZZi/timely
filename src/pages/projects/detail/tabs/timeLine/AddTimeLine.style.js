import styled from "styled-components";
import { hexToRgba } from "../../../../../styles/utils/color";
import { CommonBtnWrap } from "../../../../../components/Button/Button";

export const AddTimeLine = styled.form`
  margin-top: 2rem;
  padding: 0.6rem 2rem 2rem;
  background-color: ${({ theme }) => hexToRgba(theme.colors.main, 0.1)};
  border-radius: 1.2rem;
  border: 1px solid ${({ theme }) => hexToRgba(theme.colors.main, 0.2)};
`;

export const Colgroup = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const BtnWrap = styled.div`
  ${CommonBtnWrap};
  margin-top: 1.5rem;
  gap: 0.8rem;
  button {
    padding: 0.8rem 1.6rem;
    border-radius: 0.5rem;
  }
`;
