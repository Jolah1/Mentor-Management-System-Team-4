import React from "react";
import { Card, CardContent } from "@material-ui/core";
import * as Yup from "yup";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Formik, useFormik } from "formik";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const PasswordSchema = Yup.object().shape({
  current_password: Yup.string().required("Current password is required"),
  new_password: Yup.string()
    .required("New password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  confirm_password: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("new_password"), null], "Passwords must match"),
});

const initialValues = {
  current_password: "",
  new_password: "",
  confirm_password: "",
};

const Form = ({ label, children }) => (
  <Stack
    direction={"row"}
    spacing={5}
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      textAlign: "start",
      width: "100%",
    }}
  >
    <Typography
      sx={{
        fontSize: "16px",
        fontWeight: 600,
        color: "#333333",
        textAlign: "start",
        width: "200px",
      }}
    >
      {label}
    </Typography>
    <Box sx={{ flexGrow: 1, width: "100%" }}>{children}</Box>
  </Stack>
);

Form.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
};

function Password() {
  const onSubmit = (values) => {
    console.log(values);
  };

  const { errors, touched, values, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: PasswordSchema,
    onSubmit,
  });
  return (
    <Card>
      <CardContent>
        {/* Password settings form goes here */}
        <form onSubmit={handleSubmit}>
          <Formik initialValues={initialValues}>
            <Stack direction={"column"} spacing={4}>
              <Form label="Current password">
                <TextField
                  name="current_password"
                  label="Your current Password"
                  value={values.current_password}
                  onChange={handleChange}
                  error={
                    touched.current_password && Boolean(errors.current_password)
                  }
                  helperText={
                    touched.current_password && errors.current_password
                  }
                  sx={{ width: "100%" }}
                />
              </Form>
              <Form label="New password">
                <TextField
                  name="new_password"
                  label="Must be at least 8 characters"
                  value={values.new_password}
                  onChange={handleChange}
                  error={touched.new_password && Boolean(errors.new_password)}
                  helperText={touched.new_password && errors.new_password}
                  sx={{ width: "100%" }}
                />
              </Form>
              <Form label="Confirm password">
                <TextField
                  name="confirm_password"
                  label="Must match your new password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  error={
                    touched.confirm_password && Boolean(errors.confirm_password)
                  }
                  helperText={
                    touched.confirm_password && errors.confirm_password
                  }
                  sx={{ width: "100%" }}
                />
              </Form>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                width="100%"
              >
                <div></div>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ px: 4, py: 1, borderRadius: "10px" }}
                >
                  Save Changes
                </Button>
              </Stack>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                width={"100%"}
              >
                <div></div>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "18px",
                      fontWeight: 600,
                      lineHeight: "30px",
                      fontFamily: "Mukta",
                      color: "#141414",
                    }}
                  >
                    Forgot password?
                  </Typography>
                </Link>
                <div></div>
              </Stack>
            </Stack>
          </Formik>
        </form>
      </CardContent>
    </Card>
  );
}

export default Password;
