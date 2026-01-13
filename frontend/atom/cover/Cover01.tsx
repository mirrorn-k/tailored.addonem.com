"use client";

import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { tCoverProps } from "./type";

export default function Cover({ state, isActive, duration }: tCoverProps) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          key="cover-index"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration, ease: "easeInOut" }} // ← Contextから取得
          style={{
            position: "fixed",
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
          {state?.title}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
