import * as React from "react";

import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "../config/theme";
import createEmotionCache from "../config/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* //TODO: need to add a header and a footer */}
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
