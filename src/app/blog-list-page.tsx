"use client";
import * as React from "react";

import { useTina } from "tinacms/dist/react";
import client from "../../tina/__generated__/client";

import HeroPost from "@/components/posts/HeroPost";
import BlogPost from "@/components/posts/BlogPost";
import AboutCard from "@/components/cards/AboutCard";

import IPostListProps, { Edge, Data, PageInfo } from "@/interfaces/IPostListProps";

import { Post } from "@/interfaces/IPostProps";

const BlogList = (props: IPostListProps) => {
  const [pageInfo, setPageInfo] = React.useState<undefined | PageInfo>(undefined);
  const [posts, setPosts] = React.useState<Edge[]>([]);
  const [query, setQuery] = React.useState<{
    query: string;
    variables: object;
    data: object;
  }>({ query: "", variables: {}, data: {} });

  React.useEffect(() => {
    setQuery({
      data: props?.posts?.data,
      query: props?.posts?.query,
      variables: props?.posts?.variables,
    });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const queryPosts = async () => {
    const {
      data,
      query: postsQuery,
      variables,
    } = await client.queries.postConnection({
      ...props.posts.variables,
      before: pageInfo?.endCursor,
    });
    setQuery({ data, query: postsQuery, variables });
  };

  const { data: fetchedPosts }: { data: object } = useTina(query);

  const paginatePosts = ({ latestPosts }: { latestPosts: Data }) => {
    const postList = latestPosts?.postConnection?.edges || [];
    setPageInfo(latestPosts?.postConnection?.pageInfo || {});
    setPosts([...posts, ...postList]);
  };

  React.useEffect(() => {
    if (Object.keys(fetchedPosts).length > 0) {
      paginatePosts({ latestPosts: fetchedPosts as Data });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedPosts]);

  const { data: fetchedHeroPost } = useTina({
    data: props?.heroPost?.data,
    query: props?.heroPost?.query,
    variables: props?.heroPost?.variables,
  });

  const [heroPost] = fetchedHeroPost?.postConnection?.edges || [];

  return (
    <div className="global-spacer">
      <div
        className={
          "pt-16 flex flex-col-reverse lg:flex-row gap-y-20 lg:gap-y-28 gap-x-0 lg:gap-x-28"
        }
      >
        <HeroPost post={heroPost?.node} />
        <AboutCard />
      </div>

      <div className="py-24 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-2 gap-y-[5rem] gap-x-0 lg:gap-x-[7rem]">
        {React.Children.toArray(posts.map(({ node }: { node: Post }) => <BlogPost post={node} />))}
      </div>
      <div className="grid place-items-center pb-4">
        {!!pageInfo?.hasPreviousPage && (
          <button onClick={queryPosts} className="text-primary-main hover:text-primary-light">
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogList;
