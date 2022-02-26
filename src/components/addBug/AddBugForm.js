import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { addTodo } from "../../redux/action/ProductAction";

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
  const [inputData, setInputData] = React.useState({
    title: "",
    desc: "",
    stateValue: "",
  });

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo(inputData));
    setInputData({
      title: "",
      desc: "",
      stateValue: "",
    });
  };

  const classes = useStyles();

  return (
    <Container className={classes.mainContainer} maxWidth="xs">
      <div className={classes.wrapper}>
        <Typography component="h1" variant="h5" textAlign="center">
          Add Bug
        </Typography>
        <form onSubmit={onSubmitHandler}>
          <TextField
            margin="normal"
            type="text"
            required
            fullWidth
            label="Title"
            autoComplete="title"
            autoFocus
            size="medium"
            name="title"
            value={inputData.title}
            onChange={onChangeHandler}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Description"
            autoComplete="desc"
            size="medium"
            name="desc"
            value={inputData.desc}
            onChange={onChangeHandler}
          />
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>State</InputLabel>
            <Select
              name="stateValue"
              value={inputData.stateValue}
              onChange={onChangeHandler}
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="closed">closed</MenuItem>
              <MenuItem value="solved">solved</MenuItem>
            </Select>
          </FormControl>
          <div className={classes.buttonWrapper}>
            <Button
              type="submit"
              size="large"
              variant="contained"
              className={classes.buttonCustom}
              // onClick={toggleDrawer(anchor)}
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
        </form>
      </div>
    </Container>
  );
};
export default AddBugForm;
