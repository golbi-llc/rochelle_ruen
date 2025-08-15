# Rochelle Ruen - Life Coach Website

A modern, elegant single-page React website for Rochelle Ruen, a life coach and personal development specialist. This website showcases her coaching services, personal story, and provides multiple ways for potential clients to connect.

## 🚀 Features

- **Modern Design**: Clean, professional design with elegant typography and smooth animations
- **Responsive Layout**: Fully responsive design that works perfectly on all devices
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Interactive Elements**: Hover effects, smooth scrolling, and interactive components
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and structured content
- **Fast Performance**: Built with Vite for optimal performance

## 🎨 Design Highlights

- **Color Scheme**: Warm, inviting colors with primary orange and accent purple
- **Typography**: Combination of Playfair Display (serif) and Inter (sans-serif) fonts
- **Gradients**: Beautiful gradient backgrounds and text effects
- **Cards**: Modern card designs with hover effects and shadows
- **Icons**: Lucide React icons for consistent, professional appearance

## 📱 Sections

1. **Hero Section**: Compelling headline with call-to-action buttons
2. **About**: Coaching process and benefits with feature cards
3. **Services**: Three coaching packages with pricing and features
4. **My Story**: Personal journey and coaching philosophy
5. **Testimonials**: Client testimonials and success stories
6. **Contact**: Contact form and multiple ways to connect
7. **Footer**: Links, social media, and copyright information

## 🛠️ Technology Stack

- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for smooth transitions
- **Lucide React**: Beautiful, customizable icons
- **React Intersection Observer**: For scroll-triggered animations

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd rochelle-ruen-coaching
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component
│   ├── Hero.jsx           # Hero section
│   ├── About.jsx          # About section
│   ├── Services.jsx       # Services section
│   ├── MyStory.jsx        # Personal story section
│   ├── Testimonials.jsx   # Client testimonials
│   ├── Contact.jsx        # Contact form and info
│   └── Footer.jsx         # Footer component
├── App.jsx                # Main app component
├── main.jsx              # Entry point
└── index.css             # Global styles and Tailwind imports
```

## 🎯 Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

- Primary colors (orange theme)
- Secondary colors (blue theme)
- Accent colors (purple theme)

### Content

All content is easily editable in the component files:

- Update text content directly in JSX
- Modify service pricing and descriptions
- Add or remove testimonials
- Update contact information

### Images

Replace placeholder content with actual images:

- Add real photos of Rochelle
- Include actual client testimonials
- Add service-specific imagery

## 📧 Contact Form

The contact form includes:

- Name, email, phone fields
- Service interest dropdown
- Message textarea
- Form validation
- Submission feedback

**Note**: The form currently shows a success message. To make it functional, integrate with a backend service like:

- EmailJS
- Netlify Forms
- Custom backend API

## 🔧 Configuration

### Environment Variables

Create a `.env` file for any API keys or configuration:

```env
VITE_CONTACT_EMAIL=hello@rochelleruen.com
VITE_PHONE_NUMBER=(555) 123-4567
```

### Social Media Links

Update social media links in the components:

- Instagram: `https://www.instagram.com/rochelleruen/`
- Facebook: Update with actual Facebook page

## 📈 Performance

- **Lighthouse Score**: Optimized for high performance scores
- **SEO**: Proper meta tags and structured content
- **Accessibility**: WCAG compliant design
- **Mobile-First**: Responsive design approach

## 🚀 Deployment

### Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel

1. Import your GitHub repository
2. Framework preset: Vite
3. Build command: `npm run build`

### Other Platforms

The built files in the `dist` directory can be deployed to any static hosting service.

## 📝 License

This project is licensed under the MIT License.

## 🤝 Support

For questions or support, please contact:

- Email: hello@rochelleruen.com
- Instagram: [@rochelleruen](https://www.instagram.com/rochelleruen/)

---

**Built with ❤️ for transformation and personal growth**
