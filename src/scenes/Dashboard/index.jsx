import { Grid, useTheme, Box, Typography, Button } from "@mui/material";

import { tokens } from "../../theme";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import StatBox from "../../components/StatBox";
import Transaction from "../../components/Transactions";
import Subscriptions from "../../components/Subscriptions";
import OrderHistory from "../../components/OrderHistory";

import FileDownloadIcon from "@mui/icons-material/FileDownload";
import EmailIcon from "@mui/icons-material/Email";
import PaidIcon from "@mui/icons-material/Paid";
import WarningIcon from "@mui/icons-material/Warning";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Customer() {
  let { customerId } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    const getCustomer = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${customerId}`
      );
      if (response.status === 200) {
        const json = await response.json();
        setUser(json);
        setLoading(false);
      } else if (response.status === 401) {
        console.log("error");
      }
    };

    getCustomer();
  }, [customerId]);

  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <main>
        <Grid container spacing={1}>
          <Grid item xs={12} md={10}>
            <Typography variant="h2" fontWeight="bold" gutterBottom>
              {user.name}
            </Typography>
            <Typography
              varient="caption"
              gutterBottom
              color={colors.blueAccent[500]}
            >
              {user.email}
            </Typography>
          </Grid>
          <Grid
            item
            display="flex"
            alignItems="flex-end"
            justifyContent="flex-end"
            xs={12}
            md={2}
          >
            <Box display="flex">
              <Button
                sx={{
                  backgroundColor: colors.blueAccent[700],
                  color: colors.grey[100],
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "10px",
                  height: "50px",
                }}
              >
                <FileDownloadIcon sx={{ mr: "10px" }} />
                Download
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Subscriptions />
          </Grid>
          <Grid item xs={12} md={6}>
            <OrderHistory />
          </Grid>
          <Grid item xs={12}>
            <Transaction />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <StatBox
              title="Emails Recieved"
              subTitle={"This is the first subtitle"}
              progress="0.25"
              icon={
                <EmailIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <StatBox
              title="Money Spent"
              subTitle={"This is the second subtitle"}
              progress="0.65"
              icon={
                <PaidIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <StatBox
              title="Incidents Reported"
              subTitle={"This is the third subtitle"}
              progress="0.85"
              icon={
                <WarningIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <StatBox
              title="Orders Recieved"
              subTitle={"This is the fourth subtitle"}
              progress="0.90"
              icon={
                <ShoppingCartIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Grid>
        </Grid>
      </main>
    );
  }
}
