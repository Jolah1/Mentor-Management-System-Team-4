import React from "react";
import { Stack, Typography } from "@mui/material";
import { AiOutlineMail, AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineLocationMarker, HiOutlineGlobeAlt } from "react-icons/hi";
import { usePalette } from "../theme/theme";
function ProfileInfo() {
  const palette = usePalette();
  return (
    <Stack direction="column" spacing={1}>
      <Stack
        direction="row"
        spacing={3}
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
            p: 2,
          }}
        >
          <AiOutlineMail size={30} color={palette.primary.main} />

          <Typography
            variant="h2"
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "27px",
              fontFamily: "Mukta",
              ml: 2,
              color: palette.secondary.main,
            }}
          >
            peculiah@andela.com
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          <HiOutlineLocationMarker size={30} color={palette.primary.main} />

          <Typography
            variant="h2"
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "27px",
              fontFamily: "Mukta",
              ml: 2,
              color: palette.secondary.main,
            }}
          >
            Lagos, Nigeria
          </Typography>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        spacing={3}
        sx={{
          alignItems: "start",
          justifyContent: "start",
          // mt: 6,
          display: "flex",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          <HiOutlineGlobeAlt size={30} color={palette.primary.main} />

          <Typography
            variant="h2"
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "27px",
              fontFamily: "Mukta",
              ml: 2,
              color: palette.secondary.main,
            }}
          >
            www.peculiah.com
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          <AiOutlineCalendar size={30} color={palette.primary.main} />

          <Typography
            variant="h2"
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "27px",
              fontFamily: "Mukta",
              ml: 2,
              color: palette.secondary.main,
            }}
          >
            Member since June 22, 2021
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default ProfileInfo;
