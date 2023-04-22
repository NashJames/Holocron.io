# `tests/` Directory

## Running Tests

`pnpm build` is required to run the e2e tests, and again after each `src/` update. The tests can have a flaky pass/fail rate, especially on less powerful systems. They appear more reliable when using an optimised build.

| Command                | Action                    |
| :--------------------- | :------------------------ |
| `pnpm test`            | Runs both                 |
| `pnpm test:jest`       | Runs Jest snapshots       |
| `pnpm test:playwright` | Runs Playwright e2e tests |

<!-- ## Interpreting Results -->
