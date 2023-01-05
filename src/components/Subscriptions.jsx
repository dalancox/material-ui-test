import { Box, Typography, useTheme } from "@mui/material";

import { tokens } from "../theme";

import { mockDataInvoices } from "../data/mockData";

export default function Subscriptions() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box height={400} overflow="auto" gridColumn="span 4" gridRow="span 2">
        <Box
          height={50}
          backgroundColor={colors.primary[400]}
          borderBottom={`4px solid ${colors.primary[500]}`}
          p="15px"
        >
          <Typography color={colors.grey[100]} varient="h4" fontWeight="600">
            Recent Transaction
          </Typography>
        </Box>
        {mockDataInvoices.map((i) => (
          <Box
            key={i.id}
            height={75}
            backgroundColor={colors.primary[400]}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box width="33%">
              <Typography varient="h5" color={colors.greenAccent[500]}>
                {i.id}
              </Typography>
              <Typography>{i.name}</Typography>
            </Box>
            <Box>{i.date}</Box>
            <Box>
              <Typography
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${i.cost}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}
