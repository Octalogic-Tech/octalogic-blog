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

const InteractiveList = (props: IPostListProps) => {
  const [pageInfo, setPageInfo] = React.useState<undefined | PageInfo>(
    undefined
  );
  const [posts, setPosts] = React.useState<Edge[]>([]);
  const [query, setQuery] = React.useState<IPostListProps | {}>({});

  React.useEffect(() => {
    setQuery({
      data: props.posts.data,
      query: props.posts.query,
      variables: props.posts.variables,
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

  const { data: fetchedPosts } = useTina(query);

  const paginatePosts = ({ latestPosts }: { latestPosts: any }) => {
    const postList = latestPosts?.postConnection?.edges || [];
    setPageInfo(latestPosts?.postConnection?.pageInfo || {});
    setPosts([...posts, ...postList]);
  };

  React.useEffect(() => {
    paginatePosts({ latestPosts: fetchedPosts });
  }, [fetchedPosts]);

  const { data: fetchedHeroPost } = useTina({
    data: props.heroPost.data,
    query: props.heroPost.query,
    variables: props.heroPost.variables,
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

export const getStaticProps = async () => {
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

export default InteractiveList;
