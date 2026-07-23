import styled from "styled-components";
import { CommonBtnWrap, BasicBtnStyle } from "../Button/Button";

export const TypeBtns = styled.div`
  ${CommonBtnWrap}
  margin-bottom: 2rem;
  justify-content: flex-start;
`;
export const Btns = styled.button`
  ${BasicBtnStyle}
  padding:.8rem 1.6rem;
`;
export const CalendarLayout = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 1.6rem;
  border:1px solid ${({ theme }) => theme.colors.gray[200]};
`
