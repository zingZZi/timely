import { css } from 'styled-components';

const fonts = css`
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/pretendard/Pretendard-Thin.woff2') format('woff2'),
      url('/fonts/pretendard/Pretendard-Thin.woff') format('woff');
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/pretendard/Pretendard-Light.woff2') format('woff2'),
      url('/fonts/pretendard/Pretendard-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/pretendard/Pretendard-Regular.woff2') format('woff2'),
      url('/fonts/pretendard/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/pretendard/Pretendard-Medium.woff2') format('woff2'),
      url('/fonts/pretendard/Pretendard-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/pretendard/Pretendard-Bold.woff2') format('woff2'),
      url('/fonts/pretendard/Pretendard-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

 @font-face {
    font-family: 'Kkukkukk';
    src: url('/fonts/kkukkukk/MemomentKkukkukk.otf') format('opentype'), /* otf -> opentype */
      url('/fonts/kkukkukk/MemomentKkukkukk.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }
`;

export default fonts;