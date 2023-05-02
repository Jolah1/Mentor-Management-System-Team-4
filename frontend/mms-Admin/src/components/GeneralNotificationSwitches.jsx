import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Stack, Switch, Typography } from "@mui/material";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#058B94",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#058B94",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    // backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const SwitchForm = ({ label, children }) => (
  <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
    <Typography
      sx={{
        fontSize: "20px",
        fontWeight: 400,
        color: "#333333",
        textAlign: "start",
        fontFamily: "Mukta",
        width: "100%",
      }}
    >
      {label}
    </Typography>

    {children}
  </Stack>
);

SwitchForm.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
};


function GeneralNotificationSwitches({ values, handleChange }) {
  const classes = useStyles();

  return (
    <Stack direction={"column"} spacing={1}>
      <SwitchForm label="All Notifications">
        <Stack direction={"row"} spacing={2}>
          <Switch
            id="email_post_notification"
            checked={values.email_post_notification}
            onChange={handleChange}
            focusVisibleClassName=".Mui-focusVisible"
            className={classes.root}
          />
          <Switch
            id="in_app_post_notification"
            checked={values.in_app_post_notification}
            onChange={handleChange}
            focusVisibleClassName=".Mui-focusVisible"
            className={classes.root}
          />
        </Stack>
        <Box width={"100%"}></Box>
      </SwitchForm>
      <SwitchForm label="Programs">
        <Stack direction={"row"} spacing={2}>
          <Switch
            id="email_program_notification"
            checked={values.email_program_notification}
            onChange={handleChange}
            focusVisibleClassName=".Mui-focusVisible"
            className={classes.root}
          />
          <Switch
            id="in_app_program_notification"
            checked={values.in_app_program_notification}
            onChange={handleChange}
            focusVisibleClassName=".Mui-focusVisible"
            className={classes.root}
          />
        </Stack>
        <Box width={"100%"}></Box>
      </SwitchForm>
      <SwitchForm label="Tasks">
        <Stack direction={"row"} spacing={2}>
          <Switch
            id="email_task_notification"
            checked={values.email_task_notification}
            onChange={handleChange}
            focusVisibleClassName=".Mui-focusVisible"
            className={classes.root}
          />
          <Switch
            id="in_app_task_notification"
            checked={values.in_app_task_notification}
            onChange={handleChange}
            focusVisibleClassName=".Mui-focusVisible"
            className={classes.root}
          />
        </Stack>
        <Box width={"100%"}></Box>
      </SwitchForm>
      <SwitchForm label="Approval Requests">
        <Stack direction={"row"} spacing={2}>
          <Switch
            id="email_approval_notification"
            checked={values.email_approval_notification}
            onChange={handleChange}
            focusVisibleClassName=".Mui-focusVisible"
            className={classes.root}
          />
          <Switch
            id="in_app_approval_notification"
            checked={values.in_app_approval_notification}
            onChange={handleChange}
            focusVisibleClassName=".Mui-focusVisible"
            className={classes.root}
          />
        </Stack>
        <Box width={"100%"}></Box>
      </SwitchForm>
      <SwitchForm label="Reports">
        <Stack direction={"row"} spacing={2}>
          <Switch
            id="email_report_notification"
            checked={values.email_report_notification}
            onChange={handleChange}
            focusVisibleClassName=".Mui-focusVisible"
            className={classes.root}
          />
          <Switch
            id="in_app_report_notification"
            checked={values.in_app_report_notification}
            onChange={handleChange}
            focusVisibleClassName=".Mui-focusVisible"
            className={classes.root}
          />
        </Stack>
        <Box width={"100%"}></Box>
      </SwitchForm>
    </Stack>
  );
}

GeneralNotificationSwitches.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func,
  children: PropTypes.node,
  label: PropTypes.string,
};
export default GeneralNotificationSwitches;
