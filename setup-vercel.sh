#!/bin/bash

# Vercel Setup Script for OdV2 Blog
# This script helps you set up your Vercel deployment

set -e

echo "🚀 OdV2 Blog - Vercel Setup"
echo "================================"
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
else
    echo "✅ Vercel CLI already installed"
fi

echo ""
echo "🔐 Setting up Vercel project..."
echo ""
echo "You'll need:"
echo "  1. A Vercel account (https://vercel.com/signup)"
echo "  2. Your Sanity project credentials"
echo ""
read -p "Press Enter to continue..."

# Login to Vercel
echo ""
echo "📝 Logging into Vercel..."
vercel login

# Link project
echo ""
echo "🔗 Linking to Vercel project..."
vercel link

# Set environment variables
echo ""
echo "🔧 Setting environment variables..."
echo ""
echo "You'll need three environment variables:"
echo ""

# NEXT_PUBLIC_SANITY_PROJECT_ID
echo "1. NEXT_PUBLIC_SANITY_PROJECT_ID"
echo "   Find at: https://manage.sanity.io → Your Project → Settings"
read -p "   Enter value: " SANITY_PROJECT_ID
vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID production <<< "$SANITY_PROJECT_ID"
vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID preview <<< "$SANITY_PROJECT_ID"

echo ""

# NEXT_PUBLIC_SANITY_DATASET
echo "2. NEXT_PUBLIC_SANITY_DATASET"
echo "   Usually: production"
read -p "   Enter value (default: production): " SANITY_DATASET
SANITY_DATASET=${SANITY_DATASET:-production}
vercel env add NEXT_PUBLIC_SANITY_DATASET production <<< "$SANITY_DATASET"
vercel env add NEXT_PUBLIC_SANITY_DATASET preview <<< "$SANITY_DATASET"

echo ""

# SANITY_API_READ_TOKEN
echo "3. SANITY_API_READ_TOKEN"
echo "   Create at: https://manage.sanity.io → Your Project → API → Add API token"
echo "   Permissions: Viewer (read-only)"
read -p "   Enter value: " SANITY_TOKEN
vercel env add SANITY_API_READ_TOKEN production <<< "$SANITY_TOKEN"
vercel env add SANITY_API_READ_TOKEN preview <<< "$SANITY_TOKEN"

echo ""
echo "✅ Environment variables configured!"
echo ""

# Deploy
echo "🚀 Ready to deploy!"
echo ""
read -p "Deploy to production now? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Deploying to production..."
    vercel --prod
    echo ""
    echo "🎉 Deployment complete!"
else
    echo "Skipping deployment. You can deploy later with:"
    echo "  vercel --prod"
fi

echo ""
echo "✨ Setup complete!"
echo ""
echo "Next steps:"
echo "  1. Visit your Vercel dashboard to see your deployment"
echo "  2. Configure a custom domain (optional)"
echo "  3. Visit /studio on your deployed site to start creating content"
echo ""
echo "Useful commands:"
echo "  vercel          # Deploy preview"
echo "  vercel --prod   # Deploy to production"
echo "  vercel logs     # View logs"
echo "  vercel env ls   # List environment variables"
echo ""
