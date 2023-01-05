import { Box, useTheme } from "@mui/material";

import { tokens } from "../theme";

import LineChart from "./LineChart";

export default function Transaction() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box backgroundColor={colors.primary[400]} height={200}>
        <LineChart />
      </Box>
    </>
  );
}
