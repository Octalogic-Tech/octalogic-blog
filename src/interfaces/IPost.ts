export default interface IPost {
  id: string;
  uid: string;
  url: string;
  type: string;
  href: string;
  tags: any[];
  first_publication_date: string;
  last_publication_date: string;
  slugs: string[];
  lang: string;
  alternate_languages: any[];
  data: Data;
}

export interface Data {
  title: string;
  cover_image?: CoverImage;
  post_summary: string;
  post_date: string;
  content: object[];
  author: Author;
  category: RelationItem;
  slices: any[];
  meta_description: string;
  meta_image: object;
  meta_title: string;
}

interface RelationItem {
  id: string;
  type: string;
  tags: any[];
  lang: string;
  slug: string;
  first_publication_date: string;
  last_publication_date: string;
  uid: string;
  link_type: string;
  isBroken: boolean;
}

export interface ICoverImage {
  cover_image: CoverImage;
}

export interface CoverImage {
  dimensions: Dimensions;
  alt: string;
  copyright: null;
  url: string;
}

export interface Dimensions {
  width: number;
  height: number;
}

export interface Author extends RelationItem {
  data?: {
    first_name: string;
    last_name: string;
    avatar: CoverImage | null;
  };
}
