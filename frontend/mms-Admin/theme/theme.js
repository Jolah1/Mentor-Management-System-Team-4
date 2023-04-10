import { createMuiTheme, ThemeProvider } from '@mui/material';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#36868f', // primary color
      },
      secondary: {
        main: '#b0b2b5', // secondary color
      },
    },
    // other theme properties
  });
  export default theme;