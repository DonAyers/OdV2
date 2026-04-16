import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { tinaField, useTina } from 'tinacms/dist/react';
import type { BlogQuery, BlogQueryVariables } from '../../tina/__generated__/types';

type Props = {
  data: BlogQuery;
  query: string;
  variables: BlogQueryVariables;
  lang: 'en' | 'it';
  publishedLabel: string;
  updatedLabel: string;
  tagsLabel: string;
  readInLangLabel: string;
  translatedHref?: string | null;
  otherLangFlag?: string;
  bottomTranslationText?: string;
};

function formatDate(date: string, lang: 'en' | 'it') {
  const locale = lang === 'it' ? 'it-IT' : 'en-US';
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function categoryClass(category?: string | null) {
  if (category === 'americas') return 'category-badge category-badge-americas';
  return 'category-badge category-badge-oddities';
}

export default function BlogPostVisual(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const blog = data.blog;
  const tags = (blog.tags ?? []).filter((tag): tag is string => Boolean(tag));

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
      {blog.heroImage && (
        <div
          data-tina-field={tinaField(blog, 'heroImage')}
          className="my-6 rounded-2xl overflow-hidden shadow-md aspect-video bg-cream-200"
        >
          <img src={blog.heroImage} alt={blog.title} className="w-full h-full object-cover" />
        </div>
      )}

      <header className="py-8 border-b border-cream-200 mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {blog.category && (
            <span
              data-tina-field={tinaField(blog, 'category')}
              className={categoryClass(blog.category)}
            >
              {blog.category}
            </span>
          )}
          <span
            data-tina-field={tinaField(blog, 'pubDate')}
            className="text-ink-400 text-sm font-sans"
          >
            {props.publishedLabel} <time dateTime={blog.pubDate}>{formatDate(blog.pubDate, props.lang)}</time>
          </span>
          {blog.updatedDate && (
            <span
              data-tina-field={tinaField(blog, 'updatedDate')}
              className="text-ink-400 text-sm font-sans italic"
            >
              ({props.updatedLabel} <time dateTime={blog.updatedDate}>{formatDate(blog.updatedDate, props.lang)}</time>)
            </span>
          )}
        </div>

        <h1
          data-tina-field={tinaField(blog, 'title')}
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 leading-tight mb-4"
        >
          {blog.title}
        </h1>

        {blog.description && (
          <p
            data-tina-field={tinaField(blog, 'description')}
            className="text-lg text-ink-500 leading-relaxed font-body italic"
          >
            {blog.description}
          </p>
        )}

        {props.translatedHref && props.otherLangFlag && (
          <a
            href={props.translatedHref}
            className="inline-flex items-center gap-2 mt-5 text-sm font-sans font-medium
                 px-4 py-2 bg-cream-200 hover:bg-terra-100 text-ink-700 hover:text-terra-800
                 border border-cream-300 hover:border-terra-300 rounded-full transition-all"
          >
            <span aria-hidden="true">{props.otherLangFlag}</span>
            {props.readInLangLabel}
          </a>
        )}
      </header>

      <div data-tina-field={tinaField(blog, 'body')} className="prose">
        {blog.body && <TinaMarkdown content={blog.body} />}
      </div>

      {tags.length > 0 && (
        <footer data-tina-field={tinaField(blog, 'tags')} className="mt-10 pt-6 border-t border-cream-200">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-ink-400 mb-3">
            {props.tagsLabel}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>
        </footer>
      )}

      {props.translatedHref && props.bottomTranslationText && props.otherLangFlag && (
        <div className="mt-10 p-5 bg-cream-200 rounded-2xl border border-cream-300 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-sm text-ink-600 font-sans">{props.bottomTranslationText}</p>
          <a
            href={props.translatedHref}
            className="inline-flex items-center gap-2 text-sm font-sans font-semibold px-4 py-2
                 bg-terra-500 hover:bg-terra-600 text-white rounded-full transition-colors whitespace-nowrap"
          >
            <span aria-hidden="true">{props.otherLangFlag}</span>
            {props.readInLangLabel}
          </a>
        </div>
      )}
    </article>
  );
}
