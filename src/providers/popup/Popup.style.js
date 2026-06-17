import styled from "styled-components";
import { hexToRgba } from "../../styles/utils/color";

export const Dim = styled.article`
  position: absolute;
  z-index: 99;
  background-color: #00000080;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Layout = styled.div`
  min-width: 448px;
  background-color: white;
  padding: 24px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;
`;

export const HeaderIconWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  background-color: ${({ theme }) => hexToRgba(theme.colors.main, 0.2)};
  border-radius: 0.8rem;
  svg {
    width: 1.6rem;
    height: 1.6rem;
    color: ${({ theme }) => theme.colors.main};
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;
export const SubText = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-top: 0.4rem;
`;
