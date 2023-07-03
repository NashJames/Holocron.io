import { GitHub, OpenInNew, Storage } from "@mui/icons-material"
import { IconButton, Tooltip, Typography } from "@mui/material"
import { Oxanium } from "next/font/google"

import styles from "./AppHeader.module.scss"

const oxanium = Oxanium({ weight: "400", subsets: ["latin"] })

// @next/link for internal nav

// prettier-ignore
// [tooltipLabel, icon, externalLink, navLink]
const headerNav: [string, JSX.Element, boolean, string][] = [
  ['Data Archives', <Storage key={1} />, true, 'https://github.com/Juriy/swapi/tree/master/resources/fixtures'],
  ['GitHub Repository', <GitHub key={2} />, true, 'https://github.com/nashjames/holocron.io'],
]

export default function AppHeader() {
  return (
    <>
      <header className={styles.AppHeader}>
        <div className={styles.AppName}>
          <Typography variant="h4" className={oxanium.className}>
            Holocron.io
          </Typography>
        </div>
        <div>
          {headerNav.map(([tooltipLabel, icon, externalLink, navLink]) => (
            <Tooltip
              key={tooltipLabel}
              title={tooltipLabel}
              className={styles.IconTooltip}
            >
              <IconButton
                key={tooltipLabel}
                type="button"
                size="small"
                onClick={() =>
                  window.open(navLink, externalLink ? "_blank" : "_self")
                }
                color="info"
              >
                {icon}
                {externalLink && <OpenInNew className={styles.ExternalLinkIcon} />}
              </IconButton>
            </Tooltip>
          ))}
        </div>
      </header>
      <div className={styles.Border} />
    </>
  )
}
