import pink from '@material-ui/core/colors/pink';
import deepPurple from '@material-ui/core/colors/deepPurple';
import { createMuiTheme } from '@material-ui/core';

export const mui_theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: pink[500],
    },
    secondary: {
      main: deepPurple[500],
    },
  },
});
