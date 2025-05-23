---
sidebar_position: 3
---

# Project Structure

## Directory Overview

```
/
├── apps/
│   ├── backend/      ← Express + Node.js API
│   └── frontend/     ← React (Vite) client
├── packages/         ← Shared modules (e.g., utils, types)
├── .github/          ← GitHub Actions workflows
├── .vscode/          ← Editor settings
├── turbo.json        ← Turborepo pipeline config
└── package.json      ← Root workspace dependencies
```
## Key Directories

## apps/backend/

- **config/** – Supabase setup and configuration (e.g., `supabase.ts`)
- **controllers/** – Business logic (e.g., `authController.ts`)
- **middleware/** – Request middlewares (e.g., `authMiddleware.ts`)
- **routes/** – API route definitions (e.g., `authRoutes.ts`)
- **server.ts** – Express entry point and app initialization
- **types.ts** – TypeScript types used in the backend

## apps/frontend/

- **public/** – Static assets (e.g., `bike.svg`)
- **src/**
  - **assets/** – Images, fonts, and other assets
  - **components/** – Component modules by feature or page section
  - **contexts/** – React context providers
  - **content/** – Possibly markdown or data files
  - **hooks/** – Custom React hooks (e.g., `useUser.tsx`)
  - **layouts/** – Page and navigation layouts (e.g., `nav-layouts.tsx`)
  - **pages/** – Top-level pages served by React Router or Vite
  - **App.tsx** – Root component
  - **App.css** – Global styles

## packages/

- Reserved for reusable packages, utility modules, or shared types

## turborepo

- The project uses [Turborepo](https://turbo.build/) to manage pipelines across multiple apps and packages. See `turbo.json` for task coordination (e.g., build, lint, dev).

