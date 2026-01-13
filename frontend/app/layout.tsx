import React from "react";
import { TransitionProvider } from "@/context/Transition";
import ThemeBase from "@/theme/base";
import * as ContextChatScenario from "@/atom/chat-scenario/Context";
import Box from "@mui/material/Box";
import Header from "@/component/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="jp">
      <ThemeBase>
        <ContextChatScenario.Provider>
          <TransitionProvider>
            <Box sx={{ display: "flex" }}>
              <Header />
              <Box>{children}</Box>
            </Box>
          </TransitionProvider>
        </ContextChatScenario.Provider>
      </ThemeBase>
    </html>
  );
}
