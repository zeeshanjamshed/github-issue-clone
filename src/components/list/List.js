import React from "react";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@emotion/react";
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
import { theme } from "../../common/theme/theme";

// mui styles
const useStyles = makeStyles((theme) => ({
  chip1: {
    backgroundColor: theme.palette.warning.main,
    fontWeight: theme.typography.weightlight.fontWeight,
    marginLeft: theme.spacing(0.75),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(0.75),
    },
  },
  chip2: {
    backgroundColor: theme.palette.info.main,
    fontWeight: theme.typography.weightlight.fontWeight,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(0.75),
  },
  openIssues: {
    marginLeft: theme.spacing(2),
    fontWeight: theme.typography.weightlight.fontWeight,
    color: theme.palette.secondary.dark,
  },
  headerText: {
    fontSize: theme.typography.normal.fontSize,
    fontWeight: theme.typography.weightbold.fontWeight,
    color: theme.palette.common.lightBlack,
  },
  selectStyling: {
    color: theme.palette.secondary.dark,
    marginLeft: theme.spacing(2),
    fontSize: theme.typography.small.fontSize,
  },
  listHeaderWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      width: "100%",
    },
  },
  listItemTextWrapper: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  selectWrapper: {
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  menuStyling: {
    backgroundColor: `${theme.palette.common.white} !important`,
  },
  iconColor: {
    color: theme.palette.success.main,
  },
  listText: {
    color: theme.palette.common.lightBlack,
    fontSize: theme.typography.normal.fontSize,
    fontWeight: theme.typography.weightbold.fontWeight,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  descText: {
    fontSize: theme.typography.small.fontSize,
  },
  iconCustomization: {
    paddingTop: theme.spacing(0.4),
  },
}));

const MenuProps = {
  PaperProps: {
    style: {
      ...theme,
      width: 250,
      border: `1px solid ${theme.palette.secondary.main}`,
      boxShadow: "none",
    },
  },
};

const issuesList = [
  {
    title: "We no longer support global installation of Create React App",
    description: "#12022 opened yesterday by Arcanorum",
  },
  {
    title:
      "Unable to create build after upgrading to react-script@5.0.0 #12020",
    description: "#12022 opened yesterday by Arcanorum",
  },
  {
    title:
      "Error while running create-react-app command on windows 11 using WSL",
    description: "#12016 opened 3 days ago by aslamdoctor",
  },
];

const selectData = [
  {
    option1: "Filter by Author",
    option2: "Ten",
    option3: "Author",
  },
  {
    option1: "Filter by Label",
    option2: "Ten",
    option3: "Label",
  },
  {
    option1: "Filter by Project",
    option2: "Ten",
    option3: "Project",
  },
  {
    option1: "Filter by Milestone",
    option2: "Ten",
    option3: "Milestone",
  },
  {
    option1: "Filter by Assignee",
    option2: "Ten",
    option3: "Assignee",
  },
  {
    option1: "Filter by Sort",
    option2: "Ten",
    option3: "Sort",
  },
];

const ListComponent = () => {
  const [filter, setFilter] = React.useState("");
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme.spacing(0.4), "spacing");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Grid
      sx={{
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRadius: "8px",
        marginTop: theme.spacing(2),
      }}
    >
      {/* list header */}
      <List
        sx={{
          backgroundColor: `${theme.palette.secondary.light}`,
          borderRadius: "8px 8px 0px 0px",
        }}
        disablePadding
      >
        <ListItem disablePadding>
          <ListItemButton className={classes.listHeaderWrapper}>
            <div className={classes.listItemTextWrapper}>
              <ListItemIcon className={classes.iconCustomization}>
                <AdjustOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography className={classes.headerText}>
                      1,183 open
                      <span className={classes.openIssues}>
                        {/* <DoneIcon /> */}
                        6,234 Closed
                      </span>
                    </Typography>
                  </React.Fragment>
                }
              />
            </div>
            <div className={classes.selectWrapper}>
              {selectData.length ? (
                selectData.map((value, index) => {
                  return (
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
                          <b>{value.option1}</b>
                        </MenuItem>
                        <Divider />
                        <MenuItem
                          value={filter}
                          className={classes.menuStyling}
                        >
                          {value.option2}
                        </MenuItem>
                        <Divider />
                        <MenuItem
                          value={filter}
                          className={classes.menuStyling}
                        >
                          {value.option3}
                        </MenuItem>
                      </Select>
                    </FormControl>
                  );
                })
              ) : (
                <Grid>
                  <CircularProgress />
                </Grid>
              )}
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
                    <AdjustOutlinedIcon className={classes.iconColor} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Typography className={classes.listText}>
                          {value.title}
                          <Chip
                            label="issue: bug report"
                            size="small"
                            className={classes.chip1}
                          />
                          <Chip
                            label="needs triage"
                            size="small"
                            className={classes.chip2}
                          />
                        </Typography>
                      </React.Fragment>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography className={classes.descText}>
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
  );
};

export default ListComponent;
