# Codecademy-Inspired Landing Page

A fully responsive landing page inspired by Codecademy, built with React and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Clean, professional layout with Codecademy's signature colors
- 📱 **Fully Responsive**: Optimized for all screen sizes (mobile, tablet, desktop)
- ✨ **Interactive Elements**: Smooth hover effects and transitions
- 🚀 **Hero Section**: Eye-catching hero with call-to-action buttons
- 🎓 **Bootcamp Highlights**: Showcase of intensive bootcamp programs
- 🏆 **Certification Paths**: Display of professional certification programs
- 🔗 **Footer**: Comprehensive footer with links and social media

## Tech Stack

- **React 18**: Modern React with functional components
- **Tailwind CSS 3**: Utility-first CSS framework
- **HTML5**: Semantic markup

## Color Palette

- **Deep Blue**: `#1F3A5F` (Codecademy Blue)
- **Vibrant Purple**: `#6C63FF` (Codecademy Purple)
- **White**: `#FFFFFF`

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
codecademy-landing/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Bootcamps.jsx
│   │   ├── Certifications.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Components

### Hero
- Large, impactful hero section with gradient background
- Primary and secondary call-to-action buttons
- Trust indicators (learners count, features)

### Bootcamps
- Grid layout showcasing bootcamp programs
- Featured bootcamp highlighting
- Skills tags and pricing information
- Hover effects for interactivity

### Certifications
- Card-based layout for certification paths
- Color-coded gradient headers
- Project count and duration information
- Responsive grid system

### Footer
- Multi-column layout with links
- Social media icons
- Company information and legal links

## Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme:
```javascript
colors: {
  'codecademy-blue': '#1F3A5F',
  'codecademy-purple': '#6C63FF',
}
```

### Content
Update dummy data in:
- `src/components/Bootcamps.jsx` - Bootcamp information
- `src/components/Certifications.jsx` - Certification paths

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational purposes.

