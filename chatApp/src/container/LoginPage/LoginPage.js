import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CardComp from "../../components/UI/Card/CardComp";
import { Container, Paper, Tab, Tabs } from "@material-ui/core";
import Navbar from "../../components/Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../../components/UI/Modal";
import { authSuccess, increment, openLoginModal } from "../../actions";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState(0);

  const isLoggedin = useSelector((state) => state.isLoggedin);

  const dispatch = useDispatch();

  dispatch(increment());
  const count = useSelector((state) => state.counter);

  dispatch(openLoginModal());

  const valueHandler = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const emailHandler = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const submissionHandler = (event) => {
    event.preventDefault();
    const loginData = {
      email: email,
      password: password,
    };
    fetch("https://chat-app-bknd.herokuapp.com/login", {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      method: "POST",
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch(authSuccess(res.userData.token));
        return res;
      })
      .catch((error) => console.log(error));
  };

  console.log(isLoggedin);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(2),

      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));
  const classes = useStyles();

  return (
    <React.Fragment>
      <Modal>
        <Container maxWidth="sm">
          <CardComp>
            <Paper square>
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={valueHandler}
                aria-label="disabled tabs example"
              >
                <Tab label="Active" />
                <Tab label="Disabled" disabled />
                <Tab label="Active" />
              </Tabs>
            </Paper>
            <h3> Welcome to YOUR Chat App ,please login</h3>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                type="email"
                required
                id="outlined-basic"
                label="Enter your E-mail"
                variant="outlined"
                onChange={emailHandler}
              />
              <TextField
                type="password"
                required
                id="outlined-basic"
                label="Enter your password"
                variant="outlined"
                onChange={passwordHandler}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={submissionHandler}
              >
                Login
              </Button>
            </form>
          </CardComp>
        </Container>
      </Modal>
    </React.Fragment>
  );
};

export default LoginPage;
