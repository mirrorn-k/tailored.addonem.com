import { Typography, Box, Paper } from "@mui/material";
import { tMedia } from "@/types/ttnouMap";
import MediaImage from "@/component/media/Index";

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
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `url(${props.titleImg?.url})`,
        }}
      >
        {props.title}
      </Typography>

      {props.media && (
        <Box
          sx={{
            mx: 10,
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

      <Paper sx={{ borderRadius: "unset", m: 6, p: 4 }}>
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
    </Box>
  );
}
