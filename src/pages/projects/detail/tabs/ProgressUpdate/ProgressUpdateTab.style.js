import styled from "styled-components";
import { hexToRgba } from "../../../../../styles/utils/color";

export const SummaryList = styled.ul`
  display: flex;
  gap: 2rem;
`;

export const SummaryCard = styled.li`
  width: 25%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 8px;
`;

export const CardWrap = styled.dl``;

export const CardTitle = styled.dt`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-bottom: 0.8rem;
  span {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme, $color }) =>
      hexToRgba(theme.colors[$color], 0.1)};
    svg {
      width: 1.4rem;
      height: 1.4rem;
      color: ${({ theme, $color }) => theme.colors[$color]};
    }
  }
`;

export const CardValue = styled.dd`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 2.8rem;
`;

export const CardDescription = styled.dd`
  margin-top: 0.4rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const UpdateFeedWrap = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  margin-top: 2.4rem;
`;
export const FeedTitle = styled.h4`
  line-height: 2.4rem;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const AddUpdateButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.main};
  svg {
    width: 1rem;
    height: 1rem;
  }
  :hover {
    color: ${({ theme }) => theme.colors.mainDark};
  }
`;

export const UpdateFeed = styled.section`
  flex-shrink: 1;
  width: 68%;
`;
export const UpdateFeedHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Filters = styled.nav`
  display: flex;
  gap: 0.6rem;
  margin: 1.6rem 0;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: 1.6rem;
    background-color: ${({ theme }) => theme.colors.gray[200]};
    padding: 0.4rem 1rem;
    border-radius: 99px;
    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;

export const Milestone = styled.section`
  width: 32%;
  flex-shrink: 0;
`;

export const MilestoneLists = styled.ol`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 1.2rem;
  padding: 2rem;
  margin-top: 1.6rem;
`;
export const MilestoneList = styled.li`
  display: flex;
  padding: 1.2rem;
  gap: 1.2rem;
  border-radius: 0.8rem;
  margin-top: 1.2rem;
  &:first-child {
    margin-top: 0;
  }
  &.active {
    border: 1px solid ${({ theme }) => hexToRgba(theme.colors.primary, 0.3)};
    background-color: ${({ theme }) => hexToRgba(theme.colors.primary, 0.04)};
  }
`;

export const MileStoneSvgWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  background-color: skyblue;
  border-radius: 50%;
  flex-shrink: 0;
  svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`;

export const MileStoneHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
export const MileStoneTitle = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 2rem;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;
export const MileStoneLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  line-height: 1.9rem;
  padding: 0rem 0.6rem;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  border-radius: 0.4rem;
  flex-shrink: 0;
`;

export const MileStoneDate = styled.span`
  line-height: 1.6rem;
  display: block;
  margin: 0.4rem 0;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gray[500]};
`;
export const MileStoneDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.6rem;
  color: ${({ theme }) => theme.colors.gray[600]};
`;
