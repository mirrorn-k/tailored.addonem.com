"use client";

import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
  useEffect,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Box } from "@mui/material";
import CoverSelecter from "@/atom/cover/Index";
import { tCoverState, Dir, Phase } from "@/atom/cover/type";

/* =========================
 * 型
 * ========================= */

type TransitionContextType = {
  startTransition: (
    href: string,
    state?: tCoverState,
    duration?: number
  ) => void;

  phase: Phase;

  nextDir: Dir;
  setNextDir: React.Dispatch<React.SetStateAction<Dir>>;

  duration: number;
  setDuration: React.Dispatch<React.SetStateAction<number>>;

  coverState: tCoverState | null;
  setCoverState: React.Dispatch<React.SetStateAction<tCoverState | null>>;

  displayTime: number;
  setDisplayTime: React.Dispatch<React.SetStateAction<number>>;
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
  const router = useRouter();

  /* =========================
   * Ref（一時保持・副作用用）
   * ========================= */
  const pendingHref = React.useRef<string | null>(null);

  /* =========================
   * State
   * ========================= */
  const [phase, setPhase] = useState<Phase>("first");

  const [nextDir, setNextDir] = useState<Dir>("right");
  const [duration, setDuration] = useState<number>(1.0);

  const [coverState, setCoverState] = useState<tCoverState | null>(null);
  const [displayTime, setDisplayTime] = useState<number>(1);

  /* =========================
   * axis / direction
   * ========================= */

  const axis = nextDir === "up" || nextDir === "down" ? "y" : "x";

  const pageExit =
    nextDir === "left"
      ? "100%"
      : nextDir === "right"
      ? "-100%"
      : nextDir === "up"
      ? "100%"
      : "-100%";

  const pageEnter =
    typeof pageExit === "string" && pageExit.startsWith("-") ? "100%" : "-100%";

  /* =========================
   * startTransition
   * ========================= */
  const startTransition = useCallback(
    (href: string, state?: tCoverState, dura?: number) => {
      if (phase !== "idle") return;

      if (state) setCoverState(state);
      if (dura) setDuration(dura);

      pendingHref.current = href;
      setPhase("cover-in");
    },
    [phase]
  );

  /* =========================
   * Context value
   * ========================= */

  const value = useMemo(
    () => ({
      startTransition,
      phase,
      nextDir,
      setNextDir,
      duration,
      setDuration,
      coverState,
      setCoverState,
      displayTime,
      setDisplayTime,
    }),
    [startTransition, phase, nextDir, duration, coverState]
  );

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    switch (phase) {
      case "first": {
        timer = setTimeout(() => {
          setPhase("idle");
        }, duration * 1000);
        break;
      }

      case "cover-in": {
        timer = setTimeout(() => {
          setPhase("covered");
        }, duration * 1000);
        break;
      }

      case "covered": {
        if (pendingHref.current) {
          router.push(pendingHref.current);
          pendingHref.current = null;
        }

        timer = setTimeout(() => {
          setPhase("cover-out");
        }, displayTime * 1000);
        break;
      }

      case "cover-out": {
        timer = setTimeout(() => {
          setCoverState(null);
          setPhase("idle");
        }, duration * 1000);
        break;
      }

      case "idle":
      default:
        // なにもしない
        break;
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [phase]);

  /* =========================
   * Render
   * ========================= */

  return (
    <TransitionContext.Provider value={value}>
      <Box
        sx={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
      >
        {/* ========= ページ ========= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{
              [axis]: phase === "cover-out" ? pageEnter : 0,
            }}
            animate={{
              [axis]: phase === "cover-in" ? pageExit : 0,
            }}
            transition={{ duration, ease: "easeInOut" }}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>

        {/* ========= カバー ========= */}
        <CoverSelecter
          phase={phase}
          duration={duration}
          state={coverState}
          onCoverOutComplete={() => {
            setPhase("idle");
            setCoverState(null);
          }}
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
