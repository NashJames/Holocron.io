# ![Banner](./public/readme/banner.svg)

<!-- prettier-ignore -->
> **Warning**
> [WIP]: Not ready for deployment

A simple frontend for accessing the [Star Wars API](https://swapi.dev/). The core of the app is built with Next.js v13, React v18, TailwindCSS and Material UI. It also includes smaller utilities for CI, testing and linting.

In future, I hope to extend it with a POST API implementation and some docs to mimic the full functionality.

## Initial Setup

<!-- prettier-ignore -->
> **Note**
> [Windows Only]: [Install WSL2](https://learn.microsoft.com/en-gb/windows/wsl/install-manual). Any commands below should be executed inside the Linux subsystem.

1. Install [Node Version Manager](https://github.com/nvm-sh/nvm#installing-and-updating) and execute `nvm install 18`
2. Install [PNPM](https://pnpm.io/installation) via `npm install -g pnpm`
3. Install [Playwright Browsers](https://playwright.dev/docs/intro) via `pnpm exec playwright install --force --with-deps chromium firefox webkit chrome msedge`
4. Install the [VS Code extensions](.vscode/extensions.json)

| Command        | Action                                                               |
| :------------- | :------------------------------------------------------------------- |
| `pnpm i`       | Installs dependencies                                                |
| `pnpm dev`     | Compiles and starts dev build at `localhost:3000`                    |
| `pnpm build`   | Compiles the code for production                                     |
| `pnpm start`   | Starts production build at `localhost:3000`                          |
| `pnpm clean`   | Safely removes all built files/folders                               |
| `pnpm fmt`     | Runs ESLint, Stylelint and Prettier                                  |
| `pnpm fmt:fix` | Runs ESLint, Stylelint and Prettier (with --fix)                     |
| `pnpm test`    | Runs Jest snapshots and Playwright e2e tests (requires `pnpm build`) |

## Project Structure

The main content is located inside the `src/` directory. The immediate subfolders organise code utilised across multiple pages into specific roles. Finally, the `src/pages/` directory renders both static and server-side code used in page generation. All further folders use a structure equivalent of navigating the URL, where following the code is similar to exploring the website itself. The exceptions are any special files/folders prefixed with an underscore (e.g. `_components`), and the `src/pages/api` directory with pre-built API route handling.

```yml
/public: Static assets (e.g. images, videos and fonts)
/tests: Tests, Jest snapshots and Playwright reports/results
/src: XML, CSS and TypeScript
  ├── /lib: Library specific handlers
  ├── /data: Common HTTP fetch functions
  ├── /components: Custom React components
  └── /pages: Client/Server page generation
        └── /api: API Routing
```
