import Link from "next/link";

import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateComponent from "./date";
import { CategoryTag } from "./category-tag";

import { sanityFetch } from "@/sanity/lib/fetch";
import {
  MoreStoriesQueryResponse,
  moreStoriesQuery,
  Post,
} from "@/sanity/lib/queries";

export default async function MoreStories(params: {
  skip?: string;
  limit: number;
}) {
  const data = await sanityFetch<MoreStoriesQueryResponse>({
    query: moreStoriesQuery,
    params: { skip: params.skip || "", limit: params.limit },
  });

  return <MoreStoriesContent posts={data || []} />;
}

// Component that accepts posts directly for reuse in category/tag pages
export function MoreStoriesPosts({ posts }: { posts: Post[] }) {
  return <MoreStoriesContent posts={posts} />;
}

// Shared rendering component
function MoreStoriesContent({ posts }: { posts: Post[] }) {
  return (
    <>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts?.map((post) => {
          const {
            _id,
            title,
            slug,
            coverImage,
            excerpt,
            author,
            category,
            tags,
          } = post;
          return (
            <article key={_id}>
              <Link href={`/posts/${slug}`} className="group mb-5 block">
                <CoverImage image={coverImage} priority={false} />
              </Link>
              <h3 className="text-balance mb-3 text-3xl leading-snug">
                <Link href={`/posts/${slug}`} className="hover:underline">
                  {title}
                </Link>
              </h3>
              <div className="mb-4 text-lg">
                <DateComponent dateString={post.date} />
              </div>
              <CategoryTag category={category} tags={tags} />
              {excerpt && (
                <p className="text-pretty mb-4 text-lg leading-relaxed">
                  {excerpt}
                </p>
              )}
              {author && <Avatar name={author.name} picture={author.picture} />}
            </article>
          );
        })}
      </div>
    </>
  );
}
