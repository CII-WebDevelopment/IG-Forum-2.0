import React from 'react';
import LogIn from './components/pages/login';
import theme from './theme';
import { ThemeProvider } from '@mui/material';
import SideBar from './components/pages/sideBar';
import UserProfile from './components/pages/userProfile';
import EditProfile from './components/pages/editProfile';
import Login from './components/pages/login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreatePost from './components/pages/createPost';
import UserRegistration from './components/pages/userRegistration';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename={'/'}>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/`}
          component={UserRegistration}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/create-new-post`}
          component={CreatePost}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/user-profile`}
          component={UserProfile}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/edit-profile`}
          component={EditProfile}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/login`}
          component={Login}
        />
      </Router>
    </ThemeProvider>
  );
}

export default App;
