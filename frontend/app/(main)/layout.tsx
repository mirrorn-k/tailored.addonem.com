//export const dynamic = "force-dynamic";
import getThemeOptions from "@/lib/api/themeOption/index";
import BaseThemeProvider from "@/theme/Base";
import * as GtmScript from "@/component/google/GtmScript";
import { getSite } from "@/lib/api/site/index";
import Script from "next/script";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ✅ 共通データの取得
  const { options, site } = await api();

  return (
    <>
      {site.gtm_tag && <GtmScript.Header tag={site.gtm_tag} />}

      {/* 外部 JS */}
      {process.env.NEXT_PUBLIC_MAP_JS_EVENTDATA && (
        <Script src={process.env.NEXT_PUBLIC_MAP_JS_EVENTDATA} />
      )}

      {site.structured_data && (
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(site.structured_data, null, 2),
          }}
        />
      )}

      {site.css && (
        <style
          id="site-custom-css"
          dangerouslySetInnerHTML={{ __html: site.css }}
        />
      )}
      <BaseThemeProvider options={options}>
        {site.gtm_tag && <GtmScript.Body tag={site.gtm_tag} />}
        {children}{" "}
      </BaseThemeProvider>
    </>
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
