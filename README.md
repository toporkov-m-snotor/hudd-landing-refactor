<p align="center">
  <img src="./app/icon.svg" width="96" alt="Hudd Logo" style="border-radius: 10px" />
</p>

<h4 align="center">Landing page for the Hudd application.</h4>

## 🚀 Local Setup (Quick Start)

1. Install dependencies:

```bash
pnpm install
```

2. Run the application:

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`.

## 📦 Available Commands

All commands below are run with `pnpm`:

- **Start dev server**

  ```bash
  pnpm dev
  ```

  Starts the Next.js development server on port 3000.

- **Build for production**

  ```bash
  pnpm build
  ```

  Builds the application for production using Next.js.

- **Start production server**

  ```bash
  pnpm start
  ```

  Serves the built application locally, useful for testing the production build.

- **Run ESLint**

  ```bash
  pnpm lint
  ```

  Lints the codebase using ESLint.

## 🔒 Git Hooks

This project uses [Husky](https://typicode.github.io/husky) with the following hooks:

- **pre-commit** — runs ESLint on staged files and verifies the production build passes.
- **commit-msg** — enforces [Conventional Commits](https://www.conventionalcommits.org/) format.

Commit message format: `type(scope): subject`

```
feat: add hero section animation
fix: correct mobile nav layout
chore: update dependencies
```
