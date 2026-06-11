# 💼 Portfolio - [baghel.dev](https://baghel.dev/)

Welcome to the repository for my personal portfolio website, [baghel.dev](https://baghel.dev/).

A Product Engineer's working log — products shipped, problems owned, and systems maintained. I help startups ship and scale web products end-to-end: from frontend and backend to payments, infrastructure, SEO, and observability.

## ✨ Features

- **Modern Design**: Clean, responsive design with custom animations and interactions
- **Contact Form**: Functional contact form with email integration via Cloudflare Workers
- **GitHub Integration**: Live GitHub commit history calendar display
- **GitRoll Profile**: Integrated GitRoll profile showcase
- **Project Showcase**: Featured projects with live demos and source code links
- **Tech Stack Display**: Visual representation of frontend, backend, and miscellaneous tools
- **Analytics**: PostHog integration for user analytics
- **Performance Optimized**: Fast loading with optimized images and efficient bundling

## 📸 Screenshots
<img width="1906" height="1080" alt="2025-08-18_06-39" src="https://github.com/user-attachments/assets/b08758b4-a483-4221-8c4e-3d076431281e" />
<img width="1904" height="1079" alt="2025-08-18_06-39_1" src="https://github.com/user-attachments/assets/c01b7595-dc93-439e-a746-7b8abb9affeb" />
<img width="1902" height="1080" alt="2025-08-18_06-40" src="https://github.com/user-attachments/assets/f71321c3-d134-4cbe-b606-588b8a393f2b" />
<img width="1904" height="1079" alt="2025-08-18_06-40_1" src="https://github.com/user-attachments/assets/478e7e14-b6ba-40d5-b852-46349a8acf81" />
<img width="1903" height="1080" alt="2025-08-18_06-41_1" src="https://github.com/user-attachments/assets/1ad6bfec-f3b5-40da-82a4-fc398616d99a" />


## 🛠️ Tech Stack

### Frontend
- **Next.js 15.2.4** - React framework with App Router
- **React 19.1.0** - UI library with latest features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Tailwind CSS Animated** - Pre-built animations
- **Tailwind Motion** - Advanced motion utilities
- **AOS (Animate On Scroll)** - Scroll-based animations

### Backend & Services
- **Cloudflare Workers** - Serverless email handling
- **Resend** - Email delivery service
- **Hono** - Lightweight web framework for Workers
- **PostHog** - Analytics and user tracking

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **OpenNext** - Cloudflare deployment optimization

### External Integrations
- **GitHub API** - Commit history display via react-github-calendar
- **GitRoll** - Developer profile showcase
- **React Icons** - Icon library
- **React Hot Toast** - Notification system

## 🏗️ Project Structure

├── src/  
│ ├── app/ # Next.js App Router  
│ │ ├── globals.css # Global styles and animations  
│ │ ├── layout.tsx # Root layout with fonts and providers  
│ │ ├── page.tsx # Main portfolio page  
│ │ ├── providers.tsx # PostHog analytics provider  
│ │ └── terms/ # Terms & conditions page  
│ ├── components/ # React components  
│ │ ├── Contact.tsx # Contact form with email functionality  
│ │ ├── Github.tsx # GitHub commit history calendar  
│ │ ├── GitRoll.tsx # GitRoll profile integration  
│ │ ├── Projects.tsx # Featured projects showcase  
│ │ ├── Stack.tsx # Tech stack display  
│ │ └── ScrollButton.tsx # Scroll navigation  
│ ├── lib/ # Utilities and third-party configs  
│ └── utils/ # Helper functions and constants  
├── email-worker/ # Cloudflare Worker for email handling  
│ ├── src/  
│ │ ├── index.tsx # Worker entry point  
│ │ └── emails/ # Email templates  
└── public/ # Static assets

## 🎨 Key Sections

### Hero Section
- Custom typography with Chromate font
- Animated introduction with motion presets
- Social media links and resume download
- Animated SVG background elements

### Projects Showcase
- **CodeStash**: Code snippet management platform
- **SpendSync**: Financial planning and expense tracking tool
- Direct links to live demos and source code

### Tech Stack
- Visual grid layout showcasing frontend, backend, and miscellaneous tools
- Tooltips for each technology
- Organized by category for easy navigation

### GitHub Integration
- Live commit history calendar for recent years
- Scroll-enabled year navigation
- Real-time data from GitHub API

### GitRoll Profile
- Embedded GitRoll profile badge
- Direct link to detailed GitRoll profile

### Contact Form
- Functional email form powered by Cloudflare Workers
- Real-time form validation
- Toast notifications for user feedback
- Custom email templates with React

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:  
```
bash
git clone https://github.com/devansh-baghel/portfolio.git
cd portfolio
```

2. Install dependencies:  
```
bash
pnpm install
```

3. Run the development server:  
```
bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Email Worker Setup

1. Navigate to the email worker directory:  
```
bash
cd email-worker
pnpm install
```

2. Set up environment variables in Cloudflare Workers dashboard:  
   - `RESEND_API_KEY`: Your Resend API key

3. Deploy the worker:  
```
bash
pnpm deploy
```

## 📱 Deployment

### Main Site (Cloudflare Pages)
```
bash
pnpm build:worker
pnpm deploy:worker
```

### Email Worker (Cloudflare Workers)
```
bash
cd email-worker
pnpm deploy
```

## 🎯 Performance Features

- **Image Optimization**: Next.js Image component with proper sizing
- **Font Optimization**: Local font loading with display swap
- **Code Splitting**: Automatic code splitting via Next.js
- **SSR Safety**: Proper hydration handling for animations
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 📊 Analytics

The portfolio includes PostHog analytics to track:
- Page views and user interactions
- Form submissions and conversions
- Performance metrics
- User journey analysis

## 🎨 Design System

- **Color Palette**: Slate-based with lime accent colors
- **Typography**: Inter for body text, Chromate for headings
- **Shadows**: Consistent 3D shadow effects throughout
- **Animations**: Smooth transitions and scroll-based reveals
- **Layout**: Responsive grid system with mobile-first approach

## 📝 License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## 🤝 Contact

- **Website**: [baghel.dev](https://baghel.dev)
- **Email**: [hello@baghel.dev](mailto:hello@baghel.dev)
- **GitHub**: [@devansh-baghel](https://github.com/devansh-baghel)
- **LinkedIn**: [devanshbaghel](https://linkedin.com/in/devanshbaghel)
- **Twitter**: [@bagheldotdev](https://twitter.com/bagheldotdev)

---
