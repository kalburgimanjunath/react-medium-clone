import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { EarthoOneProvider } from '@eartho/one-client-react';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <EarthoOneProvider clientId="Izjn2uGoG4w6k4pcfIYN">
        <App />
      </EarthoOneProvider>
    </Router>
  </StrictMode>
);
