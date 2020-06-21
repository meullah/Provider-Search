import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles(theme => ({
  froot: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1)
    }
  },
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: `8px`
      }
    }
  }
}));

const CustTextFields = () => {
  const classes = useStyles();
  return (
    <form className={classes.froot} noValidate autoComplete="off">
      <TextField
        classes={{ root: classes.root }}
        id="outlined-textarea"
        label="Name"
        placeholder="Placeholder"
        variant="outlined"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
    </form>
  );
};

export default CustTextFields;
