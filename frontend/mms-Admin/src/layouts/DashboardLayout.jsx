import React from "react";
import { Box, Toolbar, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";

import { drawerWidth } from "../theme/theme";
import Topbar from "../components/dashboard/Topbar";
import Sidebar from "../components/dashboard/Sidebar";

export default function DashboardLayout() {
  const theme = useTheme();

  //   const auth = useAuth();

  //   if (!auth.token) return <Navigate to="/login" />;

  //   axios.defaults.headers.common.Authorization = `Bearer ${auth.token}`;

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <Topbar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100%",
          p: 2,
          backgroundColor: "#FFFFFF",
          width: { md: `calc(100% - ${drawerWidth}px)` },
          marginLeft: `${drawerWidth}px`,
          [theme.breakpoints.down("md")]: {
            marginLeft: 0,
          },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
