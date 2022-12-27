import "./Customer.css";
import { Grid } from "@mui/material";

import { useParams } from "react-router-dom";
// import { useState } from "react";

export default function Customer() {
  let { customerId } = useParams();

  return (
    <main>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <div>xs=4</div>
        </Grid>
        <Grid item xs={8}>
          <div>xs=8</div>
        </Grid>
        <Grid item xs={4}>
          <div>xs=4</div>
        </Grid>
        <Grid item xs={8}>
          <div>xs=8</div>
        </Grid>
      </Grid>
    </main>
  );
}
