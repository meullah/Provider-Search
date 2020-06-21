import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    width: "auto",
    padding: 24
  }
  // margin: {
  //   height: theme.spacing(1)
  // }
}));

const PrettoSlider = withStyles({
  root: {
    color: "#a2df77",
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "4px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);

const CustomSlider = ({ label1, label2, points }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(points);

  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid item>
          <Typography variant="subtitle2">{label1}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption">{label2}</Typography>
        </Grid>
      </Grid>
      <PrettoSlider
        valueLabelDisplay="auto"
        // defaultValue={80}
        value={value}
        onChange={(event, v) => {
          setValue(v);
        }}
      />
    </div>
  );
};
export default CustomSlider;
