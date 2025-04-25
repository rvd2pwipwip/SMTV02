import React from 'react';
import ReactDOM from 'react-dom/client';
import { init } from '@noriginmedia/norigin-spatial-navigation';
import App from './App';
import '@smtv/design-tokens/dist/design-tokens.css';
import './styles/index.css';

// Initialize spatial navigation
init({
  debug: true,
  visualDebug: false
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 