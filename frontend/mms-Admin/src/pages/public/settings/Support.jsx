import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Formik, useFormik } from "formik";
import { ImAttachment } from "react-icons/im";
import { BsChatText } from "react-icons/bs";
import * as Yup from "yup";

const supportSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email"),
  title: Yup.string().required("Please enter a title"),
  message: Yup.string().required("Please enter a message"),
});

const initialValues = {
  name: "",
  email: "",
  title: "",
  message: "",
};
function Support() {
  const onSubmit = (values, action) => {
    console.log(values);
    action.resetForm();
  };
  const {
    errors,
    touched,
    values,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: supportSchema,
    onSubmit,
    enableReinitialize: true,
  });

  return (
    <Stack direction={"column"} spacing={10} width={"100%"}>
      <Card>
        <CardContent>
          {/* Notifications settings form goes here */}
          <form onSubmit={handleSubmit}>
            <Formik initialValues={initialValues}>
              <Stack direction={"column"} spacing={3} width={"100%"} p={4}>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#333333",
                    textAlign: "center",
                    width: "233px",
                  }}
                >
                  How can we help you?
                </Typography>
                <Stack direction={"column"} spacing={2} width={"100%"}>
                  <TextField
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                    type="text"
                    label="Name"
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                  />
                  <TextField
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    type="text"
                    label="Email"
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />

                  <TextField
                    name="title"
                    onChange={handleChange}
                    value={values.title}
                    type="text"
                    label="Title"
                    error={touched.title && Boolean(errors.title)}
                    helperText={touched.title && errors.title}
                  />
                  <TextField
                    name="message"
                    multiline
                    rows={5}
                    onChange={handleChange}
                    value={values.message}
                    type="text"
                    label="Body"
                    error={touched.message && Boolean(errors.message)}
                    helperText={touched.message && errors.message}
                  />
                </Stack>

                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  width="100%"
                >
                  <Box>
                    <ImAttachment size={20} />
                  </Box>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ px: 4, py: 1, borderRadius: "10px" }}
                  >
                    Send
                  </Button>
                </Stack>
              </Stack>
            </Formik>
          </form>
        </CardContent>
      </Card>

      <Stack direction={"row"} justifyContent={"space-between"} width="100%">
        <div></div>
        <Box
          sx={{
            backgroundColor: "#E6FDFE",
            borderRadius: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "66px",
            height: "66px",
            cursor: "pointer",
          }}
        >
          <BsChatText size={24} />
        </Box>
      </Stack>
    </Stack>
  );
}
export default Support;
