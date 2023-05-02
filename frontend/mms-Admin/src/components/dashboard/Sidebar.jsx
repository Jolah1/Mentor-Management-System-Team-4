import React from "react";
import {
  Box,
  // Divider,
  Drawer,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
// import { EmojiObjects, School } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";
import { drawerWidth, usePalette } from "../../theme/theme";
import { MdOutlineAccountBox } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiUser, BiMessageAlt, BiMessageDetail } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import {HiLogout} from "react-icons/hi";
import { FiUsers, FiSettings } from "react-icons/fi";
import Report from "../../../src/assets/images/reports.svg";
import Certificate from "../../../src/assets/images/certificate.svg";
import Task from "../../../src/assets/images/task.svg";
function Sidebar() {
  const palette = usePalette();
  const location = useLocation();

  return (
    <Box
      sx={{ width: { md: drawerWidth }, height: "100vh", position: "fixed" }}
    >
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          height: "100%",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            height: "100%",
            bgcolor: "#F7FEFF",
            position: "inherit",
          },
        }}
        open
      >
        <Toolbar />
        <Stack
          direction="column"
          sx={{ alignItems: "center", justifyContent: "center", py: 3 }}
        >
          <Box
            sx={{
              textAlign: "start",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "start",
              mb: 4,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: "32px",
                fontWeight: 700,
                lineHeight: "53px",
                fontFamily: "Mukta",
                color: "#141414",
              }}
            >
              Hi Kabiru
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize: "24px",
                fontWeight: 400,
                lineHeight: "40px",
                fontFamily: "Mukta",
                color: palette.secondary.main,
              }}
            >
              Admin
            </Typography>
          </Box>

          <MenuItem
            path="/profile"
            name="Profile"
            icon={
              <MdOutlineAccountBox
                size={25}
                color={location.pathname === "/profile" ? "#333333" : "#808080"}
              />
            }
            sx={{ backgroundColor: "#FFFFFF" }}
            active={location.pathname === "/profile"}
          />
          <MenuItem
            path="/"
            name="Dashboard"
            icon={
              <RxDashboard
                size={25}
                color={location.pathname === "/" ? "#333333" : "#808080"}
              />
            }
            sx={{ backgroundColor: "#FFFFFF" }}
            active={location.pathname === "/"}
          />
          <MenuItem path="/task" name="Tasks" icon={<img src={Task} />} />
          <MenuItem path="/report" name="Reports" icon={<img src={Report} />} />
          <MenuItem
            path="/mentors"
            name="Mentors"
            icon={<BiUser size={25} color={palette.secondary.main} />}
          />
          <MenuItem
            path="/mentor-manager"
            name="Mentor Managers"
            icon={<FiUsers size={25} color={palette.secondary.main} />}
          />
          <MenuItem
            path="/approval-requests"
            name="Approval Requests"
            icon={
              <AiOutlinePlusCircle size={25} color={palette.secondary.main} />
            }
          />
          <MenuItem
            path="/certificates"
            name="Certificates"
            icon={<img src={Certificate} />}
          />
          <MenuItem
            path="/messages"
            name="Messages"
            icon={<BiMessageAlt size={25} color={palette.secondary.main} />}
          />
          <MenuItem
            path="/discussion"
            name="Discussion Forum"
            icon={<BiMessageDetail size={25} color={palette.secondary.main} />}
          />
          <MenuItem
            path="/settings"
            name="Settings"
            icon={
              <FiSettings
                size={25}
                color={
                  location.pathname === "/settings" ? "#333333" : "#808080"
                }
              />
            }
            sx={{ backgroundColor: "#FFFFFF" }}
            active={location.pathname === "/settings"}
          />

          <MenuItem
            path="/login"
            name="Logout"
            icon={
              <HiLogout
                size={25}
                color={location.pathname === "/login" ? "#333333" : "#808080"}
              />
            }
            sx={{ backgroundColor: "#FFFFFF" }}
            active={location.pathname === "/login"}
          />
        </Stack>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
