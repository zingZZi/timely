import styled from "styled-components";
import {
  TableStyle,
  TableHeaderStyle,
  TableBodyStyle,
} from "../../components/Table/Table.style";

import { hexToRgba } from "../../styles/utils/color";

export const HomeLayout = styled.main`
  display: grid;
  row-gap: 2.4rem;
  column-gap: 3.6rem;
  grid-template-columns: 1fr 340px;
`;
export const HomeTotal = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;
`;
export const HomeProject = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
`;
export const HomeRecent = styled.section`
  grid-column-start: 2;
  grid-column-end: 3;
`;

export const HomeTotalCard = styled.ul`
  display: flex;
  gap: 1.6rem;
  li {
    width: 33.3333%;
  }
`;
export const ProjectStates = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.6rem;
`;
export const StatesList = styled.li`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: ${({ theme }) => theme.fontSizes.xs2};
  color: ${({ theme }) => theme.colors.gray[500]};
`;
export const ProjectState = styled.span`
  display: block;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: ${({ status, theme }) => {
    if (status === "delay") return theme.colors.chartDelay;
    if (status === "review") return theme.colors.chartReviw;
    if (status === "finish") return theme.colors.gray[500];
    return theme.colors.main;
  }};
`;
export const TableWrap = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
`;

export const Table = styled.table`
  ${TableStyle}
`;
export const TableHeader = styled.thead`
  ${TableHeaderStyle}
`;
export const TableBody = styled.tbody`
  ${TableBodyStyle}
`;
export const ProjectName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const GraphWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const Percent = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const RecentLists = styled.ul`
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
`;

export const RecentList = styled.li`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 1rem;
  border-radius: 1rem;
  &:hover {
    background-color: ${({ theme }) => hexToRgba(theme.colors.gray[300], 0.2)};
  }
`;

export const Name = styled.strong`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const RecentContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

export const RecentMessage = styled.p`
  width: 100%;
`;

export const RecentMeta = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gray[600]};
`;
