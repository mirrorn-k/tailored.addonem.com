import { Typography, Box, Paper } from "@mui/material";
import { tMedia } from "@/types/ttnouMap";
import HtmlText from "@/atom/Typography";
import MediaImage from "@/component/media/Index";

interface Props {
  title: string;
  media: tMedia;
  caption: string;
  linkHref: string;
}

export default function Content02(props: Props) {
  return (
    <Paper className="Content02" sx={{ display: "flex", m: 4 }}>
      <Box sx={{ flex: 6 }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{ p: 2, textAlign: "center" }}
        >
          {props.title}
        </Typography>
        <HtmlText text="ddsfdddddsdssddssd" sx={{ m: 1 }} />
      </Box>
      <Box
        sx={{
          flex: 4,
          position: "relative",
          width: "100%",
          aspectRatio: `${props.media.width} / ${props.media.height}`,
        }}
      >
        <MediaImage media={props.media} fill={true} objectFit="cover" />
      </Box>
    </Paper>
  );
}
