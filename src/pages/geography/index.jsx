import React from "react";
import GeographyChart from "../../components/ui/GeographyChart";
import { useTheme, Box } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/ui/Header";

function Geography() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
}

export default Geography;
