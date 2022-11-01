import React, { useState } from "react";
import "../App.css";

import {
  Container,
  Avatar,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Paper,
  ImageList,
  ImageListItem,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

//images, resume
import profile from "../asserts/profile.jpeg";
import resume from "../asserts/resume.pdf";
import bake from "../asserts/bake.jpg";
import design from "../asserts/design.png";
import calculator from "../asserts/calculator.png";
import contactform from "../asserts/contact-form.jpg";
import ecommerce from "../asserts/e-commerce-home.png";
import onlinecv from "../asserts/online-cv.png";
import spweb from "../asserts/personal-web.png";
import shoppingsite from "../asserts/shopping-site.png";
import employeedash from "../asserts/employee-dash.png";

//icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";

import { makeStyles } from "tss-react/mui";
// import { fontWeight } from "@mui/system";
import { saveAs } from "file-saver";

const useStyles = makeStyles()((theme) => {
  return {
    // Desktop Version
    skillsDiv: {
      // fontWeight:"bold",
      marginLeft: "137px",
      paddingBottom: "300px",
    },
    skillsHeader: {
      marginLeft: "23px",
      fontWeight: "bold",
      paddingBottom: "61px",
    },
    skillsContent: {
      fontWeight: "bold",
      display: "flex",
    },
  };
});

export const Skills = () => {
  const { classes } = useStyles();
  const theme = useTheme();

  return <></>;
};
