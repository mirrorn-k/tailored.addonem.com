import { Typography, Box } from "@mui/material";
import Content01 from "./Content01";
import Content02 from "./Content02";
import Content03 from "./Content03";
import Content04 from "./Content04";
import { tPage, tPageContent } from "@/lib/api/page/type";
import ScrollElementWrapper from "@/atom/ScrollElementWrapper";

interface Props {
  contents: tPage["contents"];
}

export default function Main({ contents }: Props) {
  return (
    <>
      {contents.map((content, index) => {
        return (
          <ScrollElementWrapper
            key={`contents-${index}`}
            name={`content-${index}-${content.uuid}`}
          >
            <Selecter content={content} index={index} />
          </ScrollElementWrapper>
        );
      })}
    </>
  );
}

function Selecter({
  content,
  index,
}: {
  content: tPageContent;
  index: number;
}) {
  switch (content.type) {
    case "content01":
      return (
        <Content01
          key={`content01-${index}`}
          title={content.title}
          media={content.media ?? undefined}
          caption={content.caption}
          linkHref={content.linkHref ?? undefined}
          linkText={content.linkText ?? undefined}
        />
      );
    case "content02":
      if (
        !content.media ||
        !content.title ||
        !content.caption ||
        !content.linkHref
      ) {
        console.log("Content02 に必要なデータが不足しています ", content);
        return (
          <Box>
            <Typography variant="h4">
              Content02 に必要なデータが不足しています{" "}
            </Typography>
          </Box>
        );
      }

      return (
        <Content02
          key={`content02-${index}`}
          title={content.title}
          media={content.media}
          caption={content.caption}
          linkHref={content.linkHref}
        />
      );
    case "content03":
      if (!content.media || !content.title || !content.caption) {
        console.log("Content03 に必要なデータが不足しています ", content);
        return (
          <Box>
            <Typography variant="h4">
              Content03 に必要なデータが不足しています{" "}
            </Typography>
          </Box>
        );
      }

      return (
        <Content03
          key={`content03-${index}`}
          title={content.title}
          titleImg={content.titleImg ?? undefined}
          media={content.media}
          caption={content.caption}
          linkHref={content.linkHref}
          linkText={content.linkText ?? undefined}
        />
      );
    case "content04":
      if (!content.title || !content.url) {
        console.log("Content04 に必要なデータが不足しています ", content);
        return (
          <Box>
            <Typography variant="h4">
              Content04 に必要なデータが不足しています{" "}
            </Typography>
          </Box>
        );
      }

      return (
        <Content04
          key={`content04-${index}`}
          title={content.title}
          titleImg={content.titleImg ?? undefined}
          url={content.url}
          width={content.width}
          height={content.height}
          caution={content.caution}
        />
      );
    default:
      console.log("未対応のコンテンツタイプ ", content);
      return <></>;
  }
}
