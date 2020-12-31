import React from 'react';
import ReactDOM from 'react-dom';
import './_variables.sass';
import './index.sass';
import Timer from './Timer';

ReactDOM.render(
  <React.StrictMode>
    <Timer />
  </React.StrictMode>,
  document.getElementById('root')
);