import Header from "@/component/Header";
import Box from "@mui/material/Box";
import MarqueeMessage from "@/component/marquee/Message";
import FooterSelecter from "@/component/footer/Index";
import { tPage } from "@/lib/api/page/type";
import { tOrganize } from "@/lib/api/organize/type";
import { tSite } from "@/lib/api/site/type";
import { tMenu, tNaviMenu } from "@/types/index";

const HEADER_WIDTH = { md: "280px", lg: "340px", xl: "400px" };

interface ClientLayoutProps {
  organize?: tOrganize;
  pages?: tPage[];
  page: tPage;
  site: tSite;
  children: React.ReactNode;
}

export default function Layout({
  organize,
  pages = [],
  page,
  site,
  children,
}: ClientLayoutProps) {
  // pageからタイトルを取得し{uuid: title}の形で配列にする
  const pageMenus: tNaviMenu[] = page?.contents.map((content) => {
    return { uuid: content.uuid, title: content.title };
  });

  const menus: tMenu[] = pages?.map((p) => {
    return { title: p.name, slug: p.slug };
  });

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
        menus={pageMenus}
        logo={
          site.logo ?? site.logo_horizontal ?? site.logo_square ?? undefined
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
          menus={menus}
        />
      </Box>
    </>
  );
}
