import { Typography, Box, Paper } from "@mui/material";
import { tMedia } from "@/types/ttnouMap";
import HtmlText from "@/atom/Typography";

interface Props {
  title: string;
  titleImg?: tMedia;
  caption: string;
}

export default function Content01(props: Props) {
  return (
    <Box
      className="Content01"
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
      <Paper sx={{ borderRadius: "unset", p: 2, mx: 3 }}>
        <HtmlText
          text={props.caption}
          variant="body1"
          sx={{
            lineHeight: 2,
            "& > *": {
              maxWidth: "unset !important",
              borderRadius: "0px  !important",
            },
          }}
        />
      </Paper>
    </Box>
  );
}
