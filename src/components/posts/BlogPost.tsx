import * as React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Link from "@/components/link/link";

import { Post } from "@/interfaces/IPostProps";

const BlogPostCard = ({ post }: { post: Post }) => (
  <Grid container justifyContent="space-between">
    <Grid item xs={12}>
      <Grid item>
        <Typography
          variant="h6"
          component="p"
          sx={{
            color: "#999999",
          }}
        >
          {post?.categories}
        </Typography>
      </Grid>
      <Grid item sx={{ marginTop: "0.6rem" }}>
        <Typography variant="h4" component="h2">
          {post.title}
        </Typography>
      </Grid>
      <Grid item sx={{ marginTop: "1rem" }}>
        <Typography
          variant="body1"
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
          }}
        >
          {post.summary}
        </Typography>
      </Grid>
    </Grid>

    <Grid
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
                variant="subtitle1"
                component="p"
                sx={{
                  backgroundColor: "#DADBDD",
                  color: "#656B78",
                  padding: "0.625rem 1.875rem",
                  borderRadius: "4px",
                  fontWeight: 700,
                }}
              >
                {tag}
              </Typography>
            )),
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
          variant="subtitle1"
          sx={{
            color: "#6B7280",
            fontWeight: 700,
          }}
        >
          Read More
        </Link>
      </Grid>
    </Grid>
  </Grid>
);

export default BlogPostCard;
