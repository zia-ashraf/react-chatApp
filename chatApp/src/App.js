import { Box, createTheme, ThemeProvider } from "@material-ui/core";
import React from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./container/Home/Home";
import LoginPage from "./container/LoginPage/LoginPage";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostList from "./components/Post/PostList";
import { useSelector } from "react-redux";

const theme = createTheme({
  palette: {
    primary: {
      main: "#297F87",
    },
    secondary: {
      main: "#DF2E2E",
    },
  },
  spacing: 4,
});
const App = () => {
  // const [loginClick, setLoginClick] = useState(false);
  // const loginClickHandler = () => {
  //   setLoginClick(true);
  // };

  console.log("ok");
  // console.log(loginClick);

  const openLoginModal = useSelector((state) => state.loginSignupModal);
  console.log(openLoginModal);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar></Navbar>
        {/* {loginClick && <LoginPage />} */}
        <div style={{ paddingTop: 65 }}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts/" component={PostList} />
          </Switch>
          {openLoginModal && <LoginPage />}
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
