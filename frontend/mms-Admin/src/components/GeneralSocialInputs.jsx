import React from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";
import PropTypes from "prop-types";

const Form = ({ label, children }) => (
  <Stack
    direction={"row"}
    spacing={5}
    sx={{
      display: "flex",
      alignItems: "baseline",
      textAlign: "start",
      justifyContent: "space-between",
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

function GeneralSocialInputs({ errors, touched, values, handleChange }) {
  return (
    <Stack sx={{ width: "100%" }}>
      <Form label="Social">
        <Stack direction={"row"} spacing={4} sx={{ width: "100%" }}>
          <Stack direction={"column"} spacing={2} sx={{ width: "100%" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                border: "1px solid #E6E6E6",
                borderRadius: "5px",
              }}
            >
              <Stack
                direction={"row"}
                // spacing={2}
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Stack
                  direction={"row"}
                  spacing={2}
                  alignItems={"center"}
                  px={2}
                  py="5px"
                >
                  <AiOutlineGithub size={28} />
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "27px",
                      fontFamily: "Mukta",
                      color: "#4D4D4D",
                    }}
                  >
                    Github
                  </Typography>
                </Stack>

                <TextField
                  name="github"
                  label="@githubuser"
                  value={values.github}
                  onChange={handleChange}
                  error={touched.github && Boolean(errors.github)}
                  helperText={touched.github && errors.github}
                  fullWidth
                  sx={{ borderRadius: 0 }}
                />
              </Stack>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                border: "1px solid #E6E6E6",
                borderRadius: "5px",
              }}
            >
              <Stack
                direction={"row"}
                // spacing={2}
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Stack
                  direction={"row"}
                  spacing={2}
                  alignItems={"center"}
                  px={2}
                  py="5px"
                >
                  <AiOutlineLinkedin size={28} />
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "27px",
                      fontFamily: "Mukta",
                      color: "#4D4D4D",
                    }}
                  >
                    Linkedin
                  </Typography>
                </Stack>

                <TextField
                  name="linkedin"
                  label="@linkedinuser"
                  value={values.linkedin}
                  onChange={handleChange}
                  error={touched.linkedin && Boolean(errors.linkedin)}
                  helperText={touched.linkedin && errors.linkedin}
                  fullWidth
                  sx={{ borderRadius: 0 }}
                />
              </Stack>
            </Box>
          </Stack>

          <Stack direction={"column"} spacing={2} sx={{ width: "100%" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                border: "1px solid #E6E6E6",
                borderRadius: "5px",
              }}
            >
              <Stack
                direction={"row"}
                // spacing={2}
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Stack
                  direction={"row"}
                  spacing={2}
                  alignItems={"center"}
                  px={2}
                  py="5px"
                >
                  <AiOutlineInstagram size={28} />
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "27px",
                      fontFamily: "Mukta",
                      color: "#4D4D4D",
                    }}
                  >
                    Instagram
                  </Typography>
                </Stack>

                <TextField
                  name="instagram"
                  label="@instagramuser"
                  value={values.instagram}
                  onChange={handleChange}
                  error={touched.instagram && Boolean(errors.instagram)}
                  helperText={touched.instagram && errors.instagram}
                  fullWidth
                  sx={{ borderRadius: 0 }}
                />
              </Stack>
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                border: "1px solid #E6E6E6",
                borderRadius: "5px",
              }}
            >
              <Stack
                direction={"row"}
                // spacing={2}
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Stack
                  direction={"row"}
                  spacing={2}
                  alignItems={"center"}
                  px={2}
                  py="5px"
                >
                  <TfiTwitter size={28} />
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "27px",
                      fontFamily: "Mukta",
                      color: "#4D4D4D",
                    }}
                  >
                    Twitter
                  </Typography>
                </Stack>

                <TextField
                  name="twitter"
                  label="@twitteruser"
                  value={values.twitter}
                  onChange={handleChange}
                  error={touched.twitter && Boolean(errors.twitter)}
                  helperText={touched.twitter && errors.twitter}
                  fullWidth
                  sx={{ borderRadius: 0 }}
                />
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Form>
    </Stack>
  );
}

GeneralSocialInputs.propTypes = {
  errors: PropTypes.object,
  touched: PropTypes.object,
  values: PropTypes.object,
  handleChange: PropTypes.func,
  children: PropTypes.node,
  label: PropTypes.string,
};

export default GeneralSocialInputs;
