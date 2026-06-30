import styled from "styled-components";
import { hexToRgba } from "../../styles/utils/color";

export const Container = styled.div`
  padding: 2rem;
  border-radius: 1.2rem;
  background: white;
  border: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  row-gap: 1.2rem;
`;

export const Header = styled.div``;

export const Body = styled.div``;

export const Footer = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs2};
  color: ${({ theme }) => theme.colors.gray[500]};
  line-height: 1.8rem;
`;
export const CardNum = styled.b`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
`;

//
export const CardTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs2};
  color: ${({ theme }) => theme.colors.gray[500]};
  margin-bottom: 0.4rem;
`;

export const WorkInfo = styled.div`
  flex-grow: 1;
`;

export const StateCardFlexbox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
`;
export const StatusIcon = styled.i`
  display: flex;
  width: 3.6rem;
  height: 3.6rem;
  align-items: center;
  justify-content: center;
  background-color: pink;
  border-radius: 0.8rem;
  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
  background-color: ${({ color, theme }) => {
    if (color === "main") return hexToRgba(theme.colors.main, 0.1);
    if (color === "orange") return hexToRgba(theme.colors.chartDelay, 0.1);
    if (color === "gray") return hexToRgba(theme.colors.gray[500], 0.1);
    return theme.colors.main;
  }};
  color: ${({ color, theme }) => {
    if (color === "main") return theme.colors.main;
    if (color === "orange") return theme.colors.chartDelay;
    if (color === "gray") return theme.colors.gray[500];
    return theme.colors.main;
  }};
`;
