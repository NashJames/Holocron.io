import Image from 'next/image'
import AppLogo from '@public/holocron.svg'
import styles from './AppHeader.module.scss'
import { IconButton, Tooltip } from '@mui/material'
import { GitHub, OpenInNew, Storage } from '@mui/icons-material'

// @next/link for internal nav

const openArchives = () => {
  window.open('https://github.com/Juriy/swapi/tree/master/resources/fixtures', '_blank')
}

const openGitHub = () => {
  window.open('https://github.com/nashjames/holocron.io', '_blank')
}

// [tooltipLabel, navFunction, externalLink, icon]
const headerNav: [string, () => void, boolean, JSX.Element][] = [
  ['Data Archives', openArchives, true, <Storage key={1} />],
  ['GitHub Repository', openGitHub, true, <GitHub key={2} />],
]

export default function AppHeader() {
  return (
    <header className={styles.AppHeader}>
      <div>
        <Image src={AppLogo} alt={'Holocron.io Logo'} width="30" />
        <h2 className={styles.Title}>Holocron.io</h2>
      </div>
      {/* Small geometric design for a divider */}
      <div>
        {headerNav.map(([tooltipLabel, navFunction, externalLink, icon], i) => (
          <Tooltip key={i} title={tooltipLabel} className={styles.IconNav}>
            <IconButton key={i} type="button" size="small" onClick={navFunction} color="info">
              {icon}
              {externalLink ? <OpenInNew className={styles.ExternalLink} /> : <></>}
            </IconButton>
          </Tooltip>
        ))}
      </div>
    </header>
  )
}
