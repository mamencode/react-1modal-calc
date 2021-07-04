import { makeStyles, SwipeableDrawer } from "@material-ui/core";
import React, { useState } from "react";

import TheCalc from "./TheCalc";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "50vh",
      padding: "10px"
    }
  },
  calcInput: {
    background: "none",
    border: "none",
    boxShadow: "none",
    outline: "none",
    // padding: "10px 5px",
    width: "100%",
    color: "#333",
    textAlign: "right",
    // fontSize: "30px",
    borderRadius: "0"
  }
}));

export default function Insert() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const anchor = "bottom";

  const handleOpen = () => {
    setOpen(true);
  };
  const closeHandling = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen}>open</button>
      <SwipeableDrawer anchor={anchor} open={open}>
        <div className={classes.list}>
          <TheCalc close={closeHandling} />
        </div>
      </SwipeableDrawer>
    </div>
  );
}
