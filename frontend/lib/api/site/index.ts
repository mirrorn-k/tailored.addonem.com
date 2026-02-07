import getFetch, { fetchWithParams } from "@/lib/api/getFetch";
import { tSite } from "./type";
import { tParams } from "@/types/ttnouMap";

/**
 * SSR/SSG 用：ページ情報を取得
 */
export async function getSite(
  terms?: tParams<{ slug?: string }>
): Promise<tSite> {
  try {
    const base = process.env.NEXT_PUBLIC_MAP_API_SITE;
    const params = `filter[url]=${process.env.NEXT_PUBLIC_APP_URL}`;

    if (!base || !params) {
      console.warn("[getSite] API env missing, skip fetch");
      return {} as tSite;
    }

    const url = `${base}?${params}`;
    const u = fetchWithParams<{ slug?: string }>(url, terms);

    const data: tSite[] = await getFetch(u);

    return data[0];
  } catch (e) {
    console.error("[getSite] fetch error", e);
    return {} as tSite;
  }
}
