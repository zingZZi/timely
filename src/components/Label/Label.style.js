import styled, { css } from "styled-components";
import { hexToRgba } from "../../styles/utils/color";

export const labelStyle = css`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding: 0.4rem 1rem;
  border-radius: 4rem;
`;

export const StateLabel = styled.span`
  ${labelStyle}
  color: ${({ status, theme }) => {
    if (status === "delay") return theme.colors.chartDelay;
    if (status === "review") return theme.colors.chartReviw;
    if (status === "finish") return theme.colors.gray[500];
    return theme.colors.main;
  }};
  background-color: ${({ status, theme }) => {
    if (status === "delay") return hexToRgba(theme.colors.chartDelay, 0.2);
    if (status === "review") return hexToRgba(theme.colors.chartReviw, 0.2);
    if (status === "finish") return hexToRgba(theme.colors.gray[500], 0.2);
    return hexToRgba(theme.colors.main, 0.2);
  }};
`;
