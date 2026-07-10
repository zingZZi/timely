import styled from "styled-components";

export const CommentLists = styled.ul`
  padding-left: 0.4rem;
  margin-top: 1.2rem;
`;

export const CommentList = styled.li`
  display: flex;
  gap: 0.8rem;
  margin-top: 0.8rem;
  &:first-child {
    margin-top: 0;
  }
`;

export const CommentContainer = styled.div`
  flex-grow: 1;
`;
export const CommentMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.2rem;
  line-height: 1.6rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const MetaDate = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  color: ${({ theme }) => theme.colors.gray[500]};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const CommnetContent = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.6rem;
`;

export const CommentWrite = styled.form`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 1.2rem;
  svg {
    flex-shrink: 0;
    width: 1.4rem;
    height: 1.4rem;
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const CommentTextarea = styled.input`
  width: 100%;
  flex-grow: 1;
  border-radius: 0.5rem;
  height: 2.5rem;
  padding: 0 1rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const DeleteBtn = styled.button`
  color: ${({ theme }) => theme.colors.gray[400]};
  svg {
    width: 1.3rem;
    height: 1.3rem;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.gray[600]};
  }
`;
