import Header from "@/component/Header";
import Box from "@mui/material/Box";

interface ClientLayoutProps {
  children: React.ReactNode;
}
export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <Header />
      <Box component="main">{children}</Box>
    </>
  );
}
