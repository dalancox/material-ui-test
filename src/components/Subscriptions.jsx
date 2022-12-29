import { Box, Typography, useTheme } from "@mui/material";

import { tokens } from "../theme";

export default function Subscriptions() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box backgroundColor={colors.primary[400]} height={200}>
        <Typography>Subscriptions</Typography>
      </Box>
    </>
  );
}
