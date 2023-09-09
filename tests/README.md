# `tests/` Directory

## Commands

| Command      | Action                                                           |
| :----------- | :--------------------------------------------------------------- |
| `pnpm build` | Compiles an optimised app for production                         |
| `pnpm test`  | Runs Playwright e2e and regression tests (requires `pnpm build`) |

## Running Tests

`pnpm build` is required to run the e2e tests, and again after each `src/` update. The tests can have a flaky pass/fail rate, especially on less powerful systems. They appear more reliable when using an optimised build.

<!-- prettier-ignore -->
> **Note**
> Remember to re-execute `pnpm build` even after small code changes (e.g. adding an `aria-label=""`)

## Interpreting Results

## GitHub Actions CI

In some situations, the 'Run Playwrigts tests' workflow step will appear to run indefinitely and produce no logs. One potential cause could simply be too many failing tests. Updating the tests most of the tests should fix the issue.
