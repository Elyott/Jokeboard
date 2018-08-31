// Application entrypoint.

// Load up the application styles
require('../styles/application.scss');

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import configureStore from './store';

ReactDOM.render(
<Provider store={configureStore()}>
  <App />
</Provider>,
document.getElementById('react-root'));
