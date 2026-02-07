import { Typography, Box, Paper } from "@mui/material";
import { tMedia } from "@/types/ttnouMap";
import MediaImage from "@/component/media/Index";
import { ArrowLink } from "@/atom/Link";

interface Props {
  title: string;
  titleImg?: tMedia;
  media?: tMedia;
  caption: string;
  linkHref?: string;
  linkText?: string;
}

export default function Content03(props: Props) {
  return (
    <Box
      className="Content03"
      sx={{ display: "flex", flexDirection: "column", gap: 4 }}
    >
      <Typography
        variant="h3"
        component="h2"
        sx={{
          p: 2,
          textAlign: "center",
          position: "relative",
          overflow: "visible",

          "&::before": {
            content: "''",
            position: "absolute",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${props.titleImg?.url})`,
            zIndex: -1,
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
          },
        }}
      >
        {props.title}
      </Typography>

      {props.media && (
        <Box
          sx={{
            mx: 3,
            p: 2,
            flex: 4,
            position: "relative",
            aspectRatio: `${props.media.width} / ${props.media.height}`,
            backgroundColor: "#fff",
            overflow: "visible",
            boxShadow:
              " 0 5px 10px rgba(0, 0, 0, 0.5), 0 8px 15px rgba(0, 0, 0, 0.5);",
          }}
        >
          <MediaImage media={props.media} fill={true} objectFit="cover" />
        </Box>
      )}

      <Paper sx={{ borderRadius: "unset", mx: 3, mt: 2, p: 4 }}>
        <Typography
          variant="body1"
          sx={{
            lineHeight: 2,
            "& > *": {
              maxWidth: "unset !important",
              borderRadius: "0px  !important",
            },
          }}
          dangerouslySetInnerHTML={{ __html: props.caption }}
        />
      </Paper>
      {props.linkHref && (
        <Box
          sx={{
            mx: 3,
            px: 2,
            textAlign: "right",
          }}
        >
          <ArrowLink
            href={props.linkHref}
            label={props.linkText ?? "詳しくはこちら"}
          />
        </Box>
      )}
    </Box>
  );
}
