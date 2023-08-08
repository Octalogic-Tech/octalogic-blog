import * as React from "react";

import client from "../../tina/__generated__/client";



import IPostListProps from "@/interfaces/IPostListProps";

import BlogList from "./blog-list-page";

export const getBlogs = async () => {
  try {
    const { data, query, variables } = await client.queries.postConnection({
      filter: { isHeroPost: { eq: false } },
      sort: "postDate",
      last: 4,
    });

    const {
      data: heroData,
      query: heroQuery,
      variables: heroVariables,
    } = await client.queries.postConnection({
      filter: { isHeroPost: { eq: true } },
      sort: "postDate",
      last: 1,
    });

    return {
      props: {
        posts: { data, query, variables },
        heroPost: {
          data: heroData,
          query: heroQuery,
          variables: heroVariables,
        },
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

const BlogListPage = async () => {
  const result = await getBlogs();

  return <BlogList {...(result as unknown as IPostListProps)} />;
};

export default BlogListPage;
