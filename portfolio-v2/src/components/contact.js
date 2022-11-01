import React, { useState } from "react";
import "../App.css";

import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

//icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import { makeStyles } from "tss-react/mui";
// import { fontWeight } from "@mui/system";

const useStyles = makeStyles()((theme) => {
  return {
    // Desktop Version
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
  };
});

export const Contact = () => {
  const { classes } = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography variant="h2" className={classes.contactHeader}>
        Contact
      </Typography>
      <div className={classes.contactContent}>
        <div>
          <Typography className={classes.contactTxt}>
            I'm currently looking for frontend developer / software developer
            opportunites. <br /> Hit me up below!
          </Typography>
          <div className={classes.indexDescSocial}>
            <a href="https://github.com/AbrialWong">
              <GitHubIcon sx={{ width: 36, height: 36, color: "#c47f38" }} />
            </a>
            <a href="https://www.linkedin.com/in/abrial-wong/">
              <LinkedInIcon sx={{ width: 36, height: 36, color: "#c47f38" }} />
            </a>
            <PhoneIcon
              sx={{ width: 36, height: 36, color: "#c47f38" }}
              onClick={handleClickOpen}
            />

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              fullWidth={true}
            >
              <DialogTitle
                id="alert-dialog-title"
                sx={{
                  // marginLeft: "22px",
                  // paddingTop: "15px",
                  margin: "22px",
                  fontWeight: "bold",
                  color: "black",
                }}
                variant="h4"
                // variant="h2" className={classes.contactHeader}
              >
                Contact
              </DialogTitle>
              <DialogContent>
                <DialogContentText
                  id="alert-dialog-description"
                  variant="h6"
                  sx={{
                    marginLeft: "22px",
                    color: "#c47f38",
                    fontWeight: "bold",
                  }}
                >
                  +65 8299 7408
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Close</Button>
              </DialogActions>
            </Dialog>
            {/* </a> */}
            <a href="mailto:abrial-wong@live.com.sg">
              <EmailIcon sx={{ width: 36, height: 36, color: "#c47f38" }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
