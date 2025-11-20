# Angular Admin Dashboard Template

Modern Angular admin dashboard template built with Angular 21,Biome, and DaisyUI.

## ✨ Features

### Core Technologies
- **Angular 21** - Latest Angular with standalone components and Signals
- **Vite** - Fast build tool with HMR (Hot Module Replacement)
- **TypeScript 5.9** - Type-safe development
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **DaisyUI 4.12** - Beautiful component library with 20+ themes
- **Biome** - Fast linter and formatter

### Admin Dashboard Features
- 📊 **Advanced Data Tables** - Sorting, filtering, pagination, and CSV export
- 📝 **Reactive Forms** - Complex forms with validation
- 🎨 **Multiple Themes** - 20+ DaisyUI themes with dark mode support
- 📱 **Responsive Design** - Mobile-first responsive layout
- 🔐 **State Management** - Angular Signals + Services pattern
- ⚡ **Performance** - Lazy loading and optimized builds
- ♿ **Accessibility** - WCAG compliant components

## 🚀 Getting Started

### Prerequisites
- Node.js 20.x or later
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run start
```

The application will be available at `http://localhost:4200`

## 📦 Available Scripts

```bash
# Development
npm run start          # Start Vite dev server with HMR

# Production
npm run build        # Build for production
npm run preview      # Preview production build locally

# Testing
npm test             # Run Jest tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report

# Code Quality
npm run lint         # Run Biome linter
npm run format       # Format code with Biome
npm run check        # Lint and format code
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── core/                 # Singleton services, guards
│   │   └── services/
│   │       ├── theme.service.ts       # Theme management with Signals
│   │       ├── sidebar.service.ts     # Sidebar state management
│   │       └── mock-data.service.ts   # Mock API data service
│   ├── features/             # Feature modules (lazy-loaded)
│   │   ├── dashboard/        # Dashboard page with stats
│   │   ├── tables/           # Advanced data tables
│   │   └── forms/            # Form examples
│   ├── layouts/              # Layout components
│   │   ├── admin-layout/     # Main admin layout
│   │   ├── sidebar/          # Responsive sidebar
│   │   └── navbar/           # Top navigation bar
│   ├── shared/               # Reusable components
│   │   └── components/
│   │       ├── card/         # Card wrapper component
│   │       ├── stat-card/    # Statistics card
│   │       └── loading-spinner/ # Loading indicator
│   ├── models/               # TypeScript interfaces
│   ├── app.component.ts      # Root component
│   └── app.routes.ts         # Application routes
├── environments/             # Environment configurations
├── styles.css                # Global styles with Tailwind
└── main.ts                   # Application bootstrap
```

## 🎨 Theming

The template comes with 20+ built-in DaisyUI themes:
- Light (default), Dark
- Cupcake, Bumblebee, Emerald, Corporate
- Synthwave, Retro, Cyberpunk
- Valentine, Halloween, Garden, Forest
- Aqua, Lofi, Pastel, Fantasy
- Wireframe, Black, Luxury, Dracula

### Changing Themes

Themes can be changed via the theme selector in the navbar or programmatically:

```typescript
import { ThemeService } from '@core/services/theme.service';

constructor(private themeService: ThemeService) {}

changeTheme() {
  this.themeService.setTheme('dark');
}
```

## 🧪 Testing

The project uses Jest for testing with full Angular support.

```bash
npm test              # Run all tests
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report
```

## 📊 Components

### Dashboard
Stats cards, recent activity, quick actions, system status

### Data Tables
Column sorting, search/filter, pagination, CSV export

### Forms
Reactive forms with validation, custom validators, multiple input types

## 🚢 Deployment

```bash
npm run build
```

Build artifacts will be in `dist/` directory.

## 📝 License

MIT License - see LICENSE file for details

---

Built with ❤️ using Angular 20 and modern web technologies
