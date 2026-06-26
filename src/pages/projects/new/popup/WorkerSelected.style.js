import styled from "styled-components";

export const WorkerSelected = styled.div`
  display: flex;
  gap: 1rem;
  text-align: left;
  align-items: center;
  position: relative;
`;

export const Name = styled.strong`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;
export const SelectedInfosMeta = styled.div`
  display: flex;
  margin-top: 0.3rem;
  gap: 0.8rem;
`;
export const Part = styled.span`
  color: ${({ theme }) => theme.colors.gray[500]};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;
export const Position = styled.span`
  color: ${({ theme }) => theme.colors.gray[500]};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;
export const DeleteBtn = styled.span`
  color: ${({ theme }) => theme.colors.gray[500]};
  svg {
    width: 1.4rem;
    height: 1.4rem;
  }
  &:hover {
    svg {
      color: ${({ theme }) => theme.colors.danger};
    }
  }
`;
