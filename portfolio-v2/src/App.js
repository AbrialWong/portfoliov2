import React, { useEffect } from "react";
import "./App.css";
import { Sidebar } from "./Sidebar";


import {
  Container,
  Avatar,
  Typography,
  Button
} from '@mui/material';

//images, resume
import profile from "./asserts/profile.jpeg";
import resume from "./asserts/resume.pdf";

//icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { makeStyles } from "tss-react/mui";
// import { fontWeight } from "@mui/system";
import { saveAs } from "file-saver";


const useStyles = makeStyles()((theme) => {
  return {
    // Desktop Version
    // root
    root: {
      backgroundColor: "#f4f4f4",
      fontFamily: "Suez One",
    },
    // navbar
    navbar: {
      display: "flex",
    },
    navbarHam: {
      flex: 1,
    },
    navbarLink: {
      display: "flex",
      marginRight: "51px",
    },
    navbarTxt: {
      marginLeft: "5px",
      fontSize: "20px",
      marginRight: "36px",
      marginBottom: "5px",
      marginTop: "33px",
      fontWeight:"bolder"

    },
    // content
    content: {
      // backgroundColor: "lightyellow"
    },
    indexDiv:{
      display: "flex",
      marginTop: "189px",
      paddingBottom: "135px"
    },
    indexImg:{
      flex:1
    },
    indexDesc:{
      flex:1,
      marginTop: "70px"
    },
    indexDescTxt1:{
      fontSize:"25px",
      fontFamily: "Suez One",
    },
    indexDescTxt2:{
      fontFamily: "Suez One",
      fontSize:"52px",
      color: "#c47f38",
      fontWeight:"bolder"

    },
    indexDescTxt3:{
      fontSize:"30px",
      // marginTop:"49px"
    },
    indexDescSocial:{
      color: "#c47f38",
      marginTop:"39px"
    },
    indexDescBtn:{
      backgroundColor: "#c47f38",
      width: "182px",
      height: "37px",
      marginTop:"31px"
    },

    // footer
    footer: {
      // backgroundColor: "palegreen",
      textAlign: "center",
      padding: "10px",
    },
  };
});

export const App = () => {
  const { classes } = useStyles(); 

  const saveFile = () => {
    saveAs(
      resume,
      "Wong Yu Miao Abrial | Resume.pdf"
    );
  };

  return (
    <>
      <div className={classes.root}>
        {/* navbar here */}
        <div className={classes.navbar} id="outer-container">
          <div className={classes.navbarHam}>
          {/* todo: To be edited later */}
            {/* <Sidebar
              pageWrapId={"page-wrap"}
              outerContainerId={"outer-container"}
            /> */}
          </div>
          <div className={classes.navbarLink}>
            <div className={classes.navbarTxt}>About</div>
            <div className={classes.navbarTxt}>Experience</div>
            <div className={classes.navbarTxt}>Projects</div>
            <div className={classes.navbarTxt}>Skills</div>
            <div className={classes.navbarTxt}>Contact</div>
          </div>
        </div>
        {/* content here */}
        <div className={classes.content}>
          {/* index page */}
          <div className={classes.indexDiv}>
            <div className={classes.indexImg}>
              <Avatar 
                sx={{ width: 390, height: 391, border: "8px solid #ebded4",borderRadius: "50%", objectFit: "cover", marginLeft:"400px", 
                }}
                src={profile} />
            </div>
            <div className={classes.indexDesc}>
              <Typography className={classes.indexDescTxt1}>Hello my name is </Typography>
              <Typography className={classes.indexDescTxt2}>Abrial Wong </Typography>
              <Typography className={classes.indexDescTxt3}>I am a software developer </Typography>
              <div className={classes.indexDescSocial}>
                <a href="https://github.com/AbrialWong"><GitHubIcon sx={{ width: 36, height: 36, color:"#c47f38"}}/></a>
                <a href="https://www.linkedin.com/in/abrial-wong/"><LinkedInIcon sx={{ width: 36, height: 36, color:"#c47f38"}}/></a>
              </div>
              <Button variant="contained" className={classes.indexDescBtn} onClick={saveFile}>Resume </Button>
            </div>

          </div>
          {/* <div style={{ border: "3px solid red" }}>About page</div>
          <div style={{ border: "3px solid blue" }}>Experience page</div>
          <div style={{ border: "3px solid green" }}>Projects page</div>
          <div style={{ border: "3px solid purple" }}>Skills page</div>
          <div style={{ border: "3px solid brown" }}>Contact page</div> */}
        </div>
        {/* footer here */}
        {/* <div className={classes.footer}>
          Proudly created by AbrialWong. Copyright @ 2022
        </div> */}
      </div>
    </>
  );
};
