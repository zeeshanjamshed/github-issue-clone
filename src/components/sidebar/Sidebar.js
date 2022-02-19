import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import { ListItem } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BugReportIcon from "@mui/icons-material/BugReport";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { usePathname } from "../custom hook/usePathName";

const useStyles = makeStyles((theme) => ({
  LinkCustom: {
    color: theme.palette.common.black,
    textDecoration: "none ",
  },
  active: {
    textDecoration: "none ",
    color: theme.palette.primary.main,
  },

  hoverStyling: {
    "&:hover": {
      backgroundColor: "lightgray",
    },
  },
}));

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const Sidebar = ({ toggleDrawer, open }) => {
  const classes = useStyles();
  const pathName = usePathname();
  const path = pathName.slice(1, pathName.length);
  console.log(path);
  return (
    <>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        {/* sidebar list */}
        <List>
          <NavLink
            to="/bugs"
            className={(navData) =>
              navData.isActive ? classes.active : classes.LinkCustom
            }
          >
            <ListItem>
              <ListItemIcon>
                {path === "bugs" ? (
                  <BugReportIcon color="primary" />
                ) : (
                  <BugReportIcon />
                )}
              </ListItemIcon>
              <ListItemText primary="Bugs" sx={{ mt: 1 }} />
            </ListItem>
          </NavLink>
          <NavLink
            to="/dashboard"
            active
            className={(navData) =>
              navData.isActive ? classes.active : classes.LinkCustom
            }
          >
            <ListItem>
              <ListItemIcon>
                {path === "dashboard" ? (
                  <DashboardIcon color="primary" />
                ) : (
                  <DashboardIcon />
                )}
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={{ mt: 1 }} />
            </ListItem>
          </NavLink>
        </List>
        <Divider sx={{ my: 1 }} />
      </Drawer>
    </>
  );
};

export default Sidebar;
