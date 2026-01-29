import getFetch, { fetchWithParams } from "@/lib/api/getFetch";
import {
  tPageApiResponce,
  tPage,
  tSetting,
  tKv,
  tPageContent,
  tContentItem,
} from "./type";
import { tMedia, tParams } from "@/types/ttnouMap";

/**
 * SSR/SSG 用：ページ情報を取得
 */
export async function getPages(
  siteUuid: string,
  terms?: tParams<{ slug?: string }>
): Promise<tPage[]> {
  try {
    const url = `${process.env.NEXT_PUBLIC_MAP_API_PAGE}?filter[site_uuid]=${siteUuid}&${process.env.NEXT_PUBLIC_MAP_API_PAGE_PARAMS}`;
    const u = fetchWithParams<{ slug?: string }>(url, terms);

    const data: tPageApiResponce[] = await getFetch(u);

    // スラッグのみを抽出
    const slugs = Array.from(new Set(data.map((page) => page.slug)));

    // 各スラッグに対応する最初のページ情報を取得
    const pages = slugs.map((slug) => {
      return data.find((page) => page.slug === slug)!;
    });

    return Promise.all(
      pages.map(async (page) => {
        return convert(page);
      })
    );
  } catch (e) {
    console.error("[getPages] fetch error", e);
    return [];
  }
}

/**
 * スタッグ指定でページ情報を取得
 */
export async function getPage(siteUuid: string, slug: string): Promise<tPage> {
  try {
    const terms: tParams<{ site_uuid: string; slug?: string }> = {
      filter: { site_uuid: siteUuid, slug },
    };
    const url = `${process.env.NEXT_PUBLIC_MAP_API_PAGE}?${process.env.NEXT_PUBLIC_MAP_API_PAGE_PARAMS}`;
    const u = fetchWithParams<{ site_uuid: string; slug?: string }>(url, terms);

    const data: tPageApiResponce[] = await getFetch(u);

    console.log("[getPage] data:", data);
    return convert(data[0]);
  } catch (e) {
    console.error("[getPages] fetch error", e);
    return {} as tPage;
  }
}

async function convert(res: tPageApiResponce): Promise<tPage> {
  if (!res || typeof res !== "object") return {} as tPage;

  const obj: tPage = {
    uuid: res.uuid,
    name: res.name || "",
    slug: res.slug || "",
    flg_show: res.flg_show || false,
    meta: res.meta || {},
    structured_data: res.structured_data || {},
    settings: {
      subtitle: "",
      flgShowHeader: true,
      flgShowFooter: true,
    },
    kv: {
      kv: null,
      logo: null,
      catchcopy: "",
    },
    contents: [],
  };

  // ページ設定について
  const content1 = res.content1;
  if (content1) {
    obj.settings = convertContent1(content1);
  }

  // KVについて
  const content2 = res.content2;
  if (content2) {
    obj.kv = await convertContent2(content2);
  }

  // 表示コンテンツについて
  const content3 = res.content3;
  if (content3) {
    obj.contents = convertContent3(content3);
  }

  return obj;
}

function convertContent1(c1: tSetting): tSetting {
  return c1;
}

function convertContent2(c2: tKv): tKv {
  return c2;
}

// KVのレスポンシブメディア情報を取得

function convertContent3(c3: tPageApiResponce["content3"]): tPageContent[] {
  if (!c3 || !Array.isArray(c3)) return [];

  return c3.flatMap<tPageContent>((item) => {
    // 項目からデータを取得するために必要な処理
    const ci = item.content_items ?? [];
    const pick = (label: string) =>
      ci.find((i: tContentItem) => i.label === label);

    switch (item.type) {
      case "content01":
        return {
          uuid: item.uuid,
          title: (pick("タイトル")?.raw_value as string) ?? "",
          type: "content01",
          media: (pick("イメージ")?.content as tMedia) ?? null,
          caption: (pick("キャプション")?.raw_value as string) ?? "",
          linkHref: (pick("リンク")?.raw_value as string) ?? null,
          linkText: (pick("リンクラベル")?.raw_value as string) ?? "",
        };

      case "content02":
        return {
          uuid: item.uuid,
          type: "content02",
          media: (pick("イメージ")?.content as tMedia) ?? null,
          title: (pick("タイトル")?.raw_value as string) ?? "",
          caption: (pick("キャプション")?.raw_value as string) ?? "",
        };

      case "content03":
        return {
          uuid: item.uuid,
          type: "content03",
          media: (pick("イメージ")?.content as tMedia) ?? null,
          title: (pick("タイトル")?.raw_value as string) ?? "",
          titleImg: (pick("タイトルイメージ")?.content as tMedia) ?? undefined,
          caption: (pick("キャプション")?.raw_value as string) ?? "",
          linkHref: (pick("リンク")?.raw_value as string) ?? null,
          linkText: (pick("リンクラベル")?.raw_value as string) ?? "",
        };

      case "content04":
        return {
          uuid: item.uuid,
          type: "content04",
          title: (pick("タイトル")?.raw_value as string) ?? "",
          titleImg: (pick("タイトルイメージ")?.content as tMedia) ?? undefined,
          url: (pick("URL")?.raw_value as string) ?? "",
          width: (pick("横幅")?.raw_value as string) ?? undefined,
          height: (pick("高さ")?.raw_value as string) ?? undefined,
          caution: (pick("注意事項")?.raw_value as string) ?? undefined,
        };

      default:
        return {} as tPageContent;
    }
  });
}
