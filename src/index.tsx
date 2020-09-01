import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { QueryParamProvider } from 'use-query-params';
import { Timer } from './components/Timer';

ReactDOM.render(
  <React.StrictMode>
    <QueryParamProvider>
      <Timer />
    </QueryParamProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
