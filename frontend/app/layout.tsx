"use client";

import React from "react";
import { TransitionProvider } from "@/packages/transition/Context";
import ThemeBase from "@/theme/base";
import * as ContextChatScenario from "@/packages/ui/components/chat-scenario/Context";

const DURATION = 1.2;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="jp">
      <ThemeBase>
        <body>
          <TransitionProvider>
            <ContextChatScenario.Provider>
              {children}
            </ContextChatScenario.Provider>
          </TransitionProvider>
        </body>
      </ThemeBase>
    </html>
  );
}

// app/transition.ts
import { Variants } from "framer-motion";

export function buildPageVariants(): Variants {
  return {
    initial: { opacity: 0, x: 100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: DURATION, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: { duration: DURATION, ease: "easeInOut" },
    },
  };
}
