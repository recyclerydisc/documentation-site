---
sidebar_position: 1
---

# Introduction

Welcome to the official documentation for The Recyclery Collective Website — a student-led project built as part of Northwestern University’s Develop+ Innovate for Social Change (DISC) club.

This documentation provides technical guidance and context for developers, designers, and stakeholders contributing to the continued development and maintenance of the site.

## Overview

The website serves as a digital platform for The Recyclery Collective, a nonprofit focused on bicycle education, access, and sustainability in the Evanston and Chicago area. This project aims to modernize their digital presence, making it easier for community members to access services, volunteer opportunities, and events.

## Tech Stack

### Frontend

- **Next.js** for server-side rendering and routing
- **React** for building component-based UIs
- **Tailwind CSS** for utility-first styling
- **TypeScript** for typed JavaScript

### Backend

- **Node.js** for server-side JavaScript
- **Express** for API routing
- **Supabase** for database and auth services


### Development Tools

- **Git + GitHub** for version control and collaboration
- **ESLint + Prettier** for code linting and formatting
- **VS Code** as the recommended code editor


## Project Structure
```
/
├── apps/
│   ├── backend/      ← Express + Node.js API
│   └── frontend/     ← React (likely with Vite) client
├── packages/         ← Shared packages/modules if any (e.g., UI lib, utils)
├── .github/          ← GitHub Actions CI workflows
├── .vscode/, .turbo/ ← Config dirs
├── turbo.json        ← Turborepo pipeline config
├── package.json      ← Root-level dependencies (for all workspaces)

```

