# FullStack Template

> **Warning** <br> [WIP]: Not ready for deloyment

## Getting Started

The core of this template is built with Astro, Preact and Docker. It's adaptable and well documented, so a new project can be started easily. Also, there are various other smaller utilties setup like CI, Tests and a bundle visualiser. Plus, some UI packages to make designing a little quicker.

After following the [Initial Setup](#initial-setup) below, execute `pnpm i` in the root of the repository to build the dependencies. Then, execute `pnpm start` and `pnpm run server` in split terminals (![vscode_light_split-vertical](https://raw.githubusercontent.com/microsoft/vscode-icons/master/icons/light/split-horizontal.svg?sanitize=true#gh-light-mode-only)![vscode_dark_split-vertical](https://raw.githubusercontent.com/microsoft/vscode-icons/master/icons/dark/split-horizontal.svg?sanitize=true#gh-dark-mode-only)) to launch the app. Any further executions should use only the commands specified in the [Tailored Guides](#tailored-guides).

### Initial Setup

> **Note** <br> [Windows Only]: [Install WSL2](https://learn.microsoft.com/en-gb/windows/wsl/install-manual). Any commands should be executed in the Linux subsystem.

1. Install [Node Version Manager](https://github.com/nvm-sh/nvm#installing-and-updating) and execute `nvm install 16`
2. Install [PNPM](https://pnpm.io/) via `npm install -g pnpm`
3. Install [VS Code](https://code.visualstudio.com/) and access the repo via `code .` in the repository location
4. Install the [recommended extensions](.vscode/extensions.json)

## Project Structure

The main content has been divided into several parts to keep the root folder tidy.

- `.github` and `.vscode` contain some general configuration to make getting started easier.
- `docs` is a collection of symlinks to README.md files located all across the repository.
- `frontend` is the home for the UI, including all code, tests and assets.
- `server` is the home for backend code and any filesystem/database configuration.

> / </br>
> ├── [.github/](.github/) </br>
> ├── [.vscode/](.vscode/) </br>
> ├── [pages/](pages/) </br>
> ├── [public/](public/) </br>
> ├── [tests/](tests/) </br>
> └── README.md </br>

## CLI

| Command                 | Action                                       |
| :---------------------- | :------------------------------------------- |
| `pnpm i`                | Installs dependencies                        |
| `pnpm start`            | Starts local dev server at `localhost:1234`  |
| `pnpm run lint`         |                                              |
| `pnpm run clean`        | Safely removes all built files/folders`      |
| `pnpm run test`         | Runs the playwright e2e tests                |
| `pnpm run test:codegen` | Records user actions as playwright e2e tests |
| `pnpm run analyse`      |                                              |

## Notable Packages

- [ ] [Next.js]() - Compiler, bundler, build tools and configuration handled togther. Provides pre-fetching, static/server rending and API routes
- [ ] [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) (5 mins)
- [ ] [React]() (x mins)
<!-- - [ ] [Preact](https://preactjs.com/tutorial/01-vdom) (x mins) - Skip to `Now with more JSX!` -->
- [Radix UI](https://www.radix-ui.com/docs/primitives/overview/getting-started) - Individually imported UI components

### Testing

[Installing Playwright](https://playwright.dev/docs/getting-started-vscode)
