import { createGlobalStyle } from 'styled-components';

import BG from '../assets/background.png';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-image: url(${BG});
    background-repeat: no-repeat;
    background-size: 100vw 100vh;
  }

  @media (max-width: 426px) {
    body {
      background-size: 150%;
    }
  }

  body, button {
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;