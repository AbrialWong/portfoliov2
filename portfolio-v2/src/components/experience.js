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
    // root
    root: {
      backgroundColor: "#f4f4f4",
      // fontFamily: "Suez One",
    },
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
    // -- content --
    content: {
      // backgroundColor: "lightyellow"
    },
    // content (index)
    indexDiv: {
      display: "flex",
      marginTop: "189px",
      paddingBottom: "300px",
    },
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
    // content (About)
    aboutDiv: {
      // fontWeight:"bold",
      marginLeft: "137px",
      paddingBottom: "300px",
    },
    aboutHeader: {
      marginLeft: "23px",
      fontWeight: "bold",
      paddingBottom: "61px",
    },
    aboutContent: {
      fontWeight: "bold",
      display: "flex",
    },
    // content (experience)
    experienceDiv: {
      // fontWeight:"bold",
      marginLeft: "137px",
      paddingBottom: "300px",
    },
    experienceHeader: {
      marginLeft: "23px",
      fontWeight: "bold",
      paddingBottom: "61px",
    },
    experienceContent: {
      fontWeight: "bold",
      display: "flex",
    },
    // content (works)
    worksDiv: {
      // fontWeight:"bold",
      marginLeft: "137px",
      paddingBottom: "300px",
    },
    worksHeader: {
      marginLeft: "23px",
      fontWeight: "bold",
      paddingBottom: "61px",
    },
    worksContent: {
      fontWeight: "bold",
      display: "flex",
    },
    // content (Skills)
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
    // content (contact)
    contactDiv: {
      // fontWeight:"bold",
      marginLeft: "137px",
      paddingBottom: "300px",
    },
    contactHeader: {
      marginLeft: "23px",
      fontWeight: "bold",
      paddingBottom: "61px",
    },
    contactContent: {
      fontWeight: "bold",
    },
    contactTxt: {
      fontWeight: "bold",
      fontSize: "70px",
      color: "#c47f38",
    },

    // -- footer --
    footer: {
      // backgroundColor: "palegreen",
      textAlign: "center",
      padding: "10px",
      fontWeight: "bold",
      // fontFamily: "Suez One",
    },
  };
});

export const Experience = () => {
  const { classes } = useStyles();
  const theme = useTheme();
  const [selectTime, setSelectedTime] = useState(null);
  const [open, setOpen] = useState(false);

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1574815963212-14443d0f94be",
      title: "Travelling",
    },
    {
      img: bake,
      title: "Baking",
    },
    {
      img: design,
      title: "Designing",
    },
  ];

  // to download resume
  const saveFile = () => {
    saveAs(resume, "Wong Yu Miao Abrial | Resume.pdf");
  };

  return (
    <>
      <div className={classes.experienceDiv}>
        <Typography variant="h2" className={classes.experienceHeader}>
          My Past Experience
        </Typography>
        <div className={classes.experienceContent}>
          <Timeline align="left">
            {/* 2021 - 2022 */}
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography
                  variant="body2"
                  color={selectTime === 1 ? "#c47f38" : "textSecondary"}
                >
                  2021 - 2022
                </Typography>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot
                  onClick={() => {
                    setSelectedTime(1);
                  }}
                />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent>
                <Paper
                  elevation={3}
                  sx={{
                    backgroundColor: "#c47f38",
                    width: "80%",
                    paddingBottom: "20px",
                    paddingRight: "22px",
                  }}
                >
                  {selectTime === 1 && (
                    <>
                      <Typography
                        variant="h4"
                        sx={{
                          marginLeft: "22px",
                          paddingTop: "15px",
                          fontWeight: "bold",
                          color: "#ebded4",
                        }}
                      >
                        Junior Software Developer <br />
                        May 2021 - September 2022
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          marginLeft: "22px",
                          paddingTop: "15px",
                          // fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        Industrial Electronics Pte Ltd <br />
                        <ul>
                          <li>
                            Worked and maintain a content management application
                            with React / Redux / Material-UI / Node.js/ graphQL/
                            typeGraphQL / MongoDB
                          </li>
                          <li>Draw wireframe, sequence diagram, flowchart</li>
                          <li>
                            Write and update documentation that is related to
                            the project
                          </li>
                          <li>
                            Working on a content sharing website. Website is
                            hosted on WordPress, and I have to create our own
                            themes with PHP / HTML 5 / CSS / Bootstrap.
                          </li>
                          <li>
                            Write API with graphQL, typeGraphQL and typeORM
                          </li>
                          <li>Write simple unit testing using Jest</li>
                        </ul>
                      </Typography>
                    </>
                  )}
                </Paper>
              </TimelineContent>
            </TimelineItem>
            {/* 2019 - 2020 */}
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography
                  variant="body2"
                  color={selectTime === 2 ? "#c47f38" : "textSecondary"}
                >
                  2019 - 2020
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  onClick={() => {
                    setSelectedTime(2);
                  }}
                />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent>
                <Paper
                  elevation={3}
                  sx={{
                    backgroundColor: "#c47f38",
                    width: "80%",
                    paddingBottom: "20px",
                    paddingRight: "22px",
                  }}
                >
                  {selectTime === 2 && (
                    <>
                      <Typography
                        variant="h4"
                        sx={{
                          marginLeft: "22px",
                          paddingTop: "15px",
                          fontWeight: "bold",
                          color: "#ebded4",
                        }}
                      >
                        Head Baker / Pastry Cook <br />
                        March 2019 - October 2020
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          marginLeft: "22px",
                          paddingTop: "15px",
                          // fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        F&B <br />
                        <ul>
                          <li>The Sponge Oven (Freelance)</li>
                          <li>Windowsill Pies</li>
                          <li>Sesame & Bagels Café</li>
                        </ul>
                      </Typography>
                    </>
                  )}
                </Paper>
              </TimelineContent>
            </TimelineItem>
            {/* 2013 - 2015 */}
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography
                  variant="body2"
                  color={selectTime === 3 ? "#c47f38" : "textSecondary"}
                >
                  2013 - 2015
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  onClick={() => {
                    setSelectedTime(3);
                  }}
                />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper
                  elevation={3}
                  sx={{
                    backgroundColor: "#c47f38",
                    width: "80%",
                    paddingBottom: "20px",
                    paddingRight: "22px",
                  }}
                >
                  {selectTime === 3 && (
                    <>
                      <Typography
                        variant="h4"
                        sx={{
                          marginLeft: "22px",
                          paddingTop: "15px",
                          fontWeight: "bold",
                          color: "#ebded4",
                        }}
                      >
                        Associate Consultant, Application <br />
                        March 2013 - March 2015
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          marginLeft: "22px",
                          paddingTop: "15px",
                          // fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        NCS group <br />
                        <ul>
                          <li> Perform testing support for ICA users</li>
                          <li>
                            Responsible for unit testing and test driven
                            development
                          </li>
                          <li>Application Support for IT related issues</li>
                        </ul>
                      </Typography>
                    </>
                  )}
                </Paper>
              </TimelineContent>
            </TimelineItem>
            {/* 2011 */}
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography
                  variant="body2"
                  color={selectTime === 4 ? "#c47f38" : "textSecondary"}
                >
                  2011
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  onClick={() => {
                    setSelectedTime(4);
                  }}
                />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper
                  elevation={3}
                  sx={{
                    backgroundColor: "#c47f38",
                    width: "80%",
                    paddingBottom: "20px",
                    paddingRight: "22px",
                  }}
                >
                  {selectTime === 4 && (
                    <>
                      <Typography
                        variant="h4"
                        sx={{
                          marginLeft: "22px",
                          paddingTop: "15px",
                          color: "#ebded4",
                        }}
                      >
                        Web Designer (Marketing Department) - Internship <br />
                        March 2011 - April 2011
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          marginLeft: "22px",
                          paddingTop: "15px",
                          // fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        PC-Connect <br />
                        <ul>
                          <li>
                            Assist my manager in maintaining the website for
                            their company
                          </li>
                        </ul>
                      </Typography>
                    </>
                  )}
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </>
  );
};
