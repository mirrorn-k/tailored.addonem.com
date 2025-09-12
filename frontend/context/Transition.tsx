// app/context/Transition.tsx
"use client";
import React, { createContext, useContext, useMemo, useState } from "react";

export type Dir = "up" | "down" | "left" | "right";

type Ctx = {
  nextDir: Dir;
  setNextDir: (d: Dir) => void;
  isTransitioning: boolean;
  setTransitioning: (v: boolean) => void;
};

const DirectionCtx = createContext<Ctx>({
  nextDir: "up",
  setNextDir: () => {},
  isTransitioning: false,
  setTransitioning: () => {},
});

export function Provider({ children }: { children: React.ReactNode }) {
  const [nextDir, setNextDir] = useState<Dir>("up");
  const [isTransitioning, setTransitioning] = useState(false);
  const value = useMemo(
    () => ({ nextDir, setNextDir, isTransitioning, setTransitioning }),
    [nextDir, isTransitioning]
  );
  return (
    <DirectionCtx.Provider value={value}>{children}</DirectionCtx.Provider>
  );
}

export function useDirection() {
  return useContext(DirectionCtx);
}

// 互換のため（あなたの既存コードが useContexts を使っている場合）
export const useContexts = useDirection;
