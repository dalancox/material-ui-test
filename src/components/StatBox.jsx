import { Box, useTheme } from "@mui/material";

import { tokens } from "../theme";

export default function StatBox() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box
        backgroundColor={colors.primary[400]}
        width={"100%"}
        height={200}
      ></Box>
    </>
  );
}
