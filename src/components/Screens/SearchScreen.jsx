import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
// import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import CustomSlider from "../CustomSlider";
import CustomButton from "../CustomButton";
import CustTextFields from "../CustTextFields";
import CustSelect from "../CustSelect";
import Box from "@material-ui/core/Box";

const SearchScreen = () => {
  return (
    // <div className={classes.root}>
    <div style={{ marginTop: "12%" }}>
      <CssBaseline />

      <Grid
        spacing={1}
        item
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={6}
        style={{ margin: "auto", alignContent: "center" }}
      >
        <Grid item xs="auto" style={{ textAlign: "center" }}>
          <Typography display="inline" variant="h3">
            Search
          </Typography>
          <Typography display="inline" variant="h3">
            <Box display="inline" fontWeight="fontWeightBold" m={1}>
              Doctors
            </Box>
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <CustTextFields />
        </Grid>

        <Grid item xs={12} md={6}>
          <CustSelect />
        </Grid>

        <Grid item xs={12} md={4}>
          <CustomSlider label1="Price" label2="500-1000" points={[500, 1000]} />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomSlider label1="Distance" label2="5km" points={5} />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomSlider label1="Ranking" label2="Medium" points={30} />
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <CustomButton text="Search" />
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchScreen;
