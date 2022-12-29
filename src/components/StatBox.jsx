import { Box, Typography, useTheme } from "@mui/material";

import { tokens } from "../theme";

import ProgressCircle from "./ProgressCircle";

export default function StatBox({ title, subTitle, progress, icon }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box
        backgroundColor={colors.primary[400]}
        height={200}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={1}
      >
        <Box>
          {icon}
          <Typography variant="h3">{title}</Typography>
          <Typography variant="body2" color={colors.greenAccent[600]}>
            {subTitle}
          </Typography>
        </Box>
        <Box textAlign="center">
          <ProgressCircle progress={progress} />
          <Typography variant="caption" color={colors.greenAccent[200]}>
            +{parseFloat(progress) * 100}%
          </Typography>
        </Box>
      </Box>
    </>
  );
}
