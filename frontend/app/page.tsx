"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { SoundUnlockButton } from "@/packages/core/atoms/Button";
import MarqueeMessage from "@/component/marquee/Message";
import Notice from "@/component/clock/Notice";
import CuckooClock from "@/component/clock/Cukoo";
import { scenarioMap } from "@/component/chat-scenario/scenarios/index"; // ← プロジェクト側のJSONを集約
import CustomBubble from "@/component/chat-scenario/CustomBubble";

export default function Home() {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <SoundUnlockButton />
      <Layer01 />
    </Box>
  );
}

/**
 * レイヤー01コンポーネント
 *
 * @returns
 */
const Layer01 = () => {
  const currentNode = scenarioMap["q1"];

  const sectionStyle = {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Box
      sx={{
        position: "fixed",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <MarqueeMessage />

      <Box
        sx={{
          ...sectionStyle,
          flex: 2,
          bgcolor: "lightcoral",
          position: "relative",
          "& *": {
            scrollbarWidth: "none",
            "& ::-webkit-scrollbar": { display: "none" },
          },
        }}
      >
        {/* 横並び（画像→吹き出し） */}
        <CustomBubble node={currentNode} />
      </Box>
      <Box sx={{ ...sectionStyle, flex: 1, bgcolor: "lightseagreen" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h3">Tailored Web Design</Typography>
          <Typography variant="body1">
            やりたいことが出来る。高機能なWEBサイトはaddonem。
          </Typography>
        </Box>
      </Box>
      <Box sx={{ ...sectionStyle, flex: 2, bgcolor: "lightblue" }}>
        <CuckooClock />
        <Notice windowMs={5000}>
          ※
          音声が出る場合があります。音が出ない場合は下のボタンを押してください。
        </Notice>
      </Box>
    </Box>
  );
};
