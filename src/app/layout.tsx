import { Metadata } from "next";
import { Comfortaa } from "next/font/google";

import Header from "@/components/header/header";

import ThemeRegistry from "./ThemeRegistry";

// These styles apply to every route in the application
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

export const comfortaa = Comfortaa({
  weight: [ "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["cursive", "sans-serif"],
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <head>
        {/* <meta name="theme-color" content={theme.palette.primary.main} />
        <meta
          name="msapplication-TileColor"
          content={theme.palette.primary.main}
        />
        <meta name="emotion-insertion-point" content="" /> */}
      </head>
      <body className={comfortaa.className}>
        <Header/>
        {/* <ThemeRegistry options={{ key: "mui" }}> */}
          {children}
          {/* </ThemeRegistry> */}
      </body>
    </html>
  );
}
