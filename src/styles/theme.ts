import blue from '@material-ui/core/colors/blue';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { createMuiTheme } from '@material-ui/core';

export const primary_color = blue;
export const secondary_color = blueGrey;

export const mui_theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: primary_color[500],
    },
    secondary: {
      main: secondary_color[500],
    },
  },
});
