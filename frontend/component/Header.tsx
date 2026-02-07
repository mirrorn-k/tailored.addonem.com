"use client";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { tContentMenu } from "@/types/index";
import ElementWrapper, { LinkWrapper } from "@/atom/ScrollElementWrapper";
import { tMedia } from "@/types/ttnouMap";
import MediaImage from "@/component/media/Index";

interface HeaderProps {
  logo?: tMedia;
  width: { md: string; lg: string; xl: string };
  menus: tContentMenu[];
}
const Mian = (props: HeaderProps) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHidden(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      component="header"
      sx={{
        width: props.width,
        ml: {
          xs: "0%",
          md: "calc( (100% - " + props.width.md + " - 600px " + ") / 3)",
          lg: "calc( (100% - " + props.width.lg + " - 600px " + ") / 3)",
          xl: "calc( (100% - " + props.width.xl + " - 600px " + ") / 3)",
        },
        mr: "auto",
        py: { xs: 2, md: 6 },
        textAlign: "center",
        display: { xs: `${hidden ? "none" : "flex"}`, md: "flex" },
        flexDirection: "column",
        position: "fixed",
        zIndex: 999,
        backgroundColor: { xs: "rgba(0,0,0,0.4)", md: "unset" },
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
              width: "auto",
              height: "auto",
              maxWidth: "100%",
              maxHeight: "160px",
            },
          }}
        />

        <Typography variant="h3" component={"h2"} sx={{ textAlign: "center" }}>
          CONTENTS
        </Typography>
        {props.menus.map((menu, index) => (
          <LinkWrapper
            key={`header-menu-${menu.uuid}`}
            to={`content-${index}-${menu.uuid}`}
          >
            <Typography
              variant="h2"
              component={"h3"}
              sx={{
                textAlign: { xs: "center", md: "right" },
                fontSize: { xs: "2.0rem" },
              }}
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
