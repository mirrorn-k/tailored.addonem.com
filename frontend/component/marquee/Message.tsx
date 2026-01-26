"use client";

import { Box } from "@mui/material";
import Marquee from "@/atom/marquee/Index";
import MarqueeVertical from "@/atom/marquee/Vertical";
import { useTheme } from "@mui/material/styles";

interface messageProps {
  message?: string;
}

export default function MarqueeMessage({
  right,
  left,
  top,
  down,
}: {
  right: messageProps;
  left: messageProps;
  top: messageProps;
  down: messageProps;
}) {
  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: 9,
        height: "100%",
        width: "100%",
        maxHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        pointerEvents: "none", // ← ★ これで下の要素にイベントが通る
      }}
    >
      <Right {...right} />
      <Left {...left} />
      <Down {...top} />
      <Top {...down} />
    </Box>
  );
}

export const Right = (props: messageProps) => {
  const theme = useTheme();

  if (!props.message) {
    return null;
  }

  return (
    <Marquee
      text={props.message}
      speed={120} // px/秒
      direction="right" // "right" も可
      gap={24} // 文字の後ろに空ける余白
      pauseOnHover={true} // ← hoverで徐々に停止/再加速
      // フォント指定（未指定なら theme.typography.h4 を使用）
      fontFamily={theme.typography.body1.fontFamily}
      fontSize={theme.typography.body1.fontSize}
      fontWeight={theme.typography.body1.fontWeight}
      color={theme.palette.text.primary}
      fade={24}
      //fadeColor={theme.palette.background.default}
    />
  );
};

export const Left = (props: messageProps) => {
  const theme = useTheme();

  if (!props.message) {
    return null;
  }

  return (
    <Marquee
      text={props.message}
      speed={120} // px/秒
      direction="left" // "right" も可
      gap={24} // 文字の後ろに空ける余白
      pauseOnHover={true} // ← hoverで徐々に停止/再加速
      // フォント指定（未指定なら theme.typography.h4 を使用）
      fontFamily={theme.typography.body1.fontFamily}
      fontSize={theme.typography.body1.fontSize}
      fontWeight={theme.typography.body1.fontWeight}
      color={theme.palette.text.primary}
      fade={24}
      style={{ position: "absolute", bottom: 0, left: 0 }}
      //fadeColor={theme.palette.background.default}
    />
  );
};

export const Down = (props: messageProps) => {
  const theme = useTheme();

  if (!props.message) {
    return null;
  }

  return (
    <MarqueeVertical
      text={props.message}
      speed={100}
      direction="down" // "down" も可
      gap={24}
      pauseOnHover
      fade={24}
      fontFamily={theme.typography.body1.fontFamily}
      fontSize={theme.typography.body1.fontSize}
      fontWeight={theme.typography.body1.fontWeight}
      color={theme.palette.text.primary}
      //fadeColor="#fff"
      style={{ height: "100%", position: "absolute", top: 0, left: 0 }} // ← 縦版は高さ指定推奨
    />
  );
};

export const Top = (props: messageProps) => {
  const theme = useTheme();

  if (!props.message) {
    return null;
  }

  return (
    <MarqueeVertical
      text={props.message}
      speed={100}
      direction="up" // "down" も可
      gap={24}
      pauseOnHover
      fade={24}
      fontFamily={theme.typography.body1.fontFamily}
      fontSize={theme.typography.body1.fontSize}
      fontWeight={theme.typography.body1.fontWeight}
      color={theme.palette.text.primary}
      //fadeColor="#fff"
      style={{ height: "100%", position: "absolute", top: 0, right: 0 }} // ← 縦版は高さ指定推奨
    />
  );
};
