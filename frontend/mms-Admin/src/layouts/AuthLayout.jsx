import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { usePalette } from "../theme/theme";
import AuthLogoAndText from "../components/AuthLogoAndText";

export default function AuthLayout() {
  const palette = usePalette();
  console.log(palette.primary.main);
  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          // justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            padding: "0",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            "@media (max-width: 1280px)": {
              justifyContent: "space-between",
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: { lg: "50%" },
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              backgroundColor: palette.primary.main,
            }}
          >
            <AuthLogoAndText />
          </Box>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: { lg: "50%" },
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              backgroundColor: palette.common.white,
              paddingX: { sm: 16, lg: 8 },
              paddingY: { xs: 10, lg: 24 },
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
