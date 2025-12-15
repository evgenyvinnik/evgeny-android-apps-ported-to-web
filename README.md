# Evgeny's Android Apps Ported to Web

My early career Android applications ported to the modern web platform.

## 🚀 Tech Stack

- **React 19** with React Compiler for optimal performance
- **TypeScript** for type safety and better developer experience
- **Vite** for blazing fast builds and hot module replacement
- **React Router** with HashRouter for GitHub Pages compatibility
- **ESLint** for code quality and consistency
- **Prettier** for code formatting
- **Bun** as the JavaScript runtime (in CI/CD)
- **Traditional CSS** for styling (no Tailwind)

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher)
- [Bun](https://bun.sh/) (optional, npm also works)

### Installation

```bash
# Clone the repository
git clone https://github.com/evgenyvinnik/evgeny-android-apps-ported-to-web.git
cd evgeny-android-apps-ported-to-web

# Install dependencies (using npm)
npm install

# Or using Bun (if installed locally)
bun install
```

### Development

```bash
# Start the development server
npm run dev

# Or with Bun
bun run dev
```

The app will be available at `http://localhost:5173/evgeny-android-apps-ported-to-web/`

### Build

```bash
# Build for production
npm run build

# Or with Bun
bun run build
```

### Preview Production Build

```bash
# Preview the production build locally
npm run preview

# Or with Bun
bun run preview
```

### Linting and Formatting

```bash
# Run ESLint
npm run lint

# Format code with Prettier
npm run format

# Check formatting
npm run format:check
```

## 🌐 Deployment

This project is configured to automatically deploy to GitHub Pages on every push to the `main` branch.

### Automated Workflows

1. **Versioning** (`.github/workflows/versioning.yml`):
   - Automatically bumps version on every push to main
   - Version format: `1.0.YYMMDD.RUN_NUMBER`

2. **Deployment** (`.github/workflows/deploy.yml`):
   - Builds the app using Bun
   - Deploys to GitHub Pages
   - Available at: `https://evgenyvinnik.github.io/evgeny-android-apps-ported-to-web/`

## 📁 Project Structure

```
evgeny-android-apps-ported-to-web/
├── .github/
│   └── workflows/         # GitHub Actions workflows
├── public/                # Static assets
├── src/
│   ├── pages/            # Page components
│   │   ├── Home.tsx
│   │   ├── Home.css
│   │   ├── About.tsx
│   │   └── About.css
│   ├── App.tsx           # Main app component with router
│   ├── App.css           # App-level styles
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── index.html            # HTML entry point
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── eslint.config.js      # ESLint configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Features

- ✅ React 19 with latest features and optimizations
- ✅ React Compiler for automatic optimization
- ✅ HashRouter for GitHub Pages compatibility
- ✅ Responsive design with dark/light mode support
- ✅ Type-safe development with TypeScript
- ✅ Code quality enforced with ESLint
- ✅ Consistent formatting with Prettier
- ✅ Automated versioning and deployment

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Evgeny Vinnik**

- GitHub: [@evgenyvinnik](https://github.com/evgenyvinnik)
