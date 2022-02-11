import React from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Chip from "@mui/material/Chip";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import DoneIcon from "@mui/icons-material/Done";
import TopBar from "../topBar/TopBar";
import PaginationComponent from "../pagination/Pagination";

// mui styles
const useStyles = makeStyles({
  chip1: {
    backgroundColor: "#F49118 !important",
    marginLeft: "5px",
  },
  chip2: {
    backgroundColor: "#B5274D !important",
    color: "#ffffff !important",
    marginLeft: "5px",
  },
  openIssues: {
    marginLeft: "20px",
  },
  selectStyling: {
    color: "#57606A !important",
    marginLeft: "20px",
    fontSize: "14px !important",
  },
  listHeaderWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between !important",

    "@media (max-width: 992px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      width: "100%",
    },
  },
  listItemTextWrapper: {
    display: "flex",
    // alignItems:"center",

    "@media (max-width: 992px)": {
      width: "100%",
    },
  },
  selectWrapper: {
    display: "flex",
    flexWrap: "wrap",

    "@media (max-width: 992px)": {
      width: "100%",
    },
  },
  menuStyling: {
    backgroundColor: "white !important",
  },
});

const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
      border: "1px solid lightgray",
      boxShadow: "none",
    },
  },
};

const issuesList = [
  {
    title: " We no longer support global installation of Create React App",
    description: " #12022 opened yesterday by Arcanorum",
  },
  {
    title:
      " Unable to create build after upgrading to react-script@5.0.0 #12020",
    description: " #12022 opened yesterday by Arcanorum",
  },
  {
    title:
      "  Error while running create-react-app command on windows 11 using WSL",
    description: "   #12016 opened 3 days ago by aslamdoctor",
  },
];

const Home = () => {
  const [filter, setFilter] = React.useState("");

  const classes = useStyles();

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Container>
      {/* top bar component */}
      <TopBar />
      {/* list component */}
      <Grid
        sx={{
          border: "1px solid lightgray",
          borderRadius: "8px",
          marginTop: "20px",
        }}
      >
        {/* list header */}
        <List
          sx={{ backgroundColor: "#F6F8FA", borderRadius: "8px 8px 0px 0px" }}
          disablePadding
        >
          <ListItem disablePadding>
            <ListItemButton className={classes.listHeaderWrapper}>
              <div className={classes.listItemTextWrapper}>
                <ListItemIcon>
                  <AdjustOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography fontSize={16} fontWeight="bold">
                        1,183 open
                        <span
                          className={classes.openIssues}
                          style={{ color: "gray", fontWeight: "lighter" }}
                        >
                          {/* <DoneIcon /> */}
                          6,234 Closed
                        </span>
                      </Typography>
                    </React.Fragment>
                  }
                />
              </div>
              <div className={classes.selectWrapper}>
                <FormControl sx={{ m: 0.4 }}>
                  <Select
                    variant="standard"
                    value={filter}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    size="small"
                    disableUnderline
                    className={classes.selectStyling}
                    sx={{ pt: 0.7 }}
                    MenuProps={MenuProps}
                  >
                    <MenuItem>
                      <b>Filter by Author</b>
                    </MenuItem>
                    <Divider />
                    <MenuItem value={filter} className={classes.menuStyling}>
                      Ten
                    </MenuItem>
                    <Divider />
                    <MenuItem value={filter} className={classes.menuStyling}>
                      Author
                    </MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 0.4 }}>
                  <Select
                    variant="standard"
                    value={filter}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    size="small"
                    disableUnderline
                    className={classes.selectStyling}
                    sx={{ pt: 0.7 }}
                    MenuProps={MenuProps}
                  >
                    <MenuItem>
                      <b>Filter by Label</b>
                    </MenuItem>
                    <Divider />
                    <MenuItem value={filter} className={classes.menuStyling}>
                      Ten
                    </MenuItem>
                    <Divider />
                    <MenuItem value={filter} className={classes.menuStyling}>
                      Label
                    </MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 0.4 }}>
                  <Select
                    variant="standard"
                    value={filter}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    size="small"
                    disableUnderline
                    className={classes.selectStyling}
                    sx={{ pt: 0.7 }}
                    MenuProps={MenuProps}
                  >
                    <MenuItem>
                      <b>Filter by Project</b>
                    </MenuItem>
                    <Divider />
                    <MenuItem value={filter} className={classes.menuStyling}>
                      Ten
                    </MenuItem>
                    <Divider />
                    <MenuItem value={filter} className={classes.menuStyling}>
                      Project
                    </MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 0.4 }}>
                  <Select
                    variant="standard"
                    value={filter}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    size="small"
                    disableUnderline
                    className={classes.selectStyling}
                    sx={{ pt: 0.7 }}
                    MenuProps={MenuProps}
                  >
                    <MenuItem>
                      <b>Filter by Milestones</b>
                    </MenuItem>
                    <Divider />
                    <MenuItem value={filter} className={classes.menuStyling}>
                      Ten
                    </MenuItem>
                    <Divider />
                    <MenuItem value={filter} className={classes.menuStyling}>
                      Milestones
                    </MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 0.4 }}>
                  <Select
                    variant="standard"
                    value={filter}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    size="small"
                    disableUnderline
                    className={classes.selectStyling}
                    sx={{ pt: 0.7 }}
                    MenuProps={MenuProps}
                  >
                    <MenuItem>
                      <b>Filter by Assignee</b>
                    </MenuItem>
                    <Divider />
                    <MenuItem value={filter} className={classes.menuStyling}>
                      Ten
                    </MenuItem>
                    <Divider />
                    <MenuItem value={filter} className={classes.menuStyling}>
                      Assignee
                    </MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 0.4 }}>
                  <Select
                    variant="standard"
                    value={filter}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    size="small"
                    disableUnderline
                    className={classes.selectStyling}
                    sx={{ pt: 0.7 }}
                    MenuProps={MenuProps}
                  >
                    <MenuItem>
                      <b>Filter by sort</b>
                    </MenuItem>
                    <Divider />
                    <MenuItem value={filter} className={classes.menuStyling}>
                      Ten
                    </MenuItem>
                    <Divider />
                    <MenuItem value={filter} className={classes.menuStyling}>
                      sort
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        {/* list showing */}
        {issuesList.length ? (
          issuesList.map((value, index) => {
            return (
              <List disablePadding key={index}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <AdjustOutlinedIcon color="success" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <Typography fontSize={16} fontWeight="bold">
                            {value.title}
                            <Chip
                              label="issue: bug report"
                              size="small"
                              className={classes.chip1}
                              sx={{ fontWeight: "light" }}
                            />
                            <Chip
                              label="needs triage"
                              size="small"
                              className={classes.chip2}
                              sx={{ fontWeight: "light" }}
                            />
                          </Typography>
                        </React.Fragment>
                      }
                      secondary={
                        <React.Fragment>
                          <Typography fontSize={13}>
                            {value.description}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </List>
            );
          })
        ) : (
          <Grid>
            <CircularProgress />
          </Grid>
        )}
      </Grid>
      {/* pagination component */}
      <PaginationComponent />
    </Container>
  );
};

export default Home;
