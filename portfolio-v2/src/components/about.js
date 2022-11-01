import React, { useState } from "react";
import "../App.css";

import {
  Typography,
  Card,
  CardContent,
  ImageList,
  ImageListItem,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

//images, resume
import bake from "../asserts/bake.jpg";
import design from "../asserts/design.png";

import { makeStyles } from "tss-react/mui";
// import { fontWeight } from "@mui/system";
import { saveAs } from "file-saver";

const useStyles = makeStyles()((theme) => {
  return {
    // Desktop Version
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
  };
});

export const About = () => {
  const { classes } = useStyles();
  const theme = useTheme();

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

  return (
    <>
      <div className={classes.aboutDiv} id="aboutus">
        <Typography variant="h2" className={classes.aboutHeader}>
          About Me
        </Typography>
        <div className={classes.aboutContent}>
          <Card
            sx={{
              width: "800px",
              marginRight: "140px",
              backgroundColor: "#c47f38",
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ margin: "22px" }} color="#f4f4f4">
                My interest in web development has started when i attended a web
                development bootcamp on udemy.
                <br />
                <br />
                I enjoyed building mini projects whenever i learn a new
                programming skills through online courses
                <br />
                <br />
                I'm always passionate about learning new things, solving
                problems and adapt to changes. I strongly believes that
                continuous learning is the key to improvement.
                <br />
                <br />
                With my past experience in the F&B industry has taught me to be
                detailed orientated, multi task and work under pressure.{" "}
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: "600px",
              height: "320px",
              backgroundColor: "#ebded4",
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{ margin: "22px", fontWeight: "bold" }}
              >
                Things i enjoy doing:
                <ImageList
                  sx={{ width: 500, height: 450 }}
                  cols={3}
                  rowHeight={164}
                >
                  {itemData.map((item) => (
                    <ImageListItem key={item.img} sx={{ marginLeft: "20px" }}>
                      <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        // sx={{padding:"10px"}}
                      />
                      <Typography
                        variant="h6"
                        sx={{ textAlign: "center", fontWeight: "bold" }}
                      >
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
    </>
  );
};
