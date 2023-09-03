import { Square3Stack3DIcon } from '@heroicons/react/24/outline'

import NavLinks from './NavLinks'

import GitHubIcon from '@public/icons/Github'

const css = {
  root: 'fixed w-full bg-base/60 backdrop-blur z-50',
  content: 'flex items-center px-8 py-2 animate-fadeIn',
  title: 'flex grow font-title text-3xl',
  nav: 'flex justify-end gap-3',
  border: 'border border-complement-tertiary absolute w-full animate-[growHorizontal_3s]',
}

// [label, icon, isExternalLink, link]
export type NavLinkType = [string, JSX.Element, boolean, string]

// prettier-ignore
const linkData: NavLinkType[] = [
  ['Data Archives', <Square3Stack3DIcon className='w-6' key={0} />, true, 'https://github.com/Juriy/swapi/tree/master/resources/fixtures'],
  ['GitHub Repository', <GitHubIcon className='w-6' key={1} />, true, 'https://github.com/nashjames/holocron.io'],
]

/** Fixed navigation bar visible above content on all pages */
export function AppHeader() {
  return (
    <header className={css.root}>
      <div className={css.content}>
        <h2 className={css.title}>Holocron.io</h2>
        <div>
          <div className={css.nav}>
            <NavLinks links={linkData} />
          </div>
        </div>
      </div>
      <div className={css.border} />
    </header>
  )
}
