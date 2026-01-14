"use client";

import MediaImage from "@/component/media/Index";
import { Box } from "@mui/material";
import { tMedia } from "@/types/ttnouMap";

interface KV01Props {
  media: tMedia;
}

export default function KV01(props: KV01Props) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        aspectRatio: `${props.media.width} / ${props.media.height}`,
      }}
    >
      <MediaImage media={props.media} fill={true} />
    </Box>
  );
}
