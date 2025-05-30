---
sidebar_position: 2
---

# Overview 

## System at a Glance
Below are the frontend and backend tech stacks of the Recyclery Collective Website, as well as the key directories for each of the repositories

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

## Key Directories

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

## apps/backend/

- **config/** – Supabase setup and configuration (e.g., `supabase.ts`)
- **controllers/** – Business logic (e.g., `authController.ts`)
- **middleware/** – Request middlewares (e.g., `authMiddleware.ts`)
- **routes/** – API route definitions (e.g., `authRoutes.ts`)
- **server.ts** – Express entry point and app initialization
- **types.ts** – TypeScript types used in the backend


## Deployment Architecture

The project uses a **split deployment architecture** hosted entirely on **Vercel**, separating the frontend and backend for modular development and deployment.

- The **frontend** is a Next.js app written in TypeScript and styled with Tailwind CSS. It handles user-facing content, static pages, and dynamic UI components.
- The **backend** is an Express.js server written in TypeScript. It handles API routing and administrative logic.
- **Supabase** is used to provide authentication and database services. Admin users authenticate via Supabase to perform restricted actions like uploading or updating photos on the site.

This architecture allows for independent scaling, simplified updates, and secure role-based access for admin features.


## Decision Log

| Choice                               | Rationale                                                                 |
|--------------------------------------|---------------------------------------------------------------------------|
| Chose **React** for frontend         | Standard modern framework with component reusability                     |
| Used **Tailwind CSS**               | Utility-first styling for fast prototyping and consistency               |
| Backend built with **Express.js**    | Lightweight, flexible Node.js framework                                  |
| Chose **Supabase** for backend       | Open-source Firebase alternative; built-in auth and Postgres database    |
| Adopted **Docusaurus** for docs      | Built-in docs support, versioning, and quick setup                       |
| Deployed frontend on **Vercel**      | Zero-config, git-connected deployments for frontend projects             |

