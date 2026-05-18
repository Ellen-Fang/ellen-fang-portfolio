# Ellen Fang's Portfolio Website

A professional, clean, and modern portfolio website built with React, Vite, and Tailwind CSS.

## 📋 Features

- ✨ Clean and professional design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast loading with Vite
- 🎨 Styled with Tailwind CSS
- 🔗 Smooth navigation with scroll-to-section
- 📦 Easy to customize with data-driven components

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone or extract the project
cd your-portfolio-path

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:5173 in your browser to see the site.

## 🛠️ Project Structure

```
├── index.html              # HTML entry point
├── package.json            # Project dependencies
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Main app component
│   ├── index.css           # Global styles
│   └── components/
│       ├── Navbar.jsx      # Navigation bar
│       ├── Hero.jsx        # Hero section
│       ├── About.jsx       # About section
│       ├── Projects.jsx    # Projects section
│       ├── Skills.jsx      # Skills section
│       ├── Resume.jsx      # Resume section
│       ├── Contact.jsx     # Contact section
│       └── Footer.jsx      # Footer
└── .gitignore             # Git ignore file
```

## 📝 Customization Guide

### Update Your Information

**In `src/components/Hero.jsx`:**
- Change "Ellen Fang" to your name
- Update the tagline

**In `src/components/About.jsx`:**
- Update your bio and description
- Modify the highlighted skills

**In `src/components/Projects.jsx`:**
- Edit the `projects` array to add/remove/modify projects
- Each project has: `title`, `description`, `technologies`, `github`, `demo`

**In `src/components/Skills.jsx`:**
- Modify the `skillCategories` array to update your skills

**In `src/components/Resume.jsx`:**
- Update education and experience sections
- Add your resume file and update the download link

**In `src/components/Contact.jsx`:**
- Replace placeholder email with your actual email
- Update LinkedIn profile URL
- Verify GitHub URL is correct

**In `src/components/Footer.jsx`:**
- Update contact links and information

### Add Your Resume PDF

1. Place your resume file in the `public/` folder (create it if it doesn't exist)
2. Name it something like `resume.pdf`
3. Update the download link in `src/components/Resume.jsx`:
   ```jsx
   href="/resume.pdf"
   ```

## 🎨 Styling

The site uses Tailwind CSS for styling. Key color scheme:
- Primary: Blue (#3b82f6)
- Text: Gray tones
- Backgrounds: White and light gray

To customize colors, edit `tailwind.config.js`:

```javascript
colors: {
  primary: "#3b82f6",  // Change primary color
  secondary: "#6b7280",
  accent: "#your-color",
}
```

## 🚢 Deployment

### Option 1: Deploy to Vercel (Recommended)

**Step 1: Prepare Your Project**
```bash
# Make sure everything is committed to git
git init
git add .
git commit -m "Initial commit"
```

**Step 2: Upload to GitHub**
1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

**Step 3: Deploy on Vercel**
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect it's a Vite project
5. Click "Deploy"
6. Your site will be live at `your-project.vercel.app`

**Auto-Deploy:** Any push to the `main` branch will automatically redeploy your site!

### Option 2: Deploy to GitHub Pages

**Step 1: Update vite.config.js**

Change the base URL to your repository name:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',  // Replace 'portfolio' with your repo name
})
```

**Step 2: Build and Deploy**

```bash
# Build for production
npm run build

# The dist folder is ready to deploy
```

**Step 3: Set Up GitHub Pages**

1. Push your code to GitHub (main branch)
2. Go to repository Settings → Pages
3. Under "Build and deployment":
   - Source: Select "Deploy from a branch"
   - Branch: Select "main"
   - Folder: Select "root"
4. Or push the `dist` folder with GitHub Actions

**Option A: Using GitHub Actions (Recommended)**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Then in repository Settings → Pages, set source to "gh-pages" branch.

**Option B: Manual Deploy**

```bash
# Build
npm run build

# Deploy dist folder to gh-pages branch using git
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

Then enable GitHub Pages in repository settings pointing to `gh-pages` branch.

## 📦 Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized files ready for deployment.

## 🔍 SEO & Meta Tags

Update `index.html` to improve SEO:
- Change the `<title>` tag
- Update the `description` meta tag
- Add Open Graph meta tags for social sharing

## 💡 Tips

- Keep project descriptions concise (2-3 sentences)
- Use meaningful project titles
- Add actual GitHub links for real projects
- Update resume frequently
- Test on mobile before deploying
- Use high-quality project images/thumbnails

## 📞 Questions?

Refer to official docs:
- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vercel Docs](https://vercel.com/docs)

Enjoy your new portfolio! 🎉
