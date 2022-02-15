import React from "react";
import { makeStyles } from "@mui/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import OutlinedInput from "@mui/material/OutlinedInput";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import Chip from "@mui/material/Chip";
import { theme } from "../../common/theme/theme";

// mui styles
const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    rowGap: theme.spacing(2),
    columnGap: theme.spacing(2),
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
    },
  },

  leftWrapper: {
    display: "flex",
    flex: 3,
  },

  buttonwrapper: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    columnGap: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      flexWrap: "wrap",
      gap: theme.spacing(2),
    },
  },

  groupButton: {
    height: 40,
    textTransform: "capitalize",
    fontStyle: theme.typography.normal.fontStyle,
    padding: theme.spacing(0, 2),
    fontSize: theme.typography.small.fontSize,
    boxShadow: "none",
    color: theme.palette.common.lightBlack,
    border: `1px solid ${theme.palette.secondary.main}`,
    "&:hover": {
      border: `1px solid ${theme.palette.secondary.main}`,
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 2),
      fontSize: theme.typography.extraSmall.fontSize,
    },
  },
  issueButton: {
    width: "110px",
    height: 40,
    textTransform: "capitalize",
    fontStyle: theme.typography.normal.fontStyle,
    padding: theme.spacing(0, 2),
    fontSize: theme.typography.small.fontSize,
    borderRadius: "7px",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
    },
  },
  menuStyling: {
    backgroundColor: `${theme.palette.common.white} !important`,
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
  },
  iconColor: {
    fill: `${theme.palette.common.lightBlack} `,
    marginRight: theme.spacing(0.75),
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

const filterSelectData = [
  {
    option1: "Filter Issues",
    option2: "Open issues and pull requests",
    option3: "Your issues",
    option4: "Your pull requests",
    option5: "Everything assigned to you",
    option6: "Everything mentioning you",
    option7: "FIlter",
  },
];

const TopBar = () => {
  const [filter, setFilter] = React.useState("");
  const classes = useStyles();

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className={classes.mainWrapper}>
      <div className={classes.leftWrapper}>
        {filterSelectData.length ? (
          filterSelectData.map((value, index) => {
            return (
              <FormControl
                sx={{
                  backgroundColor: `${theme.palette.secondary.light}`,
                  minWidth: "100px",
                }}
              >
                <Select
                  value={filter}
                  displayEmpty
                  size="small"
                  MenuProps={MenuProps}
                >
                  <MenuItem className={classes.menuStyling}>
                    <b>{value.option1}</b>
                  </MenuItem>
                  <Divider />
                  <MenuItem value={filter} className={classes.menuStyling}>
                    {value.option2}
                  </MenuItem>
                  <Divider />
                  <MenuItem value={filter} className={classes.menuStyling}>
                    {value.option3}
                  </MenuItem>
                  <Divider />
                  <MenuItem value={filter} className={classes.menuStyling}>
                    {value.option4}
                  </MenuItem>
                  <Divider />
                  <MenuItem value={filter} className={classes.menuStyling}>
                    {value.option5}
                  </MenuItem>
                  <Divider />
                  <MenuItem value={filter} className={classes.menuStyling}>
                    {value.option6}
                  </MenuItem>
                  <Divider />
                  <MenuItem value={filter} className={classes.menuStyling}>
                    {value.option7}
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

        <FormControl
          fullWidth
          variant="outlined"
          size="small"
          sx={{ backgroundColor: `${theme.palette.secondary.light}` }}
        >
          <OutlinedInput
            id="outlined-adornment-amount"
            // value=""
            placeholder="Search all issues"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <div className={classes.buttonwrapper}>
        <ButtonGroup>
          <Button variant="outlined" className={classes.groupButton}>
            <LocalOfferOutlinedIcon
              sx={{ mr: 1, width: "20px", height: "20px" }}
            />
            Labels
            <Chip label="31" size="small" sx={{ ml: 1 }} />
          </Button>
          <Button variant="outlined" className={classes.groupButton}>
            <svg
              aria-hidden="true"
              height="18"
              viewBox="0 0 16 16"
              version="1.1"
              width="18"
              data-view-component="true"
              className={classes.iconColor}
            >
              <path
                fillRule="evenodd"
                d="M7.75 0a.75.75 0 01.75.75V3h3.634c.414 0 .814.147 1.13.414l2.07 1.75a1.75 1.75 0 010 2.672l-2.07 1.75a1.75 1.75 0 01-1.13.414H8.5v5.25a.75.75 0 11-1.5 0V10H2.75A1.75 1.75 0 011 8.25v-3.5C1 3.784 1.784 3 2.75 3H7V.75A.75.75 0 017.75 0zm0 8.5h4.384a.25.25 0 00.161-.06l2.07-1.75a.25.25 0 000-.38l-2.07-1.75a.25.25 0 00-.161-.06H2.75a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h5z"
              ></path>
            </svg>
            MIlestones
            <Chip label="4" size="small" sx={{ ml: 1 }} />
          </Button>
        </ButtonGroup>
        <Button
          variant="contained"
          size="small"
          color="success"
          className={classes.issueButton}
        >
          New Issue
        </Button>
      </div>
    </div>
  );
};

export default TopBar;
