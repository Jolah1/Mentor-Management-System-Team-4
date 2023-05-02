import React from "react";
import { Stack, Typography } from "@mui/material";
// import { usePalette } from "../theme/theme";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
function ProfileSocialInfo() {
//   const palette = usePalette();
  return (
    <Stack direction="column" spacing={4}>
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
        Social
      </Typography>
      <Stack
        direction="row"
        spacing={6}
        sx={{
          alignItems: "start",
          justifyContent: "start",
          mt: 6,
          display: "flex",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            px: 2,
            py: 1,
            bgcolor: "#E6FDFE",
            borderRadius: "5px",
          }}
        >
          <AiFillGithub size={30} color="#4D4D4D" />

          <Typography
            variant="h2"
            sx={{
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "33px",
              fontFamily: "Mukta",
              ml: 2,
              color: "#4D4D4D",
            }}
          >
            @peculiar.umeh
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            px: 2,
            py: 1,
            bgcolor: "#E6FDFE",
            borderRadius: "5px",
          }}
        >
          <AiOutlineLinkedin size={30} color="#4D4D4D" />

          <Typography
            variant="h2"
            sx={{
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "33px",
              fontFamily: "Mukta",
              ml: 2,
              color: "#4D4D4D",
            }}
          >
            @peculiar.umeh
          </Typography>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        spacing={6}
        sx={{
          alignItems: "start",
          justifyContent: "start",
          mt: 6,
          display: "flex",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            px: 2,
            py: 1,
            bgcolor: "#E6FDFE",
            borderRadius: "5px",
          }}
        >
          <FiTwitter size={30} color="#4D4D4D" />

          <Typography
            variant="h2"
            sx={{
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "33px",
              fontFamily: "Mukta",
              ml: 2,
              color: "#4D4D4D",
            }}
          >
            @peculiar.umeh
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            px: 2,
            py: 1,
            bgcolor: "#E6FDFE",
            borderRadius: "5px",
          }}
        >
          <AiOutlineInstagram size={30} color="#4D4D4D" />

          <Typography
            variant="h2"
            sx={{
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "33px",
              fontFamily: "Mukta",
              ml: 2,
              color: "#4D4D4D",
            }}
          >
            @peculiar.umeh
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default ProfileSocialInfo;
