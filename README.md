# Wisdom Shaibu — Backend & DevOps Engineer Portfolio

A modern, responsive portfolio website built with Next.js showcasing expertise in backend engineering, DevOps, and cloud infrastructure. Features a clean design with sections for about, technical stack, experience, projects, certifications, and contact information.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS for seamless experiences across all devices
- **Modern Stack**: Built with Next.js 15, React 19, and TypeScript for type-safe, performant applications
- **SEO Optimized**: Meta tags and Open Graph configuration for excellent search engine visibility
- **Component-Based Architecture**: Modular, reusable React components for maintainability
- **Professional Styling**: Tailwind CSS with custom configurations and PostCSS for advanced CSS capabilities

## Tech Stack

### Frontend
- **Next.js** 15.1.0 - React framework for production
- **React** 19.0.0 - UI library
- **TypeScript** 5 - Type-safe JavaScript
- **Tailwind CSS** 3.4.17 - Utility-first CSS framework
- **PostCSS** 8.4.49 - CSS transformation
- **Autoprefixer** 10.4.20 - CSS vendor prefix automation

### Development Tools
- **Node.js** 20+ - JavaScript runtime
- **npm** - Package manager

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Main home page
│   ├── layout.tsx         # Root layout with metadata
│   ├── globals.css        # Global styles
│   └── opengraph-image.tsx # Social media preview image
└── components/
    ├── Navbar.tsx         # Navigation header
    ├── Hero.tsx           # Hero section
    ├── About.tsx          # About section
    ├── Stack.tsx          # Technical skills showcase
    ├── Experience.tsx     # Work experience timeline
    ├── Projects.tsx       # Featured projects
    ├── Certs.tsx          # Certifications
    ├── Contact.tsx        # Contact form/section
    └── Footer.tsx         # Footer navigation

public/
└── Wisdom_Ojochegbe_Shaibu_Resume.pdf
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm 9+
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (if needed)
   ```bash
   cp .env.example .env.local
   ```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site. The page will automatically reload when you make changes to files.

### Production Build

Build the application for production:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

The built application will be optimized and ready for deployment.

## Usage

### Customization

1. **Update Personal Information**: Modify component files in `src/components/` to add your own content
2. **Styling**: Adjust Tailwind classes in component files or modify `tailwind.config.ts` for custom theme settings
3. **Metadata**: Update SEO and social media tags in `src/app/layout.tsx`
4. **Resume**: Replace `public/Wisdom_Ojochegbe_Shaibu_Resume.pdf` with your own resume

### Adding Sections

To add a new section:
1. Create a new component in `src/components/`
2. Import and add it to the page layout in `src/app/page.tsx`
3. Style using Tailwind CSS classes

## Building and Deployment

### Local Build
```bash
npm run build
```

### Deployment Options

- **Vercel** (Recommended for Next.js): Push to GitHub and deploy via [Vercel](https://vercel.com)
- **Docker**: Create a Dockerfile for containerized deployment
- **Static Export**: Configure `next.config.mjs` with `output: 'export'` for static site hosting
- **Traditional Hosting**: Use `npm run build` output in `./out` directory

## Contributing

This is a personal portfolio project, but contributions and suggestions are welcome!

### Development Workflow

1. **Fork the repository** (if you'd like to contribute)
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** with clear, descriptive commits
4. **Test thoroughly**
   ```bash
   npm run dev
   npm run build
   ```
5. **Submit a pull request** with a clear description of changes

### Code Standards

- Use **TypeScript** for all new code
- Follow the existing component structure and naming conventions
- Use **Tailwind CSS** for styling (avoid custom CSS when possible)
- Keep components focused and reusable
- Add comments for complex logic
- Ensure responsive design across mobile, tablet, and desktop viewports

### Commit Message Guidelines

Follow conventional commit format:
- `feat: Add new feature`
- `fix: Fix bug or issue`
- `style: Update styling or formatting`
- `docs: Update documentation`
- `refactor: Refactor existing code`
- `test: Add or update tests`

## Performance & SEO

- **Next.js Optimizations**: Automatic code splitting and image optimization
- **TypeScript**: Catch errors at compile-time for more reliable code
- **Tailwind CSS**: Minimal CSS bundle with purging of unused styles
- **Metadata**: Comprehensive SEO tags and Open Graph configuration
- **Accessibility**: Semantic HTML and ARIA labels for inclusive design

## Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
npm run dev -- -p 3001
```

### Build Failures
Clear Next.js cache and reinstall:
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Styling Issues
Ensure Tailwind CSS is properly configured:
- Verify `tailwind.config.ts` includes all template paths
- Run `npm run build` to regenerate styles
- Clear browser cache (Ctrl+Shift+Delete)

## License

This project is open source and available under the MIT License. Feel free to use this as a template for your own portfolio.

## Contact & Social

For inquiries or opportunities, please contact through:
- **Email**: Include contact form on portfolio
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

---

Built with ❤️ using Next.js, React, and Tailwind CSS
