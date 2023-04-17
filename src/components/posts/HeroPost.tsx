import * as React from "react";

import { Typography, Grid } from "@mui/material";

import Link from "@/components/link/link";

import { Post } from "@/interfaces/IPostProps";

const BlogPost = ({ post }: { post: Post }) => (
  <Grid
    container
    justifyContent="space-between"
    sx={{ flex: 1, flexGrow: { xs: 1, sm: 2 } }}
  >
    <Grid item xs={12}>
      <Grid item>
        <Typography
          variant="h5"
          component="p"
          sx={{
            color: "#999999",
          }}
        >
          {post?.categories}
        </Typography>
      </Grid>
      <Grid item sx={{ marginTop: "0.6rem" }}>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: "4rem",
          }}
        >
          {post.title}
        </Typography>
      </Grid>
      <Grid item sx={{ marginTop: "2rem" }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.6rem",
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 6,
          }}
        >
          {post.summary}
        </Typography>
      </Grid>
    </Grid>

    <Grid
      item
      container
      sx={{
        flexDirection: { xs: "row-reverse", sm: "row" },
        justifyContent: { xs: "flex-start", sm: "space-between" },
        gap: { xs: "1rem", sm: "0" },
        marginTop: { xs: "1rem", sm: "1.2rem" },
      }}
      alignItems={"flex-end"}
    >
      <Grid item xs={12} sm={9}>
        <Grid container alignItems="center" sx={{ gap: "0.5rem" }}>
          {React.Children.toArray(
            post.tags.map((tag: string) => (
              <Typography
                variant="h6"
                component="p"
                sx={{
                  backgroundColor: "#DADBDD",
                  color: "#656B78",
                  padding: "0.625rem 1.875rem",
                  borderRadius: "4px",
                }}
              >
                {tag}
              </Typography>
            ))
          )}
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
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
          variant="h6"
          sx={{
            color: "#6B7280",
          }}
        >
          Read More
        </Link>
      </Grid>
    </Grid>
  </Grid>
);

export default BlogPost;
