# Deployment Guide: GitHub + Vercel

This guide will walk you through committing your code to GitHub and deploying to Vercel.

## Step 1: Initialize Git Repository

If you haven't already initialized git, run:

```bash
git init
```

## Step 2: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Name your repository (e.g., `codecademy-landing`)
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **"Create repository"**

## Step 3: Commit and Push to GitHub

### Add all files to git:

```bash
git add .
```

### Commit your changes:

```bash
git commit -m "Initial commit: Codecademy-inspired landing page"
```

### Connect to GitHub and push:

```bash
# Add your GitHub repository as remote (replace USERNAME and REPO-NAME)
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Note:** If you're using SSH instead of HTTPS:
```bash
git remote add origin git@github.com:USERNAME/REPO-NAME.git
```

## Step 4: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Sign up/Login to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub (recommended for easy integration)

2. **Import Your Project:**
   - Click **"Add New..."** → **"Project"**
   - Find your repository in the list
   - Click **"Import"**

3. **Configure Project:**
   - **Framework Preset:** Create React App (auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `build` (default)
   - **Install Command:** `npm install` (default)

4. **Environment Variables (if needed):**
   - Add any environment variables in the settings
   - For this project, you can leave it as is

5. **Deploy:**
   - Click **"Deploy"**
   - Wait for the build to complete (usually 1-2 minutes)
   - Your site will be live at `https://your-project-name.vercel.app`

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Link to existing project or create new
   - Confirm settings
   - Deploy

4. **For Production Deployment:**
   ```bash
   vercel --prod
   ```

## Step 5: Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- ✅ Deploy every push to `main` branch (production)
- ✅ Create preview deployments for pull requests
- ✅ Rebuild on every commit

## Step 6: Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Click **"Domains"**
3. Add your custom domain
4. Follow DNS configuration instructions

## Troubleshooting

### Build Fails on Vercel

**Common issues:**
- Missing dependencies: Make sure all dependencies are in `package.json`
- Build errors: Check build logs in Vercel dashboard
- Environment variables: Add them in Vercel project settings

### Fix Build Issues:

```bash
# Test build locally first
npm run build

# If it works locally, the issue might be environment-specific
```

### Update Deployment:

Simply push new changes to GitHub:
```bash
git add .
git commit -m "Update: description of changes"
git push
```

Vercel will automatically redeploy!

## Quick Reference Commands

```bash
# Initialize git
git init

# Add files
git add .

# Commit
git commit -m "Your commit message"

# Add remote (first time only)
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# Push to GitHub
git push -u origin main

# Future updates
git add .
git commit -m "Update message"
git push
```

## Vercel Dashboard Features

- **Analytics:** View traffic and performance
- **Logs:** Check build and runtime logs
- **Settings:** Configure environment variables, domains, etc.
- **Deployments:** View all deployment history

---

**Need Help?**
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Documentation](https://docs.github.com)

