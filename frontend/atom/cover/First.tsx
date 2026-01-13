"use client";

import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { tCoverProps } from "./type";

export default function Cover({
  state,
  isActive,
  duration,
  isFirst,
}: tCoverProps & { isFirst: boolean }) {
  return (
    <AnimatePresence>
      {isActive && isFirst && (
        <motion.div
          key="cover-first"
          initial={{ x: 0 }} // 👈 ここが重要
          exit={{ x: "-100%" }}
          transition={{ duration, ease: "easeInOut" }} // ← Contextから取得
          style={{
            position: "fixed",
            left: 0,
            inset: 0,
            background: "black",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "2rem",
            backgroundColor: "black",
          }}
        >
          First
          {state?.title}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
