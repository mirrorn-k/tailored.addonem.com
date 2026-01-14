import Header from "@/component/Header";
import Box from "@mui/material/Box";
import { MarqueeMessage } from "./contents";

const HEADER_WIDTH = { md: "280px", lg: "340px", xl: "400px" };

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <MarqueeMessage />
      <Header width={HEADER_WIDTH} menus={[]} />
      <Box
        component="main"
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
        {children}
      </Box>
    </>
  );
}
