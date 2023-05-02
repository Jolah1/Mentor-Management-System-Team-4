import {
  Autocomplete,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import * as Yup from "yup";
import { Field, Formik, useFormik } from "formik";
import { countries } from "../pages/public/settings/countries";
// import CustomInput from "./forms/inputs/CustomInput";
import GeneralSocialInputs from "./GeneralSocialInputs";
import PropTypes from "prop-types";

const GeneralInputSchema = Yup.object().shape({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  about: Yup.string().max(200, "Maximum 200 characters allowed"),
  website: Yup.string().url("Invalid URL"),
  country: Yup.string(),
  city: Yup.string().required("City is required"),
  github: Yup.string().url("Invalid URL"),
  instagram: Yup.string().url("Invalid URL"),
  linkedin: Yup.string().url("Invalid URL"),
  twitter: Yup.string().url("Invalid URL"),
});

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
        width: "82.95px",
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

function GeneralInputs() {
  const initialValues = {
    firstname: "",
    lastname: "",
    about: "",
    website: "",
    country: "",
    city: "",
    github: "",
    instagram: "",
    linkedin: "",
    twitter: "",
  };

  const onSubmit = (values, action) => {
    console.log(values);
    console.log(action);
    action.resetForm();
  };

  const {
    errors,
    touched,
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    getFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: GeneralInputSchema,
    onSubmit,
    enableReinitialize: true,
  });
  //   console.log(values);
  return (
    <form onSubmit={handleSubmit}>
      <Formik initialValues={initialValues}>
        <Stack direction={"column"} spacing={3} sx={{ width: "100%" }}>
          <Form label="Full Name">
            <Stack
              direction={"row"}
              spacing={3}
              sx={{ display: "flex", width: "100%" }}
            >
              <Stack
                direction={"column"}
                sx={{ display: "flex", width: "100%" }}
              >
                <TextField
                  name="firstname"
                  onChange={handleChange}
                  value={values.firstname}
                  type="text"
                  label="First Name"
                  error={touched.firstname && Boolean(errors.firstname)}
                  helperText={touched.firstname && errors.firstname}
                />
              </Stack>

              <Stack
                direction={"column"}
                sx={{ display: "flex", width: "100%" }}
              >
                <TextField
                  name="lastname"
                  type="text"
                  label="Last Name"
                  onChange={handleChange}
                  value={values.lastname}
                  error={touched.lastname && Boolean(errors.lastname)}
                  helperText={touched.lastname && errors.lastname}
                />
              </Stack>
            </Stack>
          </Form>
          <Form label="About">
            <TextField
              name="about"
              label="Your Bio"
              multiline
              rows={4}
              value={values.about}
              onChange={handleChange}
              error={touched.about && Boolean(errors.about)}
              helperText={touched.about && errors.about}
              sx={{ width: "100%" }}
            />
          </Form>
          <Form label="Website">
            <TextField
              name="website"
              label="www.example.com"
              value={values.website}
              onChange={handleChange}
              error={touched.website && Boolean(errors.website)}
              helperText={touched.website && errors.website}
              sx={{ width: "100%" }}
            />
          </Form>
          <Stack direction={"row"} spacing={3}>
            <Stack
              direction={"row"}
              spacing="50px"
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
                  width: "82.95px",
                }}
              >
                Country
              </Typography>
              <Box sx={{ flexGrow: 1, width: "100%" }}>
                <Field name="country">
                  {({ field }) => (
                    <Autocomplete
                      {...field}
                      id="country-select-demo"
                      options={countries}
                      onChange={(event, value) =>
                        setFieldValue(field.name, value)
                      }
                      autoHighlight
                      getOptionLabel={(option) => option.label || ""}
                      renderOption={(props, option) => (
                        <Box
                          component="li"
                          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                          {...props}
                        >
                          <img
                            loading="lazy"
                            width="20"
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            alt=""
                          />
                          {option.label} ({option.code}) +{option.phone}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select country"
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password", // disable autocomplete and autofill
                          }}
                        />
                      )}
                      freeSolo
                    />
                  )}
                </Field>
              </Box>
            </Stack>
            <Stack
              direction={"row"}
              spacing={1}
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
                  width: "82.95px",
                }}
              >
                City
              </Typography>
              <Box sx={{ flexGrow: 1, width: "100%" }}>
                <TextField
                  name="city"
                  label="City"
                  value={values.city}
                  onChange={handleChange}
                  error={touched.city && Boolean(errors.city)}
                  helperText={touched.city && errors.city}
                  sx={{ width: "100%" }}
                />
              </Box>
            </Stack>
          </Stack>

          {/** This is the component for Social Inputs **/}
          <GeneralSocialInputs
            errors={errors}
            touched={touched}
            values={values}
            handleBlur={handleBlur}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setFieldValue={setFieldValue}
            getFieldValue={getFieldValue}
          />

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
        </Stack>
      </Formik>
    </form>
  );
}

GeneralSocialInputs.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
};
export default GeneralInputs;
