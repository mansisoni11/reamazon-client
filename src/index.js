
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import from 'react-dom/client'
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import store from './store';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

