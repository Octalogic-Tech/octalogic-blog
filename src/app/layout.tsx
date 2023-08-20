import { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import { LogoJsonLd, SocialProfileJsonLd, OrganizationJsonLd, LocalBusinessJsonLd } from "next-seo";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

import vars from "@/config/vars";

const siteUrl = `https://${vars.host}`;

// These styles apply to every route in the application
// eslint-disable-next-line import/no-unassigned-import
import "@/styles/globals.css";

const comfortaa = Comfortaa({
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
    icons: [
      { rel: "icon", url: "/images/favicon/favicon.ico" },
      { rel: "shortcut icon", url: "/images/favicon/favicon.ico" },
      {
        rel: "image/png",
        sizes: "16x16",
        url: "/images/favicon/favicon-16x16.png",
      },
      {
        rel: "image/png",
        sizes: "32x32",
        url: "/images/favicon/favicon-32x32.png",
      },
    ],
    description: DESCRIPTION,
    alternates: { canonical: siteUrl },
    robots: { index: vars.isProd, follow: vars.isProd },
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
        <LogoJsonLd useAppDir={true} logo="/images/logos/O-Only.png" url={siteUrl} />
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
          sameAs={[`https://www.${vars.host}`]}
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
          sameAs={[`https://www.${vars.host}`]}
          openingHours={[
            {
              opens: "10:00",
              closes: "18:00",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              validFrom: "2017-01-01",
              validThrough: "2070-01-01",
            },
          ]}
        />
        <link rel="icon" href="/images/favicon/favicon.ico" />
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
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
