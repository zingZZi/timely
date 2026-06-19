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
