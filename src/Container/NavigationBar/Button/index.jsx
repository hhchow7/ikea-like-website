import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons(props) {
  const classes = useStyles();
  const {name} = props;

  return (
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        id="navButton"
      >
        {name}
      </Button>
  );
}
