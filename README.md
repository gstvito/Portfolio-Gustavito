# Gustavito Portfolio Website

A modern, responsive portfolio website for a Front-End Web Developer built with Next.js, TypeScript, and Tailwind CSS.

![Portfolio Preview](https://via.placeholder.com/1200x600/8b5cf6/ffffff?text=Gustavito+Portfolio)

## 🚀 Features

- **Modern Design**: Clean, professional, and visually appealing design
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Animations**: Smooth animations and transitions using CSS
- **Dark Theme**: Beautiful dark theme with purple/pink gradient accents
- **Component-Based**: Modular React components for easy maintenance
- **TypeScript**: Type-safe development experience
- **Performance Optimized**: Fast loading and smooth scrolling
- **Accessibility**: WCAG compliant with proper focus management
- **SEO Friendly**: Optimized for search engines

## 🛠️ Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: Custom SVG icons
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
portofolio-gustavito/
├── app/
│   ├── components/
│   │   ├── AboutSection.tsx      # About me section
│   │   ├── ContactSection.tsx    # Contact form and info
│   │   ├── Footer.tsx           # Website footer
│   │   ├── Header.tsx           # Navigation header
│   │   ├── HeroSection.tsx      # Hero/landing section
│   │   ├── LoadingScreen.tsx    # Loading animation
│   │   ├── MobileMenu.tsx       # Mobile navigation menu
│   │   ├── ProjectsSection.tsx  # Projects showcase
│   │   └── SkillsSection.tsx    # Skills and expertise
│   ├── globals.css              # Global styles and animations
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
└── README.md                    # Project documentation
```

## 🔧 Components Overview

### Header Component
- Responsive navigation bar
- Smooth scroll to sections
- Mobile menu toggle
- Resume download link

### Hero Section
- Animated introduction
- Dynamic role switching
- Call-to-action buttons
- Social media links

### About Section
- Personal introduction
- Key highlights
- Statistics showcase
- Skills overview

### Skills Section
- Animated skill bars
- Technology categories
- Certifications display
- Fun facts

### Projects Section
- Project filtering
- Interactive project cards
- Technology tags
- Live demo and code links

### Contact Section
- Contact form with validation
- Contact information
- Social media links
- Interactive design

### Footer Component
- Site navigation
- Social links
- Copyright information
- Scroll to top button

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portofolio-gustavito.git
   cd portofolio-gustavito
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Colors
The portfolio uses a purple/pink gradient theme. You can customize colors in the Tailwind CSS classes:
- Primary: `purple-500` to `pink-500`
- Background: `slate-900` variations
- Text: `white`, `gray-300`, `gray-400`

### Content
Update the following files to personalize the portfolio:
- Personal information in each component
- Projects data in `ProjectsSection.tsx`
- Skills data in `SkillsSection.tsx`
- Contact information in `ContactSection.tsx`

### Animations
Animations are implemented using CSS animations and transitions. You can modify them in `globals.css`.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting with Next.js

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The portfolio can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Azure Static Web Apps
- GitHub Pages (with static export)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portofolio-gustavito/issues).

## 👨‍💻 Author

**Gustavito**
- Website: [https://gustavito.dev](https://gustavito.dev)
- GitHub: [@gustavito](https://github.com/gustavito)
- LinkedIn: [gustavito](https://linkedin.com/in/gustavito)

## 📧 Contact

If you have any questions or suggestions, feel free to reach out:
- Email: gustavito@example.com
- LinkedIn: [gustavito](https://linkedin.com/in/gustavito)

---

⭐ Star this repository if you found it helpful!
