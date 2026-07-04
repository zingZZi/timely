import styled from "styled-components";
import { hexToRgba } from "../../../styles/utils/color";

export const Tab = styled.ul`
  display: flex;
  gap: 3.2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
  margin-bottom: 3.2rem;
`;

export const TabBtn = styled.li`
  padding: 1.2rem 0.4rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray[600]};
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  &.active {
    color: ${({ theme }) => theme.colors.main};
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.main};
    }
    span {
      background-color: ${({ theme }) => hexToRgba(theme.colors.main, 0.1)};
    }
  }
`;

export const TabNum = styled.span`
  font-size: 1.2rem;
  line-height: 1.6rem;
  padding: 0.2rem 0.8rem;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  background-color: ${({ theme }) => theme.colors.gray[200]};
  border-radius: 100px;
`;

export const ProjectLists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: row;
  gap: 1.5%;
  row-gap: 1.6rem;
`;
export const ProjectList = styled.li`
  width: 32.33%;
`;

export const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2.4rem;
  border-radius: 1.6rem;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  &:hover {
    box-shadow: -4px 5px 5px #4b55632b;
  }
`;

export const ProjectTitle = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-bottom: 1rem;

  white-space: nowrap; /* 텍스트가 길어도 줄바꿈을 하지 않음 */
  overflow: hidden; /* 박스를 벗어나는 텍스트를 숨김 */
  text-overflow: ellipsis; /* 벗어난 텍스트를 말줄임(...)으로 표시 */
  display: block;
`;

export const ProjectSum = styled.p`
  line-height: 1.8rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const ProjectState = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  margin: 1.6rem 0;
  span {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: 1.6rem;
    padding: 0.4rem 1.2rem;
  }
`;

export const Priority = styled.span`
  border-radius: 9rem;
  background-color: ${({ theme, $color }) =>
    hexToRgba(theme.colors[$color], 0.1)};
  color: ${({ theme, $color }) => theme.colors[$color]};
`;

export const State = styled.span`
  border-radius: 999px;
  background-color: ${({ theme, $color }) =>
    hexToRgba(theme.colors[$color], 0.1)};
  color: ${({ theme, $color }) => theme.colors[$color]};
`;

export const GraphContent = styled.div``;

export const GraphText = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Graph = styled.div`
  margin: 0.8rem 0 1.6rem;
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

export const ProjectInfo = styled.span`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 1rem;
  svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`;

export const VisibilityTag = styled.span`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 1rem;
  svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`;

export const TagWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;
export const Tag = styled.span`
  color: ${({ theme }) => theme.colors.main};
`;
export const MoreTag = styled.b`
  background-color: ${({ theme }) => theme.colors.gray[200]};
  color: ${({ theme }) => theme.colors.gray[700]};
  padding: 0.2rem 0.8rem;
  border-radius: 99px;
  line-height: 1.6rem;
`;
