import * as React from "react";

import Link from "@/components/link/link";

import IPost from "@/interfaces/IPost";

const BlogPostCard = ({ post }: { post: IPost }) => (
  <div className="flex flex-col justify-between flex-1 grow sm:grow-[2]">
    <Link prefetch={false} href={post?.url || ""}>
      <div>
        <div>
          <p className="text-[#999999] break-words">{post?.data?.category?.slug}</p>
        </div>
        <div className="mt-[0.6rem]">
          <h2 className="break-words">{post?.data?.title}</h2>
        </div>
        <div className="mt-8">
          <p className="line-clamp-6 break-words">{post?.data?.post_summary}</p>
        </div>
      </div>

      <div className="flex flex-row-reverse sm:flex-row justify-start sm:justify-between gap-4 sm:gap-0 mt-4 sm:mt-5 items-end">
        <div className="w-full sm:w-9/12">
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
        <div className="w-full sm:w-3/12 flex justify-start sm:justify-end items-start sm:items-end">
          <p className="text-[#6B7280] subtitle1 break-words">Read More</p>
        </div>
      </div>
    </Link>
  </div>
);

export default BlogPostCard;
