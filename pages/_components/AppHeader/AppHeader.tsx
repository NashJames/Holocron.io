import styles from './AppHeader.module.scss'
import { IconButton, Tooltip, Typography } from '@mui/material'
import { GitHub, OpenInNew, Storage } from '@mui/icons-material'
import { Oxanium } from '@next/font/google'

const oxanium = Oxanium({ weight: '400', subsets: ['latin'] })

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
    <div className={styles.goldBorder}>
      <div className={`${styles.goldBorder} ${styles.blackBorder}`}>
        <header className={styles.AppHeader}>
          <div className={styles.AppName}>
            <Typography variant="h4" className={oxanium.className}>
              Holocron.io
            </Typography>
          </div>
          <div>
            {headerNav.map(([tooltipLabel, navFunction, externalLink, icon], i) => (
              <Tooltip key={i} title={tooltipLabel} className={styles.IconTooltip}>
                <IconButton key={i} type="button" size="small" onClick={navFunction} color="info">
                  {icon}
                  {externalLink ? <OpenInNew className={styles.ExternalLinkIcon} /> : <></>}
                </IconButton>
              </Tooltip>
            ))}
          </div>
        </header>
      </div>
    </div>
  )
}
