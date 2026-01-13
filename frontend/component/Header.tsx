"use client";

import { Box, Typography } from "@mui/material";
import { SoundUnlockButton } from "@/atom/Button";

const Mian = () => {
  return (
    <Box
      component="header"
      sx={{
        p: 2,
        textAlign: "center",
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography>メニュー</Typography>
      <SoundUnlockButton />
    </Box>
  );
};
export default Mian;
