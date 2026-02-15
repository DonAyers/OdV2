import { groq, type PortableTextBlock } from "next-sanity";
import type { Image } from "sanity";

export const settingsQuery = groq`*[_type == "settings"][0]`;
export interface SettingsQueryResponse {
  title?: string;
  description?: PortableTextBlock[];
  footer?: PortableTextBlock[];
  ogImage?: (Image & { alt?: string; metadataBase?: string }) | null;
}

export interface Author {
  name: string;
  picture?: (Image & { alt?: string | null }) | null;
}

export interface Category {
  _id: string;
  title: string;
  slug: string;
  description?: string | null;
}

export interface Tag {
  _id: string;
  title: string;
  slug: string;
}

export interface Post {
  _id: string;
  status: "draft" | "published";
  title: string;
  slug: string;
  excerpt?: string | null;
  coverImage?: (Image & { alt?: string }) | null;
  date: string;
  author?: Author | null;
  category?: Category | null;
  tags?: Tag[] | null;
}

const postFields = groq`
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{"name": coalesce(name, "Anonymous"), picture},
  "category": category->{_id, title, "slug": slug.current, description},
  "tags": tags[]->{ _id, title, "slug": slug.current},
`;

export const heroQuery = groq`*[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) [0] {
  content,
  ${postFields}
}`;
export type HeroQueryResponse =
  | (Post & {
      content?: PortableTextBlock[] | null;
    })
  | null;

export const moreStoriesQuery = groq`*[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
  ${postFields}
}`;
export type MoreStoriesQueryResponse = Post[] | null;

export const postQuery = groq`*[_type == "post" && slug.current == $slug] [0] {
  content,
  ${postFields}
}`;
export type PostQueryResponse =
  | (Post & {
      content?: PortableTextBlock[] | null;
    })
  | null;

export const postsByCategoryQuery = groq`*[_type == "post" && category->slug.current == $slug && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
  ${postFields}
}`;
export type PostsByCategoryQueryResponse = Post[] | null;

export const postsByTagQuery = groq`*[_type == "post" && $slug in tags[]->slug.current && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
  ${postFields}
}`;
export type PostsByTagQueryResponse = Post[] | null;

export const categoriesQuery = groq`*[_type == "category"] | order(title asc) {
  _id,
  title,
  "slug": slug.current,
  description,
  "postCount": count(*[_type == "post" && references(^._id)])
}`;
export interface CategoryWithCount extends Category {
  postCount: number;
}
export type CategoriesQueryResponse = CategoryWithCount[] | null;

export const tagsQuery = groq`*[_type == "tag"] | order(title asc) {
  _id,
  title,
  "slug": slug.current,
  "postCount": count(*[_type == "post" && references(^._id)])
}`;
export interface TagWithCount extends Tag {
  postCount: number;
}
export type TagsQueryResponse = TagWithCount[] | null;

export const categoryQuery = groq`*[_type == "category" && slug.current == $slug] [0] {
  _id,
  title,
  "slug": slug.current,
  description
}`;
export type CategoryQueryResponse = Category | null;

export const tagQuery = groq`*[_type == "tag" && slug.current == $slug] [0] {
  _id,
  title,
  "slug": slug.current
}`;
export type TagQueryResponse = Tag | null;
