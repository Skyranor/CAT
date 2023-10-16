import React from 'react';
import ReactDOM from 'react-dom/client';

import { StoreProvider } from './app/providers/StoreProvider';
import { Router } from './app/providers/Router';
import './app/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <Router />
    </StoreProvider>
  </React.StrictMode>
);
