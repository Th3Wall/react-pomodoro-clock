import React from 'react';
import ReactDOM from 'react-dom';
import './_variables.sass';
import './index.sass';
import Timer from './Timer';
import { StateProvider } from "./stateProvider";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <Timer />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);