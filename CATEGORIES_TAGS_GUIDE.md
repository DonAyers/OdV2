# Categories & Tags Feature - Implementation Guide

## Overview

The categories and tags system has been implemented to provide WordPress-like content organization for the OdV2 blog.

## Features Implemented

### 1. Category System
- Posts can be assigned **one category**
- Categories include:
  - Title (required)
  - Slug (auto-generated from title)
  - Description (optional)
- Category archive pages at `/categories/[slug]`
- Displayed as blue badges with icon

### 2. Tag System
- Posts can have **multiple tags**
- Tags include:
  - Title (required)
  - Slug (auto-generated from title)
- Tag archive pages at `/tags/[slug]`
- Displayed as gray badges with `#` prefix

## How to Use in Sanity Studio

### Creating Categories

1. Open Sanity Studio at `http://localhost:3000/studio`
2. Click **"+ Create"** button
3. Select **"Category"**
4. Fill in:
   - **Title:** e.g., "Technology"
   - **Slug:** Click "Generate" (auto-generates from title)
   - **Description:** Brief description of the category
5. Click **"Publish"**

### Creating Tags

1. Click **"+ Create"** button
2. Select **"Tag"**
3. Fill in:
   - **Title:** e.g., "JavaScript"
   - **Slug:** Click "Generate"
4. Click **"Publish"**

### Assigning to Posts

1. Open or create a post
2. Scroll to the **"Category"** field
   - Click to select a category from dropdown
   - Only one category can be selected
3. Scroll to the **"Tags"** field
   - Click **"Add item"** to add a tag
   - Select from existing tags
   - Add as many tags as needed
4. Click **"Publish"**

## User-Facing Features

### On Post Pages
- Category and tags appear below the date
- Category: Blue badge with folder icon
- Tags: Gray badges with # prefix
- All are clickable links to archive pages

### On Home Page
- Hero post shows category and tags
- Post grid shows category and tags for each post

### Archive Pages

**Category Archives:**
- URL: `/categories/[category-slug]`
- Shows category title and description
- Lists all posts in that category
- Same grid layout as home page

**Tag Archives:**
- URL: `/tags/[tag-slug]`
- Shows tag title with # prefix
- Lists all posts with that tag
- Same grid layout as home page

## Technical Details

### Queries Added

```typescript
// Fetch posts by category
postsByCategoryQuery: groq`*[_type == "post" && category->slug.current == $slug]`

// Fetch posts by tag
postsByTagQuery: groq`*[_type == "post" && $slug in tags[]->slug.current]`

// List all categories with post counts
categoriesQuery: groq`*[_type == "category"] | order(title asc)`

// List all tags with post counts
tagsQuery: groq`*[_type == "tag"] | order(title asc)`
```

### Components

**CategoryTag Component** (`app/(blog)/category-tag.tsx`)
- Displays category and tags with proper styling
- Used on post pages, home page, and post cards
- Responsive design with Tailwind CSS

**Archive Page Components**
- Category page: `app/(blog)/categories/[slug]/page.tsx`
- Tag page: `app/(blog)/tags/[slug]/page.tsx`
- Both use the `MoreStoriesPosts` component for consistent layout

### Schema Changes

**Post Schema** (`sanity/schemas/documents/post.ts`)
```typescript
defineField({
  name: "category",
  title: "Category",
  type: "reference",
  to: [{ type: "category" }],
})

defineField({
  name: "tags",
  title: "Tags",
  type: "array",
  of: [{ type: "reference", to: [{ type: "tag" }] }],
})
```

## Examples

### Sample Categories to Create

1. **Technology**
   - Description: "Posts about software, hardware, and digital trends"

2. **Tutorial**
   - Description: "Step-by-step guides and how-to articles"

3. **News**
   - Description: "Latest updates and announcements"

4. **Opinion**
   - Description: "Editorial content and personal perspectives"

### Sample Tags to Create

Common tags for a tech blog:
- javascript
- react
- nextjs
- tutorial
- beginner
- advanced
- web-development
- performance
- security
- best-practices

## Styling

Categories and tags use Tailwind CSS classes:

**Category Badge:**
```css
bg-blue-100 text-blue-800 hover:bg-blue-200
```

**Tag Badge:**
```css
bg-gray-100 text-gray-700 hover:bg-gray-200
```

Both have:
- Rounded corners (`rounded-full`)
- Padding for comfortable touch targets
- Smooth hover transitions
- Responsive sizing

## Future Enhancements

Possible additions for Phase 2+:

1. **Category Navigation Menu**
   - Add category list to site header/footer
   - Show post counts next to categories

2. **Tag Cloud**
   - Display all tags with sizing based on popularity
   - Add to sidebar or footer

3. **Category/Tag Filtering on Home**
   - Add filter dropdown on home page
   - Client-side filtering for instant results

4. **Category Hierarchy**
   - Support parent/child categories
   - Breadcrumb navigation

5. **Related Posts by Category/Tag**
   - Show related posts based on shared categories/tags
   - Replace "Recent Stories" with more relevant suggestions

## Troubleshooting

### Category or Tag Not Showing Up
- Make sure you clicked **"Publish"** (not just Save)
- Check the slug was generated
- Refresh the page after publishing

### Posts Not Appearing in Archive
- Verify the post has the category/tag assigned
- Ensure the post is published (not draft)
- Check the URL matches the category/tag slug

### Styling Issues
- Clear browser cache
- Check Tailwind CSS is compiling properly
- Verify no conflicting styles in `globals.css`

## Testing Checklist

- [ ] Create at least 2 categories
- [ ] Create at least 5 tags
- [ ] Assign category to existing posts
- [ ] Assign multiple tags to posts
- [ ] Visit category archive page
- [ ] Visit tag archive page
- [ ] Click category badge on post
- [ ] Click tag badge on post
- [ ] Verify styling on mobile
- [ ] Check SEO metadata on archive pages

## Performance Notes

- Archive pages are statically generated
- No additional database queries needed for display
- Category/tag data is fetched alongside posts
- Archive pages regenerate on post updates (ISR)

---

**Status:** ✅ Complete and ready for use
**Version:** 1.0
**Last Updated:** February 13, 2026
