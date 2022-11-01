import React, { useState } from "react";
import "../App.css";

import { Avatar, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

//images, resume
import profile from "../asserts/profile.jpeg";
import resume from "../asserts/resume.pdf";

//icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { makeStyles } from "tss-react/mui";
import { saveAs } from "file-saver";

const useStyles = makeStyles()((theme) => {
  return {
    // Desktop Version
    indexImg: {
      flex: 1,
    },
    indexDesc: {
      flex: 1,
      marginTop: "70px",
      // fontFamily: "Suez One",
      fontWeight: "bold",
    },
    indexDescTxt1: {
      fontSize: "30px",
      fontWeight: "bold",
    },
    indexDescTxt2: {
      fontSize: "52px",
      color: "#c47f38",
      fontWeight: "bolder",
    },
    indexDescTxt3: {
      fontSize: "20px",
      fontWeight: "bold",
      // marginTop:"49px"
    },
    indexDescSocial: {
      color: "#c47f38",
      marginTop: "39px",
    },
    indexDescBtn: {
      backgroundColor: "#c47f38",
      width: "182px",
      height: "37px",
      marginTop: "31px",
      // fontFamily: "Suez One",
      fontWeight: "bold",
    },
  };
});

export const Index = () => {
  const { classes } = useStyles();
  const theme = useTheme();

  // to download resume
  const saveFile = () => {
    saveAs(resume, "Wong Yu Miao Abrial | Resume.pdf");
  };

  return (
    <>
      <div className={classes.indexImg}>
        <Avatar
          sx={{
            width: 390,
            height: 391,
            border: "8px solid #ebded4",
            borderRadius: "50%",
            objectFit: "cover",
            marginLeft: "450px",
          }}
          src={profile}
        />
      </div>
      <div className={classes.indexDesc}>
        <Typography className={classes.indexDescTxt1}>
          Hello my name is
        </Typography>
        <Typography className={classes.indexDescTxt2}>Abrial Wong </Typography>
        <Typography className={classes.indexDescTxt3}>
          I am a software developer
        </Typography>
        <div className={classes.indexDescSocial}>
          <a href="https://github.com/AbrialWong">
            <GitHubIcon sx={{ width: 36, height: 36, color: "#c47f38" }} />
          </a>
          <a href="https://www.linkedin.com/in/abrial-wong/">
            <LinkedInIcon sx={{ width: 36, height: 36, color: "#c47f38" }} />
          </a>
        </div>
        <Button
          variant="contained"
          className={classes.indexDescBtn}
          onClick={saveFile}
        >
          Resume
        </Button>
      </div>
    </>
  );
};
