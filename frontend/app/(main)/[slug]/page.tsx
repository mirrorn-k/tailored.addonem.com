import { IMAGE_DEFAULT } from "@/const/Image";
import KV from "@/component/kv/KV01";
import Catchcopy from "@/component/catchcopy/Index";
import ContentSelecter from "@/component/content/Index";
import getOrganize from "@/lib/api/organize/index";
import { getSite } from "@/lib/api/site/index";
import { getPages, getPage } from "@/lib/api/page/index";
import { tMenu, tContentMenu } from "@/types/index";
import { Typography } from "@mui/material";
import Frame from "@/app/Frame";
import metaConvert from "@/lib/meta/converter";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
};

export async function generateMetadata({ params }: Props) {
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug ?? "";

  const site = await getSite();
  const page = await getPage(site.uuid, `/${slug}`);

  const merged = { ...site.meta, ...page.meta };
  return metaConvert(merged);
}

/**
 * レイヤー01コンポーネント
 *
 * @returns
 */
export default async function Main({ params }: Props) {
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug ?? "";

  const { organize, site, page, pageMenus, contentMenus } = await getData(
    `/${slug}`
  );

  if (!page) {
    return <Typography>Not Found</Typography>;
  }

  console.log("page", page.kv.kv);

  return (
    <Frame
      organize={organize}
      site={site}
      pageMenus={pageMenus}
      contentMenus={contentMenus}
      marqueeMessages={page.marqueeMessages}
    >
      <KV media={page.kv.kv ?? IMAGE_DEFAULT} />
      <Catchcopy text={page.kv.catchcopy} />
      <ContentSelecter contents={page.contents} />
    </Frame>
  );
}

async function getData(slug: string) {
  try {
    // 並列で取得（最速化）
    const [organize, site] = await Promise.all([getOrganize(), getSite()]);

    console.log("[site] ", site);

    if (!site) {
      throw new Error();
    }

    // 取得したサイト情報をもとにページ群を取得
    const [pages] = await Promise.all([getPages(site.uuid)]);

    const pageMenus: tMenu[] =
      pages?.map((p) => {
        return { uuid: p.uuid, title: p.name, slug: p.slug };
      }) || [];

    // 現在ページを取得
    const page = pages.find((p) => p.slug === slug);

    // pageからタイトルを取得し{uuid: title}の形で配列にする
    const contentMenus: tContentMenu[] =
      page?.contents.map((content) => {
        return { uuid: content.uuid, title: content.title };
      }) || [];

    return { organize, site, page, pageMenus, contentMenus };
  } catch (e) {
    console.error("API ERROR IN LAYOUT:", e);
    throw e; // ← build を確実に止める
  }
}
