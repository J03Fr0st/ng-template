# Development Guide

Welcome to the ng-template development guide! This document will help you get up to speed quickly.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Open http://localhost:4200 in your browser
```

## Development Workflow

### 1. Start Development Server

```bash
npm start
```

The app will automatically reload when you save changes.

### 2. Make Your Changes

Edit files in the `src/` directory following Angular best practices.

### 3. Check Your Code

Before committing, ensure your code passes all checks:

```bash
# Check formatting and linting (recommended)
npm run check

# Or auto-fix issues
npm run check:fix
```

### 4. Run Tests

```bash
npm test
```

### 5. Create a Changeset

If your changes should be versioned:

```bash
npm run changeset
```

Follow the prompts to describe your changes.

### 6. Commit Your Changes

Git hooks will automatically:
- Format and lint your staged files
- Validate your commit message format

Commit message format:
```
type: subject

Examples:
feat: Add user authentication
fix: Resolve navigation bug
docs: Update README
```

## Code Quality Tools

### Biome

This project uses **[Biome](https://biomejs.dev/)** for ultra-fast linting and formatting.

```bash
# Check everything
npm run check

# Auto-fix issues
npm run check:fix

# Just format
npm run format

# Just lint
npm run lint
```

### Why Biome?

- 🚀 **100x faster** than ESLint + Prettier
- 🔧 **One tool** for linting and formatting
- ⚙️ **Zero config** out of the box
- 🎯 **Better error messages**

## Git Hooks

### Pre-commit Hook

Automatically runs Biome on staged files. If files don't pass, the commit is blocked.

### Commit Message Hook

Validates commit message format using conventional commits:

**Valid types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Test changes
- `build`: Build system changes
- `ci`: CI configuration changes
- `chore`: Other changes

## VS Code Integration

### Recommended Extensions

When you open this project, VS Code will suggest installing:
- **Biome** - Linting and formatting
- **Angular Language Service** - Angular IntelliSense
- **Error Lens** - Inline error highlighting
- **GitLens** - Git integration

### Keyboard Shortcuts

- **Format Document**: `Shift+Alt+F`
- **Organize Imports**: `Shift+Alt+O`
- **Quick Fix**: `Ctrl+.`

### Debug Configuration

Press `F5` to start debugging:
- **ng serve**: Debug the running app in Chrome
- **ng test**: Debug unit tests

## Building

### Development Build

```bash
npm run build
```

### Production Build

```bash
npm run build -- --configuration production
```

Artifacts will be in `dist/`.

## Testing

### Unit Tests

```bash
# Run tests once
npm test

# Watch mode
npm run test:watch
```

## CI/CD Pipeline

Every PR and push to main triggers:

1. **Lint & Format Check** - Validates code quality with Biome
2. **Build** - Tests on Node.js 18, 20, and 22
3. **Test** - Runs all unit tests
4. **Changeset Check** - Reminds about changesets

## Versioning

This project uses **[Changesets](https://github.com/changesets/changesets)** for version management.

### Creating a Changeset

```bash
npm run changeset
```

Select the version bump type:
- **patch**: Bug fixes (0.0.X)
- **minor**: New features (0.X.0)
- **major**: Breaking changes (X.0.0)

### Version Release Process

1. Create changesets in feature branches
2. Merge PR to main
3. GitHub Actions creates a "Version Packages" PR
4. Review and merge the version PR
5. Version is automatically updated!

## Project Structure

```
ng-template/
├── .github/              # GitHub Actions & templates
│   ├── workflows/        # CI/CD pipelines
│   ├── ISSUE_TEMPLATE/   # Issue templates
│   └── *.md             # Contributing guides
├── .husky/              # Git hooks
├── .vscode/             # VS Code configuration
├── src/                 # Application source
│   ├── app/            # App components
│   └── styles.css      # Global styles
├── public/              # Static assets
├── biome.json          # Biome configuration
├── angular.json        # Angular CLI configuration
└── package.json        # Dependencies & scripts
```

## Common Tasks

### Add a New Component

```bash
ng generate component my-component
```

### Add a New Service

```bash
ng generate service my-service
```

### Update Dependencies

Dependencies are automatically updated weekly by Dependabot.

### Manual Dependency Update

```bash
# Check for outdated packages
npm outdated

# Update all dependencies
npm update

# Update Angular
ng update @angular/cli @angular/core
```

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 4200 (Windows)
netstat -ano | findstr :4200
taskkill /PID <PID> /F

# Or use a different port
ng serve --port 4201
```

### Node Modules Issues

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Biome Not Working

```bash
# Reinstall Biome
npm install --save-dev --save-exact @biomejs/biome

# Check VS Code extension is installed
# Command Palette → "Biome: Welcome"
```

## Performance Tips

1. **Use OnPush change detection** in components
2. **Use signals** for reactive state
3. **Lazy load** feature modules
4. **Use** `trackBy` in `*ngFor` loops
5. **Optimize** images with `NgOptimizedImage`

## Best Practices

### Component Design

- Keep components small and focused
- Use `input()` and `output()` functions
- Prefer standalone components
- Use `computed()` for derived state

### State Management

- Use signals for local state
- Use services for shared state
- Keep state transformations pure

### Styling

- Use component styles when possible
- Follow BEM naming convention
- Use CSS custom properties for theming

## Resources

- [Angular Documentation](https://angular.dev/)
- [Biome Documentation](https://biomejs.dev/)
- [Changesets Documentation](https://github.com/changesets/changesets)
- [Conventional Commits](https://www.conventionalcommits.org/)

## Getting Help

- Open an issue on GitHub
- Check existing issues and PRs
- Read the documentation
- Ask in discussions

Happy coding! 🚀

