// Social Links Configuration - uses environment variables with hardcoded fallbacks
// This ensures links work on both local development (with .env file) and Vercel production
export const socialLinks = {
  // Main social profiles
  github: import.meta.env.VITE_GITHUB_URL ?? 'https://github.com/purvathorat38-web',
  linkedin: import.meta.env.VITE_LINKEDIN_URL ?? 'https://www.linkedin.com/in/purva-thorat38?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  email: import.meta.env.VITE_EMAIL ?? 'purvathorat38@gmail.com',
  
  // GitHub repository URLs
  repositories: {
    projectOne: import.meta.env.VITE_GITHUB_PROJECT1_URL ?? 'https://purrrch.vercel.app',
    projectTwo: import.meta.env.VITE_GITHUB_PROJECT2_URL ?? 'https://crestfieldlawgroup.vercel.app',
    projectThree: import.meta.env.VITE_GITHUB_PROJECT3_URL ?? 'https://lando-norris-portfolio.vercel.app',
    projectFour: import.meta.env.VITE_GITHUB_PROJECT4_URL ?? 'https://github.com/purvathorat',
  },
  
  // Formatted display names (extracted from environment variables with fallbacks)
  display: {
    github: (import.meta.env.VITE_GITHUB_URL ?? 'https://github.com/purvathorat38-web').replace('https://', ''),
    linkedin: (import.meta.env.VITE_LINKEDIN_URL ?? 'https://www.linkedin.com/in/purva-thorat38?utm_source=share_via&utm_content=profile&utm_medium=member_android').replace('https://', ''),
    email: import.meta.env.VITE_EMAIL ?? 'purvathorat38@gmail.com',
  }
};

export default socialLinks;