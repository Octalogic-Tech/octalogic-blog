"use client";
import * as React from "react";
import { format, parseISO } from "date-fns";

import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useTina } from "tinacms/dist/react";

import IPostProps from "@/interfaces/IPostProps";
import { Post } from "@/interfaces/IPostProps";

export default function BlogContent(props: IPostProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const post: Post = data?.post;

  return (
    <div className="px-8 sm:px-24 md:px-40 lg:px-56">
      <p className="pt-16">
        {`Updated ${format(
          parseISO(post?.postDate) || new Date(),
          "MMM dd, yyyy"
        )}`}
      </p>

      <h1 className="py-6">{post?.title}</h1>
      <TinaMarkdown content={post?.body || {}} />
    </div>
  );
}
