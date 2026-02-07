import { IMAGE_DEFAULT } from "@/const/Image";
import { tPage } from "@/lib/api/page/type";

export const CONTENTS: tPage["contents"] = [
  {
    uuid: "content-uuid-001",
    type: "content01",
    title: "タイトル",
    caption: "キャッチコピー",
  },
  {
    uuid: "content-uuid-002",
    type: "content02",
    media: IMAGE_DEFAULT,
    title: "タイトル2",
    caption: "キャッチコピー2",
    linkHref: "https://example.com/2",
  },
  {
    uuid: "content-uuid-003",
    type: "content03",
    title: "タイトル",
    titleImg: undefined,
    caption: "キャッチコピー",
    linkHref: "https://example.com",
    linkText: "リンクテキスト",
    media: IMAGE_DEFAULT,
  },
  {
    uuid: "content-uuid-004",
    type: "content04",
    title: "タイトル",
    titleImg: undefined,
    url: "https://addonem.com",
    width: "100%",
    height: "400px",
    caution: "注意事項",
  },
];

export const DUMMY_PAGE: tPage = {
  uuid: "page-uuid-001",
  name: "トップページ",
  slug: "index",
  flg_show: true,

  settings: {
    subtitle: "サブタイトルが入ります",
    flgShowHeader: true,
    flgShowFooter: true,
  },

  kv: {
    catchcopy: "ビジネスに、確かなデジタル基盤を。",
    logo: IMAGE_DEFAULT,
    kv: IMAGE_DEFAULT,
  },

  meta: {
    title: "トップページ｜サンプルサイト",
    description: "これはテスト用のトップページです。",
  },

  structured_data: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "トップページ",
  },

  contents: CONTENTS,
};
