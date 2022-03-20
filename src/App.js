import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./components/pages/login";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import SideBar from "./components/pages/sideBar";
import UserProfile from "./components/pages/userProfile";
import EditProfile from "./components/pages/editProfile";
import Login from "./components/pages/login";
import Alert from "./components/layout/Alert";
import Landing from "./components/layout/Landing";
import CreatePost from "./components/pages/createPost";
import UserRegistration from "./components/pages/userRegistration";
import { loadUser } from "./actions/auth";
import Dashboard from "./components/dashboard/Dashboard";
import userRegistration from "./components/pages/userRegistration";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import { FeedPage } from "./components/pages/feedPage";

import PrivateRoute from "./components/routing/PrivateRoute";

import "./App.css";
import setAuthToken from "./utils/setAuthToken";
import Navbar from "./components/pages/navBar";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        <Alert></Alert>
        <ThemeProvider theme={theme}>
          {/* <Navbar></Navbar> */}
          <Router basename={"/"}>
            <Switch>
              <Route exact path="/" component={Landing}></Route>
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
                path={`${process.env.PUBLIC_URL}/register`}
                component={UserRegistration}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/login`}
                component={Login}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/feedNew`}
                component={FeedPage}
              />
              <PrivateRoute
                exact
                path={`${process.env.PUBLIC_URL}/dashboard`}
                component={Dashboard}
              />
            </Switch>
          </Router>
        </ThemeProvider>
      </Fragment>
    </Provider>
  );
};

export default App;
