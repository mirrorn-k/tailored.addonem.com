"use client";

import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import First from "@/atom/cover/First";
import { tCoverProps } from "./type";
import Cover01 from "@/atom/cover/Cover01";

export default function Cover(
  props: tCoverProps & {
    isFirst: boolean;
    displayTime: number;
    onFinish?: () => void;
  }
) {
  const { isFirst, isActive, displayTime, onFinish } = props;

  useEffect(() => {
    if (!isActive) return;

    const timer = setTimeout(() => {
      onFinish?.(); // ← フラグを折る
    }, displayTime * 1000);

    return () => clearTimeout(timer);
  }, [isActive, displayTime, onFinish]);

  return (
    <AnimatePresence>
      <First {...props} />
      {!isFirst && <Cover01 {...props} />}
    </AnimatePresence>
  );
}
