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

export const Title = styled.h3``;

export const CommentTitle = styled.h3`
  margin-bottom: 1.2rem;
`;

//게시글 에디터 관련 스타일링
export const BoardContent = styled.div`
  h1{
    font-size: 3.2rem;
  }
  h2{
    font-size: 2.4rem;
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

  p{
    line-height: 1.2em;
  }
`