import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/no-unresolved
import { registerSW } from 'virtual:pwa-register';
import App from './app';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

if ('serviceWorker' in navigator) {
  // && !/localhost/.test(window.location)) {
  registerSW();
}
