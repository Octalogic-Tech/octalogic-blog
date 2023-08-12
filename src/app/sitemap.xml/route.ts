import { getServerSideSitemap, ISitemapField } from "next-sitemap";

import client from "../../../tina/__generated__/client";

import { HOST } from "@/config/vars";

interface IPost {
  title: string;
  slug: string;
  date: string;
}

export const revalidate = 3600; // revalidate at most every hour

export async function GET() {
  let paths: IPost[] = [];
  const { data } = await client.queries.postConnection();
  if (!data?.postConnection?.edges?.length) paths = [];

  paths = data?.postConnection?.edges
    ?.filter((item) => item?.node?.id)
    .map((item) => ({
      title: item?.node?.title,
      slug: item?.node?._sys.filename,
      date: item?.node?.postDate,
    })) as IPost[];

  const dynamicSitemap: ISitemapField[] = [
    {
      loc: `${HOST}`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.9,
    },
  ];

  paths.forEach((item: IPost) => {
    const sitemapEntry = {
      loc: `${HOST}/${item.slug}`,
      lastmod: item.date,
      changefreq: "monthly",
      priority: 0.7,
    };
    dynamicSitemap.push(sitemapEntry as ISitemapField);
  });

  return getServerSideSitemap([...dynamicSitemap]);
}
