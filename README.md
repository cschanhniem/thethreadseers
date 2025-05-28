# The Thread Seers - Website

An ultra-minimalist, typography-centric website for "The Thread Seers" YA fantasy book series, featuring the "Luminous Threads in Elegant Darkness" aesthetic.

## 🌟 Project Overview

This website serves as the primary digital destination for "The Thread Seers" series by Le Viet Hong—a seven-book middle-grade fantasy series following Lyra Chen from age 12 to 18 as she discovers her ability to see the invisible threads connecting all living things. The site offers an immersive, atmospheric experience that reflects the series' core themes of connection, cultural depth, and the interplay of light and shadow.

### Key Features

- **Free Reading Experience**: Book One "The Awakening Thread" available to read directly on the site
- **Rich World-Building**: Comprehensive exploration of the Thread Dimension, magic system, and cultural traditions
- **Ultra-Minimalist Design**: Typography-centric with "Luminous Thread" lighting effects
- **Dark Theme**: Deep charcoal backgrounds with luminous text that embodies the series aesthetic
- **Multicultural Integration**: Reflects the series' integration of Korean, Indian, Egyptian, African, and Indigenous thread traditions
- **Responsive Design**: Optimized for all devices with mobile-first approach
- **Performance-First**: Built for speed and accessibility with WCAG AA compliance

## 🎨 Design System

### Color Palette
- **Background**: Deep charcoal (#0A0A0C, #0F0F12)
- **Text**: Soft off-white (#EAEAEA, #FAFAFA)
- **Accent**: Iridescent silver with subtle color shifts
- **Secondary**: Medium-dark grey (#4A4A4A, #555555)

### Typography
- **Headings**: Inter (Sans-serif) - Light to Medium weights
- **Body Text**: Lora (Serif) - Optimized for long-form reading
- **Special Effects**: "Luminous Thread" lighting on hover/interaction

### Layout Principles
- Generous whitespace as the dominant design element
- Constrained text width for optimal readability (60-70ch)
- Precise 8px grid system for consistent spacing
- Elegant vertical rhythm throughout

## 🏗️ Technical Stack

- **Framework**: Vite + React + TypeScript
- **Styling**: Tailwind CSS with custom theme
- **UI Components**: shadcn/ui (heavily customized)
- **Content**: Markdown with react-markdown
- **Fonts**: Inter + Lora (Google Fonts)
- **Icons**: Lucide React
- **Package Manager**: npm/pnpm

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── HomePage.tsx    # Landing page
│   ├── SeriesPage.tsx  # Books overview
│   ├── BookPage.tsx    # Individual book details
│   ├── ReaderPage.tsx  # Reading interface
│   ├── WorldPage.tsx   # Lore and world-building
│   ├── AuthorPage.tsx  # Author information
│   ├── NewsPage.tsx    # News and updates
│   └── NewsPostPage.tsx # Individual news posts
├── content/            # Markdown content files
├── lib/               # Utility functions
└── styles/            # Global styles and theme
```

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📖 Site Structure

### Pages
- **Home (/)**: Hero section with series introduction and authentic tagline
- **Series (/series)**: Complete 7-book listing with actual plot descriptions
- **Book Pages (/series/[book])**: Individual book details with authentic content from series bible
- **Reader (/series/[book]/read/[chapter])**: Distraction-free reading experience with actual Chapter 1 content
- **World (/world)**: Comprehensive Thread Dimension lore, magic system, cultural traditions, and 50+ term glossary
- **Author (/author)**: Author biography reflecting the philosophical and multicultural depth of the series
- **News (/news)**: Updates and announcements with authentic series development content

### Features
- **Responsive Navigation**: Clean header with mobile-friendly menu
- **Reading Interface**: Font size controls, chapter navigation, progress tracking
- **Luminous Effects**: Subtle lighting animations on interactive elements
- **SEO Optimized**: Meta tags, structured data, clean URLs
- **Accessibility**: WCAG AA compliance, keyboard navigation, screen reader support

## 🎯 Performance Goals

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🔧 Development Guidelines

### Code Quality
- TypeScript for type safety
- ESLint + Prettier for code formatting
- Consistent component structure
- Semantic HTML and ARIA labels

### Design Principles
- Every element must justify its existence
- Typography as the primary design element
- Subtle, purposeful animations only
- Maximum readability and accessibility

### Content Management
- All narrative content in Markdown files
- Dynamic routing for books and chapters
- Structured data for SEO
- Easy content updates without code changes

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

This is a showcase project for "The Thread Seers" series. For content updates or bug reports, please contact the author.

## 📄 License

© 2024 Le Viet Hong. All rights reserved.

---

*"Where threads connect worlds, and every choice weaves destiny."*
# thethreadseers
