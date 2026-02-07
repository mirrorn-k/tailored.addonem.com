"use client";

import { useTheme } from "@mui/material/styles";
import { Box, Typography, Link } from "@mui/material";
import MediaImage from "@/component/media/Index";
import React from "react";
import { tSite } from "@/lib/api/site/type";
import { tOrganize } from "@/lib/api/organize/type";
import { tMenu } from "@/types/index";
import { BeforeMark } from "@/atom/Typography";
import HtmlText from "@/atom/Typography";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FaxIcon from "@mui/icons-material/Fax";
import EmailIcon from "@mui/icons-material/Email";

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
        padding: theme.spacing(2, 4),
        marginTop: "auto",
        boxShadow: theme.shadows[4],
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            gap: 2,
          }}
        >
          {footer.flgLogo && (
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: { xs: "100%", sm: "200px" },
                maxHeight: { xs: "380px", sm: "200px" },
              }}
            >
              {footer.logo && <MediaImage media={footer.logo} imgProps={{}} />}
            </Box>
          )}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Typography variant={"h5"}>
              {organize?.organization_name}
            </Typography>

            {footer.flgAddress && (
              <>
                {organize?.postal_code && (
                  <BeforeMark mark="〒" text={organize?.postal_code} />
                )}
                {organize?.address && (
                  <Typography className="address" variant="h6">
                    {organize.address}
                  </Typography>
                )}
              </>
            )}
            {footer.flgTel && organize?.tell && (
              <Typography>
                <LocalPhoneIcon sx={{ height: "1rem" }} />
                {organize?.tell}
              </Typography>
            )}
            {footer.flgFax && organize?.fax && (
              <Typography>
                <FaxIcon sx={{ height: "1rem" }} />
                {organize?.fax}
              </Typography>
            )}
            {footer.flgEmail && organize?.email && (
              <Typography>
                <EmailIcon sx={{ height: "1rem" }} />
                {organize?.email}
              </Typography>
            )}
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", flexFlow: "row", flexWrap: "wrap", gap: 4 }}
        >
          {menus.map((menu) => (
            <Link
              key={`menu-${menu.slug}`}
              color="inherit"
              href={`${menu.slug}`}
            >
              {menu.title}
            </Link>
          ))}
        </Box>
        {footer.text && (
          <HtmlText
            className="text"
            sx={{ textAlign: "center" }}
            text={footer.text || ""}
          />
        )}
      </Box>
      <Typography variant="body2" align="center" sx={{ mt: 4 }}>
        {footer.copyright
          ? footer.copyright
          : `© ${new Date().getFullYear()} addonem llc. All rights reserved.`}
      </Typography>
    </Box>
  );
}
