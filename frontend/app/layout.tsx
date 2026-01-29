//export const dynamic = "force-dynamic";
import "./globals.css";
import * as ContextCommon from "@/context/Common";
import getThemeOptions from "@/lib/api/themeOption/index";
import BaseThemeProvider from "@/theme/Base";
import { CssBaseline } from "@mui/material";
import * as GtmScript from "@/component/google/GtmScript";
import { getSite } from "@/lib/api/site/index";
import { Metadata } from "next";
import Script from "next/script";
import { TransitionProvider } from "@/context/Transition";
import { ChatProvider } from "@/context/Chat";

export async function generateMetadata(): Promise<Metadata> {
  return {};
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ✅ 共通データの取得
  const { options, site } = await api();

  return (
    <html lang="ja">
      <body>
        {site.gtm_tag && <GtmScript.Header tag={site.gtm_tag} />}

        {/* 外部 JS */}
        {process.env.NEXT_PUBLIC_MAP_JS_EVENTDATA && (
          <Script src={process.env.NEXT_PUBLIC_MAP_JS_EVENTDATA} />
        )}

        {site.structured_data && (
          <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: site.structured_data }}
          />
        )}

        {site.css && (
          <style
            id="site-custom-css"
            dangerouslySetInnerHTML={{ __html: site.css }}
          />
        )}

        <ContextCommon.Provider>
          <BaseThemeProvider options={options}>
            <TransitionProvider>
              <ChatProvider>
                <CssBaseline />
                {site.gtm_tag && <GtmScript.Body tag={site.gtm_tag} />}
                {children}
              </ChatProvider>
            </TransitionProvider>
          </BaseThemeProvider>
          {/*
            <BaseThemeProvider options={options}>
              <AsyncLayoutContent organize={organize}>
                {children}
              </AsyncLayoutContent>
            </BaseThemeProvider>
          */}
        </ContextCommon.Provider>
      </body>
    </html>
  );
}

async function api() {
  try {
    // 並列で取得（最速化）
    const [options, site] = await Promise.all([getThemeOptions(), getSite()]);

    return { options, site };
  } catch (e) {
    console.error("API ERROR IN LAYOUT:", e);
    throw e; // ← build を確実に止める
  }
}
