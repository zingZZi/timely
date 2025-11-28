import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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