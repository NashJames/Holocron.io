# Holocron.io

> **Warning** <br> [WIP]: Not ready for deployment

A simple frontend for accessing the [Star Wars API](https://swapi.dev/). The core of the app is built with Next.js v13, React v18 and Material UI. It also includes smaller utilities for CI, testing and linting.

In future, I hope to extend it with a POST API implementation and some docs to mimic the full functionality.

## Initial Setup

> **Note** <br> [Windows Only]: [Install WSL2](https://learn.microsoft.com/en-gb/windows/wsl/install-manual). Any commands below should be executed inside the Linux subsystem.

1. Install [Node Version Manager](https://github.com/nvm-sh/nvm#installing-and-updating) and execute `nvm install 16`
2. Install [PNPM](https://pnpm.io/installation) via `npm install -g pnpm`
3. Install [Playwright Browsers](https://playwright.dev/docs/intro) via `pnpm exec playwright install --with-deps chromium firefox webkit chrome msedge`
4. Install the [VS Code extensions](.vscode/extensions.json)

| Command             | Action                                            |
| :------------------ | :------------------------------------------------ |
| `pnpm i`            | Installs dependencies                             |
| `pnpm dev`          | Compiles and starts dev build at `localhost:3000` |
| `pnpm build`        | Compiles the code for production                  |
| `pnpm start`        | Starts production build at `localhost:3000`       |
| `pnpm format`       | Runs ESLint, Stylelint and Prettier               |
| `pnpm clean`        | Safely removes all built files/folders            |
| `pnpm test`         | Runs the playwright e2e tests                     |
| `pnpm test:codegen` | Records user actions as playwright e2e tests      |

## Project Structure

The main content is located inside the `pages/` directory. The subfolders follow a structure equivalent of the URL, where navigating the code is similar to navigating the app itself. It also includes some special files prefixed with an underscore, and the `pages/api/` folder with in-built API routing.

- `pages/` contains all the XML, CSS and TypeScript used by both the server and client
- `public/` contains all the static assets, including images, videos and fonts
- `tests/` contains all written tests and is the output directory for any reports/results
