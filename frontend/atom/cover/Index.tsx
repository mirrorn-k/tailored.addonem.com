"use client";

import { AnimatePresence } from "framer-motion";
import React from "react";
import First from "@/atom/cover/First";
import { tCoverProps } from "./type";
import Cover01 from "@/atom/cover/Cover01";

export default function Cover(props: tCoverProps & { isFirst: boolean }) {
  return (
    <AnimatePresence>
      {props.isFirst && <First {...props} />}
      {props.isActive && <Cover01 {...props} />}
    </AnimatePresence>
  );
}
