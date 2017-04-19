import css from './root.scss';
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import Mui_Examples from './components/muiexamples';
import MdInput from './components/md_input';
import App_Bar from './components/app_bar';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

const App = () => (
    <div>
        <MuiThemeProvider>
            <App_Bar/>
        </MuiThemeProvider>
        <MuiThemeProvider>
            <MdInput/>
        </MuiThemeProvider>
    </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

