<br />

<h1 align="center">nero-init</h1>

<p align="center">
  <img src="https://img.shields.io/npm/v/nero-init?color=6366f1" alt="npm version" />
  <img src="https://img.shields.io/npm/dt/nero-init?color=0f172a" alt="npm downloads" />
  <img src="https://img.shields.io/github/license/alcanivorax/nero-init?color=22c55e" alt="license" />
</p>

<br />

<p align="center">
  <img
    src="https://raw.githubusercontent.com/alcanivorax/nero-init/main/public/nero-init-preview.gif"
    alt="nero-init demo"
    width="800"
  />
</p>

<br >

Minimal project scaffold for my personal workflow.

Creates opinionated starter templates for:

- CLI tools
- Libraries
- Web (coming soon)

<br >

## Usage

```bash
npx nero-init
```

No arguments, no flags — just answer the prompts.

<br >

## Folder Structure

### CLI

```bash
.
├── src/                     # Source code
│   ├── cli/                 # CLI-specific logic
│   │   ├── args.ts          # Command-line arguments
│   │   └── options.ts       # CLI options & flags
│   └── index.ts             # Entry point
│
├── tests/                   # Tests
│   └── cli.test.ts
│
├── .github/
│   └── workflows/
│       └── ci.yaml          # CI pipeline
│
├── .gitignore               # Git ignore rules
├── .prettierrc              # Prettier configuration
├── .prettierignore          # Prettier ignore rules
│
├── eslint.config.js         # ESLint configuration
├── tsconfig.json            # TypeScript configuration
├── vitest.config.ts         # Test configuration
│
├── package.json             # Package metadata & scripts
├── README.md                # Project documentation
└── LICENSE                  # License
```

<br >

### Library

```bash
.
├── src/
│   └── index.ts              # Library entry point (public API)
│
├── tests/                    # Tests
│   └── lib.test.ts
│
├── .github/
│   └── workflows/
│       └── ci.yaml           # CI pipeline
│
├── .gitignore                # Git ignore rules
├── .prettierrc               # Prettier configuration
├── .prettierignore           # Prettier ignore rules
│
├── eslint.config.js          # ESLint configuration
├── tsconfig.json             # TypeScript configuration
├── vitest.config.ts          # Test configuration
│
├── package.json              # Package metadata & scripts
├── README.md                 # Documentation
└── LICENSE                   # License
```

<br >

<!-- ### Web

Next.js template bootstrapped via `create-next-app@latest` and preconfigured with:

- Zod — schema validation
- Prisma — database ORM
- Supabase — auth & backend services

<br > -->

## License

MIT
