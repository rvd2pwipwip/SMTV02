import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@smtv/design-tokens/dist/design-tokens.css';
import './styles/index.css';
import './utils/spatialNavigation';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 