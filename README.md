# Shriya Sanjay Yerane — Personal Portfolio Website

A stunning, production-ready personal portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**, crafted strictly from verified resume data and certified industry credentials.

---

## 🌟 Key Features

- **Futuristic Dark & Light Aesthetic**: Glassmorphism cards, ambient gradient glows, and refined slate accents with instant theme toggle (`localStorage` persistence).
- **Embedded Resume Experience**:
  - Native inline PDF viewer with desktop/mobile view switch (`Inline Viewer` vs `Rendered Image Preview`).
  - Fullscreen lightbox modal with ESC key and keyboard support.
  - One-click resume download with clean naming convention (`Shriya_Sanjay_Yerane_Resume.pdf`).
- **Dynamic Certificate Gallery**:
  - Automatically loads and displays all 9 industry credentials (Red Hat, Infosys Springboard, Deloitte & Forage).
  - High-resolution thumbnails generated from the certificates.
  - Interactive modal viewer supporting **Zoom In/Out/Reset**, **Previous/Next navigation**, **ESC to close**, and **Direct PDF download**.
  - Interactive search bar and real-time category filter chips.
- **Bento-Grid Showcase**:
  - **About Me**: Highlights academic standing (3rd Year B.Tech CSE at SIT Nagpur, CGPA 7.09) alongside athletic honors (3x CBSE National representation in Kho Kho & Football, Sports Coordinator).
  - **Technical Skills**: Grouped into Programming Languages, AI & ML, Web & Frameworks, Databases & Cloud, and DevOps & Automation.
  - **Work Experience**: Interactive vertical timeline detailing the AI Development Internship at PremitiveKey (Mumbai).
  - **Projects**: Highlight cards for Cloud Auto-Scaling ML Framework, Trustworthy RAG System, Intelligent Chatbot, and Arduino Rain Shade.
- **Production-Ready & Static-Deployable**: Pure frontend with zero backend dependencies, ready for instant deployment to Vercel, Netlify, or GitHub Pages.

---

## 🚀 Getting Started

### 1. Installation & Local Development
```bash
# Clone or navigate to the repository
cd portfolio

# Install dependencies
npm install

# Start local development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Building for Production
```bash
npm run build
```
The optimized bundle will be compiled into the `dist/` folder.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── resume/
│   │   │   └── Shriya_Sanjay_Yerane_Resume.pdf    # Active resume PDF file
│   │   ├── certificates/                          # All certificate PDFs served statically
│   │   │   ├── Mastering_Agentic_AI_Infosys_Springboard.pdf
│   │   │   ├── Red_Hat_Ansible_Network_Automation_DO457.pdf
│   │   │   ├── Red_Hat_System_Administration_I_RH124.pdf
│   │   │   └── ...
│   │   ├── thumbnails/                            # High-res preview thumbnails
│   │   │   ├── resume_preview.png
│   │   │   └── cert-*.png
│   │   └── images/
│   │       └── shriya_portrait.jpg                # Portrait photograph
│   └── favicon.svg                                # Custom monogram favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                             # Sticky glass navbar with theme toggle
│   │   ├── Hero.jsx                               # Animated typing hero & CTA buttons
│   │   ├── About.jsx                              # Bento-grid profile & athletic honors
│   │   ├── Skills.jsx                             # Categorized competencies with filter chips
│   │   ├── Experience.jsx                         # Vertical timeline for PremitiveKey
│   │   ├── Projects.jsx                           # Bento project cards & tech tags
│   │   ├── Education.jsx                          # SIT Nagpur academic record
│   │   ├── Certificates.jsx                       # Gallery with search & category filters
│   │   ├── CertificateModal.jsx                   # Lightbox modal with zoom & nav
│   │   ├── ResumeSection.jsx                      # Inline PDF viewer & preview toggle
│   │   ├── ResumeModal.jsx                        # Standalone fullscreen resume modal
│   │   ├── Contact.jsx                            # Direct mail form & quick copy actions
│   │   ├── Footer.jsx                             # Links, copyright, and back-to-top
│   │   ├── BackgroundGlow.jsx                     # Ambient radial gradients & grid
│   │   └── ThemeToggle.jsx                        # Dark/Light mode switcher
│   ├── data/
│   │   ├── portfolio.js                           # Single source of truth for all content
│   │   └── certificates-manifest.json             # Manifest for certificate files
│   ├── index.css                                  # Glassmorphism, animations, CSS variables
│   ├── App.jsx                                    # Main page layout
│   └── main.jsx                                   # React DOM root
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🛠️ How to Customize & Maintain

### 1. How to Add or Replace the Resume
1. Export your latest resume as a PDF.
2. Replace `public/assets/resume/Shriya_Sanjay_Yerane_Resume.pdf` with your new file.
3. If the filename changes, update `resumePdf` and `resumeFilename` in `src/data/portfolio.js`.

### 2. How to Add New Certificates
1. Copy your new PDF certificate into `public/assets/certificates/` (e.g. `My_New_Certificate.pdf`).
2. Add an entry to `src/data/certificates-manifest.json`:
```json
{
  "id": "cert-new-id",
  "clean_file": "My_New_Certificate.pdf",
  "title": "Title of the Certificate",
  "issuer": "Issuing Organization",
  "category": "AI & Generative AI",
  "issueDate": "Month Year",
  "pdfUrl": "/assets/certificates/My_New_Certificate.pdf",
  "thumbnailUrl": "/assets/thumbnails/cert-new-id.png",
  "verificationUrl": "https://verify.link...",
  "description": "Brief description of topics covered."
}
```
3. To generate a high-resolution thumbnail preview:
   - On macOS: `qlmanage -t -s 1000 -o public/assets/thumbnails public/assets/certificates/My_New_Certificate.pdf`

### 3. How to Change Colors & Fonts
- **Colors**: Edit CSS variables in `src/index.css` or Tailwind theme palette in `tailwind.config.js`:
  - Primary violet accent: `primary: { 500: '#8b5cf6' }`
  - Secondary cyan accent: `cyan: { 500: '#06b6d4' }`
- **Fonts**: Defined in `index.html` via Google Fonts (`Outfit` for display headings, `Plus Jakarta Sans` for body text, `JetBrains Mono` for code snippets). Change the font imports and update `tailwind.config.js` to change typography.

### 4. How to Update Content
All personal information, project descriptions, skills, and links reside in a single file:  
`src/data/portfolio.js`

---

## 🚢 Deployment Guide

### Deploying to Vercel
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository. Vercel automatically detects Vite.
4. Click **Deploy**.

### Deploying to Netlify
1. Connect your repository on [netlify.com](https://netlify.com).
2. Set Build command to `npm run build` and Publish directory to `dist`.
3. Click **Deploy Site**.

### Deploying to GitHub Pages
1. In `vite.config.js`, set `base: '/<repo-name>/'`.
2. Run `npm run build` and push the `dist` folder to your `gh-pages` branch.
