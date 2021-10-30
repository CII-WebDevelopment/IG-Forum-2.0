import React from 'react';
import LogIn from './components/pages/login';
import theme from './theme';
import { ThemeProvider } from '@mui/material';
import SideBar from './components/pages/sideBar';
import UserProfile from './components/pages/userProfile';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreatePost from './components/pages/createPost';
import UserRegistration from './components/pages/userRegistration'
function App() {
  return (
    <ThemeProvider theme={theme}>
        <Router basename={'/'}>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={UserRegistration}
          />
          <Route exact path={`${process.env.PUBLIC_URL}/create-new-post`} component={CreatePost} />
          </Router>
    </ThemeProvider>
  );
}

export default App;
