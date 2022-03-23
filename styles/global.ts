import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'GimpoGothicBold00';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/GimpoGothicBold00.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo', 'GimpoGothicBold00', sans-serif;
  }
`;

export default GlobalStyle;
