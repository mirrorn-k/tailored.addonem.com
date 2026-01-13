"use client";

import { motion } from "framer-motion";
import React from "react";
import { tCoverProps } from "./type";

export default function Cover({
  state,
  duration,
}: {
  state: tCoverProps["state"];
  duration: tCoverProps["duration"];
}) {
  return (
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
  );
}
