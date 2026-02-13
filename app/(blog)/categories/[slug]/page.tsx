import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { MoreStories } from "@/app/(blog)/more-stories";
import {
  categoryQuery,
  CategoryQueryResponse,
  postsByCategoryQuery,
  PostsByCategoryQueryResponse,
} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = await sanityFetch<CategoryQueryResponse>({
    query: categoryQuery,
    params,
  });

  if (!category) {
    return notFound();
  }

  return {
    title: `${category.title} - Category`,
    description: category.description || `Posts in ${category.title} category`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const [category, posts] = await Promise.all([
    sanityFetch<CategoryQueryResponse>({ query: categoryQuery, params }),
    sanityFetch<PostsByCategoryQueryResponse>({
      query: postsByCategoryQuery,
      params: { ...params, limit: 100 },
    }),
  ]);

  if (!category) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-5">
      <section className="mb-16 mt-16">
        <h1 className="mb-4 text-5xl font-bold leading-tight tracking-tighter md:text-7xl md:leading-none lg:text-8xl">
          {category.title}
        </h1>
        {category.description && (
          <p className="text-lg text-gray-600 md:text-xl">
            {category.description}
          </p>
        )}
      </section>

      {posts && posts.length > 0 ? (
        <MoreStories posts={posts} />
      ) : (
        <p className="text-center text-lg text-gray-500">
          No posts in this category yet.
        </p>
      )}
    </div>
  );
}
