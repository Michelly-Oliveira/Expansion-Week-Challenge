import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary: #000;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #EB265E;
    --twitter: #33A1F2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2C8ED6;

  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    color: var(--white);
  }

  html, body, #root{
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }

  body, input, button {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, 'Roboto Slab', serif;
    font-size: 14px;
  }

  html {
    background: var(--primary);
  }

  h1, h2, h3, h4, h5, h6 strong {
    font-weight: 500;
  }
  
  button {
    cursor: pointer;
  }
`;
