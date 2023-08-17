import { GitHub, OpenInNew, Storage } from '@mui/icons-material'
import { IconButton, Tooltip, Typography } from '@mui/material'

const css = {
  root: 'fixed w-full bg-base/60 backdrop-blur z-50',
  content: 'flex items-center px-8 animate-fadeIn',
  title: 'font-title font-medium flex grow my-2',
  nav: {
    root: 'flex justify-end gap-2',
    tooltip: 'border border-dashed border-white mx-1 text-white',
    externalLinkIcon: 'absolute w-3 -mr-7 -mt-6',
  },
  border: 'border border-complement-tertiary absolute w-full animate-[growHorizontal_3s]',
}

// prettier-ignore
// [tooltipLabel, icon, externalLink, navLink]
const headerNav: [string, JSX.Element, boolean, string][] = [
  ['Data Archives', <Storage key={1} />, true, 'https://github.com/Juriy/swapi/tree/master/resources/fixtures'],
  ['GitHub Repository', <GitHub key={2} />, true, 'https://github.com/nashjames/holocron.io'],
]

/** Fixed navigation bar visible above content on all pages */
export function AppHeader() {
  return (
    <header className={css.root}>
      <div className={css.content}>
        <Typography variant="h4" className={css.title}>
          Holocron.io
        </Typography>
        <div>
          <div className={css.nav.root}>
            {headerNav.map(([tooltipLabel, icon, externalLink, navLink]) => (
              <Tooltip key={tooltipLabel} title={tooltipLabel} className={css.nav.tooltip}>
                <IconButton
                  type="button"
                  size="small"
                  onClick={() => window.open(navLink, externalLink ? '_blank' : '_self')}
                  color="info"
                >
                  {icon}
                  {externalLink && <OpenInNew className={css.nav.externalLinkIcon} />}
                </IconButton>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
      <div className={css.border} />
    </header>
  )
}
