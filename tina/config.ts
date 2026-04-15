import { defineConfig, type Collection } from 'tinacms';

const branch =
  process.env.TINA_BRANCH ||
  process.env.GITHUB_BRANCH ||
  process.env.GITHUB_REF_NAME ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

const BlogCollection: Collection = {
  name: 'blog',
  label: 'Blog posts',
  path: 'src/content/blog',
  format: 'md',
  ui: {
    router({ document }) {
      const path = document._sys.relativePath.replace(/\.md$/, '');
      const [lang, ...slug] = path.split('/');
      return `/${lang}/blog/${slug.join('/')}`;
    },
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      isTitle: true,
      required: true,
    },
    {
      type: 'string',
      name: 'description',
      label: 'Description',
    },
    {
      type: 'datetime',
      name: 'pubDate',
      label: 'Published',
      required: true,
    },
    {
      type: 'datetime',
      name: 'updatedDate',
      label: 'Updated',
    },
    {
      type: 'string',
      name: 'category',
      label: 'Category',
      options: ['oddities', 'americas'],
    },
    {
      type: 'string',
      name: 'tags',
      label: 'Tags',
      list: true,
    },
    {
      type: 'image',
      name: 'heroImage',
      label: 'Hero image',
    },
    {
      type: 'string',
      name: 'lang',
      label: 'Language',
      required: true,
      options: ['en', 'it'],
    },
    {
      type: 'string',
      name: 'translationSlug',
      label: 'Translation slug',
      required: true,
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body',
      isBody: true,
    },
  ],
};

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'wp-content/uploads',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [BlogCollection],
  },
});
