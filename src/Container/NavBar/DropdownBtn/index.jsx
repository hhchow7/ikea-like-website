import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons(props) {
  const classes = useStyles();
  const {name, showDropdown, setShowDropdown} = props;

  return (
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={
          <ExpandMoreIcon 
            style={{
              fill: "black", 
              transform: showDropdown===true?"rotate(180deg)":"none",
              transition: "transform 0.3s linear"
            }} 
          />
        }
        id={"navButton"}
        onClick = {() => {setShowDropdown()}}
      >
        {name}
      </Button>
  );
}
