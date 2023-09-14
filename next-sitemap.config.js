/** @type {import('next-sitemap').IConfig} */

const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT;
const isLive = ENVIRONMENT === "production";

module.exports = {
  siteUrl: `https://${process.env.NEXT_PUBLIC_HOST}`,
  changefreq: "weekly",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: isLive
    ? {
        policies: [
          {
            userAgent: "*",
            allow: "/",
          },
        ],
      }
    : {
        policies: [
          {
            userAgent: "*",
            disallow: "/",
          },
        ],
      },
};
