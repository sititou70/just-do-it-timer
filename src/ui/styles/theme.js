import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import deepPurple from '@material-ui/core/colors/deepPurple';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: indigo,
    secondary: deepPurple,
  },
});

export default theme;

