# Contributing to NgTemplate

Thanks for your interest in contributing! This guide will help you get started.

## Before You Start

1. Check existing issues and PRs to avoid duplicates
2. For large changes, open an issue first to discuss your approach
3. Make sure all CI checks pass before requesting review

## Making Changes with Changesets

When you make changes that should be released, you need to create a changeset.

### Step 1: Make Your Changes

Make your code changes as normal.

### Step 2: Create a Changeset

Run the following command:

```bash
npm run changeset
```

You'll be prompted to:

1. **Select the type of version bump:**
   - `major` - Breaking changes (e.g., 1.0.0 → 2.0.0)
   - `minor` - New features, backwards compatible (e.g., 1.0.0 → 1.1.0)
   - `patch` - Bug fixes (e.g., 1.0.0 → 1.0.1)

2. **Write a summary:**
   Describe your changes. This will appear in the changelog.

Example:
```
---
"ng-template": minor
---

Added user authentication feature with login and logout functionality
```

### Step 3: Commit the Changeset

The changeset will be created as a file in `.changeset/`. Commit this file along with your code changes:

```bash
git add .changeset/
git commit -m "feat: add user authentication"
git push
```

### Step 4: Create a Pull Request

Create a PR as usual. The changeset file will be included.

### Step 5: Automated Versioning

Once your PR is merged to `main`:

1. GitHub Actions will automatically create/update a "Version Packages" PR
2. This PR will contain:
   - Updated version numbers in `package.json`
   - Updated `CHANGELOG.md`
   - All changesets combined

3. When the maintainer merges the "Version Packages" PR, the version is automatically updated!

## Running CI Checks Locally

Before pushing your changes, run these commands to ensure CI will pass:

### Check Everything (Recommended)
```bash
npm run check
```

This checks both formatting and linting with Biome.

### Fix Everything Automatically
```bash
npm run check:fix
```

### Individual Commands

Format your code:
```bash
npm run format
```

Lint your code:
```bash
npm run lint
```

Build the project:
```bash
npm run build
```

Run tests:
```bash
npm test
```

### Run All CI Checks at Once
```bash
npm run ci
```

## Pull Request Guidelines

1. **Title Format**: Use conventional commit format (e.g., `feat: add new feature`, `fix: resolve bug`)
2. **Description**: Fill out the PR template completely
3. **Changeset**: Include a changeset if your changes should be versioned
4. **Tests**: Add tests for new features or bug fixes
5. **CI**: Ensure all CI checks pass

## Tips

- **Multiple changesets:** You can create multiple changesets in different PRs. They'll all be combined when released.
- **No changesets needed:** For docs, tests, or refactoring that doesn't affect the public API, you don't need a changeset.
- **Check before merging:** Make sure your PR includes a changeset file (unless it's explicitly not needed).
- **PR Size**: Try to keep PRs small and focused on a single concern for easier review.

## Code Style

This project uses:
- **Biome** for ultra-fast linting and formatting
- **Angular** style guide for TypeScript and component structure
- **Conventional Commits** for commit messages (enforced via git hooks)

### Git Hooks

This project uses Husky to automatically run checks before commits:
- **pre-commit**: Runs Biome on staged files
- **commit-msg**: Validates commit message format

## Questions?

Read the [Changesets documentation](https://github.com/changesets/changesets) for more information.

