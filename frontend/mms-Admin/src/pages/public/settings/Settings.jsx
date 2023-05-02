import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tab, Tabs, Stack, Typography, Box } from "@mui/material";
import General from "./General";
import Password from "./Password";
import Notifications from "./Notifications";
import Privacy from "./Privacy";
import Archive from "./Archive";
import Support from "./Support";
import PropTypes from "prop-types";
import { usePalette } from "../../../theme/theme";
import Faq from "./Faq";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    height: "100vh",
  },
  tabs: {
    width: "300px",
    borderRadius: "5px",
  },
  tabPanel: {
    width: "100%",
    paddingLLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function Settings() {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);
  const palette = usePalette();

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Stack direction="column">
      <Stack
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          p: 2,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: "40px",
            fontFamily: "Mukta",
            color: "#141414",
          }}
        >
          Settings
        </Typography>
        <div></div>
      </Stack>
      <Box className={classes.root}>
        <Tabs
          className={classes.tabs}
          orientation="vertical"
          variant="scrollable"
          indicatorColor="#FFFFFF"
          value={activeTab}
          onChange={handleTabChange}
        >
          <Tab
            label="General"
            sx={{
              color: activeTab === 0 ? "#333333" : "palette.primary.main",
              backgroundColor: palette.secondary,
              bgcolor: activeTab === 0 ? "#FFFFFF" : "#F7FEFF",
              border: "1px solid #E6FDFE",
              "&.Mui-selected": {
                color: "#333333",
              },
            }}
          />
          <Tab
            label="Password"
            sx={{
              color: activeTab === 1 ? "#333333" : "palette.primary.main",
              bgcolor: activeTab === 1 ? "#FFFFFF" : "#F7FEFF",
              border: "1px solid #E6FDFE",
              "&.Mui-selected": {
                color: "#333333",
              },
            }}
          />
          <Tab
            label="Notifications"
            sx={{
              color: activeTab === 2 ? "#333333" : "palette.primary.main",
              bgcolor: activeTab === 2 ? "#FFFFFF" : "#F7FEFF",
              border: "1px solid #E6FDFE",
              "&.Mui-selected": {
                color: "#333333",
              },
            }}
          />
          <Tab
            label="Privacy"
            sx={{
              color: activeTab === 3 ? "#333333" : "palette.primary.main",
              bgcolor: activeTab === 3 ? "#FFFFFF" : "#F7FEFF",
              border: "1px solid #E6FDFE",
              "&.Mui-selected": {
                color: "#333333",
              },
            }}
          />
          <Tab
            label="Archive"
            sx={{
              color: activeTab === 4 ? "#333333" : "palette.primary.main",
              bgcolor: activeTab === 4 ? "#FFFFFF" : "#F7FEFF",
              border: "1px solid #E6FDFE",
              "&.Mui-selected": {
                color: "#333333",
              },
            }}
          />
          <Tab
            label="Support"
            sx={{
              color: activeTab === 5 ? "#333333" : "palette.primary.main",
              bgcolor: activeTab === 5 ? "#FFFFFF" : "#F7FEFF",
              border: "1px solid #E6FDFE",
              "&.Mui-selected": {
                color: "#333333",
              },
            }}
          />
          <Tab
            label="FAQ"
            sx={{
              color: activeTab === 6 ? "#333333" : "palette.primary.main",
              bgcolor: activeTab === 6 ? "#FFFFFF" : "#F7FEFF",
              borderLeft: "1px solid #E6FDFE",
              borderRight: "1px solid #E6FDFE",
              borderBottom: "1px solid #E6FDFE",
              "&.Mui-selected": {
                color: "#333333",
              },
            }}
          />
        </Tabs>
        <Box className={classes.tabPanel}>
          <TabPanel value={activeTab} index={0}>
            <General />
          </TabPanel>
          <TabPanel value={activeTab} index={1}>
            <Password />
          </TabPanel>
          <TabPanel value={activeTab} index={2}>
            <Notifications />
          </TabPanel>
          <TabPanel value={activeTab} index={3}>
            <Privacy />
          </TabPanel>
          <TabPanel value={activeTab} index={4}>
            <Archive />
          </TabPanel>
          <TabPanel value={activeTab} index={5}>
            <Support />
          </TabPanel>
          <TabPanel value={activeTab} index={6}>
            <Faq />
          </TabPanel>
        </Box>
      </Box>
    </Stack>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
export default Settings;
