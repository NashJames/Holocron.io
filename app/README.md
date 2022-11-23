# `app/` Directory

## Folder Structure

### Underscore Folders

- `_common/` contains any component files used across the project
- `_components/` contains any individual component files used in the parent folder
- `_lib/` contains any files required to fix individual libraries
- `_public` contains all the static assets, including images, videos and fonts
- `_root/` declutters the `app/` directory by storing various Next.js 'special files'

## Next.js v13-beta Features

- [Core Basics of React 18 Server Components](https://beta.nextjs.org/docs/getting-started#thinking-in-server-components)
- [When to add 'Use Client' to components?](https://beta.nextjs.org/docs/rendering/server-and-client-components#when-to-use-server-vs-client-components) - Generally, on dynamic usage like `onClick()`, `useState()`, `useEffect()` or `{showHTML && <></>}`
- [Integrating 3rd Party providers](https://beta.nextjs.org/docs/rendering/server-and-client-components#rendering-third-party-context-providers-in-server-components). E.g. Themes or Auth
