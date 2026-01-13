"use client";

import { AnimatePresence } from "framer-motion";
import React from "react";
import FirstCover from "@/atom/cover/First";
import Cover01 from "@/atom/cover/Cover01";
import { Phase, tCoverState } from "@/atom/cover/type";

type Props = {
  phase: Phase;
  duration: number;
  state: tCoverState | null;
  onCoverOutComplete?: () => void;
};

export default function CoverSelecter({
  phase,
  duration,
  state,
  onCoverOutComplete,
}: Props) {
  return (
    <AnimatePresence
      onExitComplete={() => {
        // cover-out が終わった瞬間だけ idle に戻す
        if (phase === "cover-out") {
          onCoverOutComplete?.();
        }
      }}
    >
      {/* 初回表示 */}
      {phase === "first" && (
        <FirstCover key="cover-first" state={state} duration={duration} />
      )}

      {/* 通常遷移用カバー */}
      {(phase === "cover-in" ||
        phase === "covered" ||
        phase === "cover-out") && (
        <Cover01
          key="cover-main"
          phase={phase}
          state={state}
          duration={duration}
        />
      )}
    </AnimatePresence>
  );
}
