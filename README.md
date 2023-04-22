# ![Banner](./public/readme/banner.svg)

> **Warning** <br> [WIP]: Not ready for deployment

A simple frontend for accessing the [Star Wars API](https://swapi.dev/). The core of the app is built with Next.js v13, React v18 and Material UI. It also includes smaller utilities for CI, testing and linting.

In future, I hope to extend it with a POST API implementation and some docs to mimic the full functionality.

## Initial Setup

> **Note** <br> [Windows Only]: [Install WSL2](https://learn.microsoft.com/en-gb/windows/wsl/install-manual). Any commands below should be executed inside the Linux subsystem.

1. Install [Node Version Manager](https://github.com/nvm-sh/nvm#installing-and-updating) and execute `nvm install 16`
2. Install [PNPM](https://pnpm.io/installation) via `npm install -g pnpm`
3. Install [Playwright Browsers](https://playwright.dev/docs/intro) via `pnpm exec playwright install --with-deps chromium firefox webkit chrome msedge`
4. Install the [VS Code extensions](.vscode/extensions.json)

| Command       | Action                                            |
| :------------ | :------------------------------------------------ |
| `pnpm i`      | Installs dependencies                             |
| `pnpm dev`    | Compiles and starts dev build at `localhost:3000` |
| `pnpm build`  | Compiles the code for production                  |
| `pnpm start`  | Starts production build at `localhost:3000`       |
| `pnpm clean`  | Safely removes all built files/folders            |
| `pnpm format` | Runs ESLint, Stylelint and Prettier               |
| `pnpm test`   | Runs Jest snapshots and Playwright e2e tests      |

## Project Structure

The main content is located inside the `src/` directory. The immediate subfolders organise code utilised across multiple pages into specific roles. Finally, the `src/pages/` directory renders both static and server-side code used in page generation. All further folders use a structure equivalent of navigating the URL, where following the code is similar to exploring the website itself. The exceptions are any special files/folders prefixed with an underscore (e.g. `_components`), and the `src/pages/api` directory with pre-built API route handling.

```yml
`/public`: Static assets (e.g. images, videos and fonts)
`/tests`: Tests, Jest snapshots and Playwright reports/results
`/src`: XML, CSS and TypeScript
  `/components`: Global React components
  `/data`: Shared data fetch functions
  `/lib`: Library specific handlers
  `/pages`: Client/Server page generation
    `/api`: API Routing
```
