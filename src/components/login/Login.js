import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import { theme } from "../../common/theme/theme";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex !important",
    alignItems: "center !important",
    height: "100vh",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatarCustom: {
    margin: theme.spacing(1),
    backgroundColor: `${theme.palette.primary.main} !important`,
  },
  buttonCustom: {
    margin: `${theme.spacing(2, 0, 3, 0)} !important`,
    backgroundColor: `${theme.palette.primary.main} !important`,
  },
  LinkCustom: {
    fontSize: theme.typography.small.fontSize,
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
}));

const LoginComponent = () => {
  const classes = useStyles();
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.setItem("_token", "abctesting");
    navigate("/bugs");
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container maxWidth="xs" className={classes.mainContainer}>
      <CssBaseline />
      <div className={classes.wrapper}>
        <Avatar className={classes.avatarCustom}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            className={classes.buttonCustom}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="#" className={classes.LinkCustom}>
                Forgot password ?
              </Link>
            </Grid>
            <Grid item>
              <Link to="#" className={classes.LinkCustom}>
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Container>
  );
};

export default LoginComponent;
