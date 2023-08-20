import * as React from "react";

import client from "@/config/client";

const getBlogs = async () => {
  try {
    const blogs = await client.getAllByType("blog", {
      limit: 20,
    });

    return {
      props: {
        blogs,
      },
    };
  } catch (error) {
    return {
      props: {
        blogs: [],
      },
    };
  }
};

const BlogListPage = async () => {
  const { props } = await getBlogs();

  return <>{props}</>;
  // const { props } = await getBlogs();

  // return <BlogList {...(props as unknown as IPostListProps)} />;
};

export default BlogListPage;
