// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for Author documents
 */
interface AuthorDocumentData {
  /**
   * First Name field in *Author*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: author.first_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  first_name: prismic.KeyTextField;

  /**
   * Last Name field in *Author*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: author.last_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  last_name: prismic.KeyTextField;

  /**
   * Avatar field in *Author*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: author.avatar
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  avatar: prismic.ImageField<never>;
}

/**
 * Author document from Prismic
 *
 * - **API ID**: `author`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AuthorDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
  Simplify<AuthorDocumentData>,
  "author",
  Lang
>;

type BlogDocumentDataSlicesSlice = never;

/**
 * Content for Blog documents
 */
interface BlogDocumentData {
  /**
   * Cover Image field in *Blog*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.cover_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  cover_image: prismic.ImageField<never>;

  /**
   * Title field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Summary field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Article Summary
   * - **API ID Path**: blog.post_summary
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  post_summary: prismic.KeyTextField;

  /**
   * Post Date field in *Blog*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.post_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  post_date: prismic.DateField;

  /**
   * Content field in *Blog*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Author field in *Blog*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.author
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  author: prismic.ContentRelationshipField<"author">;

  /**
   * Category field in *Blog*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.category
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  category: prismic.ContentRelationshipField<"category">;

  /**
   * Slice Zone field in *Blog*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Title field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Blog document from Prismic
 *
 * - **API ID**: `blog`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
  Simplify<BlogDocumentData>,
  "blog",
  Lang
>;

/**
 * Content for Category documents
 */
interface CategoryDocumentData {
  /**
   * Name field in *Category*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: category.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;
}

/**
 * Category document from Prismic
 *
 * - **API ID**: `category`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CategoryDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
  Simplify<CategoryDocumentData>,
  "category",
  Lang
>;

export type AllDocumentTypes = AuthorDocument | BlogDocument | CategoryDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    // eslint-disable-next-line @typescript-eslint/prefer-function-type
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AuthorDocument,
      AuthorDocumentData,
      BlogDocument,
      BlogDocumentData,
      BlogDocumentDataSlicesSlice,
      CategoryDocument,
      CategoryDocumentData,
      AllDocumentTypes,
    };
  }
}
