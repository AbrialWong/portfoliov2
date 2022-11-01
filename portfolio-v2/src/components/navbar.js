import React, { useState } from "react";
import "../App.css";
import { HashLink } from "react-router-hash-link";

import { useTheme } from "@mui/material/styles";

import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    // Desktop Version
    // -- navbar --
    navbar: {
      display: "flex",
    },
    navbarHam: {
      flex: 1,
    },
    navbarLink: {
      display: "flex",
      marginRight: "51px",
      // fontFamily: "Suez One",
      fontWeight: "bold",
    },
    navbarTxt: {
      marginLeft: "5px",
      fontSize: "20px",
      marginRight: "36px",
      marginBottom: "5px",
      marginTop: "33px",
    },
  };
});

export const NavBar = () => {
  const { classes } = useStyles();
  const theme = useTheme();

  return (
    <>
      <div className={classes.navbar} id="outer-container">
        <div className={classes.navbarHam}>
          {/* todo: To be edited later */}
          {/* <Sidebar
              pageWrapId={"page-wrap"}
              outerContainerId={"outer-container"}
            /> */}
        </div>
        <div className={classes.navbarLink}>
          <div className={classes.navbarTxt}>
            {/* <a href="#about"></a> */}
            <HashLink smooth to={"/page#aboutus"}>
              About{" "}
            </HashLink>
          </div>
          <div className={classes.navbarTxt}>
            <a href="#">Experience</a>
          </div>
          <div className={classes.navbarTxt}>
            <a href="#">Projects</a>
          </div>
          <div className={classes.navbarTxt}>
            <a href="#">Skills</a>
          </div>
          <div className={classes.navbarTxt}>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </>
  );
};
