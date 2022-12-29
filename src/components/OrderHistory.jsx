import { Box, Typography, useTheme } from "@mui/material";

import { tokens } from "../theme";

export default function OrderHistory() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box backgroundColor={colors.primary[400]} height={200}>
        <Typography>Order History</Typography>
      </Box>
    </>
  );
}
