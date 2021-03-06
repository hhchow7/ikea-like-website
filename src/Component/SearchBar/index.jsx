import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
     padding: "2px 0px",
     display: "flex",
     alignItems: "center",
     width: 200,
     boxShadow: "none",
     border: "1px solid #ced4da",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  }
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <>
        <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search..."
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      </Paper>
    </>
  );
}
