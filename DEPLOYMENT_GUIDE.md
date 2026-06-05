# 🚀 Step-by-Step Deployment Guide

**Portfolio:** Purva Thorat — Frontend Developer  
**Date:** June 5, 2026  
**Status:** Ready to Deploy

---

## 📌 Choose Your Deployment Platform

### Option 1: **Vercel** (RECOMMENDED) ⭐
- ✅ Best for React apps
- ✅ Automatic deployments from Git
- ✅ Free tier available
- ✅ Custom domain support
- ✅ Fastest setup (5 minutes)

### Option 2: **Netlify**
- ✅ Similar to Vercel
- ✅ Easy setup
- ✅ Free tier
- ✅ Good alternative

### Option 3: **GitHub Pages**
- ✅ Free hosting
- ✅ No account needed (if you have GitHub)
- ⚠️ Slightly more complex setup

---

# 🎯 DEPLOYMENT METHOD 1: VERCEL (RECOMMENDED)

## **Step 1: Create GitHub Repository** (5 minutes)

### 1.1 Create a GitHub Account (if you don't have one)
- Go to: https://github.com
- Click "Sign up"
- Enter email, create password
- Verify email
- Complete setup

### 1.2 Initialize Git in Your Project
Open Terminal/PowerShell and run:

```bash
cd c:\Users\DELL\Downloads\portfolio-template-main\portfolio-template-main
```

```bash
git init
```

Output should show:
```
Initialized empty Git repository in C:\Users\DELL\Downloads\...
```

### 1.3 Add All Files to Git
```bash
git add .
```

### 1.4 Create First Commit
```bash
git commit -m "Initial commit: Purva Thorat portfolio"
```

Output:
```
[master (root-commit) abc1234] Initial commit: Purva Thorat portfolio
 XX files changed, XX insertions(+)
```

### 1.5 Create Repository on GitHub
1. Go to: https://github.com/new
2. **Repository name:** `purva-portfolio` (or any name)
3. **Description:** `My personal portfolio - Frontend Developer`
4. **Visibility:** Public
5. Click "Create repository"

### 1.6 Connect Local to GitHub
Copy the commands from GitHub (they look like this):

```bash
git branch -M main
```

```bash
git remote add origin https://github.com/YOUR_USERNAME/purva-portfolio.git
```

Replace `YOUR_USERNAME` with your actual GitHub username.

```bash
git push -u origin main
```

You'll be asked for authentication. Click the link provided or use:
- **Username:** Your GitHub username
- **Password:** Create a Personal Access Token at https://github.com/settings/tokens

✅ Your code is now on GitHub!

---

## **Step 2: Deploy to Vercel** (5 minutes)

### 2.1 Go to Vercel
- Open: https://vercel.com
- Click "Sign Up"
- Click "Continue with GitHub"
- Authorize Vercel to access your GitHub

### 2.2 Import Your Project
1. Click "New Project"
2. Click "Import Git Repository"
3. Paste your repository URL:
   ```
   https://github.com/YOUR_USERNAME/purva-portfolio
   ```
4. Click "Continue"

### 2.3 Configure Project
**Project Name:** `purva-portfolio` (auto-filled)

**Framework Preset:** Select `Vite` if not auto-selected

**Root Directory:** Leave as `./` (default)

**Environment Variables:** Leave empty for now (optional)

Click "Deploy"

### 2.4 Wait for Deployment
Vercel will:
1. Build your project (2-3 minutes)
2. Show deployment progress
3. Give you a live URL when done

✅ Your portfolio is LIVE! 🎉

---

## **Step 3: Get Your Live URL**

After deployment completes, you'll see:

```
Domains
purva-portfolio-abc123.vercel.app
```

This is your live portfolio URL! Share it with others.

---

## **Step 4: Set Custom Domain (Optional)**

### 4.1 Purchase a Domain
- Go to: GoDaddy, Namecheap, or Google Domains
- Search for domains like:
  - `purvathorat.com`
  - `purva-dev.com`
  - `purva.dev`
- Buy your preferred domain (~$10-15/year)

### 4.2 Connect to Vercel
1. Go to your Vercel project
2. Click "Settings"
3. Click "Domains"
4. Click "Add Domain"
5. Enter your domain name
6. Follow instructions to update DNS

✅ Your portfolio now has a custom domain!

---

---

# 🎯 DEPLOYMENT METHOD 2: NETLIFY

## **Step 1: Push to GitHub** (Same as above)

Follow Steps 1.1 - 1.6 from Vercel method above.

---

## **Step 2: Deploy to Netlify**

### 2.1 Go to Netlify
- Open: https://netlify.com
- Click "Sign up"
- Click "GitHub"
- Authorize Netlify

### 2.2 New Site from Git
1. Click "New site from Git"
2. Select "GitHub"
3. Search for `purva-portfolio` repository
4. Click it

### 2.3 Build Settings
**Branch to deploy:** `main`

**Build command:** `npm run build`

**Publish directory:** `dist`

Click "Deploy site"

### 2.4 Wait & Get URL
Netlify will build and deploy. Once done, you get a URL like:
```
purva-portfolio-abc123.netlify.app
```

---

---

# 🎯 DEPLOYMENT METHOD 3: GITHUB PAGES (FREE)

## **Step 1: Push to GitHub** (Same as above)

Follow Steps 1.1 - 1.6 from Vercel method.

---

## **Step 2: Configure GitHub Pages**

### 2.1 Go to Repository Settings
1. Open: https://github.com/YOUR_USERNAME/purva-portfolio
2. Click "Settings"
3. Scroll down to "Pages"

### 2.2 Enable Pages
1. **Source:** Select "Deploy from a branch"
2. **Branch:** Select `main`
3. **Folder:** Select `/ (root)`
4. Click "Save"

### 2.3 Update vite.config.ts
The build files go to a subdirectory, so update:

```bash
# Open file: vite.config.ts
```

Find this line:
```typescript
export default defineConfig({
  plugins: [react()],
})
```

Change it to:
```typescript
export default defineConfig({
  base: '/purva-portfolio/',
  plugins: [react()],
})
```

### 2.4 Rebuild and Push
```bash
npm run build
git add .
git commit -m "Configure for GitHub Pages"
git push
```

### 2.5 Get Your URL
GitHub Pages will build automatically. Your URL will be:
```
https://YOUR_USERNAME.github.io/purva-portfolio/
```

Wait 2-3 minutes for deployment to complete.

---

---

# ✅ VERIFICATION CHECKLIST

After deployment, verify everything works:

### Visual Check
- [ ] Portfolio loads without errors
- [ ] All sections visible (About, Projects, Education, etc.)
- [ ] Images display correctly
- [ ] Dark mode toggle works
- [ ] Navigation works on all pages

### Functionality Check
- [ ] "Resume" button downloads PDF
- [ ] Contact page links work:
  - [ ] "Send Email" opens email
  - [ ] "View Profile" opens GitHub
  - [ ] "Connect" opens LinkedIn
- [ ] Project "Visit" buttons work
- [ ] Project "Code" buttons work
- [ ] Certificate PDFs can be viewed

### Responsive Check (on mobile)
- [ ] Hamburger menu appears on mobile
- [ ] Text is readable
- [ ] Buttons are clickable (44px touch targets)
- [ ] No horizontal scrolling

### Performance Check
- [ ] Page loads quickly (< 2 seconds)
- [ ] Animations are smooth
- [ ] No console errors

---

---

# 🎯 MOST COMMON ISSUES & FIXES

### ❌ Problem: Build fails with errors
**Solution:**
```bash
# Clear cache and rebuild
rm -r node_modules dist
npm install
npm run build
```

### ❌ Problem: Images not showing
**Solution:**
- Check image paths are correct
- Ensure images are in `src/assets/`
- Rebuild and redeploy

### ❌ Problem: Dark mode not working
**Solution:**
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+F5)
- Try in incognito mode

### ❌ Problem: Contact links not working
**Solution:**
- Check `.env` file has correct URLs
- Verify `VITE_GITHUB_URL` and `VITE_LINKEDIN_URL`
- Rebuild project

### ❌ Problem: Domain not connecting
**Solution:**
- Wait 24-48 hours for DNS to propagate
- Check DNS records are correct
- Contact support if issues persist

---

---

# 📊 COMPARISON TABLE

| Platform | Cost | Setup Time | Domain | Git Integration | Recommendation |
|----------|------|-----------|--------|-----------------|-----------------|
| **Vercel** | Free | 5 min | ✅ Yes | ✅ Built-in | ⭐ BEST |
| **Netlify** | Free | 5 min | ✅ Yes | ✅ Built-in | ✅ Good |
| **GitHub Pages** | Free | 10 min | ✅ Yes | ✅ Built-in | ✅ Good |

---

---

# 🎯 QUICK CHECKLIST FOR YOUR DEPLOYMENT

### Before Deploying:
- [ ] Check build has no errors: `npm run build`
- [ ] Test locally: `npm run dev`
- [ ] Verify all links work
- [ ] Test on mobile responsiveness
- [ ] Check dark mode works
- [ ] Verify certificates display

### GitHub Setup (All Methods):
- [ ] Git initialized
- [ ] All files committed
- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub

### Choose Platform & Deploy:
- [ ] **Vercel**: Connect GitHub → Deploy (Recommended)
- [ ] **Netlify**: Connect GitHub → Deploy
- [ ] **GitHub Pages**: Enable Pages → Configure

### After Deployment:
- [ ] Get your live URL
- [ ] Test all functionality
- [ ] Share with network
- [ ] (Optional) Set up custom domain

---

---

# 🚀 YOUR NEXT STEPS (IN ORDER)

## **Right Now (2 minutes):**
1. Open PowerShell/Terminal
2. Navigate to project folder
3. Run: `npm run build`
4. Wait for build to complete ✅

## **Next 10 minutes:**
1. Create GitHub account (if needed)
2. Initialize git and push code to GitHub
3. Create GitHub repository and connect

## **Next 10 minutes:**
1. Sign up for Vercel with GitHub
2. Import repository
3. Click Deploy
4. Wait 2-3 minutes for build

## **Finally (5 minutes):**
1. Get your live URL
2. Test all features work
3. Share with network 🎉

---

---

# 📞 SUPPORT LINKS

- **Vercel Documentation:** https://vercel.com/docs
- **Netlify Documentation:** https://docs.netlify.com
- **GitHub Pages Guide:** https://pages.github.com
- **Git Documentation:** https://git-scm.com/doc

---

---

# 🎉 YOU'RE READY!

Your portfolio is complete, optimized, and ready for the world to see!

**Quick Command Reference:**
```bash
# Test locally
npm run dev

# Build for production
npm run build

# Deploy (after GitHub setup)
vercel deploy --prod    # For Vercel
netlify deploy --prod   # For Netlify
```

---

**Let's deploy and get your portfolio live! 🚀**

*Last Updated: June 5, 2026*
