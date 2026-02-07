//export const dynamic = "force-dynamic";
import "./globals.css";
import { TransitionProvider } from "@/context/Transition";
import { ChatProvider } from "@/context/Chat";
import { CssBaseline } from "@mui/material";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <TransitionProvider>
          <ChatProvider>
            <CssBaseline />
            {children}
          </ChatProvider>
        </TransitionProvider>
      </body>
    </html>
  );
}
