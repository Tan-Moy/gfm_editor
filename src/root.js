import css from './root.scss';
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Mui_Examples from './components/muiexamples';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <Mui_Examples />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

