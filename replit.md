# Analytica Security - replit.md

## Overview

Analytica Security is a luxury security services company website built as a full-stack TypeScript application. The platform showcases high-end electronic security solutions with AI-powered perimeter detection, surveillance systems, and VIP residential protection services. The site features a dark, sophisticated "quiet luxury" aesthetic with Spanish-language content targeting high-profile clients in Spain.

The application provides:
- Marketing pages (Home, Services, Technology, Contact)
- Service catalog fetched from database
- Contact inquiry submission system
- Animated, premium visual experience using Framer Motion

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style)
- **Animations**: Framer Motion for sophisticated entrance animations
- **Build Tool**: Vite with HMR support

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints under `/api/*`
- **Build**: esbuild for production bundling with selective dependency bundling

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema validation
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Migrations**: Drizzle Kit with `db:push` command

### API Structure
- `GET /api/services` - Retrieve all security services
- `POST /api/inquiries` - Submit contact inquiry

### Shared Code Pattern
The `shared/` directory contains code used by both frontend and backend:
- `schema.ts` - Database table definitions and Zod validation schemas
- `routes.ts` - API route definitions with type-safe request/response schemas

### Development vs Production
- **Development**: Vite dev server with HMR, proxied through Express
- **Production**: Static files served from `dist/public`, server bundled to `dist/index.cjs`

## External Dependencies

### Database
- **PostgreSQL**: Required via `DATABASE_URL` environment variable
- **Connection**: Uses `pg` Pool with Drizzle ORM wrapper

### UI Framework Dependencies
- **Radix UI**: Headless component primitives (dialogs, menus, forms, etc.)
- **Tailwind CSS**: Utility-first CSS with custom theme configuration
- **Lucide React**: Icon library used throughout the application

### Key Runtime Dependencies
- **express**: Web server framework
- **drizzle-orm**: Database ORM
- **@tanstack/react-query**: Data fetching and caching
- **framer-motion**: Animation library
- **zod**: Runtime type validation
- **react-hook-form**: Form handling with `@hookform/resolvers`

### Replit-Specific Plugins
- `@replit/vite-plugin-runtime-error-modal`: Error overlay in development
- `@replit/vite-plugin-cartographer`: Development tooling
- `@replit/vite-plugin-dev-banner`: Development mode indicator