import Header from "../../components/ui/Header";
import { Box } from "@mui/material";
export const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Header title="DASHBOARD" subtitle="Welcome to your Dashboard" />
      </Box>
    </Box>
  );
};
