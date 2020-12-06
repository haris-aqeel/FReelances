import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#edae15',
    },
    secondary: {
      main: 'hsla(0,0%,61%,.15)',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
   
  },
  typography:{
        button:{
            fontFamily: "'Poppins', sans-serif"
        }
  }
});

export default theme;