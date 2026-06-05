# Contact Links Fix Spec

## Task 1: Update socialLinks.ts with Hardcoded Fallbacks
Update src/config/socialLinks.ts to implement hardcoded fallback values for GitHub, LinkedIn, and Email URLs. Keep environment variable support for local development using nullish coalescing operator (??). This ensures links work on both local environment (with .env) and Vercel (without .env). 

Hardcoded values:
- GitHub URL: https://github.com/purvathorat38-web
- LinkedIn URL: https://www.linkedin.com/in/purva-thorat38?utm_source=share_via&utm_content=profile&utm_medium=member_android
- Email: purvathorat38@gmail.com

## Task 2: Build and Push Changes
Run npm run build to create production build, verify no errors, then run git add . && git commit -m "Fix: Add hardcoded fallbacks for social links to work on Vercel" && git push origin main to push changes to GitHub.

## Task 3: Verify Links Work End-to-End
Manually verify that GitHub, LinkedIn, and Email contact links work correctly by clicking each button in the Contact page. Test on both desktop and mobile viewports. Verify links open in new tabs with correct URLs and no console errors.
