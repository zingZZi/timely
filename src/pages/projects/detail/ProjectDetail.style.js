import styled from "styled-components";

export const ProjectDetail = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2.4rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 1.2rem;
  margin-bottom: 2.4rem;
`;

export const ProjectInfoTop = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-between;
  margin-bottom: 0.4rem;
`;

export const ProjectTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 3.2rem;
`;
export const TagWrap = styled.div`
  display: flex;
  gap: 1rem;
  > span {
    padding: 0.4rem 1rem;
    border-radius: 99px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: 1.6rem;
    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;
export const Visibility = styled.span`
  background-color: #f3f4f6;
  color: #6b7280;
`;
export const Exception = styled.span`
  background-color: #fffbeb;
  color: #d97706;
`;
export const ProjectState = styled.span`
  background-color: pink;
`;

export const ProjectDescription = styled.p`
  line-height: 2rem;
  margin-bottom: 0.4rem;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const PrjoectSummary = styled.ul`
  grid-column: 1/4;
  order: 4;
  margin-top: 2rem;
  display: flex;
  gap: 1.6rem;
`;

export const SummaryList = styled.li`
  padding: 1.6rem;
  border-radius: 0.8rem;
  flex-grow: 1;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  background-color: ${({ theme }) => theme.colors.gray[100]};
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  &:first-child {
  }
`;

export const SummaryItem = styled.span`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.6rem;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`;

export const SummeyValue = styled.strong`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 2.4rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  width: 100%;
`;

export const GraphContent = styled.div`
  width: 100%;
`;

export const GraphText = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  strong {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const Graph = styled.div`
  margin: 0.8rem 0 0;
  position: relative;
  width: 100%;
  height: 8px;
  border-radius: 100px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.gray[300]};
`;

export const GraphPerCent = styled.i`
  position: absolute;
  top: 0;
  left: 0;
  height: 8px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.main};
`;

export const TabWrap = styled.nav`
  display: flex;
  gap: 2.4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  margin-bottom: 2.4rem;
`;

export const TabBtn = styled.button`
  padding: 1.2rem 0.4rem;
  position: relative;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray[700]};
  gap: 0.4rem;
  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }

  &.active {
    color: ${({ theme }) => theme.colors.main};
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.main};
    }
  }
`;

export const TabContent = styled.section``;
