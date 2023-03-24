import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Black';
    src: url('/fonts/BentonSansCondensed Black.otf');
  }

  @font-face {
    font-family: 'BlackItalic';
    src: url('/fonts/BentonSansCondensed BlackIta.otf');
  }

  @font-face {
    font-family: 'Bold';
    src: url('/fonts/BentonSansCondensed Bold.otf');
  }

  @font-face {
    font-family: 'BoldItalic';
    src: url('/fonts/BentonSansCondensed BoldIta.otf');
  }

  @font-face {
    font-family: 'Italic';
    src: url('/fonts/BentonSansCondensed Italic.otf')
  }

  @font-face {
    font-family: 'Medium';
    src: url('/fonts/BentonSansCondensed Medium.otf')
  }

  @font-face {
    font-family: 'Medium Italic';
    src: url('/fonts/BentonSansCondensed MediumIta.otf')
  }

  @font-face {
    font-family: 'Regular';
    src: url('/fonts/BentonSansCondensed Regular.otf')
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Regular', sans-serif;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }

    @media (max-width: 480px) {
      font-size: 75%;
    }
  }

  body {
    background: ${({ theme }) => theme.gray};
    -webkit-font-smoothing: antialised;
  }

  button {
    cursor: pointer;
  }

  select {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
   }
`;
