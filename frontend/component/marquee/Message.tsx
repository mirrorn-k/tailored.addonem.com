"use client";

import { Box } from "@mui/material";
import Marquee from "@/packages/ui/components/marquee/Index";
import MarqueeVertical from "@/packages/ui/components/marquee/Vertical";
import { useTheme } from "@mui/material/styles";

const MessageBox = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: 9,
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        pointerEvents: "none", // ← ★ これで下の要素にイベントが通る
      }}
    >
      <WelcomeMessage />
      <BeybeyMessage />
      <NoticeMessage />
      <Notice2Message />
    </Box>
  );
};

export default MessageBox;

const WelcomeMessage = () => {
  const theme = useTheme();

  return (
    <Marquee
      text="Welcome to Our Website!"
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

const BeybeyMessage = () => {
  const theme = useTheme();

  return (
    <Marquee
      text="Good Bey! See You Again!"
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

const NoticeMessage = () => {
  return (
    <MarqueeVertical
      text="只今絶賛ご依頼待ちです！この機会にぜひお問い合わせを！"
      speed={100}
      direction="down" // "down" も可
      gap={24}
      pauseOnHover
      fontSize="1.5rem"
      fontWeight={700}
      color="#222"
      fade={24}
      //fadeColor="#fff"
      style={{ height: "100%", position: "absolute", top: 0, left: 0 }} // ← 縦版は高さ指定推奨
    />
  );
};

const Notice2Message = () => {
  return (
    <MarqueeVertical
      text="これを見たって言ったら得するかも？！"
      speed={100}
      direction="up" // "down" も可
      gap={24}
      pauseOnHover
      fontSize="1.5rem"
      fontWeight={700}
      color="#222"
      fade={24}
      //fadeColor="#fff"
      style={{ height: "100%", position: "absolute", top: 0, right: 0 }} // ← 縦版は高さ指定推奨
    />
  );
};
