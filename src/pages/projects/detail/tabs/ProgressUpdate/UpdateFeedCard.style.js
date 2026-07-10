import styled from "styled-components";
import { hexToRgba } from "../../../../../styles/utils/color";

export const UpdateFeedCard = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  margin-bottom: 1rem;
  display: flex;
  gap: 1.2rem;
  > span {
    flex-shrink: 0;
  }
`;

export const CardContent = styled.div`
  width: 100%;
  flex-shrink: 1;
`;
export const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
export const Name = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 2rem;
`;
export const DateTime = styled.time`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gray[500]};
`;
export const CardType = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 0.4rem 0 0.8rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme, $color }) => theme.colors[$color]};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const CardTypeSvgWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  color: ${({ theme, $color }) => theme.colors[$color]};
  background-color: ${({ theme, $color }) =>
    hexToRgba(theme.colors[$color], 0.1)};
  border-radius: 0.4rem;
  svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`;

export const CardTitle = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 2rem;
  margin-bottom: 0.6rem;
`;

export const CardSummary = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
  line-height: 2.2rem;
`;

export const TaskListBtn = styled.button`
  padding: 0.2rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  border-radius: 0.6rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  background-color: rgb(238 242 255);
  color: rgb(99 102 241);
  margin-top: 0.8rem;
  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const FileLists = styled.ul`
  margin-top: 1.2rem;
`;
export const FileList = styled.li`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-top: 1rem;
  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.main};
  }
  &:first-child {
    margin-top: 0;
  }
`;
export const FileBite = styled.span`
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const CommentBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  color: ${({ theme }) => hexToRgba(theme.colors.gray[600], 0.8)};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-top: 1.2rem;
  svg {
    width: 1.4rem;
    height: 1.4rem;
  }
  &:hover {
    color: ${({ theme }) => hexToRgba(theme.colors.gray[600], 1)};
  }
`;
export const CommentArrowWrap = styled.span`
  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
  rotate: ${({ active }) => {
    active ? "calc(180deg)" : null;
  }};
`;
