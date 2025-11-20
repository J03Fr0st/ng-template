# NgTemplate

[![CI](https://github.com/YOUR_USERNAME/ng-template/actions/workflows/ci.yml/badge.svg)](https://github.com/YOUR_USERNAME/ng-template/actions/workflows/ci.yml)
[![Version Management](https://github.com/YOUR_USERNAME/ng-template/actions/workflows/release.yml/badge.svg)](https://github.com/YOUR_USERNAME/ng-template/actions/workflows/release.yml)

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.0.

## Quick Start

```bash
npm install
npm start
```

Open http://localhost:4200 in your browser.

## 📖 Documentation

- **[Development Guide](./DEVELOPMENT.md)** - Complete development workflow and best practices
- **[Contributing Guide](./.github/CONTRIBUTING.md)** - How to contribute to this project
- **[Security Policy](./SECURITY.md)** - Security vulnerability reporting

## Versioning & Releases

This project uses [Changesets](https://github.com/changesets/changesets) for version management and automated releases via GitHub Actions.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Code Quality

This project uses [Biome](https://biomejs.dev/) for blazingly fast linting and formatting.

### Format Code

To format your code:

```bash
npm run format
```

### Lint Code

To lint your code:

```bash
npm run lint
```

### Check Everything

To check both formatting and linting:

```bash
npm run check
```

### Fix Everything

To automatically fix all issues:

```bash
npm run check:fix
```

### Run All CI Checks Locally

To run all CI checks before pushing:

```bash
npm run ci
```

This will check formatting, linting, build the project, and run tests.

## Versioning Workflow

### Adding a Changeset

When you make changes that should be versioned, create a changeset:

```bash
npm run changeset
```

This will prompt you to:
1. Select the type of change (major, minor, or patch)
2. Provide a summary of your changes

The changeset will be committed with your PR.

### Automated Version Management

When PRs with changesets are merged to `main`:
1. GitHub Actions automatically creates or updates a "Version Packages" PR
2. This PR contains all version bumps and CHANGELOG updates
3. When you merge the "Version Packages" PR, the version is updated in your repository

### Manual Versioning (if needed)

To manually update versions and changelogs:

```bash
npm run version
```

This will update `package.json` version and generate/update `CHANGELOG.md` based on your changesets.

### GitHub Actions Setup

The version management workflow uses:
- `GITHUB_TOKEN` (automatically provided by GitHub - no setup required)

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment:

### CI Workflow (`.github/workflows/ci.yml`)

Runs on every pull request and push to main:

1. **Lint & Format Check**
   - Validates code formatting and linting with Biome (ultra-fast!)

2. **Build**
   - Tests build on Node.js 18, 20, and 22
   - Uploads build artifacts for inspection
   - Uses dependency caching for faster runs

3. **Test**
   - Runs all unit tests

4. **Changeset Check** (PRs only)
   - Reminds contributors to add changesets for versioned changes

### Version Management Workflow (`.github/workflows/release.yml`)

Runs when changes are merged to main:
- Automatically creates/updates a "Version Packages" PR
- Updates `package.json` version and `CHANGELOG.md`

### Performance Optimizations

- **Dependency Caching**: npm dependencies are cached for faster builds
- **Concurrency Control**: Cancels outdated workflow runs when new commits are pushed
- **Matrix Strategy**: Tests across multiple Node.js versions in parallel

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

For more information on Changesets, visit the [Changesets documentation](https://github.com/changesets/changesets).
