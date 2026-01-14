import { Box, Typography } from "@mui/material";
import { SoundUnlockButton } from "@/atom/Button";

interface HeaderProps {
  width: { md: string; lg: string; xl: string };
  menus: { label: string; href: string }[];
}
const Mian = (props: HeaderProps) => {
  return (
    <Box
      component="header"
      sx={{
        width: props.width,
        ml: {
          md: "calc( (100% - " + props.width.md + " - 600px " + ") / 3)",
          lg: "calc( (100% - " + props.width.lg + " - 600px " + ") / 3)",
          xl: "calc( (100% - " + props.width.xl + " - 600px " + ") / 3)",
        },
        mr: "auto",
        py: 6,
        textAlign: "center",
        bgcolor: "background.paper",
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        position: "fixed",
      }}
    >
      <Typography>メニュー</Typography>
      <SoundUnlockButton />
    </Box>
  );
};
export default Mian;
