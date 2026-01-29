import Header from "@/component/Header";
import Box from "@mui/material/Box";
import MarqueeMessage from "@/component/marquee/Message";
import FooterSelecter from "@/component/footer/Index";
import { tOrganize } from "@/lib/api/organize/type";
import { tSite } from "@/lib/api/site/type";
import { tMenu, tContentMenu } from "@/types/index";

const HEADER_WIDTH = { md: "280px", lg: "340px", xl: "400px" };

interface ClientLayoutProps {
  organize?: tOrganize;
  site: tSite;
  pageMenus: tMenu[];
  contentMenus: tContentMenu[];
  children: React.ReactNode;
}

export default function Layout({
  organize,
  site,
  pageMenus,
  contentMenus,
  children,
}: ClientLayoutProps) {
  return (
    <>
      <MarqueeMessage
        right={{ message: "right" }}
        left={{ message: "left" }}
        top={{ message: "top" }}
        down={{ message: "down" }}
      />
      <Header
        width={HEADER_WIDTH}
        menus={contentMenus}
        logo={
          site.logo_full ??
          site.logo_horizontal ??
          site.logo_square ??
          undefined
        }
      />
      <Box
        sx={{
          mr: {
            xs: "auto",
            md: "calc( (100% - " + HEADER_WIDTH.md + " - 600px " + ") / 3)",
            lg: "calc( (100% - " + HEADER_WIDTH.lg + " - 600px " + ") / 2.5)",
            xl: "calc( (100% - " + HEADER_WIDTH.xl + " - 600px " + ") / 2.2)",
          },
          ml: "auto",
          py: 4,
          maxWidth: 600,
          minHeight: "200vh",
          width: "100%",
          backgroundColor: "blue",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Box
          component="main"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {children}
        </Box>
        <FooterSelecter
          footer={site["footer"]}
          organize={organize}
          menus={pageMenus}
        />
      </Box>
    </>
  );
}
