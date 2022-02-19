import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CircularProgress from "@mui/material/CircularProgress";

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
  tableWrapper: {
    marginTop: theme.spacing(5),
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
  loadingMessage: {
    textAlign: "center !important",
    height: "100px",
  },

  rowStyle: {
    backgroundColor: theme.palette.primary.main,
    height: "50px",
  },

  deleteBtn: {
    color: "#DD4A48",
  },
  editBtn: {
    color: "#406882",
  },
  popoverStyle: {
    backgroundColor: "#fff",
    padding: "50px",
  },
}));

const userData = [
  {
    title: "issue 1",

    desc: "desc 1",

    state: "open",
  },
  {
    title: "issue 2",

    desc: "desc 2",

    state: "open",
  },
  {
    title: "issue 2",

    desc: "desc 3",

    state: "open",
  },
  {
    title: "issue 4",

    desc: "desc 4",

    state: "open",
  },
  {
    title: "issue 5",

    desc: "desc 5",

    state: "open",
  },
];

const TableComponent = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.tableWrapper}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow className={classes.rowStyle}>
              <TableCell align="center" style={{ color: "#ffffff" }}>
                TITLE
              </TableCell>
              <TableCell align="center" style={{ color: "#ffffff" }}>
                DESCRIPTION
              </TableCell>
              <TableCell align="center" style={{ color: "#ffffff" }}>
                STATE
              </TableCell>
              <TableCell align="center" style={{ color: "#ffffff" }}>
                ACTIONS
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData?.length ? (
              userData.map((data, ind) => {
                return (
                  <TableRow key={data.ind}>
                    <TableCell align="center">{data.title}</TableCell>
                    <TableCell align="center">{data.desc}</TableCell>
                    <TableCell align="center">{data.state}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="Edit" placement="top">
                        <IconButton>
                          <EditIcon className={classes.editBtn} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete" placement="top">
                        <IconButton>
                          <DeleteIcon className={classes.deleteBtn} />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={3} className={classes.loadingMessage}>
                  <CircularProgress />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default TableComponent;
