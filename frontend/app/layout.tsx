//export const dynamic = "force-dynamic";
import "./globals.css";
import * as ContextCommon from "@/context/Common";
import getThemeOptions from "@/lib/api/themeOption/index";
import getOrganize from "@/lib/api/organize/index";
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
  const { organize, options, site } = await api();

  if (!organize) {
    return <p>準備中</p>;
  }

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

/*
async function AsyncLayoutContent({
  organize,
  children,
}: {
  organize: tOrganize | null;
  children: React.ReactNode;
}) {
  return (
    <body className="bg-white text-black">
      <Suspense fallback={<Loading />}>
        <CssBaseline />
        {organize?.gtm_tag && <GtmScript.Body tag={organize.gtm_tag} />}
        <Header />
        <Box
          component="main"
          sx={{
            m: "auto",
            p: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          {children}
        </Box>
        <Footer />
        <MenuModal />
        <ContactModal />
      </Suspense>
    </body>
  );
}
*/

async function api() {
  try {
    // 並列で取得（最速化）
    const [organize, options, site] = await Promise.all([
      getOrganize(),
      getThemeOptions(),
      getSite(),
    ]);

    return { organize, options, site };
  } catch (e) {
    console.error("API ERROR IN LAYOUT:", e);
    throw e; // ← build を確実に止める
  }
}
