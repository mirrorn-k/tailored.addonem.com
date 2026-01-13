"use client";

import { motion } from "framer-motion";
import React from "react";
import { Phase, tCoverState } from "@/atom/cover/type";

type Props = {
  phase: Phase;
  duration: number;
  state: tCoverState | null;
  onCoverOutComplete?: () => void;
};

export default function Cover01({
  phase,
  duration,
  state,
  onCoverOutComplete,
}: Props) {
  if (phase !== "cover-in" && phase !== "covered" && phase !== "cover-out") {
    return null;
  }

  return (
    <motion.div
      key="cover01"
      initial={{ x: "100%" }} // 右から入る
      animate={{
        x: phase === "cover-in" ? 0 : phase === "cover-out" ? "-100%" : 0,
      }}
      transition={{ duration, ease: "easeInOut" }}
      onAnimationComplete={() => {
        if (phase === "cover-out") {
          onCoverOutComplete?.();
        }
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "2rem",
      }}
    >
      {state?.title}
    </motion.div>
  );
}
