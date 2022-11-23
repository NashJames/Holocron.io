# Holocron

> **Warning** <br> [WIP]: Not ready for deloyment

A simple frontend for accessing the [Star Wars API](https://swapi.dev/). The core of the app is built with Next.js, React and Radix UI. It also includes smaller utilities for CI, testing and linting.

## Initial Setup

> **Note** <br> [Windows Only]: [Install WSL2](https://learn.microsoft.com/en-gb/windows/wsl/install-manual). Any commands below should be executed inside the Linux subsystem.

1. Install [Node Version Manager](https://github.com/nvm-sh/nvm#installing-and-updating) and execute `nvm install 16`
2. Install [PNPM](https://pnpm.io/installation) via `npm install -g pnpm`
3. Install [Playwright](https://playwright.dev/docs/intro) via `pnpm dlx playwright install --with-deps chromium firefox webkit chrome msedge`
4. Install the [VS Code extensions](.vscode/extensions.json)

| Command             | Action                                            |
| :------------------ | :------------------------------------------------ |
| `pnpm i`            | Installs dependencies                             |
| `pnpm dev`          | Compiles and starts dev build at `localhost:3000` |
| `pnpm build`        | Compiles the code for production                  |
| `pnpm start`        | Starts production build at `localhost:3000`       |
| `pnpm lint`         | Runs ESLint                                       |
| `pnpm clean`        | Safely removes all built files/folders            |
| `pnpm test`         | Runs the playwright e2e tests                     |
| `pnpm test:codegen` | Records user actions as playwright e2e tests      |

## Project Structure

The main content is located inside the `app/` directory. The subfolders follow a structure equivalent of the URL, where navigating the code is similar to navigating the app itself. Any additions to the pages or tests should follow the same architecture.

- `app/` contains all TypeScript, CSS and static assets relevant to the creation of the frontend
- `pages/` contains any API endpoints
- `tests/` contains all written tests and is the output directory for any reports/results

Each TypeScript XML (`.tsx`) contains a new unique property from Next.js v13-beta, which makes use of React Server Components to favour rendering content on the server. Simply, if it requires any form of re-rendering, such as React Hooks or conditional HTML, the JavaScript should get sent to the client ([read more](https://beta.nextjs.org/docs/getting-started#thinking-in-server-components)).

```tsx
'use client'
import styles from 'page.module.scss' /// CSS

export default function Home() {
  /// TypeScript
  return (
    /// XML
    <CustomElement className={styles.customElement} />
  )
}
```

## Future Improvements

- Migrate to Preact (waiting on turpopack preact integration)
- Install turbopack bundle visualiser (waiting on release)
- Install turbopack sitemap generator (waiting on release)
