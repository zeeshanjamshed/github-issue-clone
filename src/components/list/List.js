import React, { useEffect } from "react";
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
import allActions from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import PaginationComponent from "../pagination/Pagination";

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
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(0.75),
    },
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
    "& .css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input": {
      backgroundColor: "transparent",
    },
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
      justifyContent: "center",
      alignItems: "center",
    },
  },
  menuStyling: {
    backgroundColor: `${theme.palette.common.white} !important`,
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
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
      cursor: "pointer",
    },
  },
  descText: {
    fontSize: theme.typography.small.fontSize,
  },
  iconCustomization: {
    paddingTop: theme.spacing(0.4),
  },
  LoadingStyle: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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

const selectData = [
  {
    option1: "Filter by Author",
    option2: "oldest",
    option3: "Author",
  },
  {
    option1: "Filter by Label",
    option2: "oldest",
    option3: "Label",
  },
  {
    option1: "Filter by Project",
    option2: "oldest",
    option3: "Project",
  },
  {
    option1: "Filter by Milestone",
    option2: "oldest",
    option3: "Milestone",
  },
  {
    option1: "Filter by Assignee",
    option2: "oldest",
    option3: "Assignee",
  },
  {
    option1: "Filter by Sort",
    option2: "oldest",
    option3: "Sort",
  },
];

const ListComponent = () => {
  const [filter, setFilter] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const issuesData = useSelector((state) => state.postReducer);
  console.log(issuesData, "issues Data");
  const totalCount = issuesData.issueAPiData.total_count;
  const loading = issuesData.loading;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    dispatch(allActions.fetchPosts(page, rowsPerPage));
  }, [page]);

  return (
    <>
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
          <ListItem className={classes.listHeaderWrapper}>
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
                        size="large"
                        disableUnderline
                        className={classes.selectStyling}
                        // sx={{ pt: 0.5 }}
                        MenuProps={MenuProps}
                      >
                        <MenuItem className={classes.menuStyling}>
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
          </ListItem>
        </List>
        <Divider />
        {/* list showing */}
        {!loading ? (
          issuesData?.issueAPiData?.items?.map((value, index) => {
            return (
              <List disablePadding key={index}>
                <ListItem className={classes.listHeaderWrapper}>
                  <ListItemIcon>
                    <AdjustOutlinedIcon className={classes.iconColor} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Typography>
                          <span className={classes.listText}>
                            {value.title}
                          </span>

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
                          #{value.number} {value.state}ed by {value.user.login}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider />
              </List>
            );
          })
        ) : (
          <Grid className={classes.LoadingStyle}>
            <CircularProgress />
          </Grid>
        )}
      </Grid>
      {/* pagination component */}
      <PaginationComponent
        totalCount={totalCount}
        page={page}
        rowsPerPage={rowsPerPage}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default ListComponent;
