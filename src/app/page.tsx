import * as React from "react";

import client from "@/config/client";

import BlogPost from "@/components/posts/BlogPost";
import HeroPost from "@/components/posts/HeroPost";

import AboutCard from "@/components/cards/AboutCard";

import IPaginatedResult from "@/interfaces/IPaginatedResult";

const getBlogs = async () => {
  try {
    const result: IPaginatedResult = (await client.getByType("blog", {
      pageSize: 20,
      page: 1,
      fetchLinks: "author.first_name, author.last_name, author.avatar",
      orderings: [
        {
          field: "my.blog.post_date",
          direction: "desc",
        },
      ],
    })) as unknown as IPaginatedResult;

    return {
      currentPage: result.page,
      resultsPerPage: result.results_per_page,
      totalPages: result.total_pages,
      nextPage: result.next_page,
      previousPage: result.prev_page,
      blogs: result.results,
    };
  } catch (error) {
    return {
      currentPage: 0,
      resultsPerPage: 0,
      totalPages: 0,
      nextPage: 0,
      previousPage: 0,
      blogs: [],
    };
  }
};

const BlogListPage = async () => {
  const result = await getBlogs();
  const [heroBlog, ...blogs] = result.blogs;

  return (
    <div className="global-spacer">
      <div
        className={
          "pt-16 flex flex-col-reverse lg:flex-row gap-y-20 lg:gap-y-28 gap-x-0 lg:gap-x-28"
        }
      >
        <HeroPost post={heroBlog} />
        <AboutCard />
      </div>
      <h5 className="global-max-w mx-auto pt-24 text-center font-bold">Our Latest Blogs</h5>
      <div className="pb-24 pt-16 global-max-w grid mx-auto grid-cols-[minmax(0,1fr)] gap-y-[5rem] gap-x-0 lg:gap-x-[5rem]">
        {React.Children.toArray(blogs.map((blog) => <BlogPost post={blog} />))}
      </div>
      {/* TODO: pagination support */}
      {/* <div className="grid place-items-center pb-4">
        {!!pageInfo?.hasPreviousPage && (
          <button onClick={queryPosts} className="text-primary-main hover:text-primary-light">
            Load More
          </button>
        )}
      </div> */}
    </div>
  );
};

export default BlogListPage;
