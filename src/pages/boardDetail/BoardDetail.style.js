import { Link } from "react-router-dom";
import styled from "styled-components";

export const BackLink = styled(Link)`
  margin-bottom: 2.4rem;
  display: inline-block;
`;
export const PageDetailWrap = styled.section`
  margin-bottom: 2.4rem;
  padding: 2rem;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const BoardInfo = styled.div`
  margin-bottom: 1.6rem;
`;
export const BoardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LabelWrap = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const Label = styled.i`
  font-size: 1.4rem;
  line-height: 2rem;
  padding: 0.4rem 1.2rem;
  border-radius: 9999px;
`;

export const BoardActionBtns = styled.div`
  display: flex;
  gap: 0.8rem;
  button {
    width: 3.6rem;
    height: 3.6rem;
    background-color: ${({ theme }) => theme.colors.gray[100]};
    border-radius: 0.5rem;
    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.colors.gray[600]};
      &.active {
        color: ${({ theme }) => theme.colors.main};
        fill: ${({ theme }) => theme.colors.main};
      }
    }
  }
`;
export const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 3.2rem;
  margin-bottom: 1.6rem;
`;
export const BoardMetaRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const WriterInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  line-height: 2rem;
  gap: 1.2rem;
`;

export const Thumb = styled.i`
  display: block;
  position: relative;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray[200]};
`;
export const Name = styled.span`
  display: block;
  line-height: 2.4rem;
  font-size: ${({ theme }) => theme.fontSizes.md};
`;
export const Date = styled.span`
  grid-row: 2 / 2;
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const BoardState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  p {
    display: flex;
    gap: 0.4rem;
    color: ${({ theme }) => theme.colors.gray[700]};
  }
  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;
export const Commenticon = styled.i`
  display: inline-block;
`;
export const CommentCount = styled.span`
  &::before {
    content: "";
    display: block;
  }
`;

export const CommentTitle = styled.h3`
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  svg {
    width: 2rem;
    height: 2rem;
  }
`;
export const MessageNum = styled.strong`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => `${theme.colors.main}40`};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

//게시글 에디터 관련 스타일링
export const BoardContent = styled.div`
  p {
    line-height: 1.2em;
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }
  h1 {
    font-size: 3.2rem;
    margin-bottom: 0.5rem;
  }
  h2 {
    font-size: 2.4rem;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: disc;
    padding-left: 20px;
  }

  ol {
    list-style: decimal;
    padding-left: 2rem;
  }

  blockquote {
    border-left: 4px solid #999;
    padding-left: 1.6rem;
    color: #666;
  }
  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  u {
    text-decoration: underline;
  }
`;

export const CommentLists = styled.ul`
  margin-top: 1.6rem;
`;
export const CommentList = styled.li`
  margin-top: 1.2rem;
`;
