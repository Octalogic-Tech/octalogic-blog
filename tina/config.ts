import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export const CATEGORIES: { value: string; label: string }[] = [
  {
    value: "web-development",
    label: "Web Development",
  },
  {
    value: "mobile-development",
    label: "Mobile Development",
  },
  {
    value: "devops",
    label: "Devops",
  },
  {
    value: "sysops",
    label: "Sysops",
  },
];

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
            required: false,
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
            ui: {
              component: "textarea",
              validate: (value: string) => {
                if (value?.length > 400) {
                  return "Summary cannot be more than 400 characters";
                }
              },
            },
          },
          {
            label: "Is Hero Post",
            name: "isHeroPost",
            type: "boolean",
            ui: {
              component: "toggle",
            },
          },
          /* {
            name: "subtitle",
            label: "Subtitle",
            type: "string",
            required: false,
          }, */
          {
            label: "Categories",
            name: "categories",
            type: "string",
            required: true,
            options: CATEGORIES,
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
          /* {
            type: "string",
            label: "Slug",
            name: "slug",
            required: true,
          }, */
          {
            label: "SEO",
            name: "seo",
            type: "object",
            required: false,
            fields: [
              {
                type: "string",
                label: "Title",
                name: "title",
                required: true,
                ui: {
                  validate: (value: string) => {
                    if (value?.length > 60) {
                      return "Title cannot be more than 60 characters long";
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
                    if (value?.length > 140) {
                      return "Title cannot be more than 140 characters long";
                    }
                  },
                },
              },
              {
                name: "image",
                type: "image",
                label: "SEO Image",
                description: "A 300x300 image that will be displayed whenever a link is posted",
                required: false,
              },
              {
                name: "imageWidth",
                type: "number",
                label: "Image Width",
                required: false,
                ui: {
                  component: "number",
                },
              },
              {
                name: "imageHeight",
                type: "number",
                label: "Image Height",
                required: false,
                ui: {
                  component: "number",
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
