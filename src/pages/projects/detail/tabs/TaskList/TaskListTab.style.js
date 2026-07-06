import styled from "styled-components";
import { BasicBtnStyle } from "../../../../../components/Button/Button";
import { hexToRgba } from "../../../../../styles/utils/color";

export const TaskListTab = styled.section``;
export const TabHeader = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2rem;
`;
export const TabTitleTitle = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-bottom: 0.4rem;
`;
export const TabTitleSum = styled.p`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gray[500]};
`;
export const AddTaskBtn = styled.button`
  ${BasicBtnStyle}
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.5rem;
  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

export const ColFormWrap = styled.div`
  display: flex;
  gap: 1.6rem;
`;

export const FromBtnsWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
  button {
    border-radius: 0.5rem;
    padding: 0.8rem 1.6rem;
  }
`;

export const TaskSummary = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  gap: 1.6rem;
  margin-bottom: 1.6rem;
  color: ${({ theme }) => theme.colors.gray[600]};
`;
export const TaskSummaryLists = styled.ul`
  display: flex;
  gap: 1rem;
`;
export const TaskSummaryList = styled.li`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: ${({ theme, state }) => {
    switch (state) {
      case "DONE":
        return theme.colors.main;
      case "IN_PROGRESS":
        return theme.colors.primary;
      case "PENDING":
        return theme.colors.gray[600];
      case "REVIEW":
        return theme.colors.chartDelay;
    }
  }};
  &::before {
    content: "";
    position: relative;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${({ theme, state }) => {
      switch (state) {
        case "DONE":
          return theme.colors.main;
        case "IN_PROGRESS":
          return theme.colors.primary;
        case "PENDING":
          return theme.colors.gray[600];
        case "REVIEW":
          return theme.colors.chartDelay;
      }
    }};
  }
`;

export const AddTaskForm = styled.form`
  padding: 0.6rem 2rem 2rem;
  border-radius: 1.2rem;
  margin-bottom: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TaskLists = styled.ul`
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.white};
`;
export const TaskList = styled.li`
  padding: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  &:last-child {
    border-bottom: 0;
  }

  button {
    flex-shrink: 0;
  }

  &:hover {
    background-color: ${({ theme }) => hexToRgba(theme.colors.gray[200], 0.1)};
  }
`;
export const TaskHeader = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  margin-bottom: 1rem;
`;
export const TaskTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const Tasklabel = styled.span`
  padding: 0.4rem 0.8rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  border-radius: 0.4rem;
  background-color: ${({ theme, $color }) =>
    hexToRgba(theme.colors[$color], 0.1)};
  color: ${({ theme, $color }) => theme.colors[$color]};
`;

export const TaskMeta = styled.ul`
  display: flex;
  gap: 1.2rem;
  line-height: 1.6rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gray[600]};
`;
export const TaskMetaItem = styled.li`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`;

export const StateCahngeBtn = styled.button`
  display: flex;
  width: 2.4rem;
  height: 2.4rem;
  align-items: center;
  justify-content: center;
  svg {
    width: 1.6rem;
    height: 1.6rem;
    color: ${({ theme }) => theme.colors.gray[600]};
  }
`;

export const ChangeStateWrap = styled.div`
  position: absolute;
  z-index: 9;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 0.8rem;
  padding: 1rem 1.2rem;
  right: 2rem;
  top: 50%;
`;

export const ChangeStateHeader = styled.p`
  padding: 0.6rem 0rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const ChageStateBtn = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.8rem 0;
  gap: 0.4rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const IconWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  border-radius: 0.5rem;
  background-color: ${({ theme, $color }) =>
    hexToRgba(theme.colors[$color], 0.2)};
  svg {
    width: 1.4rem;
    height: 1.4rem;
    color: ${({ theme, $color }) => theme.colors[$color]};
  }
`;
