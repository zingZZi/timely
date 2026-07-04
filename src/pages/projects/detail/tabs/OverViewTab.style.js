import styled from "styled-components";
import { hexToRgba } from "../../../../styles/utils/color";

export const OverView = styled.section`
  display: flex;
  gap: 2.4rem;
`;

export const OverViewContent = styled.section`
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.colors.white};
  width: 50%;
  border-radius: 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: 1.6rem;
`;

export const ProjectInfos = styled.dl`
  display: flex;
  flex-direction: column;
`;

export const InfoLabel = styled.dt`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-bottom: 0.7rem;
`;
export const InfoValue = styled.dd`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: 1.6rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Priority = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6rem;
  padding: 0.4rem 0.8rem;
  border-radius: 0.4rem;
  display: inline-block;
  color: ${({ theme, $color }) => theme.colors[$color]};
`;

export const TagLists = styled.ul`
  display: flex;
  gap: 1.6rem;
  color: ${({ theme }) => theme.colors.main};
`;

export const ProjectMembers = styled.li`
  display: flex;
  margin-bottom: 0.6rem;
  align-items: flex-start;
  align-items: stretch;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray[700]};
  strong {
    display: inline-block;
    text-align: center;
    min-width: 5rem;
    padding: 0.2rem 0.8rem;
    border-radius: 4px;
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    line-height: 1.6rem;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const OwnerLabel = styled.strong`
  background: ${({ theme }) => hexToRgba(theme.colors.main, 0.1)};
  color: ${({ theme }) => theme.colors.main};
`;
export const MemberLabel = styled.strong`
  background: ${({ theme }) => hexToRgba(theme.colors.primary, 0.1)};
  color: ${({ theme }) => theme.colors.primary};
`;

export const MemberName = styled.span`
  display: flex;
  align-items: center;
`;

export const WorkStateLists = styled.div``;
export const WorkStateList = styled.dl`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  margin-top: 1.2rem;
  border-radius: 1rem;
  &:first-child {
    background: ${({ theme }) => hexToRgba(theme.colors.main, 0.1)};
    svg {
      color: ${({ theme }) => theme.colors.main};
    }
  }
`;

export const WorkStateLabel = styled.dt`
  display: flex;
  gap: 0.7rem;
  align-items: center;
  justify-content: start;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 2rem;
  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

export const WorkStateValue = styled.dd`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const Visibility = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  svg {
    color: ${({ theme }) => theme.colors.gray[600]};
    width: 1.4rem;
    height: 1.4rem;
  }
`;

export const Exception = styled.small`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  svg {
    width: 1.4rem;
    height: 1.4rem;
    color: ${({ theme }) => theme.colors.chartDelay};
  }
  span {
    color: ${({ theme }) => theme.colors.chartDelay};
  }
`;
