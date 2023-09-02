import * as React from "react";
import v from "voca";
import Image from "next/image";

import Link from "@/components/link/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { calcReadTime, ContentType } from "@/helpers/misc";

import IPost from "@/interfaces/IPost";

const BlogPostCard = ({ post }: { post: IPost }) => {
  return (
    <Link prefetch={false} href={post?.url || ""}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-x-1">
          <Avatar>
            <AvatarImage src={post?.data?.author?.slug} />
            <AvatarFallback>{`${v.titleCase(v.first(post?.data?.author?.slug))}`}</AvatarFallback>
          </Avatar>
          <p className="text-[#999999] text-[0.875rem] break-words">
            <span>{`${v.titleCase(post?.data?.author?.slug)} ${v.titleCase(
              post?.data?.author?.uid,
            )}`}</span>
            &nbsp;
            <span>{`in`}</span>&nbsp;
            <strong>
              {v
                .split(post?.data?.category?.slug, "-")
                .map((text) => v.titleCase(text))
                .join(" ")}
            </strong>
          </p>
        </div>
        <div className="hidden sm:block">
          <p className="text-sm text-[#999999]">{`${calcReadTime(
            post?.data?.content as ContentType[],
          )} min read`}</p>
        </div>
      </div>
      <div
        className={`flex justify-between ${
          post?.data?.cover_image?.url ? "gap-x-8 lg:gap-x-4" : ""
        } items-start`}
      >
        <div className={`${post?.data?.cover_image?.url ? "w-3/5 lg:w-4/5" : "w-full"}`}>
          <div>
            <h4 className="break-words text-[1rem]/[1.25rem] sm:text-[1.25rem]/[1.5rem] line-clamp-2 sm:line-clamp-none">
              {post?.data?.title}
            </h4>
          </div>
          <div className="mt-3 mb-8 hidden sm:block">
            <p className="line-clamp-3 break-words text-sm text-[#6B7280]">
              {post?.data?.post_summary}
            </p>
          </div>
          <div className="flex flex-row-reverse sm:flex-row justify-start sm:justify-between gap-4 sm:gap-0 mt-4 sm:mt-5 items-end">
            <div className="w-full sm:w-6/12 lg:w-3/12">
              <div className="flex items-center gap-2">
                {React.Children.toArray(
                  post?.tags.map((tag: string) => (
                    <p className="bg-[#DADBDD] text-[#656B78] py-[0.625rem] px-[1.875rem] rounded subtitle1 break-words">
                      {tag}
                    </p>
                  )),
                )}
              </div>
            </div>
            <div className="w-full sm:w-6/12 lg:w-3/12 flex justify-start sm:justify-end items-start sm:items-end">
              <p className="text-[#6B7280] !text-base subtitle1 break-words underline underline-offset-4 font-bold">
                Read More
              </p>
            </div>
          </div>
        </div>
        {post?.data?.cover_image?.url && (
          <div className={`w-auto flex items-start`}>
            <Image
              src={post?.data?.cover_image?.url}
              alt={post?.data?.cover_image?.url}
              width="150"
              height="150"
              // sizes="100vw"
              className="w-24 h-24 sm:w-44 sm:h-44 object-cover object-center"
            />
          </div>
        )}
      </div>
    </Link>
  );
};

export default BlogPostCard;
