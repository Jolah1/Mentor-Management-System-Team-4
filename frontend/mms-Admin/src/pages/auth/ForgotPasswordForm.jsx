import React, { useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { Formik, useFormik } from "formik";

const initialValues = {
  email: "",
};
import { usePalette } from "../../theme/theme";
function ForgotPasswordForm() {
  const palette = usePalette();
  const [email, setEmail] = useState("");

  const onSubmit = (values) => {
    setEmail(values);
  };
  const { handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <form onSubmit={handleSubmit}>
      <Formik initialValues={initialValues}>
        <Stack
          direction="column"
          spacing={3}
          sx={{
            alignItems: "start",
            textAlign: "start",
            width: ["100%", "440px"],
            px: 4,
          }}
        >
          <Stack direction="column" spacing={1}>
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
              Forgot Password?
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
              {email
                ? "   An email has been sent to your registered email."
                : "Please enter your registered email to reset your password."}
            </Typography>

            {email ? (
              <>
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
                  Follow the link to reset your password.
                </Typography>
              </>
            ) : (
              <>
                <TextField
                  required
                  name="email"
                  onChange={handleChange}
                  label="Enter your email"
                  type="email"
                  fullWidth
                />
              </>
            )}
          </Stack>
          <Button variant="contained" type="submit" fullWidth sx={{ p: 1 }}>
            Done
          </Button>
        </Stack>
      </Formik>
    </form>
  );
}

export default ForgotPasswordForm;
