import styled from "styled-components";
import {hexToRgba} from '../../../styles/utils/color'

export const MonthLayout = styled.section``;
export const Wrap = styled.ol`
  display: flex;
  gap:.4rem;
  flex-wrap: wrap;
`;
export const day = styled.li`
  width: calc((100% - 2.4rem) / 7);
  text-align: center;  
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6rem;
  padding:.8rem 0;
  color: ${({ theme }) => theme.colors.gray[600]};
  &:first-child {
    color: ${({ theme }) => theme.colors.danger};
  }
  &:last-child {
    color: ${({ theme }) => theme.colors.main};
  }
`;


export const date = styled.li`
  width: calc((100% - 2.4rem) / 7);
  min-height: 10rem;
  border-radius: 0.8rem;
  padding:.8rem;
  border:1px solid ${({ theme }) => theme.colors.gray[200]};
  &:nth-child(7n + 1) {
    color: ${({ theme }) => theme.colors.danger};
  }
  &:nth-child(7n) {
    color: ${({ theme }) => theme.colors.main};
  }
`

export const dateHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`


export const OnSchedule = styled.i`
  display: block;
  width: 0.8rem;
  height: 0.8rem;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 50%;
`;

export const ScheduleList = styled.ul`
  margin-top: 0.8rem;
  li{
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: 1.6rem;
    padding:.4rem .6rem;
    border-radius: 0.4rem;
    margin-bottom:.4rem;
    &:last-child{
      margin-bottom:0;
    }
  }
`;

export const ScheduleItem = styled.li`
  color: ${({ theme }) => theme.colors.gray[800]};
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  background-color: ${({ theme }) => hexToRgba(theme.colors.main, 0.1)};
  border:1px dashed ${({ theme }) =>  hexToRgba(theme.colors.main, 0.3)};
  cursor: pointer;

`;

export const ScheduleMore = styled.li`
  background-color: ${({ theme }) => theme.colors.gray[200]};
  border:1px dashed ${({ theme }) => theme.colors.gray[500]};
  color: ${({ theme }) => theme.colors.gray[500]};
  text-align: center;
`;