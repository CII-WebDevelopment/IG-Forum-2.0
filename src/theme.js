import { createTheme } from '@mui/material';
const theme = createTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#222E50',
    },
    tertiary: {
      main: '#fff'
    }
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'green !important',
  },
  //   spacing: {
  //     margin: '2rem',
  //     padding: '2rem',
  //   },
  typography: {
    fontFamily: 'Lato',
  },
});

export default theme;
