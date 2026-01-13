"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Box } from "@mui/material";
import CoverSelecter from "@/atom/cover/Index";
import router from "next/router";

/* =========================
 * 型
 * ========================= */
export type Dir = "up" | "down" | "left" | "right";

export type tCoverState = {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  payload?: unknown;
};

type TransitionContextType = {
  startTransition: (arg01: string, arg02?: tCoverState, arg03?: number) => void;
  isFirstLoad: boolean;

  isTransitioning: boolean;

  nextDir: Dir;
  setNextDir: React.Dispatch<React.SetStateAction<Dir>>;

  duration: number;
  setDuration: React.Dispatch<React.SetStateAction<number>>;

  setCoverState: React.Dispatch<React.SetStateAction<tCoverState | null>>;
};

const TransitionContext = createContext<TransitionContextType | null>(null);

/* =========================
 * Provider
 * ========================= */
export function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 公開する state
  const [nextDir, setNextDir] = useState<Dir>("right");
  const [duration, setDuration] = useState(1.0);
  const [coverState, setCoverState] = useState<tCoverState | null>(null);

  const [isFirstLoad, setIsFirstLoad] = useState(true);

  // 初回ロード時に一度カバーを出す
  useEffect(() => {
    if (!isFirstLoad) return;

    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [isFirstLoad]);

  /* =========================
   * ページ遷移検知（Next/Link）
   * ========================= */
  useEffect(() => {
    if (prevPathname === pathname) return;

    // 初回ロードはアニメーションしない
    if (prevPathname !== null) {
      setIsTransitioning(true);
    }

    setPrevPathname(pathname);
  }, [pathname, prevPathname]);

  /* motion 用 */
  const axis = nextDir === "up" || nextDir === "down" ? "y" : "x";
  const from =
    nextDir === "left"
      ? "100%"
      : nextDir === "right"
      ? "-100%"
      : nextDir === "up"
      ? "100%"
      : "-100%";
  const to = from.startsWith("-") ? "100%" : "-100%";

  /**
   * ページ遷移処理
   */
  const startTransition = useCallback(
    (href: string, valContent?: tCoverState, valDura?: number) => {
      if (isTransitioning) return;

      setIsTransitioning(true);

      if (valContent) {
        setCoverState(valContent);
      }

      if (valDura) {
        setDuration(valDura);
      }

      // カバーが中央に来たタイミングで遷移
      setTimeout(() => {
        router.push(href);
      }, ((valDura ?? duration) * 1000) / 2);
    },
    [isTransitioning, setIsTransitioning, setCoverState, setDuration, duration]
  );

  const value = useMemo(
    () => ({
      startTransition,
      isFirstLoad,
      isTransitioning,
      nextDir,
      setNextDir,
      duration,
      setDuration,
      coverState,
      setCoverState,
    }),
    [
      startTransition,
      isFirstLoad,
      isTransitioning,
      nextDir,
      duration,
      coverState,
    ]
  );

  return (
    <TransitionContext.Provider value={value}>
      <Box
        component={"body"}
        sx={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
      >
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ [axis]: 0 }}
            animate={{ [axis]: isTransitioning ? to : 0 }}
            transition={{ duration, ease: "easeInOut" }}
            onAnimationComplete={() => {
              setIsTransitioning(false);
            }}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {children}
          </motion.main>
        </AnimatePresence>

        <CoverSelecter
          isFirst={isFirstLoad}
          state={coverState}
          isActive={isTransitioning}
          duration={duration}
        />
      </Box>
    </TransitionContext.Provider>
  );
}

/* =========================
 * Hook
 * ========================= */
export function useTransition() {
  const ctx = useContext(TransitionContext);
  if (!ctx) {
    throw new Error("useTransition must be used within TransitionProvider");
  }
  return ctx;
}
