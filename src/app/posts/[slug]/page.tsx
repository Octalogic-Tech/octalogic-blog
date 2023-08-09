import * as React from "react";
import type { Metadata } from "next";
import { ArticleJsonLd } from "next-seo";
import { notFound } from "next/navigation";

import client from "../../../../tina/__generated__/client";

import BlogContent from "./blog-content";

import { Post } from "@/interfaces/IPostProps";
import IPostProps, { IPostProps2 } from "@/interfaces/IPostProps";

import { HOST } from "@/config/vars";

const siteUrl = `https://${HOST}`;

export async function generateStaticParams() {
  const { data } = await client.queries.postConnection();
  if (!data?.postConnection?.edges?.length)
    return {
      paths: [],
      fallback: false,
    };

  const paths = data?.postConnection?.edges
    .map((x) => {
      if (!x?.node) return null;

      return { slug: x.node._sys.filename };
    })
    .filter((row) => row !== null);

  return paths;
}

export const getPost = async (params: { slug: string }) => {
  if (!params?.slug) return undefined;

  const { data, query, variables } = await client.queries.post({
    relativePath: params.slug + ".md",
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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  if (!params?.slug) return notFound();

  const { data } = await client.queries.post({
    relativePath: params.slug + ".md",
  });

  const { post } = data;
  const { seo } = post;
  const postUrl = `${siteUrl}/posts/${post._sys.filename}`;
  return {
    title: seo?.title,
    description: seo?.description,
    alternates: { canonical: postUrl },
    openGraph: {
      title: seo?.title,
      description: seo?.description,
      url: postUrl,
      type: "article",
      //   article: {
      //     publishedTime: post.postDate,
      //     modifiedTime: post.postDate,
      //     section: post.categories.length ? post.categories[0] : "",
      //     tags: post.tags || [],
      //   },
      images: seo?.image
        ? [
            {
              url: `${siteUrl}${seo.image}`,
              width: seo.imageWidth || 300,
              height: seo.imageHeight || 300,
              alt: seo.title,
            },
          ]
        : [],
    },
  };
}

// IPostProps
export default async function Post({ params }: { params: { slug: string } }) {
  const fetchedPost = await getPost(params);

  if (!fetchedPost) {
    notFound();
  }
  const { props } = fetchedPost as unknown as IPostProps2;

  const {
    data,
    query,
    variables,
    dataList,
    queryList,
    variableList,
  }: IPostProps = props;

  const post = data?.post;

  const seo = post?.seo;

  const postUrl = `${siteUrl}/posts/${post._sys.filename}`;

  return (
    <>
      {/* SEO Tags */}

      {seo && (
        <>
          <ArticleJsonLd
            useAppDir={true}
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

      <BlogContent
        data={data}
        query={query}
        variables={variables}
        dataList={dataList}
        queryList={queryList}
        variableList={variableList}
      />
    </>
  );
}
