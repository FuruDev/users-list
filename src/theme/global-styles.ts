import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import theme from './theme';

export const GlobalStyle = createGlobalStyle`
  ${reset};

  *, ::after, ::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    overflow-x: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
