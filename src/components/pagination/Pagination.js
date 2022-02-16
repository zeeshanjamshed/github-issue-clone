import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";

const useStyles = makeStyles((theme) => ({
  paginationStyle: {
    margin: theme.spacing(2, 0),
    display: "flex",
    justifyContent: "center",
  },
}));

const PaginationComponent = ({
  totalCount,
  page,
  handlePageChange,
  rowsPerPage,
}) => {

  const classes = useStyles();

  return (
    <Grid className={classes.paginationStyle}>
      <Pagination
        count={totalCount}
        page={page}
        onChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        shape="rounded"
        color="primary"
        showFirstButton
        showLastButton
      />
    </Grid>
  );
};

export default PaginationComponent;
