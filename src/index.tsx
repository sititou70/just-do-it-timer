import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { QueryParamProvider } from 'use-query-params';
import { Timer } from './components/Timer';
import { ThemeProvider } from '@material-ui/core';
import { mui_theme } from './styles/theme';
import { Global } from '@emotion/core';
import { global_style } from './styles/global-style';
import 'sanitize.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mui_theme}>
      <QueryParamProvider>
        <Global styles={global_style} />
        <Timer />
      </QueryParamProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
