import * as React from "react";

import Link from "@/components/link/link";

import IPost from "@/interfaces/IPost";

const BlogPost = ({ post }: { post: IPost }) => (
  <div className="flex flex-col justify-between flex-1 grow sm:grow-[2]">
    <Link href={post.url}>
      <div>
        <div>
          <h5 className="text-[#999999]">{post.data.category.slug}</h5>
        </div>
        <div className="mt-[0.6rem]">
          <h1 className="text-[4rem]">{post.data.title}</h1>
        </div>
        <div className="mt-8">
          <p className="text-[1.6rem] line-clamp-6">{post.data.post_summary}</p>
        </div>
      </div>

      <div className="flex flex-row-reverse sm:flex-row justify-start sm:justify-between gap-4 sm:gap-0 mt-4 sm:mt-5 items-end">
        <div className="w-full sm:w-9/12">
          <div className="flex items-center gap-2">
            {React.Children.toArray(
              post?.tags.map((tag: string) => (
                <p className="bg-[#DADBDD] text-[#656B78] py-[0.625rem] px-[1.875rem] rounded">
                  {tag}
                </p>
              )),
            )}
          </div>
        </div>
        <div className="w-full sm:w-3/12 flex justify-start sm:justify-end items-start sm:items-end">
          <p className="text-[#6B7280]">Read More</p>
        </div>
      </div>
    </Link>
  </div>
);

export default BlogPost;
