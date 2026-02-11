# Quick Start Guide - OdV2 Blog

**5-Minute Setup to Get Running**

## Prerequisites
- Node.js 18+ installed
- Sanity account (free - sign up during setup)
- Git installed

## Step 1: Environment Setup (2 minutes)

```bash
# Copy environment template
cp .env.local.example .env.local

# Run interactive setup (creates Sanity project)
npm run setup

# When prompted:
# - Select "Create new project" (or use existing)
# - Choose a project name (e.g., "my-blog")
# - Select "production" dataset
# - Say NO to "add config files" (already configured)
```

After setup, your `.env.local` should have:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID="abc123xyz"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_READ_TOKEN=""  # Add this next step
```

## Step 2: Create Read Token (1 minute)

1. Go to https://manage.sanity.io and select your project
2. Click **🔌 API** tab
3. Click **+ Add API token**
4. Name: "Development Read Token"
5. Permissions: **Viewer**
6. Copy token and paste into `.env.local`:
   ```bash
   SANITY_API_READ_TOKEN="sk_test_..."
   ```

## Step 3: Install & Run (2 minutes)

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit:
- **Blog:** http://localhost:3000
- **CMS Admin:** http://localhost:3000/studio

## Step 4: Create Your First Content (5 minutes)

1. **Open Studio:** http://localhost:3000/studio
2. **Login** with your Sanity account
3. **Create Settings** (required first):
   - Click "Structure" → "Settings"
   - Add site title: "My Awesome Blog"
   - Add description
   - Click **Publish**
4. **Create Author**:
   - Click "+ Create" → "Author"
   - Add your name and photo
   - Click **Publish**
5. **Create Post**:
   - Click "+ Create" → "Post"
   - Add title: "Hello World"
   - Click "Generate" next to Slug
   - Add content in the editor
   - Select author
   - Add cover image (try Unsplash!)
   - Click **Publish**
6. **View Post:** Go to http://localhost:3000

## Common Commands

```bash
# Development
npm run dev          # Start dev server (localhost:3000)
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Check code quality

# Sanity Setup
npm run setup        # Interactive Sanity project setup
```

## Project Structure

```
├── app/
│   ├── (blog)/              # Public blog pages
│   │   ├── page.tsx         # Home page
│   │   └── posts/[slug]/    # Individual post pages
│   └── (sanity)/
│       └── studio/          # CMS admin at /studio
├── sanity/
│   ├── lib/                 # Sanity client & queries
│   └── schemas/             # Content models (Post, Author, Settings)
├── .env.local               # Your secrets (DO NOT COMMIT)
└── ROADMAP.md              # Full project plan
```

## Troubleshooting

**"Cannot find module 'next'"**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Studio won't load**
- Check `.env.local` has all 3 variables
- Verify token has "Viewer" permissions
- Try restarting dev server

**No posts showing**
- Verify you clicked **Publish** (not just Save)
- Check you created a Settings document
- Wait 60 seconds for ISR cache to clear

**Images not loading**
- Check image URLs in browser console
- Verify Sanity project ID is correct in `.env.local`
- Try re-uploading image

## Next Steps

1. **Read ROADMAP.md** for full feature plan
2. **Customize Styling:** Edit `app/globals.css` or Tailwind config
3. **Add Features:** See Phase 1-5 in ROADMAP.md
4. **Deploy to Vercel:** 
   ```bash
   # Push to GitHub, then:
   # - Go to vercel.com
   # - Import your GitHub repo
   # - Add environment variables from .env.local
   # - Deploy!
   ```

## Resources

- **Sanity Docs:** https://www.sanity.io/docs
- **Next.js Docs:** https://nextjs.org/docs  
- **Tailwind Docs:** https://tailwindcss.com/docs
- **Full Roadmap:** See ROADMAP.md

## Need Help?

- Check ROADMAP.md "Open Questions" section
- Review Sanity docs for content modeling
- Ask in Sanity Slack: https://slack.sanity.io

---

**You're Ready to Blog! 🚀**

The foundation is solid. Now customize, add features from the roadmap, and make it yours!
