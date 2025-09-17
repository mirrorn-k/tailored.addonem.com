"use client";
import { Box } from "@mui/material";
import ChatArea from "@/packages/ui/components/chat-scenario/ChartErea";

export default function Main() {
  return (
    <Box sx={{ height: "100%", width: "100%", p: 2 }}>
      <SpeechBubbleBox />
    </Box>
  );
}

const SpeechBubbleBox = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 9,
        display: "grid",
        overflowY: "auto",
      }}
    >
      <ChatArea />
    </Box>
  );
};
