import styled from "styled-components";

export const BoardCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 1.2rem;
  &:hover {
    border-color: ${({ theme }) => theme.colors.main};
  }
`;

export const IconWrap = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
`;

export const Icon = styled.i`
  font-size: 1.2rem;
  line-height: 1.6rem;
  padding: 0.2rem 1rem;
  border-radius: 3rem;
  line-height: 1.6rem;
`;

export const Title = styled.h3`
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin-bottom: 0.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const SubText = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const BoardInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.2rem;
`;

export const WriterInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  line-height: 2rem;
  gap: 0.8rem;
`;

export const Thumb = styled.i`
  display: block;
  position: relative;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray[200]};
`;

export const Date = styled.span`
  color: ${({ theme }) => theme.colors.gray[500]};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const CardActionsList = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  justify-content: start;
`;

export const Actions = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.gray[600]};
  gap: 0.3rem;
  align-items: center;
  justify-content: start;
  svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`;
