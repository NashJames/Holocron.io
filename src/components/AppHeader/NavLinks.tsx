'use client'

import { GitHub, OpenInNew, Storage } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'

const css = {
  tooltip: 'border border-dashed border-white mx-1 text-white',
  externalLinkIcon: 'absolute w-3 -mr-7 -mt-6',
}

// prettier-ignore
// [tooltipLabel, icon, externalLink, navLink]
const headerNav: [string, JSX.Element, boolean, string][] = [
  ['Data Archives', <Storage key={1} />, true, 'https://github.com/Juriy/swapi/tree/master/resources/fixtures'],
  ['GitHub Repository', <GitHub key={2} />, true, 'https://github.com/nashjames/holocron.io'],
]

/** Collection of links to be rendered in the AppHeader */
export default function NavLinks() {
  return headerNav.map(([tooltipLabel, icon, externalLink, navLink]) => (
    <Tooltip key={tooltipLabel} title={tooltipLabel} className={css.tooltip}>
      <IconButton
        type="button"
        size="small"
        onClick={() => window.open(navLink, externalLink ? '_blank' : '_self')}
        color="info"
      >
        {icon}
        {externalLink && <OpenInNew className={css.externalLinkIcon} />}
      </IconButton>
    </Tooltip>
  ))
}
