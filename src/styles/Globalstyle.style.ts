import { createGlobalStyle } from 'styled-components';
import fonts from './font';

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 10px;
  }
  ${fonts} 
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size:1.4rem;
    font-family: ${({ theme }) => theme.fonts.base};
  }
  body {
    background-color:#f0f0f0;
    color: #333;
    /* 기타 전역 스타일 */
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;