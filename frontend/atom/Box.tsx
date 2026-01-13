"use client";
import React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
interface ResponsiveBoxProps extends BoxProps {
  maxWidth: "xs" | "sm" | "md" | "lg" | "xl"; // ブレイクポイントを指定
}

const ResponsiveBox: React.FC<ResponsiveBoxProps> = ({
  maxWidth,
  children,
  sx,
  ...rest // BoxProps の他のプロパティ
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: theme.breakpoints.values[maxWidth], // ブレイクポイントの値を取得して設定
        padding: theme.spacing(1),
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default ResponsiveBox;

export const FlexBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "gapSize", // gapSizeをDOMに渡さないようにする
})<{ gapSize?: number }>(({ theme, gapSize }) => ({
  display: "flex",
  flexFlow: "row",
  gap: gapSize ? theme.spacing(gapSize) : theme.spacing(2),
}));

export const FlexColumnBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "gapSize", // gapSizeをDOMに渡さないようにする
})<{ gapSize?: number }>(({ theme, gapSize }) => ({
  display: "flex",
  flexFlow: "column",
  gap: gapSize ? theme.spacing(gapSize) : theme.spacing(2),
}));

export const CenteredBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "padding" && prop !== "margin",
})<{ padding?: string | number; margin?: string | number }>(
  ({ padding = 0, margin = 0 }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding,
    margin,
  })
);

interface FloatingBoxProps {
  children: React.ReactNode;
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
  backgroundColor?: string;
  boxShadow?: string;
  zIndex?: number;
  borderRadius?: string | number;
  padding?: string | number;
}

export const FloatingBox = styled("div")<FloatingBoxProps>(
  ({
    top,
    bottom,
    left,
    right,
    zIndex = 1000,
    borderRadius = "8px",
    padding = "16px",
  }) => ({
    position: "fixed",
    top,
    bottom,
    left,
    right,
    zIndex,
    borderRadius,
    padding,
    overflow: "hidden", // 子要素がボックスを超えないようにする
  })
);
