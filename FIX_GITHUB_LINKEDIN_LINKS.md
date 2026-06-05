# 🔧 Fix GitHub & LinkedIn Links - Step-by-Step Guide

**Problem:** GitHub and LinkedIn buttons aren't opening links  
**Cause:** Environment variables not set in Vercel  
**Solution:** Add environment variables to Vercel dashboard

---

## 🚀 Step-by-Step Fix (5 Minutes)

### **Step 1: Go to Your Vercel Dashboard**

1. Open: https://vercel.com/dashboard
2. Click on your **`purva-portfolio`** project
3. You should see your live URL

---

### **Step 2: Open Project Settings**

1. Click the **"Settings"** tab at the top
2. Look for **"Environment Variables"** in the left sidebar
3. Click **"Environment Variables"**

---

### **Step 3: Add Environment Variables**

You need to add these 3 variables:

#### **Variable 1: GitHub URL**
1. **Name:** `VITE_GITHUB_URL`
2. **Value:** `https://github.com/purvathorat38-web`
3. Click "Add"

#### **Variable 2: LinkedIn URL**
1. **Name:** `VITE_LINKEDIN_URL`
2. **Value:** `https://www.linkedin.com/in/purva-thorat38?utm_source=share_via&utm_content=profile&utm_medium=member_android`
3. Click "Add"

#### **Variable 3: Email**
1. **Name:** `VITE_EMAIL`
2. **Value:** `purvathorat38@gmail.com`
3. Click "Add"

---

### **Step 4: Redeploy Your Project**

After adding all 3 variables:

1. Go back to your project page
2. Click the **"Deployments"** tab
3. Click the **3-dot menu** (⋯) on the latest deployment
4. Click **"Redeploy"**
5. Wait 2-3 minutes for the new build

---

### **Step 5: Test the Links**

After redeployment:

1. Go to your live portfolio URL
2. Click on **Contact** page
3. Test the buttons:
   - ✅ "View Profile" → Should open GitHub
   - ✅ "Connect" → Should open LinkedIn
   - ✅ "Send Email" → Should open email client

---

## 📸 Visual Guide

### **In Vercel Dashboard:**

```
Dashboard
  └─ purva-portfolio (project)
      ├─ Deployments tab ← See your live URL
      └─ Settings tab
          └─ Environment Variables
              ├─ VITE_GITHUB_URL
              ├─ VITE_LINKEDIN_URL
              └─ VITE_EMAIL
```

---

## 🎯 Exact Values to Use

**Copy and paste these exactly:**

### **GitHub URL:**
```
https://github.com/purvathorat38-web
```

### **LinkedIn URL:**
```
https://www.linkedin.com/in/purva-thorat38?utm_source=share_via&utm_content=profile&utm_medium=member_android
```

### **Email:**
```
purvathorat38@gmail.com
```

---

## ✅ After Redeploy

Your buttons will now work! 

**What happens when user clicks:**
- **"View Profile"** → Opens GitHub in new tab
- **"Connect"** → Opens LinkedIn in new tab  
- **"Send Email"** → Opens their email client

---

## 🎯 If Links Still Don't Work

**Option A: Check the Environment Variables**
1. Go to Vercel Settings → Environment Variables
2. Verify all 3 variables are there
3. Check for typos (names are case-sensitive!)

**Option B: Hard Refresh**
1. Go to your portfolio URL
2. Press `Ctrl + Shift + R` (hard refresh)
3. Clear browser cache
4. Try again

**Option C: Incognito Mode**
1. Open portfolio in incognito/private mode
2. Test if links work
3. If they work in incognito, clear browser cache

---

## 📋 Verification Checklist

- [ ] Went to Vercel dashboard
- [ ] Opened purva-portfolio project
- [ ] Clicked Settings → Environment Variables
- [ ] Added VITE_GITHUB_URL
- [ ] Added VITE_LINKEDIN_URL
- [ ] Added VITE_EMAIL
- [ ] Clicked "Redeploy" on latest deployment
- [ ] Waited 2-3 minutes for build
- [ ] Tested Contact page buttons
- [ ] Links now work ✅

---

## 🎉 That's It!

Your GitHub and LinkedIn links will now work perfectly!

**Time needed:** 5 minutes  
**Difficulty:** Very Easy  
**Result:** Working contact links ✅

---

## 📞 Quick Reference

**Environment Variables Needed:**
| Variable Name | Value |
|---|---|
| VITE_GITHUB_URL | `https://github.com/purvathorat38-web` |
| VITE_LINKEDIN_URL | `https://www.linkedin.com/in/purva-thorat38?utm_source=share_via&utm_content=profile&utm_medium=member_android` |
| VITE_EMAIL | `purvathorat38@gmail.com` |

---

**Go to https://vercel.com/dashboard and add these variables now!**

*After adding, redeploy and your links will work perfectly!* ✅
