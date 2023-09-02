import * as React from "react";
import v from "voca";

import Link from "@/components/link/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { calcReadTime, ContentType } from "@/helpers/misc";

import IPost from "@/interfaces/IPost";

const BlogPost = ({ post }: { post: IPost }) => (
  <div className="flex flex-col justify-between flex-1 grow sm:grow-[2]">
    <Link href={post?.url || ""}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-x-1">
          <Avatar className="w-8 h-8">
            {post?.data?.author?.data?.avatar?.url && (
              <AvatarImage src={post?.data?.author?.data?.avatar?.url} />
            )}
            <AvatarFallback>{`${v.titleCase(
              v.first(post?.data?.author?.data?.first_name),
            )}`}</AvatarFallback>
          </Avatar>
          <p className="text-[#999999] text-[0.875rem] sm:text-[1.375rem] break-words">
            <span>{`${v.titleCase(post?.data?.author?.data?.first_name)} ${v.titleCase(
              post?.data?.author?.data?.last_name,
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
      <div>
        <div className="mt-[0.6rem]">
          <h1 className="text-[3rem]/[3.5rem] sm:text-[4rem]/[4.5rem] break-words">
            {post?.data?.title}
          </h1>
        </div>
        <div className="mt-8">
          <p className="text-[1.6rem] line-clamp-6 break-words">{post?.data?.post_summary}</p>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between mt-4 sm:mt-5 gap-y-4 sm:gap-y-0">
        <button className="px-12 py-3 text-info-contrastText bg-secondary-main">Read More</button>
        <div className="flex items-center gap-2">
          {React.Children.toArray(
            post?.tags.map((tag: string) => (
              <p className="bg-[#DADBDD] text-[#656B78] py-[0.625rem] px-[1.875rem] rounded break-words">
                {tag}
              </p>
            )),
          )}
        </div>
      </div>
    </Link>
  </div>
);

export default BlogPost;
