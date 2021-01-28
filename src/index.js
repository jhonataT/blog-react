import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

const body = (
  <div>
    <App/>
  </div>
);

const rootElement = document.getElementById('root');

ReactDOM.render(body, rootElement);
