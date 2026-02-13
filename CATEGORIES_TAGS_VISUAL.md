# Categories & Tags UI - Visual Guide

## What the Implementation Looks Like

This document describes the visual appearance of the categories and tags feature across different pages.

## 1. Post Page View

When viewing a single post at `/posts/[slug]`:

```
┌─────────────────────────────────────────────────────────┐
│  My Blog                                                 │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Amazing Post Title                                      │
│                                                          │
│  [Author Avatar] By John Doe                            │
│                                                          │
│  [Cover Image]                                           │
│                                                          │
│  February 13, 2026                                       │
│                                                          │
│  ┌──────────────┐  ┌─────────┐  ┌────────────┐        │
│  │ 📁 Technology │  │ #javascript │  │ #tutorial │      │
│  └──────────────┘  └─────────┘  └────────────┘        │
│  (blue badge)      (gray badge)  (gray badge)          │
│                                                          │
│  Post content goes here...                              │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**Category Badge:**
- Background: Light blue (#E0F2FE / blue-100)
- Text: Dark blue (#1E40AF / blue-800)
- Icon: Folder icon from SVG
- Hover: Slightly darker blue (#BAE6FD / blue-200)

**Tag Badges:**
- Background: Light gray (#F3F4F6 / gray-100)
- Text: Dark gray (#374151 / gray-700)
- Prefix: `#` symbol
- Hover: Slightly darker gray (#E5E7EB / gray-200)

## 2. Home Page - Hero Post

The featured post on the home page:

```
┌─────────────────────────────────────────────────────────┐
│                                                          │
│  [Large Cover Image]                                     │
│                                                          │
│  ┌────────────────────────────────┬──────────────────┐ │
│  │  Featured Post Title           │  Excerpt text... │ │
│  │                                 │                  │ │
│  │  February 13, 2026             │  [Author Avatar] │ │
│  │                                 │  By John Doe     │ │
│  │  ┌──────────┐ ┌──────┐        │                  │ │
│  │  │ 📁 News  │ │ #tech │        │                  │ │
│  │  └──────────┘ └──────┘        │                  │ │
│  └────────────────────────────────┴──────────────────┘ │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## 3. Home Page - Post Grid

Posts in the "More Stories" section:

```
┌──────────────────────────┐  ┌──────────────────────────┐
│ [Cover Image]            │  │ [Cover Image]            │
│                          │  │                          │
│ Post Title Here          │  │ Another Post Title       │
│                          │  │                          │
│ February 13, 2026        │  │ February 12, 2026        │
│                          │  │                          │
│ ┌────────────┐ ┌──────┐ │  │ ┌──────────┐ ┌────────┐ │
│ │ 📁 Tutorial│ │ #code │ │  │ │ 📁 Opinion│ │ #review│ │
│ └────────────┘ └──────┘ │  │ └──────────┘ └────────┘ │
│                          │  │                          │
│ Excerpt text...          │  │ Excerpt text...          │
│                          │  │                          │
│ [Author Avatar]          │  │ [Author Avatar]          │
└──────────────────────────┘  └──────────────────────────┘
```

## 4. Category Archive Page

Visiting `/categories/technology`:

```
┌─────────────────────────────────────────────────────────┐
│                                                          │
│  Technology                                              │
│  (Large heading)                                         │
│                                                          │
│  Posts about software, hardware, and digital trends      │
│  (Description text)                                      │
│                                                          │
│  ┌──────────────────────────┐  ┌──────────────────────┐│
│  │ [Post Card with Image]   │  │ [Post Card]          ││
│  │ Title...                 │  │ Title...             ││
│  │ ┌──────────────┐        │  │ ┌──────────────┐    ││
│  │ │ 📁 Technology│        │  │ │ 📁 Technology│    ││
│  │ └──────────────┘        │  │ └──────────────┘    ││
│  └──────────────────────────┘  └──────────────────────┘│
│                                                          │
│  (All posts in Technology category)                     │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## 5. Tag Archive Page

Visiting `/tags/javascript`:

```
┌─────────────────────────────────────────────────────────┐
│                                                          │
│  #javascript                                             │
│  (Large heading with # prefix)                           │
│                                                          │
│  Posts tagged with javascript                            │
│                                                          │
│  ┌──────────────────────────┐  ┌──────────────────────┐│
│  │ [Post Card]              │  │ [Post Card]          ││
│  │ Title...                 │  │ Title...             ││
│  │ ┌──────┐ ┌────────────┐ │  │ ┌──────┐            ││
│  │ │#javascript│ │#tutorial│ │  │ │#javascript│      ││
│  │ └──────┘ └────────────┘ │  │ └──────┘            ││
│  └──────────────────────────┘  └──────────────────────┘│
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## 6. Sanity Studio - Category Editor

When creating/editing a category:

```
┌─────────────────────────────────────────────────────────┐
│ Category                                    [✓ Publish] │
├─────────────────────────────────────────────────────────┤
│                                                          │
│ Title *                                                  │
│ ┌────────────────────────────────────────────────────┐ │
│ │ Technology                                         │ │
│ └────────────────────────────────────────────────────┘ │
│                                                          │
│ Slug *                                    [Generate]    │
│ ┌────────────────────────────────────────────────────┐ │
│ │ technology                                         │ │
│ └────────────────────────────────────────────────────┘ │
│                                                          │
│ Description                                             │
│ ┌────────────────────────────────────────────────────┐ │
│ │ Posts about software, hardware, and digital trends │ │
│ │                                                    │ │
│ └────────────────────────────────────────────────────┘ │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## 7. Sanity Studio - Post Editor (Category/Tags Section)

When editing a post:

```
┌─────────────────────────────────────────────────────────┐
│ Post                                        [✓ Publish] │
├─────────────────────────────────────────────────────────┤
│                                                          │
│ ... (other post fields) ...                             │
│                                                          │
│ Category                                                 │
│ ┌────────────────────────────────────────────────────┐ │
│ │ Technology                               [▼]       │ │
│ └────────────────────────────────────────────────────┘ │
│ Select a category for this post                         │
│                                                          │
│ Tags                                                     │
│ ┌────────────────────────────────────────────────────┐ │
│ │ • javascript                             [×]       │ │
│ │ • tutorial                               [×]       │ │
│ │ • nextjs                                 [×]       │ │
│ │ [+ Add item]                                      │ │
│ └────────────────────────────────────────────────────┘ │
│ Add tags to this post                                   │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## Design Specifications

### Category Badge
```css
/* Category badge styles */
.category-badge {
  background: #E0F2FE;        /* blue-100 */
  color: #1E40AF;             /* blue-800 */
  padding: 0.5rem 1rem;       /* py-2 px-4 */
  border-radius: 9999px;      /* rounded-full */
  font-size: 0.875rem;        /* text-sm */
  font-weight: 500;           /* font-medium */
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;             /* gap between icon and text */
  transition: background-color 150ms;
}

.category-badge:hover {
  background: #BAE6FD;        /* blue-200 */
}
```

### Tag Badge
```css
/* Tag badge styles */
.tag-badge {
  background: #F3F4F6;        /* gray-100 */
  color: #374151;             /* gray-700 */
  padding: 0.375rem 0.75rem;  /* py-1.5 px-3 */
  border-radius: 9999px;      /* rounded-full */
  font-size: 0.875rem;        /* text-sm */
  font-weight: 500;           /* font-medium */
  display: inline-flex;
  align-items: center;
  transition: background-color 150ms;
}

.tag-badge:hover {
  background: #E5E7EB;        /* gray-200 */
}
```

### Folder Icon (Category)
```svg
<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
</svg>
```

## Responsive Behavior

### Mobile (< 768px)
- Category and tags stack vertically if needed
- Maintain same styling and touch targets
- Full-width on very small screens

### Tablet (768px - 1024px)
- Category and tags on same line
- Wrap to new line if too many tags
- Comfortable spacing maintained

### Desktop (> 1024px)
- All badges inline
- Optimal spacing for hover states
- Maximum 2-3 tags per line recommended

## Accessibility

- All badges are clickable links
- Proper color contrast (WCAG AA compliant)
- Hover states for keyboard navigation
- Screen reader friendly text
- Touch-friendly tap targets (minimum 44x44px)

## Animation

- Smooth color transitions on hover (150ms)
- No animations on mobile to improve performance
- Consistent transition timing across all badges

---

**Note:** This is a text-based representation. Actual implementation uses Tailwind CSS utility classes and React components for rendering.
