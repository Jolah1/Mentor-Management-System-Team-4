import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Stack, Switch, Typography } from "@mui/material";
import { Formik, useFormik } from "formik";
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

const initialValues = {
  show_contact_info: false,
  show_github: false,
  show_instagram: false,
  show_linkedin: false,
  show_twitter: false,
};

const SwitchForm = ({ label, children }) => (
  <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
    <Typography
      sx={{
        fontSize: "16px",
        fontWeight: 600,
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
function Privacy() {
  const classes = useStyles();

  const onSubmit = (values) => {
    console.log(values);
  };
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <Card>
      <CardContent>
        {/* Notifications settings form goes here */}
        <form onSubmit={handleSubmit}>
          <Formik initialValues={initialValues}>
            <Stack direction={"column"} spacing={1}>
              <SwitchForm label="Show contact info">
                <Switch
                  id="show_contact_info"
                  checked={values.show_contact_info}
                  onChange={handleChange}
                  focusVisibleClassName=".Mui-focusVisible"
                  className={classes.root}
                />
                <Box width={"100%"}></Box>
              </SwitchForm>
              <SwitchForm label="Show GitHub">
                <Switch
                  id="show_github"
                  checked={values.show_github}
                  onChange={handleChange}
                  focusVisibleClassName=".Mui-focusVisible"
                  className={classes.root}
                />
                <Box width={"100%"}></Box>
              </SwitchForm>
              <SwitchForm label="Show Instagram">
                <Switch
                  id="show_instagram"
                  checked={values.show_instagram}
                  onChange={handleChange}
                  focusVisibleClassName=".Mui-focusVisible"
                  className={classes.root}
                />
                <Box width={"100%"}></Box>
              </SwitchForm>
              <SwitchForm label="Show Linkdein">
                <Switch
                  id="show_linkedin"
                  checked={values.show_linkedin}
                  onChange={handleChange}
                  focusVisibleClassName=".Mui-focusVisible"
                  className={classes.root}
                />
                <Box width={"100%"}></Box>
              </SwitchForm>
              <SwitchForm label="Show Twitter">
                <Switch
                  id="show_twitter"
                  checked={values.show_twitter}
                  onChange={handleChange}
                  focusVisibleClassName=".Mui-focusVisible"
                  className={classes.root}
                />
                <Box width={"100%"}></Box>
              </SwitchForm>

              <Stack
                width={"100%"}
                justifyContent={"space-between"}
                direction={"row"}
              >
                <Box width={"100%"}></Box>
                <Button type="submit">Submit</Button>
              </Stack>
            </Stack>
          </Formik>
        </form>
      </CardContent>
    </Card>
  );
}
export default Privacy;
