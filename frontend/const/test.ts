import { IMAGE_DEFAULT } from "@/const/Image";
import { tPage } from "@/lib/api/page/type";

export const contents: tPage["contents"] = [
  {
    type: "content01",
    title: "タイトル",
    caption: "キャッチコピー",
    linkHref: "https://example.com",
    linkText: "リンクテキスト",
    media: IMAGE_DEFAULT,
  },
  {
    type: "content02",
    media: IMAGE_DEFAULT,
    title: "タイトル2",
    caption: "キャッチコピー2",
    linkHref: "https://example.com/2",
  },
];
