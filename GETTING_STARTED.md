# Getting Started with OdV2 Blog

**What You Need to Get Cracking on This Project**

This is your complete checklist to go from zero to running blog in ~15 minutes.

---

## ✅ Pre-flight Checklist

Before you start, make sure you have:

- [ ] **Node.js 18+** installed (check: `node --version`)
- [ ] **Git** installed (you probably have this if you cloned the repo)
- [ ] **Text editor** (VS Code, Cursor, etc.)
- [ ] **Sanity account** (free - you'll create during setup if needed)
- [ ] **10-15 minutes** of focused time

**Current Status:** ✅ Node.js v24.13.0 detected - You're good to go!

---

## 🚀 Quick Start (3 Steps)

### Step 1: Environment Setup (3 minutes)

```bash
# Navigate to project directory
cd /home/runner/work/OdV2/OdV2

# Copy environment template
cp .env.local.example .env.local

# Install dependencies (this takes ~2 minutes)
npm install

# Run Sanity setup (interactive)
npm run setup
```

**During `npm run setup`:**
- Login with Google/GitHub or create Sanity account
- **Select "Create new project"** (or choose existing if you have one)
- Project name: Something like "odv2-blog" or "my-blog"
- Dataset: **"production"** (recommended)
- When asked "add config files?": **Say NO** (already configured)

**After setup completes:**
Your `.env.local` file will be updated with:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID="abc123xyz"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_READ_TOKEN=""  # ⚠️ Still empty - fix in Step 2
```

### Step 2: Create API Token (2 minutes)

You need a read token for draft mode / preview to work:

1. Go to **https://manage.sanity.io**
2. Select your project (the one you just created)
3. Click **🔌 API** tab
4. Click **+ Add API token**
5. Configure:
   - Name: `Development Read Token`
   - Permissions: **Viewer** ⚠️ (NOT Editor or Admin)
6. Click **Save**
7. **Copy the token** (starts with `sk...`)
8. Paste into `.env.local`:
   ```bash
   SANITY_API_READ_TOKEN="sk_test_your_token_here"
   ```

### Step 3: Launch! (1 minute)

```bash
# Start the development server
npm run dev
```

**You should see:**
```
▲ Next.js 14.x.x
- Local:        http://localhost:3000
- Ready in 2.5s
```

**Open in browser:**
- 🌐 **Blog:** http://localhost:3000
- ⚙️ **CMS Admin:** http://localhost:3000/studio

---

## 📝 First Content Creation (5 minutes)

### 1. Open Sanity Studio
Go to: http://localhost:3000/studio

You'll be prompted to login with your Sanity account (same one from setup).

### 2. Create Settings (Required First!)
The blog won't work without this:

1. Click **"Structure"** at the top center
2. Click **"Settings"** in the left sidebar
3. Fill in:
   - **Title:** "My Awesome Blog" (or whatever you want)
   - **Description:** "A modern blog built with Next.js and Sanity"
   - **Footer Text:** "© 2026 My Blog. All rights reserved."
4. Click **Publish** (green button, top right)

### 3. Create Your Author Profile

1. Click **"+ Create"** (top left)
2. Select **"Author"**
3. Fill in:
   - **Name:** Your name
   - **Picture:** Upload a photo or click "Unsplash" for free stock image
4. Click **Publish**

### 4. Create Your First Post

1. Click **"+ Create"** → **"Post"**
2. Fill in:
   - **Title:** "Hello World - My First Post"
   - **Slug:** Click "Generate" button next to slug field
   - **Author:** Select the author you just created
   - **Date:** Today's date (auto-filled)
   - **Excerpt:** "This is my first post on my new blog!"
   - **Cover Image:** Upload or select from Unsplash
   - **Content:** Write some content (try the rich text editor features!)
3. Click **Publish**

### 5. View Your Blog!

Go to: http://localhost:3000

You should see:
- Your blog title at the top
- Your first post with cover image
- Clicking the post shows the full content

**✨ Congratulations! Your blog is running!**

---

## 🎯 What to Do Next?

Now that you're running, here's your roadmap:

### Immediate Next Steps (Pick One):

**Option A: Start Adding Features** (Recommended if you want to build)
- Read **ROADMAP.md** to see the full feature plan
- Start with **Phase 0** (optional optimization) or **Phase 1** (categories/tags/search)
- Each phase has detailed tasks and success criteria

**Option B: Customize Design** (Recommended if you want to personalize)
- Edit `app/globals.css` for global styles
- Modify `tailwind.config.ts` for colors/fonts
- Customize components in `app/(blog)/`

**Option C: Learn the Stack** (Recommended if you're new to Next.js/Sanity)
- Read **TECHNICAL_ASSESSMENT.md** for architecture deep-dive
- Explore **FRAMEWORK_ALTERNATIVES.md** if bundle size concerns you
- Check out the official docs (links below)

### Development Workflow

```bash
# Daily development
npm run dev              # Start dev server (keeps running)

# Before deploying
npm run lint             # Check code quality
npm run build            # Test production build

# If you need to reset Sanity config
npm run setup            # Re-run interactive setup
```

---

## 📚 Key Documentation

Your next reads, in order of importance:

1. **ROADMAP.md** - Complete implementation plan with phases
   - Phase 0: Bundle optimization (optional)
   - Phase 1: Categories, tags, search (HIGH priority)
   - Phase 2-3: Comments, newsletter, engagement
   - Phase 4-5: SEO, theming
   
2. **TECHNICAL_ASSESSMENT.md** - Deep technical analysis
   - Architecture evaluation (Grade: A)
   - Security review (Grade: A-)
   - Performance analysis (Grade: A+)
   - Code quality review
   
3. **FRAMEWORK_ALTERNATIVES.md** - Next.js vs lighter options
   - Bundle size comparison (Next.js vs Astro/SvelteKit/Preact)
   - Trade-off analysis
   - Optimization strategies

4. **QUICKSTART.md** - Reference for setup commands

---

## 🗂️ Project Structure (What's Where)

```
OdV2/
├── app/                          # Next.js App Router
│   ├── (blog)/                   # Public blog routes
│   │   ├── page.tsx              # Home page (/)
│   │   ├── posts/[slug]/         # Individual posts (/posts/hello-world)
│   │   ├── layout.tsx            # Blog layout wrapper
│   │   ├── cover-image.tsx       # Cover image component
│   │   ├── more-stories.tsx      # Related posts grid
│   │   └── portable-text.tsx     # Rich text renderer
│   ├── (sanity)/                 # Sanity Studio routes
│   │   └── studio/[[...tool]]/   # CMS at /studio
│   ├── api/draft/                # Draft mode endpoint
│   ├── globals.css               # Global styles
│   └── favicon.ico               # Site icon
│
├── sanity/                       # Sanity CMS configuration
│   ├── lib/
│   │   ├── api.ts                # Sanity config (project ID, dataset)
│   │   ├── client.ts             # Sanity client setup
│   │   ├── queries.ts            # GROQ queries (data fetching)
│   │   └── fetch.ts              # Server-side fetch wrapper
│   ├── schemas/
│   │   ├── documents/
│   │   │   ├── post.ts           # Post content model
│   │   │   └── author.ts         # Author content model
│   │   └── singletons/
│   │       └── settings.tsx      # Site settings model
│   └── plugins/                  # Sanity Studio plugins
│
├── .env.local                    # Your secrets (DO NOT COMMIT)
├── .env.local.example            # Template for env vars
├── package.json                  # Dependencies & scripts
├── next.config.js                # Next.js configuration
├── sanity.config.ts              # Sanity Studio configuration
├── tailwind.config.ts            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

**Key Files to Know:**
- **Edit content models:** `sanity/schemas/`
- **Edit blog components:** `app/(blog)/`
- **Edit styles:** `app/globals.css` or `tailwind.config.ts`
- **Add features:** Follow ROADMAP.md phases

---

## 🛠️ Common Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Build for production (test before deploy)
npm run start        # Start production server (after build)

# Code Quality
npm run lint         # Run ESLint (check for issues)

# Sanity
npm run setup        # Interactive Sanity project setup/reconfigure
```

---

## ❓ Troubleshooting

### "Cannot find module 'next'" or dependency errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Sanity Studio won't load (shows error)
**Check:**
1. `.env.local` exists and has all 3 variables filled in
2. Token has "Viewer" permissions (not "Editor" or "Admin")
3. Project ID matches the one at manage.sanity.io
4. Try: Restart dev server (`Ctrl+C`, then `npm run dev`)

### No posts showing on homepage
**Fixes:**
1. Make sure you clicked **Publish** in Studio (not just Save)
2. Create a **Settings** document (required!)
3. Wait 60 seconds for ISR cache to clear
4. Check browser console for errors (`F12` → Console tab)

### Images not loading
**Check:**
1. Browser console for 404 errors
2. Sanity project ID in `.env.local` is correct
3. Images were published (not just saved as draft)
4. Try re-uploading the image in Studio

### Port 3000 already in use
```bash
# Kill the process on port 3000
npx kill-port 3000

# Or use a different port
PORT=3001 npm run dev
```

---

## 🚢 Ready to Deploy?

Once you've tested locally and created some content:

### Deploy to Vercel (Recommended - 5 minutes)

1. **Push to GitHub** (if you haven't already)
   ```bash
   git add .
   git commit -m "Initial blog setup"
   git push origin main
   ```

2. **Go to Vercel**
   - Visit https://vercel.com
   - Click "Import Project"
   - Connect your GitHub account
   - Select your OdV2 repository

3. **Configure Environment Variables**
   In Vercel dashboard, add these from your `.env.local`:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_READ_TOKEN`

4. **Deploy!**
   - Click "Deploy"
   - Wait ~2 minutes
   - Your blog is live! 🎉

**Custom Domain:** Configure in Vercel settings → Domains

---

## 🎓 Learning Resources

**Official Documentation:**
- Next.js: https://nextjs.org/docs
- Sanity: https://www.sanity.io/docs
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs

**Sanity-Specific:**
- GROQ Query Language: https://www.sanity.io/docs/groq
- Portable Text: https://www.sanity.io/docs/presenting-block-text
- Sanity Studio: https://www.sanity.io/docs/sanity-studio

**Community:**
- Sanity Slack: https://slack.sanity.io
- Next.js Discussions: https://github.com/vercel/next.js/discussions

---

## 🎯 Decision Points (From ROADMAP.md)

Before you start building features, consider these choices:

### High Priority Decisions:

1. **Comment System** - Which provider?
   - **Giscus** (Recommended) - Free, GitHub Discussions-based
   - Disqus - Popular, free tier
   - Utterances - GitHub Issues-based, lightweight

2. **Search Implementation** - How to handle search?
   - **Algolia** (Recommended for >100 posts) - 10k searches/month free
   - Client-side search - Good for <100 posts
   - Sanity's built-in search - Basic but sufficient

3. **Newsletter Integration** - Which email provider?
   - **ConvertKit** (Recommended) - 1000 subscribers free
   - Mailchimp - 500 subscribers free
   - Buttondown - 100 subscribers free

4. **Bundle Size** - Optimize or keep as-is?
   - Keep Next.js (~90KB) - Best Sanity integration
   - Optimize to ~60KB - Remove unused dependencies (2-4 hours)
   - Switch framework - Only if sub-50KB is critical (see FRAMEWORK_ALTERNATIVES.md)

---

## 📋 Next Actions Checklist

Now that you understand everything, here's your action plan:

### Today (Getting Running):
- [x] Read this document
- [ ] Run `npm install` (if not done)
- [ ] Run `npm run setup` (Sanity configuration)
- [ ] Create API token and add to `.env.local`
- [ ] Run `npm run dev` (start server)
- [ ] Create Settings document in Studio
- [ ] Create Author profile
- [ ] Create first Post
- [ ] Verify blog shows at http://localhost:3000

### This Week (Customization):
- [ ] Read ROADMAP.md (understand the full plan)
- [ ] Customize colors/fonts in `tailwind.config.ts`
- [ ] Edit site title/description in Studio Settings
- [ ] Create 3-5 test posts to see how it looks
- [ ] Decide on comment/search/newsletter providers

### Next Week (Feature Development):
- [ ] Choose a Phase from ROADMAP.md (recommend Phase 1)
- [ ] Implement categories & tags system (4-6 hours)
- [ ] Add search functionality (8-12 hours)
- [ ] Implement pagination UI (3-4 hours)

### Before Launch:
- [ ] Migrate WordPress content (if applicable)
- [ ] Test on mobile devices
- [ ] Run `npm run lint` and fix issues
- [ ] Test production build (`npm run build`)
- [ ] Deploy to Vercel
- [ ] Configure custom domain
- [ ] Set up analytics (optional)

---

## 💡 Pro Tips

1. **Use the Presentation Tool** - In Studio, click "Presentation" to edit and preview side-by-side
2. **Draft Mode** - Test unpublished content by clicking "Open preview" in Studio
3. **Keyboard Shortcuts** - In Studio, press `Cmd/Ctrl + K` for command palette
4. **Version History** - Click the clock icon in Studio to see content history
5. **Collaboration** - Invite team members in manage.sanity.io → Project → Members
6. **AI Assist** - Use the sparkles ✨ button to generate content summaries
7. **Unsplash Integration** - Click image field → "Select" → "Unsplash" for free stock photos

---

## ✅ Success Criteria

**You're ready to move forward when:**
- ✅ Blog loads at http://localhost:3000
- ✅ Studio loads at http://localhost:3000/studio
- ✅ You can create and publish posts
- ✅ Posts appear on the homepage
- ✅ Images load correctly
- ✅ You understand the project structure
- ✅ You've read ROADMAP.md and chosen your next phase

---

## 🆘 Still Stuck?

1. **Check troubleshooting section above** - Covers 90% of issues
2. **Read QUICKSTART.md** - Alternative quick start guide
3. **Review .env.local** - Most issues are misconfigured environment variables
4. **Check browser console** - Press F12 and look for errors
5. **Sanity Studio console** - If Studio has issues, check its console too
6. **GitHub Issues** - Search existing issues in the repo
7. **Sanity Community Slack** - https://slack.sanity.io (very helpful!)

---

**You're all set! 🚀 Time to start building your WordPress replacement.**

**First command to run:** `npm install && npm run setup`

Good luck, and happy blogging! 🎉
