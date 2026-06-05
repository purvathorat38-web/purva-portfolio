# ⚡ QUICK FIX: GitHub & LinkedIn Links Not Working

**Problem:** Buttons don't open links  
**Solution:** Set environment variables in Vercel (2 minutes)  
**Status:** Ready to fix now

---

## 🎯 The Issue

Your `.env` file has the correct URLs:
```
VITE_GITHUB_URL=https://github.com/purvathorat38-web
VITE_LINKEDIN_URL=https://www.linkedin.com/in/purva-thorat38?utm_source=share_via&utm_content=profile&utm_medium=member_android
VITE_EMAIL=purvathorat38@gmail.com
```

But Vercel doesn't know about them because:
- `.env` files are **not deployed** (security best practice)
- You must set variables in **Vercel dashboard** instead

---

## ✅ The Fix (2 MINUTES)

### **Step 1: Open Vercel Dashboard**
Go to: https://vercel.com/dashboard

### **Step 2: Select Your Project**
Click on `purva-portfolio` project

### **Step 3: Go to Settings**
Click **"Settings"** tab at the top

### **Step 4: Click Environment Variables**
In the left sidebar, click **"Environment Variables"**

### **Step 5: Add Three Variables**

**Add this ONE by ONE:**

#### 1️⃣ First Variable
- **Name:** `VITE_GITHUB_URL`
- **Value:** `https://github.com/purvathorat38-web`
- Click **"Add"**

#### 2️⃣ Second Variable  
- **Name:** `VITE_LINKEDIN_URL`
- **Value:** `https://www.linkedin.com/in/purva-thorat38?utm_source=share_via&utm_content=profile&utm_medium=member_android`
- Click **"Add"**

#### 3️⃣ Third Variable
- **Name:** `VITE_EMAIL`
- **Value:** `purvathorat38@gmail.com`
- Click **"Add"**

### **Step 6: Redeploy**
1. Click **"Deployments"** tab
2. Find your latest deployment
3. Click **"⋯"** (three dots)
4. Click **"Redeploy"**
5. **Wait 2-3 minutes** ⏳

### **Step 7: Test**
1. Go to your live portfolio
2. Click **Contact** page
3. Click **"View Profile"** → Opens GitHub ✅
4. Click **"Connect"** → Opens LinkedIn ✅

---

## 📸 Visual Instructions

### **In Vercel:**
```
Dashboard → purva-portfolio → Settings → Environment Variables

Then add:
┌─────────────────────────────────────────────┐
│ Name: VITE_GITHUB_URL                       │
│ Value: https://github.com/purvathorat38-web │
│ [Add]                                        │
├─────────────────────────────────────────────┤
│ Name: VITE_LINKEDIN_URL                     │
│ Value: https://www.linkedin.com/in/purva... │
│ [Add]                                        │
├─────────────────────────────────────────────┤
│ Name: VITE_EMAIL                            │
│ Value: purvathorat38@gmail.com              │
│ [Add]                                        │
└─────────────────────────────────────────────┘

Then go to Deployments → Redeploy
```

---

## 🎯 What Each Variable Does

| Variable | Purpose | Value |
|----------|---------|-------|
| `VITE_GITHUB_URL` | "View Profile" button link | Your GitHub URL |
| `VITE_LINKEDIN_URL` | "Connect" button link | Your LinkedIn URL |
| `VITE_EMAIL` | "Send Email" link | Your email address |

---

## ✅ Verification

After redeploy:
- [ ] Go to Contact page
- [ ] "View Profile" opens GitHub (new tab)
- [ ] "Connect" opens LinkedIn (new tab)
- [ ] "Send Email" opens email client

---

## ⏱️ Timeline

| Time | Action |
|------|--------|
| Now | Add 3 environment variables (1 min) |
| +1 min | Click Redeploy |
| +3 min | Build completes, live URL updates |
| +4 min | Test and confirm links work ✅ |

**Total: ~5 minutes**

---

## 🚀 That's It!

Your GitHub and LinkedIn links will now work perfectly!

**👉 Go to https://vercel.com/dashboard now and add these 3 variables!**

---

## ❓ Troubleshooting

### **Links still don't work?**
1. Did you add all 3 variables? (Check!)
2. Did you click "Redeploy"? (Check!)
3. Did you wait for new build to complete? (Check!)
4. Hard refresh page: `Ctrl + Shift + R`
5. Try in incognito mode

### **Build failed?**
1. Check variable values for typos
2. Variable names are case-sensitive!
3. Check no extra spaces in values

### **Still not working?**
1. Go to Deployments
2. Check latest deployment status
3. Look for error messages

---

**Done!** Your portfolio contact links are now LIVE! 🎉
