"use client";
import { Comfortaa } from "next/font/google";
import { createTheme } from "@mui/material/styles";

export const comfortaa = Comfortaa({
  subsets: ["latin"],
  display: "swap",
  fallback: ["cursive", "sans-serif"],
});

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      light: "#65d7cc4d",
      main: "#26A69A",
    },
    secondary: {
      main: "#ff62a7",
    },
    info: {
      light: "#000000cc",
      main: "#000000",
      dark: "#a8a8a8",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#212529",
      secondary: "#6c757d",
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiSpeedDialAction: {
      styleOverrides: {
        fab: {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
        },
        staticTooltipLabel: {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
        },
      },
    },
  },
});

export default theme;
