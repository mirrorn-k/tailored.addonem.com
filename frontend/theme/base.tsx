"use client";
import { useMemo } from "react";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
  ThemeOptions,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import "@fontsource/shippori-mincho";
import "@fontsource/noto-sans-jp";

// テーマ作成
const theme1 = createTheme({
  palette: {},
  typography: {
    fontFamily: `'Noto Sans JP', sans-serif`,
    h1: {
      fontFamily: `'Shippori Mincho', sans-serif`,
      letterSpacing: "0.1em",
    },
    h2: {
      fontFamily: `'Shippori Mincho', sans-serif`,
      fontSize: "2.5rem",
      fontWeight: "700",
      letterSpacing: "0.1em",
    },
    h3: {
      fontFamily: `'Shippori Mincho', sans-serif`,
      letterSpacing: "0.1em",
      fontSize: "2.2rem",
    },
    h4: {
      fontFamily: `'Shippori Mincho', sans-serif`,
      letterSpacing: "0.1em",
      fontSize: "2rem",
    },
    h5: {
      fontFamily: `'Shippori Mincho', sans-serif`,
      letterSpacing: "0.1em",
      fontSize: "1.5rem",
    },
    h6: {
      fontFamily: `'Shippori Mincho', sans-serif`,
    },
    body1: {
      fontFamily: `'Noto Sans JP', sans-serif`,
      textAlign: "left",
      fontSize: "1rem",
    },
    body2: {
      fontFamily: `'Noto Sans JP', sans-serif`,
      fontSize: "0.8rem",
    },
  },
});

const theme2 = createTheme({
  ...theme1,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "&*": {
          margin: 0,
        },
      },
    },
  },
});

export const baseTheme = responsiveFontSizes(theme2);

interface ThemeProps {
  options: ThemeOptions;
  children: React.ReactNode;
}

const BaseThemeProvider: React.FC<ThemeProps> = ({ options, children }) => {
  // themeをuseMemoで生成
  const mergedTheme = useMemo(
    () => responsiveFontSizes(createTheme(baseTheme, options)),
    [options]
  );

  console.log("BaseThemeProvider", mergedTheme);

  return (
    <ThemeProvider theme={mergedTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default BaseThemeProvider;
