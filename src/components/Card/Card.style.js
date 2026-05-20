import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  border-radius: 1.2rem;
  background: white;
  border: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Header = styled.div``;

export const Body = styled.div``;

export const Footer = styled.div``;
export const CardNum = styled.b`
  font-weight: bold;
`;

//
export const CardTitle = styled.p`
  color: ${({ theme }) => theme.fontSizes.xs2};
  color: ${({ theme }) => theme.colors.gray[500]};
`;
