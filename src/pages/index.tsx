import * as React from "react";

import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

import { useTina } from "tinacms/dist/react";
import client from "../../tina/__generated__/client";

import HeroPost from "@/components/posts/HeroPost";
import BlogPost from "@/components/posts/BlogPost";
import AboutCard from "@/components/cards/AboutCard";

import IPostListProps from "@/interfaces/IPostListProps";

import { Post } from "@/interfaces/IPostProps";

const InteractiveList = (props: IPostListProps) => {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const postList = data?.postConnection?.edges || [];

  const [firstPost] = postList;

  return (
    <Grid className="global-spacer">
      <Box
        sx={{
          paddingBlockStart: "4rem",
          // display: "grid",
          // gridTemplateColumns: { xs: "minmax(0, 1fr)", lg: "2fr 1fr" },
          display: "flex",
          flexDirection: { xs: "column-reverse", lg: "row" },
          gridRowGap: { xs: "5rem", lg: "7rem" },
          gridColumnGap: { xs: "0", lg: "7rem" },
        }}
      >
        <HeroPost post={firstPost?.node} />
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
          postList.map(({ node }: { node: Post }) => <BlogPost post={node} />)
        )}
      </Box>
    </Grid>
  );
};

export const getStaticProps = async () => {
  try {
    const { data, query, variables } = await client.queries.postConnection({
      first: 10,
    });

    //TODO: add code for pagination

    return {
      props: {
        data,
        query,
        variables,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default InteractiveList;
