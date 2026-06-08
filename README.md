# AGENCY-AI

Agency landing page built with React, Vite, and Tailwind CSS. This project provides a clean, responsive template for showcasing services, portfolio work, team members, and contact information.

## Features

- Modern React components and layout for an agency website
- Responsive design powered by Tailwind CSS
- Fast development with Vite (HMR)
- ESLint configured for consistent code quality

## Tech Stack

- **Framework:** React 19
- **Bundler / Dev Server:** Vite
- **Styling:** Tailwind CSS
- **Linting:** ESLint

## Quick Start

Requirements: Node.js 16+ and npm

1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview production build locally

```bash
npm run preview
```

5. Run linter

```bash
npm run lint
```

## Project Structure

Key files and folders:

- `src/` — application source
	- `components/` — UI components (`Header.jsx`, `Hero.jsx`, `Services.jsx`, `OurWork.jsx`, `TeamMembers.jsx`, `TrustedCompanies.jsx`, `Contact.jsx`, `Footer.jsx`)
	- `assets/` — images and asset helpers
	- `main.jsx` — app entry
	- `App.jsx` — root component
- `index.html` — app HTML
- `tailwind.config.js` — Tailwind configuration
- `vite.config.js` — Vite configuration
- `package.json` — scripts and dependencies

## Notes

- Tailwind is already configured in `tailwind.config.js`. Modify the content paths in that file when adding new pages or component folders.
- ESLint is available via `npm run lint`. Adjust rules in the ESLint config if you add TypeScript or other frameworks.

## Contributing

Contributions are welcome. Open an issue or submit a pull request to propose changes.

## License

Specify a license for your project if you intend to open-source it.
