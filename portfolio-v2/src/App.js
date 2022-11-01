import { useRef } from "react";
import "./App.css";

import { Index } from "./components/index";
import { About } from "./components/about";
import { Experience } from "./components/experience";
import { Works } from "./components/works";
import { Skills } from "./components/skills";
import { Contact } from "./components/contact";

import { makeStyles } from "tss-react/mui";
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

// import ScrollToTop from "./components/ScrollToTop";

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
      flex: 1,
      marginRight: "51px",
      // fontFamily: "Suez One",
      fontWeight: "bold",
      justifyContent: "end",
    },
    navbarTxt: {
      marginLeft: "5px",
      fontSize: "20px",
      marginRight: "36px",
      marginBottom: "5px",
      marginTop: "33px",
      //added the following
      textDecoration: "none",
      display: "inline",
      cursor: "pointer",
      flex: 1,
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
export const App = () => {
  const { classes } = useStyles();
  const about = useRef(null);
  const experience = useRef(null);
  const works = useRef(null);
  const skills = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Paper className={classes.root}>
        {/* <ScrollToTop /> */}
        {/* navbar */}
        <div className={classes.navbar} id="outer-container">
          {/* navbar-hamburger */}
          <div>navhamburger</div>
          {/* navbar-links */}
          <div className={classes.navbarLink}>
            <ul>
              <li
                onClick={() => scrollToSection(about)}
                className={classes.navbarTxt}
              >
                About
              </li>
              <li
                onClick={() => scrollToSection(experience)}
                className={classes.navbarTxt}
              >
                Experience
              </li>
              <li
                onClick={() => scrollToSection(works)}
                className={classes.navbarTxt}
              >
                Works
              </li>
              <li
                onClick={() => scrollToSection(skills)}
                className={classes.navbarTxt}
              >
                Skills
              </li>
              <li
                onClick={() => scrollToSection(contact)}
                className={classes.navbarTxt}
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
        {/* content */}
        <div className={classes.indexDiv}>
          <Index />
        </div>
        <div ref={about} className={classes.aboutDiv}>
          <About />
        </div>
        <div ref={experience} className={classes.experienceDiv}>
          <Experience />
        </div>
        <div ref={works} className={classes.experienceDiv}>
          <Works />
        </div>
        {/* TODO: Skills */}
        {/* <div ref={skills} className={classes.skillsDiv}>
          <Skills />
        </div> */}
        <div ref={contact} className={classes.contactDiv}>
          <Contact />
        </div>
        {/* footer */}
        <div className={classes.footer}>
          Proudly created by AbrialWong. Copyright @ 2022
        </div>
      </Paper>
    </>
  );
};

{
  /* <div className={classes.navbar} id="outer-container">
<div className={classes.navbarHam}>
  {/* todo: To be edited later */
}
{
  /* <Sidebar
    pageWrapId={"page-wrap"}
    outerContainerId={"outer-container"}
  /> */
}
// </div>
// <div className={classes.navbarLink}>
//   <div className={classes.navbarTxt}>
//     <a href="#about">About</a>
//   </div>
//   <div className={classes.navbarTxt}>
//     <a href="#">Experience</a>
//   </div>
//   <div className={classes.navbarTxt}>
//     <a href="#">Projects</a>
//   </div>
//   <div className={classes.navbarTxt}>
//     <a href="#">Skills</a>
//   </div>
//   <div className={classes.navbarTxt}>
//     <a href="#">Contact</a>
//   </div>
// </div>
// </div> */}
