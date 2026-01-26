import { IMAGE_DEFAULT } from "@/const/Image";
import KV from "@/component/kv/KV01";
import Catchcopy from "@/component/catchcopy/Index";
import ContentSelecter from "@/component/content/Index";
import Frame from "@/app/Frame";
import { DUMMY_SITE } from "@/const/test/site";
import { DUMMY_PAGE } from "@/const/test/page";
import { DUMMY_ORGANIZE } from "@/const/test/organize";

const text = "ここにキャッチコピーを入力します。<br/>複数行も対応しています。";

/**
 * レイヤー01コンポーネント
 *
 * @returns
 */
export default function Main() {
  const { site, organize, page } = api();

  return (
    <Frame site={site} organize={organize} page={page}>
      <KV media={IMAGE_DEFAULT} />
      <Catchcopy text={text} />
      <ContentSelecter contents={page.contents} />
    </Frame>
  );
}

const api = () => {
  return { site: DUMMY_SITE, organize: DUMMY_ORGANIZE, page: DUMMY_PAGE };
};
