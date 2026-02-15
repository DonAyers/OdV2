import Link from "next/link";
import type { Category, Tag } from "@/sanity/lib/queries";

export function CategoryTag({
  category,
  tags,
}: {
  category?: Category | null;
  tags?: Tag[] | null;
}) {
  if (!category && (!tags || tags.length === 0)) {
    return null;
  }

  return (
    <div className="mb-6 flex flex-wrap items-center gap-3">
      {category && (
        <Link
          href={`/categories/${category.slug}`}
          className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 transition-colors hover:bg-blue-200"
        >
          <svg
            className="mr-1.5 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
            />
          </svg>
          {category.title}
        </Link>
      )}
      {tags && tags.length > 0 && (
        <>
          {tags.map((tag) => (
            <Link
              key={tag._id}
              href={`/tags/${tag.slug}`}
              className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
            >
              #{tag.title}
            </Link>
          ))}
        </>
      )}
    </div>
  );
}
