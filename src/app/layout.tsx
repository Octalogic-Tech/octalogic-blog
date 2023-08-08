import { Metadata } from "next";
import theme from "@/config/theme";

import ThemeRegistry from "./ThemeRegistry";

// These styles apply to every route in the application
import "./globals.css";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta
          name="msapplication-TileColor"
          content={theme.palette.primary.main}
        />
        <meta name="emotion-insertion-point" content="" />
      </head>
      <body>
        {" "}
        <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
