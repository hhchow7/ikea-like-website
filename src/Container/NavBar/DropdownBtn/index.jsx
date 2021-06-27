import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

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
        endIcon={<ExpandMoreIcon style={{fill: "black"}} />}
        id="navButton"
      >
        {name}
      </Button>
  );
}
