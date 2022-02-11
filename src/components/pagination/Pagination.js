import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";

const useStyles = makeStyles((theme) => ({
  paginationStyle: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
  },
}));

const PaginationComponent = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.paginationStyle}>
      <Pagination
        count={50}
        shape="rounded"
        color="primary"
        showFirstButton
        showLastButton
      />
    </Grid>
  );
};

export default PaginationComponent;
