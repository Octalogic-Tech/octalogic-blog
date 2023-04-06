import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID as string,
  token: process.env.TINA_TOKEN as string,
  // Relative to the _root_ of your repo
  // localContentPath: "../../demo-content-repo",
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  schema: {
    collections: [
      {
        label: "Blog Posts",
        name: "post",
        path: "content/post",
        ui: {
          router: ({ document }) => {
            // return "/posts/Cloudfront";
            // navigate to the post that was clicked
            return `/posts/${document._sys.filename}`;
          },
        },
        fields: [
          {
            name: "coverImage",
            type: "image",
            label: "Cover Image",
          },
          {
            type: "string",
            label: "Title",
            name: "title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            label: "Summary",
            name: "summary",
            required: true,
          },
          {
            name: "subtitle",
            label: "Subtitle",
            type: "string",
            required: false,
          },
          {
            label: "Categories",
            name: "categories",
            type: "string",
            required: true,
            // TODO: add more categories
            options: [
              {
                value: "web-development",
                label: "Web Development",
              },
              {
                value: "mobile-development",
                label: "Mobile Development",
              },
            ],
          },
          {
            name: "postDate",
            label: "Date",
            type: "datetime",
            required: true,
          },
          {
            label: "Tags",
            name: "tags",
            type: "string",
            list: true,
            required: false,
          },
          {
            type: "string",
            label: "Slug",
            name: "slug",
            required: true,
          },
          {
            label: "SEO",
            name: "seo",
            type: "object",
            required: true,
            fields: [
              {
                type: "string",
                label: "Title",
                name: "title",
                required: true,
                ui: {
                  validate: (value: string) => {
                    if (value?.length > 40) {
                      // TODO: add validation for SEO title
                      return "Title cannot be more than 40 characters long";
                    }
                  },
                },
              },
              {
                type: "string",
                label: "Description",
                name: "description",
                required: true,
                ui: {
                  component: "textarea",
                  validate: (value: string) => {
                    if (value?.length > 40) {
                      // TODO: add validation for SEO description
                      return "Title cannot be more than 40 characters long";
                    }
                  },
                },
              },
            ],
          },
          {
            name: "body",
            label: "Content",
            type: "rich-text",
            isBody: true,
            required: true,
          },
        ],
      },
    ],
  },
});
