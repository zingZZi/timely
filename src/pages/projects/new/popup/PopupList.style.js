import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const UserInfo = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  flex-grow: 0;
`;
export const UserName = styled.strong`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;
export const UserMeta = styled.p`
  margin-top: 0.4rem;
  display: flex;
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  gap: 0.8rem;
`;

export const MultipleCheckBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: 2px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 0.6rem;
  svg {
    color: ${({ theme }) => theme.colors.white};
    width: 1.4rem;
    height: 1.4rem;
  }
  &.hi {
    border: 2px solid ${({ theme }) => theme.colors.main};
    background-color: ${({ theme }) => theme.colors.main};
  }
`;

export const MultipleProfileWrap = styled.div`
  position: relative;
  svg {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.main};
    border-radius: 50%;
  }
`;
