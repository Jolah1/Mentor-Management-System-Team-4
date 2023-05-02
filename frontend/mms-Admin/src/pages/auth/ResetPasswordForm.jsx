import React from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { usePalette } from "../../theme/theme";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ResetPasswordForm() {
  const initialValues = { email: "", password: "" };
  const navigate = useNavigate();
  const palette = usePalette();
  const onSubmit = () => {
    toast.success("Login Successful");
    navigate("/dashboard");
  };

  const formik = useFormik({ initialValues, onSubmit });
  return (
    <Stack
      direction="column"
      spacing={3}
      sx={{ alignItems: "start", textAlign: "start" }}
    >
      <Stack
        spacing={4}
        sx={{ width: "100%", alignItems: "start", minWidth: { md: "426px" } }}
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
          Set new password
        </Typography>

        <Stack
          direction="column"
          spacing={2}
          sx={{ width: "100%", alignItems: "center" }}
        >
          <TextField
            required
            name="password"
            onChange={formik.handleChange}
            label="Password"
            type="password"
            fullWidth
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "27px",
              fontFamily: "Mukta",
              color: palette.secondary.main,
            }}
          >
            *Your new password must be different from previously used password.
          </Typography>
        </Stack>
        <Button variant="contained" fullWidth sx={{ p: 1 }}>
          Reset Password
        </Button>
      </Stack>
    </Stack>
  );
}

export default ResetPasswordForm;
