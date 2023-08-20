/* "use client";
import * as React from "react";
import { format, parseISO } from "date-fns";

import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useTina } from "tinacms/dist/react";

// eslint-disable-next-line import/no-unassigned-import
import "./styles.css";

import IPostProps, { Post } from "@/interfaces/IPostProps";

export default function BlogContent(props: IPostProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const post: Post = data?.post;

  return (
    // <div className="px-8 sm:px-24 md:px-40 lg:px-56">
    <div className="flex justify-center">
      <div className="mt-12 max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg px-12 md:mt-16 md:px-16 lg:px-20">
        <p>{`Updated ${format(parseISO(post?.postDate) || new Date(), "MMM dd, yyyy")}`}</p>

        <h1 className="py-10">{post?.title}</h1>
        <TinaMarkdown content={post?.body || {}} />
      </div>
    </div>
  );
}
 */
