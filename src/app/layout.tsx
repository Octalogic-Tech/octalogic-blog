import { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import {
  LogoJsonLd,
  SocialProfileJsonLd,
  OrganizationJsonLd,
  LocalBusinessJsonLd,
} from "next-seo";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

import { HOST, IS_LIVE } from "@/config/vars";

const siteUrl = `https://${HOST}`;

// These styles apply to every route in the application
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

export const comfortaa = Comfortaa({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["cursive", "sans-serif"],
});

const TITLE = "Octalogic Tech - Offshore Mobile & Web Development";
const DESCRIPTION =
  "Octalogic Tech provides offshore mobile & web development along with remote team capabilities. We specialise in custom Web Apps, Cross Platform Mobile Apps and Websites.";

export async function generateMetadata(): Promise<Metadata> {
  const IMAGES = [
    {
      url: `/images/logos/O-Only.png`,
      alt: "Octalogic Tech",
      type: "image/png",
      width: 300,
      height: 300,
    },
  ];
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: siteUrl },
    robots: { index: !IS_LIVE, follow: !IS_LIVE },
    twitter: {
      card: "summary_large_image",
      creator: "@OctalogicTech",
      site: "@OctalogicTech",
    },
    openGraph: {
      type: "website",
      url: siteUrl,
      title: TITLE,
      description: DESCRIPTION,
      siteName: TITLE,
      images: IMAGES,
    },
  };
}

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
        <LogoJsonLd
          useAppDir={true}
          logo="/images/logos/O-Only.png"
          url={siteUrl}
        />
        <SocialProfileJsonLd
          useAppDir={true}
          type="Organization"
          name="Octalogic Tech"
          url={siteUrl}
          sameAs={[
            "https://www.instagram.com/octalogic.tech",
            "https://twitter.com/octalogictech",
            "https://www.facebook.com/octalogic.tech",
            "https://www.google.co.in/search?q=octalogic+tech+goa",
            "https://in.linkedin.com/company/octalogic",
          ]}
        />

        <OrganizationJsonLd
          useAppDir={true}
          type="Corporation"
          id={siteUrl}
          logo={`${siteUrl}/images/logos/O-Only.png`}
          legalName="Octalogic Tech"
          name="Octalogic Tech"
          address={{
            streetAddress: "3rd Floor, Sunivas Building, St. Inez",
            addressLocality: "Panjim",
            addressRegion: "Goa",
            postalCode: "403001",
            addressCountry: "IN",
          }}
          contactPoint={[
            {
              telephone: "+919561007591",
              contactType: "technical and finance support",
              email: "carlton@octalogic.in",
              areaServed: ["Dubai", "India"],
              availableLanguage: ["English", "Hindi", "Konkani"],
            },
            {
              telephone: "+917030518285",
              contactType: "technical and finance support",
              email: "tanushree@octalogic.in",
              areaServed: ["India", "Dubai"],
              availableLanguage: ["English", "Hindi", "Konkani"],
            },
            {
              telephone: "+919561007591",
              contactType: "technical support",
              email: "glenn@octalogic.in",
              areaServed: ["US", "India", "Dubai", "Africa"],
              availableLanguage: ["English", "Hindi", "Konkani"],
            },
            {
              telephone: "+918830669189",
              contactType: "technical support",
              email: "jude@octalogic.in",
              areaServed: ["US", "Dubai", "Asia"],
              availableLanguage: ["English", "Hindi", "Konkani"],
            },
          ]}
          sameAs={[`https://www.${HOST}`]}
          url={siteUrl}
        />

        <LocalBusinessJsonLd
          useAppDir={true}
          type="Store"
          id={siteUrl}
          name="Octalogic Tech"
          description={DESCRIPTION}
          url={siteUrl}
          telephone="+917030518285"
          address={{
            streetAddress: "3rd Floor, Sunivas Building, St. Inez",
            addressLocality: "Panjim",
            addressRegion: "Goa",
            postalCode: "403001",
            addressCountry: "IN",
          }}
          geo={{
            latitude: "15.493179",
            longitude: "73.8193395",
          }}
          images={[`${siteUrl}/images/logos/O-Only.png`]}
          sameAs={[`https://www.${HOST}`]}
          openingHours={[
            {
              opens: "10:00",
              closes: "18:00",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              validFrom: "2017-01-01",
              validThrough: "2070-01-01",
            },
          ]}
        />
        <link rel="icon" href="/images/favicon/favicon.ico" />
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <meta name="theme-color" content={"#26A69A"} />
        <meta name="msapplication-TileColor" content={"#26A69A"} />
        <meta name="emotion-insertion-point" content="" />
      </head>
      <body className={comfortaa.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
