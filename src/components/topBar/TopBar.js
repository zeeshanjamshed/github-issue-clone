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

// mui styles
const useStyles = makeStyles({
  mainWrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    rowGap: "20px",
    columnGap: "20px",
    marginTop: "20px",
    "@media (max-width: 768px)": {
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
    columnGap: "20px",
    maxWidth: "100%",
    "@media (max-width: 440px)": {
      maxWidth: "100%",
    },
  },

  groupButton: {
    height: 40,
    textTransform: "capitalize !important",
    fontStyle: "normal !important",
    padding: "0px 16px !important",
    fontSize: "14px !important",
    boxShadow: "none !important",
    color: "#24292F !important",
  },
  issueButton: {
    width: "110px",
    height: 40,
    textTransform: "capitalize !important",
    fontStyle: "normal !important",
    padding: "0px 16px !important",
    fontSize: "14px !important",
    borderRadius: "7px !important",
    boxShadow: "none !important",
    "@media (max-width: 440px)": {},
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

const TopBar = () => {
  const [filter, setFilter] = React.useState("");
  const classes = useStyles();

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className={classes.mainWrapper}>
      <div className={classes.leftWrapper}>
        <FormControl sx={{ backgroundColor: "#F6F8FA", minWidth: "100px" }}>
          <Select
            value={filter}
            displayEmpty
            size="small"
            MenuProps={MenuProps}
          >
            <MenuItem>
              <b>Filter Issues</b>
            </MenuItem>
            <Divider />
            <MenuItem value={filter} className={classes.menuStyling}>
              Open issues and pull requests
            </MenuItem>
            <Divider />
            <MenuItem value={filter} className={classes.menuStyling}>
              Your issues
            </MenuItem>
            <Divider />
            <MenuItem value={filter} className={classes.menuStyling}>
              Your pull requests
            </MenuItem>
            <Divider />
            <MenuItem value={filter} className={classes.menuStyling}>
              Filter
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl
          fullWidth
          variant="outlined"
          size="small"
          sx={{ backgroundColor: "#F6F8FA" }}
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
          <Button
            variant="outlined"
            color="secondary"
            className={classes.groupButton}
          >
            <LocalOfferOutlinedIcon
              sx={{ mr: 1, width: "20px", height: "20px" }}
            />
            Labels
            <Chip label="31" size="small" sx={{ ml: 1 }} />
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.groupButton}
          >
            <svg
              aria-hidden="true"
              height="18"
              viewBox="0 0 16 16"
              version="1.1"
              width="18"
              data-view-component="true"
              class="octicon octicon-milestone"
              fill="#24292F"
              style={{ marginRight: "5px" }}
            >
              <path
                fill-rule="evenodd"
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
