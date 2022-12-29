import { Box, Typography, useTheme } from "@mui/material";

import { tokens } from "../theme";

export default function Transaction() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box>
        <Typography backgroundColor={colors.primary[400]} height={200}>
          Transaction
        </Typography>
      </Box>
    </>
  );
}
