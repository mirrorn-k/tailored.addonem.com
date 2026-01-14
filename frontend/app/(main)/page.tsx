import { IMAGE_DEFAULT } from "@/const/Image";
import KV from "@/component/kv/KV01";
import Catchcopy from "@/component/catchcopy/Index";
import ContentSelecter from "@/component/content/Index";
import { contents } from "@/const/test";

const text = "ここにキャッチコピーを入力します。<br/>複数行も対応しています。";

/**
 * レイヤー01コンポーネント
 *
 * @returns
 */
export default function Main() {
  return (
    <>
      <KV media={IMAGE_DEFAULT} />
      <Catchcopy text={text} />
      <ContentSelecter contents={contents} />
    </>
  );
}
