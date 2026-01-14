import { Typography, Box } from "@mui/material";
import Content01 from "./Content01";
import Content02 from "./Content02";
import { tPage } from "@/lib/api/page/type";

interface Props {
  contents: tPage["contents"];
}

export default function Main({ contents }: Props) {
  console.log("Main contents", contents);

  return contents.map((data, index) => {
    switch (data.type) {
      case "content01":
        return (
          <Content01
            key={`content01-${index}`}
            title={data.title}
            media={data.media ?? undefined}
            caption={data.caption}
            linkHref={data.linkHref ?? undefined}
            linkText={data.linkText ?? undefined}
          />
        );
      case "content02":
        if (!data.media || !data.title || !data.caption || !data.linkHref) {
          console.log("Content02 に必要なデータが不足しています ", data);
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
            title={data.title}
            media={data.media}
            caption={data.caption}
            linkHref={data.linkHref}
          />
        );
      default:
        console.log("未対応のコンテンツタイプ ", data);
        return <></>;
    }
  });
}
