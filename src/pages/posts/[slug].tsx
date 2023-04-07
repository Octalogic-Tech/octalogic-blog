import { GetStaticPropsContext } from "next";
import * as React from "react";
import { Grid, Typography } from "@mui/material";
import { format, parseISO } from "date-fns";

import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useTina } from "tinacms/dist/react";

import client from "../../../tina/__generated__/client";

import Head from "@/components/head";
import IPostProps from "@/interfaces/IPostProps";

import { Post } from "@/interfaces/IPostProps";

export default function Home(props: IPostProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const post: Post = data?.post;

  const seo = post?.seo;

  return (
    <>
      <Head title={seo?.title} description={seo?.description} />
      <Grid className="global-spacer">
        <Typography sx={{ paddingBlockStart: "4rem" }}>
          {`Updated ${format(
            parseISO(post?.postDate) || new Date(),
            "MMM dd, yyyy",
          )}`}
        </Typography>

        <Typography
          component={"h1"}
          sx={{
            fontSize: "2rem",
            fontWeight: 700,
            lineHeight: "3rem",
            paddingBlockStart: "3rem",
          }}
        >
          {post?.title || ""}
        </Typography>
        <TinaMarkdown content={post?.body || {}} />
      </Grid>
    </>
  );
}

export const getStaticPaths = async () => {
  const { data } = await client.queries.postConnection();
  if (!data?.postConnection?.edges?.length)
    return {
      paths: [],
      fallback: false,
    };

  const paths = data?.postConnection?.edges
    .map((x) => {
      if (!x?.node) return null;

      return { params: { slug: x.node._sys.filename } };
    })
    .filter((row) => row !== null);

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  if (!ctx.params?.slug)
    return {
      notFound: true,
    };

  const { data, query, variables } = await client.queries.post({
    relativePath: ctx.params.slug + ".md",
  });

  const {
    data: dataList,
    query: queryList,
    variables: variableList,
  } = await client.queries.postConnection();

  return {
    props: {
      data,
      query,
      variables,
      dataList,
      queryList,
      variableList,
    },
  };
};
