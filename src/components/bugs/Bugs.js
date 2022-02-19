import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Container } from "@mui/material";
import Table from "../table/Table";
import AddBugForm from "../addBug/AddBugForm";
import { width } from "@mui/system";

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
    <div className={classes.innerContentWrapper}>
      {["left"].map((anchor) => (
        <Grid>
          <div className={classes.fabWrapper}>
            <Fab
              variant="extended"
              className={classes.fabCustom}
              onClick={toggleDrawer(anchor, true)}
            >
              <AddIcon sx={{ mr: 2 }} />
              Add Bug
            </Fab>
          </div>
          {/* table component */}
          <Table />
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <Box
              role="presentation"
              onKeyDown={toggleDrawer(anchor, false)}
              className={classes.drawerCustom}
            >
              {/* add form */}
              <AddBugForm toggleDrawer={toggleDrawer} anchor={anchor} />
            </Box>
          </SwipeableDrawer>
        </Grid>
      ))}
    </div>
  );
}
