import styled from "styled-components";
import { CommonBtnWrap } from "../../../components/Button/Button";

export const NewProjectWrap = styled.section`
  padding: 3.2rem;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;
export const FormFieldset = styled.fieldset`
  padding: 1.2rem 0;
  margin: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const FormColgroup = styled.div`
  display: flex;
  gap: 1.6rem;
`;

export const AccessTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

export const AccessCheckBoxWrap = styled.div`
  padding: 1.6rem;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  display: flex;
  align-items: start;
  justify-content: space-between;
`;
export const MultipleInputWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-shrink: 1;
  gap: 1rem;
`;
export const MultipleNum = styled.p`
  color: ${({ theme }) => theme.colors.gray[500]};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  flex-shrink: 0;
  padding-left: 2rem;
`;

export const CheckLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: 0.6rem;
  svg {
    width: 1.6rem;
    height: 1.6rem;
    color: ${({ theme }) => theme.colors.gray[600]};
  }
`;
export const AccessSum = styled.p`
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const AccessSelectBox = styled.div`
  background: #fffbeb80;
  padding: 1.6rem;
  margin-top: 1.6rem;
  border: 1px solid #fef3c7;
  border-radius: 1rem;
`;

export const AccessSelectTitle = styled.h4`
  color: #92400e;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 2rem;
  margin-bottom: 0.4rem;
`;

export const AccesseDesc = styled.p`
  color: #d97706;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-bottom: 1.6rem;
`;

export const ButtonWrap = styled.div`
  ${CommonBtnWrap}
  button {
    padding: 1rem 1.6rem;
    border-radius: 1rem;
  }
`;
