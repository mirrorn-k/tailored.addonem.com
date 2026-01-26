import { Box, Typography } from "@mui/material";
import { tNaviMenu } from "@/types/index";
import ElementWrapper, { LinkWrapper } from "@/atom/ScrollElementWrapper";
import { tMedia } from "@/types/ttnouMap";
import MediaImage from "@/component/media/Index";

interface HeaderProps {
  logo?: tMedia;
  width: { md: string; lg: string; xl: string };
  menus: tNaviMenu[];
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
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        position: "fixed",
      }}
    >
      <ElementWrapper name="top">
        <></>
      </ElementWrapper>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <MediaImage
          media={props.logo}
          imgProps={{
            style: {
              margin: "auto",
              width: "100%",
              height: "auto",
              maxHeight: "160px",
            },
          }}
        />

        <Typography variant="h4" component={"h2"} sx={{ textAlign: "center" }}>
          メニュー
        </Typography>
        {props.menus.map((menu, index) => (
          <LinkWrapper
            key={`header-menu-${menu.uuid}`}
            to={`content-${index}-${menu.uuid}`}
          >
            <Typography
              variant="h2"
              component={"h3"}
              sx={{ textAlign: "right" }}
            >
              {menu.title}
            </Typography>
          </LinkWrapper>
        ))}
      </Box>
    </Box>
  );
};
export default Mian;
