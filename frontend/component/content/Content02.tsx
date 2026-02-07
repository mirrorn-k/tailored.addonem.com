import { Typography, Box, Paper } from "@mui/material";
import HtmlText from "@/atom/Typography";
import MediaImage from "@/component/media/Index";
import Link from "next/link";
import { tContent02 } from "@/lib/api/page/type";

interface Props {
  title: tContent02["title"];
  media: tContent02["media"];
  caption: tContent02["caption"];
  linkHref?: tContent02["linkHref"];
}

export default function Content02(props: Props) {
  return (
    <Box className="Content02" sx={{ display: "content" }}>
      {props.linkHref ? (
        <Link href={props.linkHref}>
          <Content {...props} />
        </Link>
      ) : (
        <Content {...props} />
      )}
    </Box>
  );
}

const Content = (props: Props) => {
  return (
    <Paper
      sx={{
        display: "flex",
        m: 3,
        flexDirection: { xs: "column", sm: "row" },
        gap: 2,
      }}
    >
      <Box sx={{ flex: 5 }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            p: 2,
            textAlign: "center",
          }}
        >
          {props.title}
        </Typography>
        <HtmlText text={props.caption} sx={{ m: 1 }} />
      </Box>
      <Box
        sx={{
          flex: 5,
          position: "relative",
          width: "100%",
          aspectRatio: `${props.media.width} / ${props.media.height}`,
        }}
      >
        <MediaImage media={props.media} fill={true} objectFit="cover" />
      </Box>
    </Paper>
  );
};
