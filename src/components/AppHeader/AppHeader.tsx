import { Typography } from '@mui/material'

import NavLinks from './NavLinks'

const css = {
  root: 'fixed w-full bg-base/60 backdrop-blur z-50',
  content: 'flex items-center px-8 animate-fadeIn',
  title: 'font-title font-medium flex grow my-2',
  nav: 'flex justify-end gap-2',
  border: 'border border-complement-tertiary absolute w-full animate-[growHorizontal_3s]',
}

/** Fixed navigation bar visible above content on all pages */
export function AppHeader() {
  return (
    <header className={css.root}>
      <div className={css.content}>
        <Typography variant="h4" className={css.title}>
          Holocron.io
        </Typography>
        <div>
          <div className={css.nav}>
            <NavLinks />
          </div>
        </div>
      </div>
      <div className={css.border} />
    </header>
  )
}
