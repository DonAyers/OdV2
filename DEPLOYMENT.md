# Deployment Guide - OdV2 Blog

Complete guide for deploying the OdV2 blog to Vercel.

---

## Quick Deploy (5 minutes)

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select your GitHub repository (DonAyers/OdV2)
   - Click "Import"

3. **Configure Environment Variables**
   
   Add these three required variables:
   
   | Variable | Value | Where to Get It |
   |----------|-------|-----------------|
   | `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your project ID | https://manage.sanity.io (Project Settings) |
   | `NEXT_PUBLIC_SANITY_DATASET` | `production` | Default dataset name |
   | `SANITY_API_READ_TOKEN` | Your read token | https://manage.sanity.io (API tab → Create token) |

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your blog is live! 🎉

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Link to existing project or create new? → Create new
# - What's your project's name? → odv2-blog (or your choice)
# - In which directory is your code located? → ./
# - Want to modify settings? → No

# Set environment variables
vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID
vercel env add NEXT_PUBLIC_SANITY_DATASET
vercel env add SANITY_API_READ_TOKEN

# Deploy to production
vercel --prod
```

---

## Environment Variables Setup

### Required Variables

#### 1. NEXT_PUBLIC_SANITY_PROJECT_ID

**Where to find:**
1. Go to https://manage.sanity.io
2. Select your project
3. Go to "Settings" → "Project details"
4. Copy the Project ID

**Example:** `abc123xyz`

#### 2. NEXT_PUBLIC_SANITY_DATASET

**Default value:** `production`

**Where to find:**
1. https://manage.sanity.io
2. Select your project
3. Go to "Datasets" tab
4. Use the dataset name (usually "production")

#### 3. SANITY_API_READ_TOKEN

**How to create:**
1. Go to https://manage.sanity.io
2. Select your project
3. Click "API" tab
4. Click "+ Add API token"
5. Settings:
   - Name: "Production Read Token"
   - Permissions: **Viewer** (read-only)
6. Copy the token (starts with `sk...`)

**Security Note:** This token is read-only and safe to use in production.

---

## Vercel Configuration

The project includes `vercel.json` with:

- **Framework:** Next.js (auto-detected)
- **Build Command:** `next build`
- **Output Directory:** `.next` (automatic)
- **Node Version:** 20.x (Vercel default)
- **Security Headers:** X-Frame-Options, CSP, etc.

### Custom Configuration

Edit `vercel.json` to customize:

```json
{
  "regions": ["iad1"],           // Deploy region (iad1 = US East)
  "framework": "nextjs",         // Framework detection
  "buildCommand": "next build"   // Build command
}
```

---

## Deployment Workflow

### Automatic Deployments

Vercel automatically deploys:

- **Production:** Push to `main` branch
- **Preview:** Push to any other branch or open PR
- **Instant Rollback:** Revert to any previous deployment

### Manual Deployments

```bash
# Deploy current branch (preview)
vercel

# Deploy to production
vercel --prod

# Deploy specific branch
git checkout feature-branch
vercel
```

---

## Build Process

### What Happens During Build

1. **Install Dependencies:** `npm install`
2. **Build Next.js:** `next build`
3. **Generate Static Pages:** All routes pre-rendered
4. **Optimize Assets:** Images, CSS, JS minified
5. **Upload to CDN:** Distributed globally

### Build Time

- **Initial Build:** 2-4 minutes
- **Incremental Builds:** 1-2 minutes (with caching)

### Build Logs

View build logs in:
- Vercel Dashboard → Deployments → Click deployment → View logs
- Or via CLI: `vercel logs <deployment-url>`

---

## Troubleshooting

### Build Fails: "Cannot find module 'next'"

**Solution:**
```bash
# Delete lock file and reinstall
rm package-lock.json
npm install
git add package-lock.json
git commit -m "Update dependencies"
git push
```

### Build Fails: TypeScript Errors

**Solution:**
```bash
# Check errors locally
npm run build

# Fix TypeScript errors
# Then push changes
```

### Environment Variables Not Working

**Checklist:**
- [ ] Variables added in Vercel dashboard
- [ ] Variable names match exactly (case-sensitive)
- [ ] NEXT_PUBLIC_ prefix for client-side variables
- [ ] Redeployed after adding variables

**Fix:**
1. Go to Vercel Dashboard → Settings → Environment Variables
2. Verify all three variables exist
3. Click "Redeploy" on latest deployment

### 404 on Studio Route

**Issue:** `/studio` shows 404

**Solution:**
This is normal for first deployment. The studio is client-side rendered.

1. Visit: `https://your-site.vercel.app/studio`
2. Wait a few seconds for the studio to load
3. Login with your Sanity credentials

---

## Domain Setup

### Add Custom Domain

1. **Go to Vercel Dashboard**
   - Project Settings → Domains

2. **Add Domain**
   - Enter your domain: `example.com`
   - Click "Add"

3. **Configure DNS**
   
   Add these DNS records at your domain registrar:
   
   | Type | Name | Value |
   |------|------|-------|
   | A | @ | 76.76.19.19 |
   | CNAME | www | cname.vercel-dns.com |

4. **Verify**
   - Wait 5-60 minutes for DNS propagation
   - Vercel will automatically issue SSL certificate
   - Your site will be live at your custom domain

### Multiple Domains

You can add multiple domains:
- `example.com` (primary)
- `www.example.com` (redirect to primary)
- `blog.example.com` (subdomain)

---

## Performance Optimization

### Vercel Analytics

Already included via `@vercel/speed-insights` package.

View analytics:
- Vercel Dashboard → Analytics tab
- See real user metrics (RUM)
- Core Web Vitals tracking

### Edge Caching

Vercel automatically caches:
- Static pages (forever)
- API routes (configurable)
- Images (optimized on-demand)

### ISR (Incremental Static Regeneration)

Pages regenerate automatically:
- New post published → Page updates in ~60 seconds
- No full rebuild needed
- Always fast, always fresh

---

## CI/CD Integration

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_SANITY_PROJECT_ID: ${{ secrets.NEXT_PUBLIC_SANITY_PROJECT_ID }}
          NEXT_PUBLIC_SANITY_DATASET: ${{ secrets.NEXT_PUBLIC_SANITY_DATASET }}
          SANITY_API_READ_TOKEN: ${{ secrets.SANITY_API_READ_TOKEN }}
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## Monitoring & Maintenance

### Health Checks

- **Uptime:** Vercel has 99.99% uptime SLA
- **Monitoring:** Built-in monitoring dashboard
- **Alerts:** Set up via Vercel dashboard

### Logs

```bash
# View deployment logs
vercel logs

# View function logs (API routes)
vercel logs --follow
```

### Rollback

If something goes wrong:

1. Go to Vercel Dashboard → Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"
4. Instant rollback (no rebuild needed)

---

## Costs

### Vercel Pricing

**Hobby Plan (Free):**
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Preview deployments
- ✅ Web Analytics
- ❌ No custom domains on free plan (now paid feature)
- ❌ Commercial use not allowed

**Pro Plan ($20/month):**
- ✅ Everything in Hobby
- ✅ Custom domains
- ✅ Commercial use allowed
- ✅ Password protection
- ✅ Advanced analytics
- ✅ Priority support

**For this blog:** Free tier is sufficient for personal blogs

---

## Security Best Practices

### Environment Variables

✅ **DO:**
- Use Vercel's environment variables (encrypted at rest)
- Prefix client-side vars with `NEXT_PUBLIC_`
- Use different tokens for dev/staging/production

❌ **DON'T:**
- Commit `.env` files to git
- Share tokens publicly
- Use admin tokens when read-only is enough

### Headers

Security headers are configured in `vercel.json`:
- `X-Frame-Options: DENY` (prevent clickjacking)
- `X-Content-Type-Options: nosniff` (prevent MIME sniffing)
- `Referrer-Policy: strict-origin-when-cross-origin`

---

## Next Steps After Deployment

1. **Verify Deployment**
   - [ ] Visit your site URL
   - [ ] Check `/studio` loads
   - [ ] Create a test post
   - [ ] Verify post appears on homepage

2. **Configure Domain**
   - [ ] Add custom domain (if using)
   - [ ] Verify SSL certificate

3. **Set Up Monitoring**
   - [ ] Check Vercel Analytics
   - [ ] Set up uptime monitoring (optional)

4. **Content Migration**
   - [ ] Migrate posts from WordPress (if applicable)
   - [ ] Test all pages
   - [ ] Set up redirects for old URLs

---

## Useful Commands

```bash
# Vercel CLI
vercel                    # Deploy preview
vercel --prod            # Deploy to production
vercel env ls            # List environment variables
vercel env add KEY       # Add environment variable
vercel logs              # View logs
vercel domains ls        # List domains
vercel --help            # Show all commands

# Local Development
npm run dev              # Start dev server
npm run build            # Test build locally
npm run start            # Test production build locally

# Deployment Info
vercel inspect URL       # Get deployment info
vercel ls               # List deployments
```

---

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs/deployment
- **Sanity Docs:** https://www.sanity.io/docs/vercel-integration
- **Community:** Vercel Discord, GitHub Discussions

---

## Summary

**Deployment Checklist:**

- [x] Project pushed to GitHub
- [ ] Vercel account created
- [ ] Repository imported to Vercel
- [ ] Environment variables configured
- [ ] First deployment successful
- [ ] Studio accessible at `/studio`
- [ ] Custom domain configured (optional)
- [ ] Analytics enabled
- [ ] First post published

**Your blog is now live and automatically deploys on every push to main!** 🚀
