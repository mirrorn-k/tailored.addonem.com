import { Typography, Box, Paper } from "@mui/material";
import { tMedia } from "@/types/ttnouMap";

interface Props {
  title: string;
  media?: tMedia;
  caption: string;
  linkHref?: string;
  linkText?: string;
}

export default function Content01(props: Props) {
  return (
    <Box className="Content01" sx={{ m: 2, p: 2 }}>
      <Typography
        variant="h3"
        component="h2"
        color={"primary.contrastText"}
        bgcolor={"primary.main"}
        sx={{ p: 2, textAlign: "center" }}
      >
        {props.title}
      </Typography>
      <Paper sx={{ borderRadius: "unset", p: 4 }}>
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
