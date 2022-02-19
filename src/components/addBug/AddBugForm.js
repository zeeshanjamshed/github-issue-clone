import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const useStyles = makeStyles((theme) => ({
  innerContentWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
  mainContainer: {
    display: "flex !important",
    alignItems: "center !important",
    height: "100vh",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },

  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginTop: theme.spacing(5),
  },
  buttonCustom: {
    backgroundColor: `${theme.palette.primary.main} !important`,
  },
}));

const AddBugForm = ({ toggleDrawer, anchor }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const classes = useStyles();

  return (
    <Container maxWidth="xs" className={classes.mainContainer}>
      <div className={classes.wrapper}>
        <Typography component="h1" variant="h5" textAlign="center">
          Add Bug
        </Typography>
        <Box component="form" sx={{ mt: 2 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoComplete="title"
            autoFocus
            size="medium"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="desc"
            label="Description"
            type="text"
            id="desc"
            autoComplete="desc"
            size="medium"
          />
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="demo-simple-select-label">State</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="State"
              onChange={handleChange}
            >
              <MenuItem value={10}>Open</MenuItem>
              <MenuItem value={20}>closed</MenuItem>
              <MenuItem value={30}>solved</MenuItem>
            </Select>
          </FormControl>
          <div className={classes.buttonWrapper}>
            <Button
              type="submit"
              size="large"
              variant="contained"
              className={classes.buttonCustom}
            >
              Add Bug
            </Button>
            <Button
              variant="contained"
              color="error"
              size="large"
              onClick={toggleDrawer(anchor)}
            >
              cancel
            </Button>
          </div>
        </Box>
      </div>
    </Container>
  );
};

export default AddBugForm;
