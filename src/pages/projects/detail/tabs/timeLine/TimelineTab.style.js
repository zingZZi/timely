import styled, { css } from "styled-components";
import { hexToRgba } from "../../../../../styles/utils/color";
const boxbackground = css`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const TimeLineWrap = styled.div`
  display: flex;
  gap: 2.4rem;
`;

export const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 2.4rem;
`;

export const ProjectTimeLine = styled.section`
  ${boxbackground}
  flex-grow: 1;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TimeLineLists = styled.ol``;

export const TimeLineList = styled.li`
  padding-left: 3rem;
  margin-top: 1.6rem;
  position: relative;
  &::before {
    content: "";
    width: 2px;
    height: 52%;
    background-color: ${({ theme }) => theme.colors.gray[400]};
    position: absolute;
    bottom: 0;
    left: 6px;
  }
`;

export const TimeLineInfo = styled.div``;
export const TimeLineHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.4rem;
`;
export const TimeLineControls = styled.div`
  display: flex;
  gap: 0.8rem;
  svg {
    width: 1.4rem;
    height: 1.4rem;
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const TimeTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 2rem;
`;

export const StateLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 2rem;
  padding: 0 0.8rem;
  border-radius: 0.5rem;

  background-color: pink;
`;
export const Statedate = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.gray[700]};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.6rem;
  margin-bottom: 0.2rem;
`;
export const StateSummary = styled.p`
  color: ${({ theme }) => theme.colors.gray[500]};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.6rem;
`;

export const StateSticker = styled.i`
  position: absolute;
  width: 1.4rem;
  height: 1.4rem;
  background-color: pink;
  border-radius: 60%;
  left: 0;
`;

export const TimeLineSummary = styled.section`
  flex-grow: 0;
  width: 320px;
`;
export const SummaryLists = styled.ul`
  ${boxbackground};
  margin-top: 1.6rem;
`;
export const SummaryList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem;
  margin-top: 1.2rem;
  border-radius: 0.7rem;
  color: ${({ color, theme }) => {
    switch (color) {
      case "main":
        return theme.colors.main;
      case "primary":
        return theme.colors.primary;
      default:
        return theme.colors.gray[700];
    }
  }};
  background-color: ${({ color, theme }) => {
    switch (color) {
      case "main":
        return hexToRgba(theme.colors.main, 0.1);
      case "primary":
        return hexToRgba(theme.colors.primary, 0.1);

      default:
        return theme.colors.gray[200];
    }
  }};
  border: 1px solid
    ${({ color, theme }) => {
      switch (color) {
        case "main":
          return hexToRgba(theme.colors.main, 0.3);
        case "primary":
          return hexToRgba(theme.colors.primary, 0.3);

        default:
          return theme.colors.gray[300];
      }
    }};
  &:first-child {
    margin-top: 0;
  }
`;
export const SummaryLabel = styled.strong`
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
export const SummaryData = styled.strong`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 2.4rem;
`;
export const SummaryDate = styled.strong`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 2.4rem;
`;
