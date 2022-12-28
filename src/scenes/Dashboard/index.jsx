import { Grid } from "@mui/material";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useState } from "react";

export default function Customer() {
  let { customerId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getCustomer = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${customerId}`
      );
      if (response.status === 404) return;

      const json = await response.json();
      setUser(json);
    };

    getCustomer();
  }, [customerId]);

  if (user) {
    return (
      <main>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <h1>{user.name}</h1>
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
  } else {
    return (
      <main>
        <h1>No User!</h1>
      </main>
    );
  }
}
