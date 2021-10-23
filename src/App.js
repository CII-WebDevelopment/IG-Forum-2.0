import React from 'react';
import LogIn from './components/pages/login';
import theme from './theme';
import { ThemeProvider } from '@mui/material';
import SideBar from './components/pages/sideBar';
import UserProfile from './components/pages/userProfile';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <LogIn />
      {/* <SideBar /> */}
    </ThemeProvider>
  );
}

export default App;
