import * as React from "react";
import type { Metadata } from "next";
import { ArticleJsonLd } from "next-seo";
import { notFound } from "next/navigation";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { parse, format } from "date-fns";

import client from "@/config/client";

import IPost from "@/interfaces/IPost";

import vars from "@/config/vars";

const siteUrl = `https://${vars.host}`;

export async function generateStaticParams() {
  const blogs = await client.getAllByType("blog");

  return blogs.map((blog) => ({
    slug: blog.uid,
  }));
}

const getPost = async (params: {
  slug: string;
}): Promise<{
  props: {
    post: IPost;
  };
}> => {
  if (!params?.slug) return notFound();

  const post: IPost = (await client.getByUID("blog", params.slug, {
    fetchLinks: "author.first_name, author.last_name",
  })) as unknown as IPost;

  return {
    props: {
      post,
    },
  };
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  if (!params?.slug) return notFound();

  let post: IPost;

  try {
    post = (await client.getByUID("blog", params.slug, {
      fetchLinks: "author.first_name, author.last_name",
    })) as unknown as IPost;
  } catch (error) {
    return notFound();
  }

  const { data: blog } = post;

  const postUrl = `${siteUrl}/posts/${post.uid}`;
  const author: string = `${blog.author.data?.first_name} ${blog.author.data?.last_name}`;
  return {
    title: blog.meta_title,
    description: blog.meta_description,
    alternates: { canonical: postUrl },
    metadataBase: new URL(siteUrl),
    category: blog.category?.slug,
    authors: [{ name: author }],
    twitter: {
      card: "summary_large_image",
      title: blog.meta_title,
      description: blog.meta_description,
      images: blog.cover_image?.url ? [blog.cover_image?.url] : [],
    },
    openGraph: {
      title: blog.meta_title,
      description: blog.meta_description,
      url: postUrl,
      type: "article",
      authors: [author],
      images: blog.cover_image?.url
        ? [
            {
              url: blog.cover_image?.url,
              width: blog.cover_image?.dimensions?.width || 300,
              height: blog.cover_image?.dimensions?.height || 300,
              alt: blog.cover_image?.alt,
            },
          ]
        : [],
    },
  };
}

// IPostProps
export default async function Post({ params }: { params: { slug: string } }) {
  const {
    props: { post },
  } = await getPost(params);

  const { data: blog } = post;

  const postUrl = `${siteUrl}/posts/${post.uid}`;
  const author: string = `${blog.author.data?.first_name} ${blog.author.data?.last_name}`;
  const postDate: Date = parse(blog.post_date, "yyyy-MM-dd", new Date());

  return (
    <>
      <>
        <ArticleJsonLd
          useAppDir={true}
          url={postUrl}
          title={blog.meta_title}
          description={blog.meta_description}
          images={blog.cover_image?.url ? [blog.cover_image?.url] : []}
          datePublished={postDate.toISOString()}
          // dateModified={post.postDate}
          authorName="Octalogic Tech"
        />
      </>
      <div className="mx-auto mt-12 max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg px-12 md:mt-16 md:px-16 lg:px-20 break-words">
        <div className="flex flex-col md:flex-row justify-between">
          <p className="break-words">{`Published ${format(postDate, "MMM dd, yyyy")}`}</p>
          <p className="mb-4 md:mb-0 break-words">Written By {author}</p>
        </div>

        <h1 className="py-10 break-words">{blog.title}</h1>

        {blog?.cover_image?.url && (
          <div className="py-10">
            <Image
              src={blog.cover_image.url}
              alt={blog.cover_image.alt}
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        )}

        <PrismicRichText field={blog.content as any} />
      </div>
    </>
  );
}
