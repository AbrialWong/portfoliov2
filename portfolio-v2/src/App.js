import React, { useEffect } from "react";
import "./App.css";
import { Sidebar } from "./Sidebar";


import {
  Container,
  Avatar,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
  Box,
  ImageList,
  ImageListItem
} from '@mui/material';

//images, resume
import profile from "./asserts/profile.jpeg";
import resume from "./asserts/resume.pdf";
import bake from "./asserts/bake.jpg";
import design from "./asserts/design.png";

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
      fontWeight:"bold"
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
    indexDiv:{
      display: "flex",
      marginTop: "189px",
      paddingBottom: "300px"
    },
    indexImg:{
      flex:1
    },
    indexDesc:{
      flex:1,
      marginTop: "70px",
      // fontFamily: "Suez One",
      fontWeight:"bold"
    },
    indexDescTxt1:{
      fontSize:"30px",
      fontWeight:"bold"
    },
    indexDescTxt2:{
      fontSize:"52px",
      color: "#c47f38",
      fontWeight:"bolder"
    },
    indexDescTxt3:{
      fontSize:"20px",
      fontWeight:"bold"
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
      marginTop:"31px",
      // fontFamily: "Suez One",
      fontWeight:"bold"
    },
    // content (About)
    aboutDiv:{
      // fontWeight:"bold",
      marginLeft:"137px",
      paddingBottom:"113px"
    },
    aboutHeader:{
      marginLeft:"23px",
      fontWeight:"bold",
      paddingBottom:"61px"
    },
    aboutContent:{
      fontWeight:"bold",
      display: "flex"
    },

    // -- footer --
    footer: {
      // backgroundColor: "palegreen",
      textAlign: "center",
      padding: "10px",
      fontWeight:"bold",
      // fontFamily: "Suez One",

    },
  };
});

export const App = () => {
  const { classes } = useStyles(); 

  // to download resume
  const saveFile = () => {
    saveAs(
      resume,
      "Wong Yu Miao Abrial | Resume.pdf"
    );
  };

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1574815963212-14443d0f94be',
      title: 'Travelling',
    },
    {
      img: bake,
      title: 'Baking',
    },
    {
      img: design,
      title: 'Designing',
    }
  ];

  return (
    <>
      <Paper className={classes.root}>
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
            <div className={classes.navbarTxt}>
              <a href="#">About</a>
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
        {/* content here */}
        <div className={classes.content}>
          {/* index page */}
          <div className={classes.indexDiv}>
            <div className={classes.indexImg}>
              <Avatar 
                sx={{ width: 390, height: 391, border: "8px solid #ebded4",borderRadius: "50%", objectFit: "cover", marginLeft:"450px", 
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
          {/* About page */}
          <div className={classes.aboutDiv}>
            <Typography variant="h2" className={classes.aboutHeader}>About Me</Typography>
            <div className={classes.aboutContent}>
              <Card 
                sx={{ width: "800px", marginRight: "140px", backgroundColor: "#c47f38"}}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ margin:"22px" }} color="#f4f4f4">
                  My interest in web development has started when i attended a web development bootcamp on udemy. 
                  <br/><br/>
                  I enjoyed building mini projects whenever i learn a new programming skills through online courses
                  <br/><br/>
                  I'm always passionate about learning new things, solving problems and adapt to changes. I strongly believes that continuous learning is the key to improvement.
                  <br/><br/>
                  With my past experience in the F&B industry has taught me to be detailed orientated, multi task and work under pressure.                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ width: "600px" , height:"320px", backgroundColor: "#ebded4"}}>
                <CardContent>
                <Typography variant="h5" sx={{ margin:"22px" , fontWeight: "bold"}}>
                   Things i enjoy doing: 

                   <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                      {itemData.map((item) => (
                        <ImageListItem key={item.img} sx={{ marginLeft:"20px" }}>
                          <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            // sx={{padding:"10px"}}
                          />
                          <Typography variant="h6" sx={{textAlign:"center", fontWeight: "bold"}}>
                            {item.title}
                          </Typography>
                        </ImageListItem>
                      ))}
                  </ImageList>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* <div style={{ border: "3px solid blue" }}>Experience page</div> */}
          {/* <div style={{ border: "3px solid green" }}>Projects page</div> */}
          {/* <div style={{ border: "3px solid purple" }}>Skills page</div> */}
          {/* <div style={{ border: "3px solid brown" }}>Contact page</div> */}
        </div>
        {/* footer here */}
        {/* <div className={classes.footer}>
          Proudly created by AbrialWong. Copyright @ 2022
        </div> */}
      </Paper>
    </>
  );
};
