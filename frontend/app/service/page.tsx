"use client";
import { Box } from "@mui/material";
import NavLink from "@/atom/Link";
import TrasitionCoverColorLink from "@/packages/transition/cover/Index";
export default function Main() {
  return (
    <Box>
      <h1>これは Service</h1>
      <TrasitionCoverColorLink href="/">ページ1</TrasitionCoverColorLink>
    </Box>
  );
}
