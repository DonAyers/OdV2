import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { MoreStories } from "@/app/(blog)/more-stories";
import {
  tagQuery,
  TagQueryResponse,
  postsByTagQuery,
  PostsByTagQueryResponse,
} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tag = await sanityFetch<TagQueryResponse>({
    query: tagQuery,
    params,
  });

  if (!tag) {
    return notFound();
  }

  return {
    title: `${tag.title} - Tag`,
    description: `Posts tagged with ${tag.title}`,
  };
}

export default async function TagPage({ params }: Props) {
  const [tag, posts] = await Promise.all([
    sanityFetch<TagQueryResponse>({ query: tagQuery, params }),
    sanityFetch<PostsByTagQueryResponse>({
      query: postsByTagQuery,
      params: { ...params, limit: 100 },
    }),
  ]);

  if (!tag) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-5">
      <section className="mb-16 mt-16">
        <h1 className="mb-4 text-5xl font-bold leading-tight tracking-tighter md:text-7xl md:leading-none lg:text-8xl">
          #{tag.title}
        </h1>
        <p className="text-lg text-gray-600 md:text-xl">
          Posts tagged with <strong>{tag.title}</strong>
        </p>
      </section>

      {posts && posts.length > 0 ? (
        <MoreStories posts={posts} />
      ) : (
        <p className="text-center text-lg text-gray-500">
          No posts with this tag yet.
        </p>
      )}
    </div>
  );
}
