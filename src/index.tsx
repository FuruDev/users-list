import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/global-styles';
import theme from './theme/theme';
import App from './App';
import UsersProvider from './context/UsersContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UsersProvider>
        <App />
      </UsersProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
