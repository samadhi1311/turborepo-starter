# Turborepo Starter

A monorepo setup with **Next.js** frontend, **NestJS** backend, and shared **ShadCN UI** components and **Drizzle** ORM.

## Project Structure

```
├── apps
│ ├── web # Next.js frontend
│ └── api # NestJS backend
├── packages
│ └── ui # Shared ShadCN UI components
└── turbo.json # Turborepo configuration
```

## Getting Started

### Install Dependencies

```bash
pnpm install
```

## Development

### Run all apps concurrently:

**Note**: Frontend runs on port `1228` and backend runs on port `3000`.

```bash
pnpm run dev
```

### Build all apps concurrently:

```bash
pnpm run build
```

## ShadCN UI Commands

### Generate new ShadCN UI component

```bash
pnpm dlx shadcn@latest add <component-name>
```

## Useful Scripts

- `npm run dev` Start all apps in development mode
- `npm run build` Build all apps
- `npm run lint` Lint all packages and apps
- `npm run format` Format all code with Prettier
