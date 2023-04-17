import { GetStaticPropsContext } from "next";
import * as React from "react";
import { Box, Typography } from "@mui/material";
import { format, parseISO } from "date-fns";
import { NextSeo, ArticleJsonLd } from "next-seo";

import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useTina } from "tinacms/dist/react";
import client from "../../../tina/__generated__/client";

import Head from "@/components/head";

import IPostProps from "@/interfaces/IPostProps";
import { Post } from "@/interfaces/IPostProps";

import { HOST } from "@/config/vars";

const siteUrl = `https://${HOST}`;

export default function Home(props: IPostProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const post: Post = data?.post;

  const seo = post?.seo;

  const postUrl = `${siteUrl}/posts/${post._sys.filename}`;

  return (
    <>
      <Head
        title={seo?.title}
        description={seo?.description}
        canonicalUrl={postUrl}
      />

      {/* SEO Tags */}

      {seo && (
        <>
          <NextSeo
            openGraph={{
              title: seo.title,
              description: seo.description,
              url: postUrl,
              type: "article",
              article: {
                publishedTime: post.postDate,
                modifiedTime: post.postDate,
                section: post.categories.length ? post.categories[0] : "",
                tags: post.tags || [],
              },
              images: seo.image
                ? [
                    {
                      url: `${siteUrl}${seo.image}`,
                      width: seo.imageWidth || 300,
                      height: seo.imageHeight || 300,
                      alt: seo.title,
                    },
                  ]
                : [],
            }}
          />
          <ArticleJsonLd
            url={postUrl}
            title={seo.title}
            description={seo.description}
            images={seo.image ? [`${siteUrl}${seo.image}`] : []}
            datePublished={post.postDate}
            dateModified={post.postDate}
            authorName="Octalogic Tech"
          />
        </>
      )}

      {/* SEO Tags */}

      <Box
        sx={{
          paddingLeft: {
            xs: "2rem",
            sm: "6rem",
            md: "10rem",
            lg: "14rem",
          },
          paddingRight: {
            xs: "2rem",
            sm: "6rem",
            md: "10rem",
            lg: "14rem",
          },
        }}
      >
        <Typography sx={{ paddingBlockStart: "4rem" }}>
          {`Updated ${format(
            parseISO(post?.postDate) || new Date(),
            "MMM dd, yyyy",
          )}`}
        </Typography>

        <Typography
          component="h1"
          variant="h3"
          sx={{
            paddingY: "1.3rem",
          }}
        >
          {post?.title}
        </Typography>
        <TinaMarkdown content={post?.body || {}} />
      </Box>
    </>
  );
}

export const getStaticPaths = async () => {
  const { data } = await client.queries.postConnection();
  if (!data?.postConnection?.edges?.length)
    return {
      paths: [],
      fallback: false,
    };

  const paths = data?.postConnection?.edges
    .map((x) => {
      if (!x?.node) return null;

      return { params: { slug: x.node._sys.filename } };
    })
    .filter((row) => row !== null);

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  if (!ctx.params?.slug)
    return {
      notFound: true,
    };

  const { data, query, variables } = await client.queries.post({
    relativePath: ctx.params.slug + ".md",
  });

  const {
    data: dataList,
    query: queryList,
    variables: variableList,
  } = await client.queries.postConnection();

  return {
    props: {
      data,
      query,
      variables,
      dataList,
      queryList,
      variableList,
    },
  };
};
