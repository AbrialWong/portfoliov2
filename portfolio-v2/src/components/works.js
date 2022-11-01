import React, { useState } from "react";
import "../App.css";

import {
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

//images, resume
import calculator from "../asserts/calculator.png";
import contactform from "../asserts/contact-form.jpg";
import ecommerce from "../asserts/e-commerce-home.png";
import onlinecv from "../asserts/online-cv.png";
import spweb from "../asserts/personal-web.png";
import shoppingsite from "../asserts/shopping-site.png";
import employeedash from "../asserts/employee-dash.png";
import onlinecv2 from "../asserts/onlinecv-2.png";

import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    // Desktop Version
    worksDiv: {
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
  };
});

export const Works = () => {
  const { classes } = useStyles();

  return (
    <>
      <Typography variant="h2" className={classes.worksHeader}>
        Some of my works
      </Typography>
      <div className={classes.worksContent}>
        <Grid container spacing={10}>
          {/* SP web */}
          <Grid item md={3} xl={3}>
            <Card sx={{ width: 300, backgroundColor: "#ebded4" }}>
              <CardMedia
                component="img"
                width="200"
                height="207"
                image={spweb}
              />
              <CardContent>
                <Typography
                  // variant="h4"
                  sx={{
                    // marginLeft: "22px",
                    // paddingTop: "15px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Personal Website <br />
                  (February 2012)
                </Typography>
                <Typography
                  // variant="h6"
                  color="Black"
                >
                  Created a personal website for one of my school assignment
                  when I was in Year 2 in Singapore Polytechnic using HTML , CSS
                  , Adobe Photoshop{" "}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Kissabella */}
          <Grid item md={3} xl={3}>
            <Card sx={{ width: 300, backgroundColor: "#ebded4" }}>
              <CardMedia
                component="img"
                width="200"
                height="207"
                image={shoppingsite}
              />
              <CardContent>
                <Typography
                  // variant="h4"
                  sx={{
                    // marginLeft: "22px",
                    // paddingTop: "15px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  A Shopping website (kissabella) <br />
                  (February 2012)
                </Typography>
                <Typography
                  // variant="h6"
                  color="Black"
                >
                  Created a single page shopping site for kissabella using HTML
                  , CSS , Adobe Photoshop
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* online cv */}
          <Grid item md={3} xl={3}>
            <Card sx={{ width: 300, backgroundColor: "#ebded4" }}>
              <CardMedia
                component="img"
                width="200"
                height="207"
                image={onlinecv}
              />
              <CardContent>
                <Typography
                  // variant="h4"
                  sx={{
                    // marginLeft: "22px",
                    // paddingTop: "15px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Online CV - V1 <br />
                  (March 2021)
                </Typography>
                <Typography
                  // variant="h6"
                  color="Black"
                >
                  This is my Online CV where it contains my portfolio, resume. I
                  built it using HTML and for the styling, I used CSS, Bootstrap
                  and SCSS. This website has been hosted on Netlify.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "#c47f38",
                    color: "white",
                    textDecoration: "none",
                  }}
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/AbrialWong/Online-CV")
                  }
                >
                  Github
                </Button>

                <Button
                  variant="contained"
                  size="small"
                  sx={{ backgroundColor: "#c47f38", color: "white" }}
                  onClick={() =>
                    (window.location.href = "https://abrialwong.netlify.app/")
                  }
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* calculator */}
          <Grid item md={3} xl={3}>
            <Card sx={{ width: 300, backgroundColor: "#ebded4" }}>
              <CardMedia
                component="img"
                width="200"
                height="207"
                image={calculator}
              />
              <CardContent>
                <Typography
                  // variant="h4"
                  sx={{
                    // marginLeft: "22px",
                    // paddingTop: "15px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Colorful Calculator (March 2021)
                </Typography>
                <Typography
                  // variant="h6"
                  color="Black"
                >
                  This is my calculator. I built it using React, Javascript and
                  for the styling, I used CSS. This website has been hosted on
                  Netlify.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ backgroundColor: "#c47f38", color: "white" }}
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/AbrialWong/calculator")
                  }
                >
                  Github
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ backgroundColor: "#c47f38", color: "white" }}
                  onClick={() =>
                    (window.location.href =
                      "https://react-colorful-calculator.netlify.app/")
                  }
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* contactform */}
          <Grid item md={3} xl={3}>
            <Card sx={{ width: 300, backgroundColor: "#ebded4" }}>
              <CardMedia
                component="img"
                width="200"
                height="207"
                image={contactform}
              />
              <CardContent>
                <Typography
                  // variant="h4"
                  sx={{
                    // marginLeft: "22px",
                    // paddingTop: "15px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Contact Form <br />
                  (March 2021)
                </Typography>
                <Typography
                  // variant="h6"
                  color="Black"
                >
                  This is a simple contact form and user is able to validate
                  data using express validator in node js. I built it using HTML
                  , CSS ,SCSS, Bootstrap,EJS, Express JS.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ backgroundColor: "#c47f38", color: "white" }}
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/AbrialWong/contactForm")
                  }
                >
                  Github
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* ecommerce */}
          <Grid item md={3} xl={3}>
            <Card sx={{ width: 300, backgroundColor: "#ebded4" }}>
              <CardMedia
                component="img"
                width="200"
                height="207"
                image={ecommerce}
              />
              <CardContent>
                <Typography
                  // variant="h4"
                  sx={{
                    // marginLeft: "22px",
                    // paddingTop: "15px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  A e-commerce site (The Sponge Oven) <br />
                  (December 2021)
                </Typography>
                <Typography
                  // variant="h6"
                  color="Black"
                >
                  This is simple e-commerce site for The Sponge Oven. I built it
                  using HTML, React, Javascript, React-Router-DOM and for the
                  styling, I used Semantic UI,Bootstrap, React-Bootstrap,
                  styled-components, CSS, SCSS{" "}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ backgroundColor: "#c47f38", color: "white" }}
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/AbrialWong/TheSpongeOven")
                  }
                >
                  Github
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* employee dashboard */}
          <Grid item md={3} xl={3}>
            <Card sx={{ width: 300, backgroundColor: "#ebded4" }}>
              <CardMedia
                component="img"
                width="200"
                height="207"
                image={employeedash}
              />
              <CardContent>
                <Typography
                  // variant="h4"
                  sx={{
                    // marginLeft: "22px",
                    // paddingTop: "15px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Employee Dashboard <br />
                  (October 2022)
                </Typography>
                <Typography
                  // variant="h6"
                  color="Black"
                >
                  This project was completed as part of the take home assignment
                  in the interview process for a job. I built it using React,
                  React-Redux, Redux Toolkit, Dummy rest api example, fetch and
                  for the styling, I used Ant Design, LESS. This website has
                  been hosted on Vercel.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ backgroundColor: "#c47f38", color: "white" }}
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/AbrialWong/employee-dashboard")
                  }
                >
                  Github
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ backgroundColor: "#c47f38", color: "white" }}
                  onClick={() =>
                    (window.location.href =
                      "https://employee-dashboard-antdesign.vercel.app/")
                  }
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* online cv - v2 */}
          <Grid item md={3} xl={3}>
            <Card sx={{ width: 300, backgroundColor: "#ebded4" }}>
              <CardMedia
                component="img"
                width="200"
                height="207"
                image={onlinecv2}
              />
              <CardContent>
                <Typography
                  // variant="h4"
                  sx={{
                    // marginLeft: "22px",
                    // paddingTop: "15px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Online CV - V2
                  <br />
                  (November 2022)
                </Typography>
                <Typography
                  // variant="h6"
                  color="Black"
                >
                  This is a SPA whereby it will showcase my portfolio, resume,
                  works. I built it using React and MUI. This website has been
                  hosted on Vercel.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ backgroundColor: "#c47f38", color: "white" }}
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/AbrialWong/portfoliov2")
                  }
                >
                  Github
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ backgroundColor: "#c47f38", color: "white" }}
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
