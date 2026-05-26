import { Link } from "react-router-dom";
import styled from "styled-components";
import { BasicBtnStyle, CancleBtnStyle } from "../../components/Button/Button";

export const BackLink = styled(Link)`
  margin-bottom: 10px;
`;

export const WriteContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2.4rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 1.2rem;
  margin-top: 2rem;
  max-width: 1200px;
`;

export const SectionTtile = styled.h2`
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export let ColFormWrap = styled.div`
  display: flex;
  gap: 1.6rem;
`;

export const EditorWrap = styled.div`
  margin-top: 2rem;
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 1.2rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
  button {
    padding: 1rem 2rem;
    border-radius: 0.8rem;
  }
`;

export const CancleBtn = styled.button`
  ${CancleBtnStyle}
`;

export const SubmitBtn = styled.button`
  ${BasicBtnStyle}
`;
