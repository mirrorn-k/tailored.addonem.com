/**
 * iFrameを埋め込むコンポーネント
 */

import { Typography, Box, Paper } from "@mui/material";
import { BeforeMark } from "@/atom/Typography";
import { tMedia } from "@/types/ttnouMap";

interface Props {
  title: string;
  titleImg?: tMedia;
  url: string;
  width?: string;
  height?: string;
  caution?: string;
}

export default function Content04(props: Props) {
  return (
    <Box
      className="Content04"
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

      <Paper sx={{ borderRadius: "unset", mx: 6, p: 1 }}>
        <Box
          component={"iframe"}
          src={props.url}
          width={props.width || "100%"}
          height={props.height || "600px"}
          sx={{ border: "none" }}
        />
        {props.caution && <BeforeMark mark="※" text={props.caution} />}
      </Paper>
    </Box>
  );
}
