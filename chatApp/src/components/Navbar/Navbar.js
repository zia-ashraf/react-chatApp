import {
  AppBar,
  Toolbar,
  Menu,
  Typography,
  makeStyles,
  IconButton,
  Box,
  Button,
} from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import DehazeIcon from "@material-ui/icons/Dehaze";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { createTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openLoginModal } from "../../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    width: "100vw",

    color: "default",
    "& a": {
      color: "white",
      textDecoration: "none",
    },
  },
  linkItem: {
    padding: "3%",
    display: "flex",
    fontSize: 14,
  },
  icon: {
    color: "#8075ED",
  },
  logo: {
    fontSize: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& img": {
      height: 40,
      width: 40,
      paddingRight: 30,
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  appBar: {
    backgroundColor: theme.palette.primary.dark,
    borderBottom: "0",
    boxShadow: "0 0 0 0",
  },
}));

const Navbar = (props) => {
  const [mobileView, setMoblieView] = useState(false);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setMoblieView(true)
        : setMoblieView(false);
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  });
  //   const displayMobile=()=>{
  //     const handleDrawerOpen = () =>
  //     setState((prevState) => ({ ...prevState, drawerOpen: true }));
  //   const handleDrawerClose = () =>
  //     setState((prevState) => ({ ...prevState, drawerOpen: false }));
  //     return (
  //         <React.Fragment>

  //         <Toolbar>
  //         <IconButton
  //             ...
  //             >
  //             <MenuIcon />
  //         </IconButton>
  //         <Drawer
  //             {...{
  //             anchor: "left",
  //             open: drawerOpen,
  //             onClose: handleDrawerClose,
  //         }}
  //         >
  //             <div>{getDrawerChoices()}</div>
  //         </Drawer>
  //         <div>{femmecubatorLogo}</div>
  //         </Toolbar>
  //     );
  // };

  const classes = useStyles();
  const dispatch = useDispatch();

  const openModalHandler = () => {
    dispatch(openLoginModal());
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" display="block">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">News</Typography>
          <Link to="/">
            <Button color="inherit" onClick={openModalHandler}>
              Login
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
