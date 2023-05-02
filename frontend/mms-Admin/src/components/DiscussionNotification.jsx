import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import DiscussionNotificationSwitches from "./DiscussionNotificationSwitches";
import PropTypes from "prop-types";

const Form = ({ label, children }) => (
  <Stack
    direction={"column"}
    spacing={3}
    sx={{
      display: "flex",
      alignItems: "center",
      // justifyContent: "space-between",
      textAlign: "start",
      width: "100%",
    }}
  >
    <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: 600,
          color: "#333333",
          textAlign: "start",
          width: "220px",
        }}
      >
        {label}
      </Typography>
      <Box></Box>
    </Stack>
    {children}
  </Stack>
);

Form.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
};

function DiscussionNotification({ values, handleChange }) {
  return (
    <Form label="Discussion Notifications">
      <Stack direction={"column"} spacing={1} sx={{ width: "100%" }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Box width={"100%"}></Box>
          <Stack direction={"row"} spacing={3}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#333333",
                textAlign: "start",
                fontFamily: "Mukta",
                width: "43px",
              }}
            >
              Email
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#333333",
                textAlign: "start",
                fontFamily: "Mukta",
                width: "49px",
              }}
            >
              In-app
            </Typography>
          </Stack>

          <Box width={"100%"}></Box>
        </Stack>
        {/* All the switches... */}
        <DiscussionNotificationSwitches
          values={values}
          handleChange={handleChange}
        />
      </Stack>
    </Form>
  );
}

export default DiscussionNotification;

DiscussionNotification.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func,
};
