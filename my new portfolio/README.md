# Premium 3D Portfolio

A stunning, interactive 3D portfolio website built with React, Three.js, and modern web technologies.

## 🎨 Features

- **Immersive 3D Background**: WebGL-powered animated scene with floating spheres and particle effects
- **Interactive 3D Cards**: Mouse-responsive cards with perspective transforms
- **Smooth Animations**: Powered by Framer Motion for fluid page transitions
- **Post-Processing Effects**: Bloom, depth of field, and vignette effects
- **Responsive Design**: Optimized for all devices
- **Performance Optimized**: Limited pixel ratio and efficient rendering

## 🎨 Color Palette

This portfolio uses the following color scheme from [Color Hunt](https://colorhunt.co/palette/e3f2fd90caf92196f30d47a1):

- `#E3F2FD` - Light Blue (Backgrounds, accents)
- `#90CAF9` - Medium Blue (Secondary elements)
- `#2196F3` - Primary Blue (Main CTAs, highlights)
- `#0D47A1` - Dark Blue (Text, contrast elements)

## 🚀 Tech Stack

- **React 18** - UI framework
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **@react-three/postprocessing** - Post-processing effects
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS
- **Vite** - Build tool

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## 🎯 Sections

- **Hero** - Animated introduction with 3D interactive card
- **About** - Skills and experience showcase
- **Projects** - Featured work with hover effects
- **Skills** - Technology stack organized by category
- **Contact** - Get in touch form and contact info

## ⚡ Performance Optimizations

- Pixel ratio capped at 2 for high-DPI displays
- Antialiasing disabled when post-processing is active
- Efficient particle system with buffer geometry
- Lazy loading and code splitting
- Optimized 3D models and textures

## 🎨 Customization

### Update Personal Info

Edit the following files to add your information:
- `src/components/Hero.jsx` - Your name and title
- `src/components/About.jsx` - Your bio and skills
- `src/components/Projects.jsx` - Your projects
- `src/components/Contact.jsx` - Your contact details

### Modify Colors

Colors are defined in `tailwind.config.js`:
```javascript
colors: {
  'primary-light': '#E3F2FD',
  'primary-medium': '#90CAF9',
  'primary': '#2196F3',
  'primary-dark': '#0D47A1',
}
```

### Adjust 3D Effects

Modify the 3D scene in `src/components/Scene3D.jsx`:
- Change sphere positions, colors, and animations
- Adjust post-processing intensity
- Add or remove particle effects

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Credits

- Design inspired by premium award-winning portfolio sites
- Color palette from [Color Hunt](https://colorhunt.co/)
- Built with guidance from the `/premium-3d-website` and `/3d-ui` skills

---

Made with ❤️ by Sathish
