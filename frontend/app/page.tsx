"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import Marquee from "@/packages/ui/components/marquee/Index";
import MarqueeVertical from "@/packages/ui/components/marquee/Vertical";
import { useTheme } from "@mui/material/styles";
import SpeechBubble from "@/packages/ui/components/speechBubble/Index";
import * as BubbleOptions from "@/packages/ui/components/speechBubble/BubbleOptions";
import ShowAtTime from "@/packages/ui/components/timed/ShowAtTime";
import { CuckooClock } from "@/packages/ui/components/cuckooClock/Index";
import { SoundUnlockButton } from "@/packages/core/atoms/Button";
import TrasitionCoverColorLink from "@/packages/transition/cover/Index";

export default function Home() {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
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
      <MessageBox />

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
        <SpeechBubbleBox />
      </Box>
      <Box sx={{ ...sectionStyle, flex: 1, bgcolor: "lightseagreen" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h3">Tailored Web Design</Typography>
          <Typography variant="body1">
            一人ひとりのニーズに合わせて仕立てたWEBデザイン
          </Typography>
          <TrasitionCoverColorLink href="/service">
            ページ1
          </TrasitionCoverColorLink>
        </Box>
      </Box>
      <Box sx={{ ...sectionStyle, flex: 2, bgcolor: "lightblue" }}>
        <ShowTimeBox />
        <CuckooClock
          mode="interval"
          intervalMs={6000}
          pendulum={{
            type: "pendulum",
            periodMs: 2000,
            lengthPx: 70,
          }}
          debug
        >
          <Image
            src="/tmp/キングダム大沢.jpeg"
            alt="avatar"
            objectFit="cover"
            objectPosition="center"
            fill={true}
          />
        </CuckooClock>
        <SoundUnlockButton />
      </Box>
    </Box>
  );
};

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

const SpeechBubbleBox = () => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <Box
      sx={{
        position: "absolute",
        width: "80%",
        height: "90%",
        zIndex: 9,
        display: "grid",
        overflowY: "auto",
      }}
    >
      {/* 横並び（画像→吹き出し） */}
      <SpeechBubble
        imageSrc="/tmp/キングダム大沢.jpeg"
        name="addonem 木本"
        message="今日はどんなご用でしょうか？"
        align="left"
        shape="rounded"
        imageWidth={128}
        imageHeight={128}
      />

      {/* 横並び（吹き出し→画像） */}
      <SpeechBubble
        name="あなた"
        imageSrc="/tmp/綺麗なジャイアン.jpg"
        message="Tailored & Flexibleでいきましょう。"
        align="right"
      >
        <BubbleOptions.Choice
          options={[
            "WEBサイトについて相談したい",
            "チラシ、パンフレットについて相談したい",
            "名刺、ショップカードについて相談したい",
            "雑談したい",
          ]}
          onSelect={() => {}}
          columns={1}
        />
      </SpeechBubble>

      {/* 横並び（吹き出し→画像） */}
      <SpeechBubble
        name="あなた"
        imageSrc="/tmp/綺麗なジャイアン.jpg"
        message="Tailored & Flexibleでいきましょう。"
        align="right"
        bubbleWidth={300}
      >
        <BubbleOptions.Text
          placeholder="ご要望を入力してください"
          onSubmit={(value) => {
            console.log("Submitted:", value);
          }}
          maxRows={10}
        />
      </SpeechBubble>

      {/* スクロールターゲット様のダミー要素 */}
      <div style={{ height: 0, overflowY: "auto" }}>
        {/* コンテンツ */}
        <div ref={bottomRef} />
      </div>
    </Box>
  );
};

const ShowTimeBox = () => {
  return (
    <ShowAtTime cron="* * * * 1" windowMs={15_000} mountWhenVisible>
      <div className="pop">毎朝9:00に30秒だけ出す</div>

      <style jsx global>{`
        @keyframes demo-pop {
          0% {
            opacity: 0;
            transform: translateY(8px) scale(0.98);
          }
          30% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-4px) scale(0.98);
          }
        }
        .demo-banner {
          display: inline-block;
          padding: 12px 16px;
          border-radius: 12px;
          background: #111;
          color: #fff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          /* ★このCSSアニメの終了を ShowAtTime が拾って閉じます */
          animation: demo-pop 1.8s ease-out forwards;
        }
      `}</style>
      <div className="demo-banner">🎉 Hello!（1.8sでフェードアウト）</div>
    </ShowAtTime>
  );
};
