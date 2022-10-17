import React from "react";
import './App.css';
import {Sidebar} from './Sidebar';

import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    // Desktop Version
    // root
    root: {
    },
    // navbar
    navbar: {
      backgroundColor: "lightpink",
      display: "flex"
    },
    navbarHam: {
      flex:1,
    },
    navbarLink: {
      display:"flex",
      marginRight:"30px"
    },
    navbarTxt: {
      padding: "5px",
      margin: "5px",
      color: "black",
      fontWeight: "bold",
      fontSize: "20px"
    },
    // content
    content: {
      // backgroundColor: "lightyellow"
    },
    // footer
    footer: {
      backgroundColor: "palegreen",
      textAlign: "center"
    },
    

  };
});



export const App = () => {
  const {classes} = useStyles(); // how to assign UseStyle

  return (
    <>
      {/* navbar here */}
      <div className={classes.navbar} id="outer-container">
        <div className={classes.navbarHam}>
          <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        </div>
        <div className={classes.navbarLink}>
          <div className={classes.navbarTxt}>
            About     
          </div>  
          <div className={classes.navbarTxt}>
            Experience   
          </div>  
          <div className={classes.navbarTxt}>
            Projects    
          </div>  
          <div className={classes.navbarTxt}>
            Skills  
          </div>      
          <div className={classes.navbarTxt}>
            Contact  
          </div> 
        </div>
      </div>
      {/* content here */}
      <div className={classes.content}>
      content
      </div>
      {/* footer here */}
      <div className={classes.footer}>
        Proudly created by AbrialWong. Copyright @ 2022
      </div>

    </>
  );
};
