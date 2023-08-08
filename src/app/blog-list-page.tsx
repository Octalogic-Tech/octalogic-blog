"use client";
import * as React from "react";

import { Grid, Box, Button } from "@mui/material";

import { useTina } from "tinacms/dist/react";
import client from "../../tina/__generated__/client";

import HeroPost from "@/components/posts/HeroPost";
import BlogPost from "@/components/posts/BlogPost";
import AboutCard from "@/components/cards/AboutCard";

import IPostListProps, {
  Edge,
  Data,
  PageInfo,
} from "@/interfaces/IPostListProps";

import { Post } from "@/interfaces/IPostProps";

const BlogList = (props: IPostListProps) => {
  const [pageInfo, setPageInfo] = React.useState<undefined | PageInfo>(
    undefined
  );
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
    const { data, query, variables } = await client.queries.postConnection({
      ...props.posts.variables,
      before: pageInfo?.endCursor,
    });
    setQuery({ data, query, variables });
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
    <Grid className="global-spacer">
      <Box
        sx={{
          paddingBlockStart: "4rem",
          display: "flex",
          flexDirection: { xs: "column-reverse", lg: "row" },
          gridRowGap: { xs: "5rem", lg: "7rem" },
          gridColumnGap: { xs: "0", lg: "7rem" },
        }}
      >
        <HeroPost post={heroPost?.node} />
        <AboutCard />
      </Box>

      <Box
        sx={{
          paddingBlock: "6rem",
          display: "grid",
          gridTemplateColumns: {
            xs: "minmax(0, 1fr)",
            lg: "repeat(2, minmax(0, 1fr))",
          },
          gridRowGap: { xs: "5rem", lg: "5rem" },
          gridColumnGap: { xs: "0", lg: "7rem" },
        }}
      >
        {React.Children.toArray(
          posts.map(({ node }: { node: Post }) => <BlogPost post={node} />)
        )}
      </Box>
      <Box
        sx={{ display: "grid", placeItems: "center", paddingBlockEnd: "2rem" }}
      >
        {!!pageInfo?.hasPreviousPage && (
          <Button onClick={queryPosts}>Load More</Button>
        )}
      </Box>
    </Grid>
  );
};

export default BlogList;
