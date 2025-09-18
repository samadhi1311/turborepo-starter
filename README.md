# Turborepo Starter

A monorepo setup with **Next.js** frontend, **NestJS** backend, and shared **ShadCN UI components**.

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
npm install
```

## Development

### Run all apps concurrently:

**Note**: Frontend runs on port `1228` and backend runs on port `3000`.

```bash
npm run dev
```

### Build all apps concurrently:
```bash
npm run build
```


## ShadCN UI Commands

### Generate new ShadCN UI component

```bash
npx shadcn-ui add <component-name>
```

## Useful Scripts

- `npm run dev`	    Start all apps in development mode
- `npm run build`	    Build all apps
- `npm run lint`	    Lint all packages and apps
- `npm run format`    Format all code with Prettier