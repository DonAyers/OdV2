# OdV2 Project Roadmap
**Blog Replacement Project - WordPress to Next.js + Sanity**

**Last Updated:** February 11, 2026  
**Project Status:** Foundation Complete - Enhancement Phase

---

## Executive Summary

This project is a **modern, serverless blog replacement** for a WordPress blog, built with Next.js 14 and Sanity CMS. The foundation is **production-ready**, offering a superior editing experience with real-time collaboration, visual editing, and modern performance. However, several WordPress-parity features are needed for a complete replacement.

**Current State:** 7/10 - Core blogging functional, missing advanced features  
**Target State:** Full WordPress replacement with modern architecture  
**Estimated Timeline:** 4-6 weeks for complete implementation

---

## Technology Stack

### ✅ Current Stack
- **Frontend:** Next.js (latest) + React 18.2
- **CMS:** Sanity v3.35 with Studio (self-hosted at `/studio`)
- **Styling:** Tailwind CSS 3.4 + Typography plugin
- **Language:** TypeScript 5.4
- **Deployment:** Vercel-optimized
- **Images:** Sanity image pipeline + Unsplash integration
- **AI Features:** Sanity AI Assist (image alt-text generation)

### 🎯 Benefits Over WordPress
1. **No Backend Required** - Fully static with ISR (Incremental Static Regeneration)
2. **Zero Maintenance** - No server, database, or security patches
3. **Instant Performance** - Static pages served from CDN
4. **Real-time Collaboration** - Multiple editors can work simultaneously
5. **Visual Editing** - Preview changes instantly while editing
6. **Generous Free Tier** - Sanity: 3 users, 100k documents, 5GB assets free
7. **Modern Developer Experience** - TypeScript, Git-based workflow, React components

---

## Current Implementation Status

### ✅ Features Complete
| Feature | Status | Notes |
|---------|--------|-------|
| **Post Creation/Editing** | ✅ Complete | Rich text editor with Portable Text |
| **Author Management** | ✅ Complete | Author profiles with images |
| **Image Management** | ✅ Complete | Upload, Unsplash, hotspot cropping |
| **Draft Mode** | ✅ Complete | Preview unpublished content |
| **Visual Editing** | ✅ Complete | Live preview in Sanity Studio |
| **SEO Metadata** | ✅ Complete | OpenGraph, meta tags per post |
| **Responsive Design** | ✅ Complete | Mobile-first Tailwind styling |
| **Performance** | ✅ Complete | ISR, image optimization, CDN |
| **Admin Authentication** | ✅ Complete | Sanity Studio login |
| **Multi-user Collaboration** | ✅ Complete | Real-time editing |
| **Site Settings** | ✅ Complete | Centralized title, description, footer |

### ⚠️ Features Partially Complete
| Feature | Status | Gap |
|---------|--------|-----|
| **Related Posts** | ⚠️ Basic | Only shows recent posts, no semantic matching |
| **Pagination** | ⚠️ Backend Only | API supports it, no UI implementation |
| **Post Scheduling** | ⚠️ Possible | Date field exists, no auto-publish mechanism |

### ❌ Missing WordPress Features
| Feature | Priority | Effort | Dependencies |
|---------|----------|--------|--------------|
| **Categories & Tags** | 🔴 HIGH | 4-6h | Schema changes, UI pages |
| **Search Functionality** | 🔴 HIGH | 8-12h | Algolia or Sanity search API |
| **Archive Pages** | 🟡 MEDIUM | 4-6h | Date-based routes |
| **Author Pages** | 🟡 MEDIUM | 2-4h | Author detail route |
| **Comments System** | 🟡 MEDIUM | 6-8h | 3rd party integration |
| **Newsletter Signup** | 🟡 MEDIUM | 4-6h | Mailchimp/ConvertKit |
| **Social Sharing** | 🟢 LOW | 2-3h | Client-side buttons |
| **RSS Feed** | 🟢 LOW | 2-3h | XML generation |
| **Sitemap** | 🟢 LOW | 1-2h | XML generation |
| **404/Error Pages** | 🟢 LOW | 2-3h | Custom error components |

---

## Implementation Phases

### Phase 1: Critical WordPress Parity (Week 1-2)
**Goal:** Match core WordPress functionality

#### 1.1 Categories & Tags System (HIGH PRIORITY)
**Effort:** 4-6 hours  
**Tasks:**
- [ ] Add `category` and `tags` fields to Post schema
- [ ] Create Category document type with name, slug, description
- [ ] Update post editor UI to support category/tag selection
- [ ] Build `/categories/[slug]` route for category archives
- [ ] Build `/tags/[slug]` route for tag archives
- [ ] Add category/tag display to post pages
- [ ] Add category/tag filtering to home page

**Success Criteria:**
- Posts can be assigned 1 category and multiple tags
- Category and tag archive pages display filtered posts
- Navigation includes category menu

#### 1.2 Search Implementation (HIGH PRIORITY)
**Effort:** 8-12 hours  
**Options:**
1. **Algolia** (Recommended) - 10k searches/month free
2. **Sanity's built-in search** - Limited but sufficient for small blogs
3. **Custom client-side search** - Works for <1000 posts

**Tasks:**
- [ ] Choose search provider (recommend Algolia)
- [ ] Index all posts with title, excerpt, content
- [ ] Build search UI component with autocomplete
- [ ] Add search results page at `/search`
- [ ] Implement debounced search input
- [ ] Display search suggestions

**Success Criteria:**
- Users can search posts by title, content, author
- Search results page shows relevant posts with highlights
- Search is fast (<200ms response time)

#### 1.3 Pagination System
**Effort:** 3-4 hours  
**Tasks:**
- [ ] Add pagination UI to home page (1-10 posts per page)
- [ ] Add pagination to category/tag archives
- [ ] Implement "Load More" button alternative
- [ ] Add page number to URL (e.g., `/page/2`)
- [ ] Update ISR to cache paginated pages

**Success Criteria:**
- Home page shows 10 posts per page
- Previous/Next navigation works correctly
- URL reflects current page number

---

### Phase 2: Enhanced User Experience (Week 3)
**Goal:** Improve engagement and discoverability

#### 2.1 Archive Pages
**Effort:** 4-6 hours  
**Tasks:**
- [ ] Build `/archive` page listing all posts by month
- [ ] Create `/posts/[year]/[month]` route
- [ ] Add archive widget to sidebar
- [ ] Generate archive data in getStaticProps

**Success Criteria:**
- Users can browse posts by month/year
- Archive pages are statically generated

#### 2.2 Author Pages
**Effort:** 2-4 hours  
**Tasks:**
- [ ] Create `/authors/[slug]` route
- [ ] Display author bio, photo, social links
- [ ] List all posts by author
- [ ] Add author link to post bylines

**Success Criteria:**
- Clicking author name shows their profile
- Author page lists all their posts

#### 2.3 Comments System
**Effort:** 6-8 hours  
**Options:**
1. **Giscus** (Recommended) - GitHub Discussions-based, free
2. **Disqus** - Popular, free tier
3. **Utterances** - GitHub Issues-based, lightweight
4. **Commento** - Privacy-focused, self-hosted

**Tasks:**
- [ ] Choose comment provider (recommend Giscus)
- [ ] Add comment component to post layout
- [ ] Configure moderation settings
- [ ] Add comment count to post cards
- [ ] Test moderation flow

**Success Criteria:**
- Users can comment on posts
- Admin can moderate comments
- Comments load asynchronously

---

### Phase 3: Content Discovery & Engagement (Week 4)
**Goal:** Help users find content and stay engaged

#### 3.1 Newsletter Integration
**Effort:** 4-6 hours  
**Options:**
1. **ConvertKit** - 1000 subscribers free
2. **Mailchimp** - 500 subscribers free
3. **Buttondown** - 100 subscribers free

**Tasks:**
- [ ] Choose email provider (recommend ConvertKit)
- [ ] Create signup form component
- [ ] Add form to sidebar and post footer
- [ ] Implement API route for form submission
- [ ] Add GDPR-compliant double opt-in
- [ ] Create thank you page

**Success Criteria:**
- Users can subscribe from any page
- Subscribers receive confirmation email
- Email list syncs with provider

#### 3.2 Social Sharing Buttons
**Effort:** 2-3 hours  
**Tasks:**
- [ ] Create SocialShare component
- [ ] Add Twitter, Facebook, LinkedIn, Email share buttons
- [ ] Implement click-to-share functionality
- [ ] Add share count display (optional)
- [ ] Style buttons to match theme

**Success Criteria:**
- Posts have visible share buttons
- Sharing pre-fills post title and URL

#### 3.3 Related Posts Enhancement
**Effort:** 4-6 hours  
**Tasks:**
- [ ] Implement semantic similarity (based on tags/category)
- [ ] Add "Related Posts" section to post footer
- [ ] Display 3-4 related posts with thumbnails
- [ ] Add fallback to recent posts if no matches

**Success Criteria:**
- Posts show relevant related content
- Users click through to related posts

---

### Phase 4: Technical Excellence (Week 5)
**Goal:** Production hardening and optimization

#### 4.1 SEO & Discoverability
**Effort:** 4-6 hours  
**Tasks:**
- [ ] Generate `sitemap.xml` at `/sitemap.xml`
- [ ] Generate `robots.txt` at `/robots.txt`
- [ ] Add RSS feed at `/feed.xml`
- [ ] Implement JSON-LD structured data
- [ ] Add breadcrumbs navigation
- [ ] Optimize meta descriptions

**Success Criteria:**
- Search engines can crawl all pages
- RSS feed works in feed readers
- Structured data validates in Google testing tool

#### 4.2 Error Handling
**Effort:** 2-3 hours  
**Tasks:**
- [ ] Create custom 404 page with search
- [ ] Create custom 500 error page
- [ ] Add error boundary components
- [ ] Implement graceful fallbacks for images
- [ ] Add loading states for slow connections

**Success Criteria:**
- Broken links show helpful 404 page
- Errors don't crash the entire site

#### 4.3 Analytics & Monitoring
**Effort:** 3-4 hours  
**Tasks:**
- [ ] Add Google Analytics 4 (or Plausible for privacy)
- [ ] Configure Vercel Analytics
- [ ] Set up Sanity webhook notifications
- [ ] Add performance monitoring
- [ ] Configure error tracking (Sentry optional)

**Success Criteria:**
- Page views are tracked
- Performance metrics are visible
- Errors are logged

---

### Phase 5: Theming & Customization (Week 6)
**Goal:** Make the blog visually unique and customizable

#### 5.1 Theme System
**Effort:** 8-12 hours  
**Tasks:**
- [ ] Add theme settings to Sanity Settings singleton
- [ ] Create color scheme picker (5-6 preset themes)
- [ ] Implement CSS variable system for colors
- [ ] Add font selection (3-4 preset font pairings)
- [ ] Create theme preview in Sanity Studio
- [ ] Add dark mode toggle

**Success Criteria:**
- Admin can change colors without code
- Theme changes apply site-wide instantly
- Dark mode works correctly

#### 5.2 Layout Customization
**Effort:** 6-8 hours  
**Tasks:**
- [ ] Add layout options to Settings (sidebar left/right/none)
- [ ] Create widget system for sidebar content
- [ ] Add header/navigation customization
- [ ] Implement footer customization
- [ ] Add homepage layout options (grid vs list)

**Success Criteria:**
- Admin can rearrange layout without code
- Multiple layout options work responsively

#### 5.3 Custom Styling Options
**Effort:** 4-6 hours  
**Tasks:**
- [ ] Add custom CSS field to Settings
- [ ] Allow logo upload (header and footer)
- [ ] Add social media links to Settings
- [ ] Implement favicon upload
- [ ] Add custom fonts via Google Fonts picker

**Success Criteria:**
- Site looks distinctly branded
- Custom styles persist across deploys

---

## WordPress Data Migration Plan

### Migration Strategy
**Effort:** 8-16 hours (one-time task)

#### Prerequisites
- [ ] Export WordPress data to XML (Tools → Export)
- [ ] Download all media files from WordPress
- [ ] Create mapping document (WP → Sanity structure)

#### Migration Steps
1. **Content Migration**
   - [ ] Install WordPress XML parser
   - [ ] Write conversion script (WP XML → Sanity format)
   - [ ] Convert posts with metadata (date, author, slug)
   - [ ] Convert categories to Sanity categories
   - [ ] Convert tags to Sanity tags
   - [ ] Handle featured images

2. **Media Migration**
   - [ ] Upload images to Sanity Assets
   - [ ] Update image references in post content
   - [ ] Preserve alt text and captions
   - [ ] Optimize images during upload

3. **URL Redirection**
   - [ ] Map old WordPress URLs to new Next.js URLs
   - [ ] Implement redirects in `next.config.js`
   - [ ] Test all old URLs redirect correctly

4. **Validation**
   - [ ] Compare post counts (WP vs Sanity)
   - [ ] Spot-check 20+ posts for formatting
   - [ ] Verify all images load correctly
   - [ ] Test all internal links

**Tools:**
- `wordpress-export-to-markdown` npm package
- Custom migration script (Node.js)
- Sanity CLI for bulk imports

---

## Open Questions & Decisions Needed

### 🤔 High Priority Questions

1. **Content Migration Timeline**
   - When should we migrate WordPress content?
   - Should we keep WordPress running in parallel during testing?
   - What's the cutover date for DNS/domain switch?

2. **Comment System Choice**
   - Do we need to migrate existing WordPress comments?
   - Which comment provider fits best? (Recommend: Giscus - free, GitHub-based)
   - Should comments be enabled on all posts or selectable per-post?

3. **Search Provider**
   - What's the expected blog size? (< 100 posts = client-side, 100-1000 = Algolia, 1000+ = dedicated search)
   - Willing to pay for Algolia if blog grows? (Free tier: 10k searches/month)
   - Is fuzzy search needed or just keyword matching?

4. **Newsletter Strategy**
   - Do we have an existing email list to import?
   - Which email provider are you currently using?
   - Should newsletter be required or optional?

5. **Theme Customization Level**
   - Should admins have full control over colors/fonts/layout?
   - Or should we create a single polished theme?
   - Do we need multiple theme presets?

### 🟡 Medium Priority Questions

6. **Multi-author Blog**
   - How many authors will contribute?
   - Do we need author approval workflows?
   - Should authors have different permission levels?

7. **Content Types**
   - Just blog posts, or do we need pages (About, Contact)?
   - Should we support portfolios, galleries, or other content?
   - Any custom post types needed?

8. **Analytics & Privacy**
   - Do we need GDPR compliance (EU users)?
   - Prefer privacy-focused analytics (Plausible) or full-featured (GA4)?
   - Should we show a cookie consent banner?

### 🟢 Low Priority Questions

9. **Advanced Features**
   - Do we need post series (multi-part posts)?
   - Should we support multiple languages?
   - Do we need membership/paywall features?

10. **Deployment**
    - Deploy on Vercel (recommended) or elsewhere?
    - Custom domain ready?
    - Need staging environment?

---

## Cost Analysis

### Free Tier Limits (Sufficient for Most Blogs)
| Service | Free Tier | Exceeding Free? |
|---------|-----------|-----------------|
| **Sanity** | 3 users, 100k docs, 5GB assets | Upgrade: $99/month (unlimited) |
| **Vercel** | Unlimited bandwidth, 100GB/month | Commercial: $20/month |
| **Algolia** | 10k searches/month | Growth: $99/month |
| **ConvertKit** | 1000 subscribers | Creator: $29/month |

**Total Cost:**
- **Year 1 (free tier):** $0
- **Year 2+ (if exceeding limits):** $50-150/month

**WordPress Hosting Comparison:** $20-100/month + maintenance time

---

## Risk Assessment

### Technical Risks
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **Sanity rate limits exceeded** | Low | Medium | Monitor usage, implement caching |
| **Build times too long** | Low | Low | Use ISR instead of full rebuilds |
| **Image bandwidth costs** | Low | Medium | Use Sanity CDN, optimize images |
| **Search performance issues** | Medium | Medium | Use Algolia instead of client-side |
| **Missing WordPress features** | High | Medium | Prioritize features, iterate |

### Business Risks
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **User adoption resistance** | Low | High | Train admins, document extensively |
| **Content migration data loss** | Low | High | Backup everything, test thoroughly |
| **SEO ranking drop** | Medium | High | Proper redirects, maintain URLs |
| **Vendor lock-in (Sanity)** | Low | Medium | Content is portable via API |

---

## Success Metrics

### Phase 1 (Launch)
- ✅ All WordPress posts migrated successfully
- ✅ Zero broken links or images
- ✅ Categories and tags working
- ✅ Search functionality operational
- ✅ Admin can create/edit/publish posts

### Phase 2 (3 months post-launch)
- 🎯 Page load time < 1 second (LCP)
- 🎯 90+ Lighthouse score
- 🎯 Zero security vulnerabilities
- 🎯 99.9% uptime (Vercel)
- 🎯 50+ newsletter subscribers

### Phase 3 (6 months post-launch)
- 🎯 100+ posts published
- 🎯 Search used by 20%+ visitors
- 🎯 Average 2.5+ pages per session
- 🎯 <40% bounce rate on posts
- 🎯 Authors comfortable with Sanity Studio

---

## Maintenance & Support Plan

### Ongoing Tasks (Monthly)
- [ ] Review Sanity usage metrics
- [ ] Update dependencies (npm update)
- [ ] Check Vercel build logs for errors
- [ ] Review analytics for issues
- [ ] Backup content (Sanity auto-backups)

### Quarterly Tasks
- [ ] Security audit of dependencies
- [ ] Performance optimization review
- [ ] User feedback collection
- [ ] Feature prioritization review

### Yearly Tasks
- [ ] Major version upgrades (Next.js, Sanity)
- [ ] Design refresh evaluation
- [ ] Cost optimization review

---

## Resources & Documentation

### Getting Started
- **Setup Guide:** See README.md
- **Sanity Docs:** https://www.sanity.io/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Docs:** https://vercel.com/docs

### Admin Training
- **Content Editing:** `/studio` (Presentation Tool)
- **Publishing Workflow:** Draft → Preview → Publish
- **Image Management:** Unsplash integration or upload
- **Settings Management:** Settings singleton in Studio

### Development Resources
- **GROQ Playground:** `/studio/vision`
- **Component Library:** Tailwind CSS classes
- **Type Definitions:** See `tsconfig.json` paths

---

## Next Immediate Steps

### 🚀 To Get Started RIGHT NOW:

1. **Environment Setup (30 minutes)**
   ```bash
   cp .env.local.example .env.local
   npm run setup  # Follow prompts
   npm install
   npm run dev
   ```
   - Visit http://localhost:3000 (blog)
   - Visit http://localhost:3000/studio (admin)

2. **Create First Content (15 minutes)**
   - Add a Settings document (site title, description)
   - Create an Author (your profile)
   - Create a test Post
   - Publish and view on home page

3. **Verify Features (20 minutes)**
   - Test Draft Mode preview
   - Upload an image
   - Try Unsplash integration
   - Test responsive design

4. **Answer Open Questions** (See section above)
   - Decide on comment system
   - Choose search provider
   - Select newsletter tool
   - Determine migration timeline

5. **Prioritize Phases**
   - Review Phase 1-5 tasks
   - Decide which features are must-haves
   - Set realistic timeline
   - Assign tasks (if team)

### 📧 Questions to Discuss:
- Do you have access to WordPress export files?
- What's your target launch date?
- How many authors/editors will use the system?
- Do you need help with any specific technical decisions?

---

## Conclusion

**Current Assessment:**  
This project is in a **strong foundation state** with modern architecture and excellent developer experience. The core blogging functionality is production-ready, but several WordPress-parity features are needed for a complete replacement.

**Recommended Path Forward:**  
1. Complete Phase 1 (Categories, Tags, Search, Pagination) - **Critical**
2. Migrate WordPress content - **Critical**
3. Implement Phase 2-3 features based on prioritization - **Important**
4. Launch with Phase 4 hardening - **Important**
5. Iterate on Phase 5 theming as time permits - **Nice to have**

**Estimated Timeline:**  
- Minimal viable replacement: 2 weeks (Phase 1 + migration)
- Full feature parity: 4-6 weeks (Phase 1-4)
- Polished custom experience: 6-8 weeks (Phase 1-5)

**Key Advantages Over WordPress:**
- ✅ Zero maintenance burden
- ✅ Perfect Lighthouse scores
- ✅ Modern editing experience
- ✅ Real-time collaboration
- ✅ Version history built-in
- ✅ Free hosting (within limits)

This is a **solid investment** that will pay dividends in performance, reliability, and developer happiness. The path forward is clear, and the foundation is excellent. 🚀
