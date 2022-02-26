import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import Fab from "@mui/material/Fab";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import AddIcon from "@mui/icons-material/Add";
import Table from "../table/Table";
import AddBugForm from "../addBug/AddBugForm";

const useStyles = makeStyles((theme) => ({
    innerContentWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
    },
    fabWrapper: {
      display: "flex",
      justifyContent: "center",
    },
    fabCustom: {
      padding: `${theme.spacing(2)} !important`,
      backgroundColor: `${theme.palette.common.gray} !important`,
      "&:hover": {
        backgroundColor: `${theme.palette.common.gray} !important`,
      },
    },
  }));

export default function Bugs() {
  const [state, setState] = React.useState({
    left: false,
  });

  const list = useSelector((state) => state.todoReducers.list);
  const classes = useStyles();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <React.Fragment>
        <div className={classes.fabWrapper}>
          <Fab
            variant="extended"
            className={classes.fabCustom}
            onClick={toggleDrawer("left", true)}
          >
            <AddIcon sx={{ mr: 2 }} />
            Add Bug
          </Fab>
        </div>
        <SwipeableDrawer
          anchor="left"
          open={state.left}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          <AddBugForm anchor={"left"} toggleDrawer={toggleDrawer} />
        </SwipeableDrawer>
        <Table list={list} />
      </React.Fragment>
    </div>
  );
}
