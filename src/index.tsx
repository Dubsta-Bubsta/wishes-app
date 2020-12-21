import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'


import './i18n'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={"...loading"}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
