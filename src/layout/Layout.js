import React from "react";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  contentWrapper: {
    margin: theme.spacing(6),
  },
}));

const mdTheme = createTheme();

export default function Layout(props) {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* navbar component */}
        <Navbar toggleDrawer={toggleDrawer} open={open} />
        {/* sidebar component */}
        <Sidebar toggleDrawer={toggleDrawer} open={open} />
        {/* dashboard component*/}
        {/* <Dashboard /> */}
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Grid className={classes.contentWrapper}>{props.children}</Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
