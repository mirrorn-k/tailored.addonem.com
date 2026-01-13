"use client";
import MuiLink from "@mui/material/Link";
import { Typography, Box } from "@mui/material";
import ArrowIcon from "@/atom/svg/ArrowIcon";
import { useTheme } from "@mui/material";
import styled from "@mui/system/styled";
import { useTransition } from "@/context/Transition";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function Default({ href, children }: Props) {
  const { startTransition } = useTransition();

  return (
    <MuiLink
      href={href}
      onClick={(e) => {
        e.preventDefault();
        startTransition(href);
      }}
    >
      {children}
    </MuiLink>
  );
}

interface MainProps {
  href: string;
  label: string;
  props?: React.ComponentPropsWithoutRef<typeof MuiLink>;
}

export const Main = ({ href, label, props }: MainProps) => {
  return (
    <Default href={href}>
      <Typography
        sx={{ fontSize: "1.25rem" }}
        underline="none"
        {...props}
        className={"atom-Link-Main"}
      >
        {label}
      </Typography>
    </Default>
  );
};

export const ArrowLink = ({ href, label }: MainProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: theme.spacing(2),
      }}
    >
      <Main href={href} label={label} />
      <ArrowIcon length={50} strokeWidth={1} tipAngle={0} tipLength={0} />
      {/* 直線に変更 */}
    </Box>
  );
};

// リンクを作成するスタイル付きコンポーネント
export const LinkBox = styled(Default)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary,
  fontWeight: "bold",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
}));
