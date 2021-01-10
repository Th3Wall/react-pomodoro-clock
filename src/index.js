import React from 'react';
import ReactDOM from 'react-dom';
import './_variables.sass';
import './index.sass';
import Timer from './Timer';
import { StateProvider } from "./contexts/stateProvider";
import reducer, { initialState } from "./reducer";
import ThemeProvider from './contexts/themeProvider';
import Credits from './components/Credits/Credits';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <ThemeProvider>
        <Timer />
        <Credits />
      </ThemeProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);