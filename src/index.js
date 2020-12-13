import React from 'react';
import ReactDOM from 'react-dom';
import "./main.css"
import { ThemeProvider } from '@material-ui/core/styles';
import {customeTheme} from './components/ui/theme';
import AppRoutes from './routes/AppRoutes';


ReactDOM.render(
    <ThemeProvider theme={customeTheme}>
      <AppRoutes/>
    </ThemeProvider>,
  document.getElementById('root')
);


