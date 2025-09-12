"use client";

import React, {
  useEffect,
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { Cover, DefaultCover } from "./cover/Index";
import { motion, AnimatePresence } from "framer-motion";

type TransitionContextType = {
  isFirstLoad: boolean;
  isTransitioning: boolean;
  setIsTransitioning: (v: boolean) => void;
  startTransition: (
    href: string,
    options?: { content?: React.ReactNode; duration?: number }
  ) => void;
  coverContent: React.ReactNode | null;
  duration: number;
};

const TransitionContext = createContext<TransitionContextType>({
  isFirstLoad: true,
  isTransitioning: false,
  setIsTransitioning: () => {},
  startTransition: () => {},
  coverContent: <DefaultCover />,
  duration: 4.0,
});

export function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [coverContent, setCoverContent] = useState<React.ReactNode | null>(
    <DefaultCover />
  );
  const [duration, setDuration] = useState(1.0);

  const [isFirstLoad, setIsFirstLoad] = useState(true);
  useEffect(() => {
    // 初回レンダリングが終わったらフラグを落とす
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 600); // 0.6sくらい待って消す（お好みで）
    return () => clearTimeout(timer);
  }, []);

  const startTransition = useCallback(
    (
      href: string,
      options?: { content?: React.ReactNode; duration?: number }
    ) => {
      if (isTransitioning) return;
      setIsTransitioning(true);

      setCoverContent(options?.content ?? <DefaultCover />);
      setDuration(options?.duration ?? duration);

      setTimeout(() => {
        router.push(href);
      }, (duration * 2000) / 2); // カバーが中央に来た時点で遷移
    },
    [isTransitioning, router, duration]
  );

  return (
    <TransitionContext.Provider
      value={{
        isFirstLoad,
        isTransitioning,
        setIsTransitioning,
        startTransition,
        coverContent,
        duration,
      }}
    >
      <div
        style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
      >
        <AnimatePresence>
          <motion.main
            key={`${pathname}`}
            initial={isFirstLoad ? { x: "0%" } : { x: "100%" }}
            animate={isTransitioning ? { x: "-100%" } : { x: "0%" }}
            transition={{ duration, ease: "easeInOut" }}
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
      </div>
      <Cover />
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  return useContext(TransitionContext);
}
