import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import 'assets/styles/main.scss';

const helmetContext = {};
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
