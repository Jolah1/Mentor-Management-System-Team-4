import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
// import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { usePalette } from "../../theme/theme";
function LoginForm() {
  const palette = usePalette();
  const navigate = useNavigate();

  const initialValues = { email: "", password: "" };

  const onSubmit = () => {
    toast.success("Login Successful");
    navigate("/dashboard");
  };

  const formik = useFormik({ initialValues, onSubmit });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack
        spacing={4}
        sx={{ width: "100%", alignItems: "start", minWidth: { md: "426px" } }}
      >
        <Stack
          direction="column"
          //   spacing={1}
          sx={{ textAlign: "start", alignItems: "start" }}
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
            Welcome!
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
            Login to continue
          </Typography>
        </Stack>
        <Stack spacing={2} sx={{ width: "100%", alignItems: "center" }}>
          <TextField
            required
            name="email"
            onChange={formik.handleChange}
            label="Email "
            type="email"
            fullWidth
          />
          <TextField
            required
            name="password"
            onChange={formik.handleChange}
            label="Password"
            type="password"
            fullWidth
          />
        </Stack>
        <Button variant="contained" fullWidth sx={{ p: 1 }}>
          Login
        </Button>

        <Stack
          direction="row"
          sx={{
            textAlign: "start",
            alignItems: "start",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box></Box>
          <Link to="/forgot-password" style={{ textDecoration: "none" }}>
            <Typography
              variant="span"
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "27px",
                fontFamily: "Mukta",
                color: "#141414",
                cursor: "pointer",
              }}
            >
              Forgot Password?
            </Typography>
          </Link>
        </Stack>

        <Button variant="outlined" fullWidth sx={{}}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ alignItems: "center", display: "flex" }}
          >
            <FcGoogle size={26} />
            <Typography
              variant="h3"
              sx={{
                fontSize: "18px",
                fontWeight: 600,
                lineHeight: "30px",
                fontFamily: "Mukta",
                color: "#023C40",
              }}
            >
              signin with Google
            </Typography>
          </Stack>
        </Button>
      </Stack>
    </form>
  );
}

export default LoginForm;
