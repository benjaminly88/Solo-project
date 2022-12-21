import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import store from './store';
import styles from '../scss/application.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>
);
