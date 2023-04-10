import * as React from "react";

import Grid from "@mui/material/Grid";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import { useTina } from "tinacms/dist/react";
import client from "../../tina/__generated__/client";

import Link from "@/components/link/link";

import IPostListProps from "@/interfaces/IPostListProps";

import { Post } from "@/interfaces/IPostProps";

type CustomTypographyProps = {
  size: string;
};

type CustomVariants = {
  [key: string]: {
    fontSize: string;
    lineHeight: string;
  };
};

export const BLOG_CARD_SIZE_OPTIONS = {
  large: "large",
  medium: "medium",
  small: "small",
};

const TOPIC_TEXT_VARIANTS: {
  [key: string]: {
    fontSize: string;
    lineHeight: string;
  };
} = {
  large: {
    fontSize: "1.625rem",
    lineHeight: "1.875rem",
  },
  medium: {
    fontSize: "1.125rem",
    lineHeight: "1.145rem",
  },
  small: {
    fontSize: ".625rem",
    lineHeight: ".825rem",
  },
};

const TopicText = styled(Typography)<CustomTypographyProps>((props) => ({
  ...(props.size
    ? TOPIC_TEXT_VARIANTS[props.size as keyof {}]
    : TOPIC_TEXT_VARIANTS[BLOG_CARD_SIZE_OPTIONS.medium as keyof {}]),
  color: "#999999",
  fontWeight: 700,
}));

const BLOG_HEADING_TEXT_VARIANTS: CustomVariants = {
  large: {
    fontSize: "4rem",
    lineHeight: "4.5rem",
  },
  medium: {
    fontSize: "2rem",
    lineHeight: "2.5rem",
  },
  small: {
    fontSize: "1rem",
    lineHeight: "1.5rem",
  },
};

const BlogHeadingText = styled(Typography)<CustomTypographyProps>((props) => ({
  ...(props.size
    ? BLOG_HEADING_TEXT_VARIANTS[props.size as keyof {}]
    : BLOG_HEADING_TEXT_VARIANTS[BLOG_CARD_SIZE_OPTIONS.medium as keyof {}]),
  fontWeight: 700,
}));

const BLOG_SUMMARY_TEXT_VARIANTS: CustomVariants = {
  large: {
    fontSize: "1.75rem",
    lineHeight: "1.95rem",
  },
  medium: {
    fontSize: "1.125rem",
    lineHeight: "1.325rem",
  },
  small: {
    fontSize: ".625rem",
    lineHeight: ".825rem",
  },
};

const BlogSummaryText = styled(Typography)<CustomTypographyProps>((props) => ({
  ...(props.size
    ? BLOG_SUMMARY_TEXT_VARIANTS[props.size as keyof {}]
    : BLOG_SUMMARY_TEXT_VARIANTS[BLOG_CARD_SIZE_OPTIONS.medium as keyof {}]),
  color: "#6B7280",
}));

const TAG_VARIANTS: CustomVariants = {
  large: {
    fontSize: "1.75rem",
    lineHeight: "1.95rem",
  },
  medium: {
    fontSize: "1.125rem",
    lineHeight: "1.325rem",
  },
  small: {
    fontSize: ".625rem",
    lineHeight: ".825rem",
  },
};

const Tag = styled(Typography)<CustomTypographyProps>((props) => ({
  ...(props.size
    ? TAG_VARIANTS[props.size as keyof {}]
    : TAG_VARIANTS[BLOG_CARD_SIZE_OPTIONS.medium as keyof {}]),
  backgroundColor: "#D1D5DB",
  color: "#6B7280",
  padding: "0.625rem 1.875rem",
}));

const READ_MORE_LINK_VARIANTS: CustomVariants = {
  large: {
    fontSize: "1.75rem",
    lineHeight: "1.95rem",
  },
  medium: {
    fontSize: "1.125rem",
    lineHeight: "1.325rem",
  },
  small: {
    fontSize: ".625rem",
    lineHeight: ".825rem",
  },
};

const Tags = ({ tags, size }: { tags: string[]; size: string }) => {
  return (
    <Grid container alignItems="center" sx={{ gap: "0.5rem" }}>
      {React.Children.toArray(
        tags.map((tag: string) => <Tag size={size}>{tag}</Tag>),
      )}
    </Grid>
  );
};

const truncate = ({ words = "", maxlength = 450 }) => {
  return `${words.slice(0, maxlength)} …`;
};

export const BlogPostCard = ({ post, size }: { post: Post; size: string }) => (
  <Grid
    container
    // direction="column"
    justifyContent="space-between"
    // sx={{minHeight: "40rem"}}
  >
    <Grid item xs={12}>
      <Grid item>
        <TopicText size={size}>
          {post?.categories?.replaceAll("-", " ") || ""}
        </TopicText>
      </Grid>
      <Grid item sx={{ marginTop: "0.6rem" }}>
        <BlogHeadingText size={size}>{post.title}</BlogHeadingText>
      </Grid>
      <Grid item sx={{ marginTop: "2rem" }}>
        <BlogSummaryText size={size}>
          {truncate({
            words: post.summary,
          })}
        </BlogSummaryText>
      </Grid>
    </Grid>

    <Grid
      container
      sx={{
        flexDirection: { xs: "row-reverse", sm: "row" },
        justifyContent: { xs: "flex-start", sm: "space-between" },
        gap: { xs: "1rem", sm: "0" },
        marginTop: { xs: "1rem", sm: "1.5rem" },
      }}
      alignItems={"flex-end"}
    >
      <Grid item xs={12} sm={9}>
        {Tags({
          tags: post.tags,
          size: size,
        })}
      </Grid>
      <Grid
        container
        sx={{
          // height: "100%",
          justifyContent: { xs: "flex-start", sm: "flex-end" },
          alignItems: { xs: "flex-start", sm: "flex-end" },
        }}
        item
        xs={12}
        sm={3}
      >
        <Link
          href={`posts/${post?._sys?.filename?.replaceAll("/posts", "")}`}
          color="info.main"
          sx={{
            color: "#6B7280",
            ...(size
              ? READ_MORE_LINK_VARIANTS[size as keyof {}]
              : READ_MORE_LINK_VARIANTS[
                  BLOG_CARD_SIZE_OPTIONS.medium as keyof {}
                ]),
          }}
        >
          Read More
        </Link>
      </Grid>
    </Grid>
  </Grid>
);

const AboutOctalogicCard = () => (
  <Grid
    sx={{
      padding: "1.5rem",
      backgroundColor: "#3A9086",
    }}
  >
    <Typography
      sx={{
        fontWeight: 700,
        fontSize: "1.375rem",
        lineHeight: "1.5rem",
        color: "#F3F4F6",
      }}
    >
      About
    </Typography>

    <Typography
      sx={{
        fontSize: "1.125rem",
        lineHeight: "1.125rem",
        color: "#F3F4F6",
        marginTop: "1rem",
      }}
    >
      Octalogic Tech is a SaaS company based in Goa, India, that provides custom
      software development, mobile app development, and IT consulting services
      to clients worldwide. Our turnkey solutions are designed to simplify the
      process of software development and deployment, providing clients with a
      seamless end-to-end experience.
    </Typography>

    <Typography
      sx={{
        fontSize: "1.125rem",
        lineHeight: "1.125rem",
        color: "#F3F4F6",
        marginTop: "1rem",
      }}
    >
      Being sector agnostic, we have provided tailor-made solutions to clients
      in FinTech, MedTech, EdTech, FoodTech, and e-commerce verticals.With a
      proven track record of delivering quality and innovative solutions to
      clients in various industries, our team of experienced professionals
      leverages cutting-edge technology and industry best practices that meet
      client&apos;s specific needs and goals.
    </Typography>
  </Grid>
);

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
          paddingBlockStart: "6rem",
          display: "grid",
          gridTemplateColumns: { xs: "minmax(0, 1fr)", lg: "2fr 1fr" },
          gridRowGap: { xs: "5rem", lg: "7rem" },
          gridColumnGap: { xs: "0", lg: "7rem" },
        }}
      >
        <BlogPostCard
          post={firstPost?.node}
          size={BLOG_CARD_SIZE_OPTIONS.large}
        />
        <AboutOctalogicCard />
      </Box>

      <Box
        sx={{
          paddingBlock: "8rem",
          display: "grid",
          gridTemplateColumns: {
            xs: "minmax(0, 1fr)",
            lg: "repeat(2, minmax(0, 1fr))",
          },
          gridRowGap: { xs: "5rem", lg: "7rem" },
          gridColumnGap: { xs: "0", lg: "7rem" },
        }}
      >
        {React.Children.toArray(
          postList.map(({ node }: { node: Post }) => (
            <BlogPostCard post={node} size={BLOG_CARD_SIZE_OPTIONS.medium} />
          )),
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
