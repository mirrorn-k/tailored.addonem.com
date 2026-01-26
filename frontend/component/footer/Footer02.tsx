"use client";

import { useTheme } from "@mui/material/styles";
import { Box, Typography, Link } from "@mui/material";
import ResponsiveBox, { FlexBox } from "@/atom/Box";
import MediaImage from "@/component/media/Index";
import React from "react";
import { tSite } from "@/lib/api/site/type";
import { tOrganize } from "@/lib/api/organize/type";
import { tMenu } from "@/types/index";

interface Props {
  organize?: tOrganize;
  menus?: tMenu[];
  footer: tSite["footer"];
}
export default function FooterBar({ footer, organize, menus = [] }: Props) {
  const theme = useTheme();

  return (
    <Box
      component={"footer"}
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(2, 0),
        marginTop: "auto",
        boxShadow: theme.shadows[4],
      }}
    >
      <ResponsiveBox
        maxWidth="lg"
        margin="0 auto"
        paddingX={2}
        sx={{
          display: "flex",
          gap: 4,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {footer.flgLogo && footer.logo ? (
          <MediaImage
            media={footer.logo}
            imgProps={{ style: { maxWidth: "380px", maxHeight: "280px" } }}
          />
        ) : (
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {organize?.organization_name}
          </Typography>
        )}
        <FlexBox sx={{ display: "flex", width: "100%" }}>
          <Box sx={{ flex: 1 }}>
            <Typography>{organize?.postal_code}</Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            {menus.map((menu) => (
              <Link
                key={`menu-${menu.slug}`}
                color="inherit"
                href={`/${menu.slug}`}
              >
                {menu.title}
              </Link>
            ))}
          </Box>
        </FlexBox>
      </ResponsiveBox>
      <Typography variant="body2" align="center">
        {footer.copyright
          ? footer.copyright
          : `© ${new Date().getFullYear()} addonem llc. All rights reserved.`}
        <Link href="/privacy" color="inherit">
          Privacy Policy
        </Link>
      </Typography>
    </Box>
  );
}
