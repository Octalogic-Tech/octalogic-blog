import { getServerSideSitemap, ISitemapField } from "next-sitemap";

import client from "@/config/client";

import vars from "@/config/vars";

interface IPost {
  title: string;
  slug: string;
  date: string;
}

export const revalidate = 3600; // revalidate at most every hour

const siteUrl = `https://${vars.host}`;

export async function GET() {
  let paths: IPost[] = [];

  const blogs = await client.getAllByType("blog");

  paths = blogs.map((blog) => ({
    title: blog.data.title as string,
    slug: blog.uid,
    date: blog.data.post_date as string,
  }));

  const dynamicSitemap: ISitemapField[] = [
    {
      loc: `${siteUrl}`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.9,
    },
  ];

  paths.forEach((item: IPost) => {
    const sitemapEntry = {
      loc: `${siteUrl}/posts/${item.slug}`,
      lastmod: item.date,
      changefreq: "monthly",
      priority: 0.7,
    };
    dynamicSitemap.push(sitemapEntry as ISitemapField);
  });

  return getServerSideSitemap([...dynamicSitemap]);
}
