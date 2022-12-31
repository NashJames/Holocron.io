import Image from 'next/image'
import AppLogo from '@public/holocron.svg'
import styles from './TitleSection.module.scss'
import { Secular_One, Poiret_One, Text_Me_One } from '@next/font/google'
import { Typography } from '@mui/material'

const secularOne = Secular_One({ weight: '400', subsets: ['latin'] })
const textMeOne = Text_Me_One({ weight: '400', subsets: ['latin'] })
const poiretOne = Poiret_One({ weight: '400', subsets: ['latin'] })

/// Section for the title text and logo
export default function TitleSection() {
  return (
    <section className={styles.content}>
      <div className={styles.Title}>
        <Typography variant="h1" className={textMeOne.className}>
          A modern <span className={secularOne.className}>{'{'}</span> API{' '}
          <span className={secularOne.className}>{'}'}</span>
          <br />
          for the <span className={poiretOne.className}>Jedi Archives</span>
        </Typography>
      </div>
      <Image src={AppLogo} alt={'Holocron.io Logo'} className={styles.Logo} />
    </section>
  )
}
