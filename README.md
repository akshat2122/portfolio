# Akshat Sharma — Portfolio Website

Personal portfolio site built with React + Vite. Showcasing finance & business analysis projects.

🔗 **Live site**: *(add your Vercel URL here after deploying)*

---

## 🚀 Deploy to Vercel (FREE — takes 3 minutes)

### Step 1: Push to GitHub
1. Go to [github.com/new](https://github.com/new) and create a new repository called `portfolio`
2. Open your terminal and run:

```bash
cd akshat-portfolio
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account (free)
2. Click **"Add New Project"**
3. Import your `portfolio` repository
4. Vercel auto-detects Vite — just click **"Deploy"**
5. In ~60 seconds your site will be live at `https://portfolio-yourusername.vercel.app`

### Step 3: Custom domain (optional)
- In Vercel dashboard → Settings → Domains
- You can add a custom domain like `akshatsharma.com` (~$10/year from Namecheap or Google Domains)
- Or use the free `.vercel.app` URL

---

## 💻 Run Locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

## 🛠 Tech Stack
- React 18
- Vite
- Pure CSS (no frameworks)
- Google Fonts (Instrument Serif, DM Sans, JetBrains Mono)

## 📁 Structure
```
akshat-portfolio/
├── index.html          # HTML entry point with SEO meta tags
├── package.json        # Dependencies
├── vite.config.js      # Vite config
├── README.md           # This file
└── src/
    ├── main.jsx        # React entry point
    └── Portfolio.jsx   # Full portfolio component
```

## ✏️ Adding New Projects
Open `src/Portfolio.jsx` and add to the `PROJECTS` array:

```javascript
{
  id: 4,
  title: "Your New Project Title",
  category: "Finance",
  tags: ["Tag1", "Tag2"],
  description: "What the project is about...",
  highlights: ["Key point 1", "Key point 2"],
  metrics: { metric1: "value1", metric2: "value2" },
  status: "Completed",
  date: "Apr 2026",
  color: "#1B2A4A",
  accent: "#D4A843",
}
```

---

Built with ❤️ for Akshat Sharma's job search — Paris, 2026
