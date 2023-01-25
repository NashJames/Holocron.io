import { Typography } from '@mui/material'
import styles from './TitleSection.module.scss'
import HolocronCube from './_components/HolocronCube'
import { Poiret_One, Text_Me_One } from '@next/font/google'

const textMeOne = Text_Me_One({ weight: '400', subsets: ['latin'] })
const poiretOne = Poiret_One({ weight: '400', subsets: ['latin'] })

/** Formatting for the Title text and Logo. Responsible for the positioning of `FetchSection()` */
export default function TitleSection() {
  return (
    <section className={styles.Content}>
      <div className={styles.Title}>
        <Typography variant="h1" className={textMeOne.className}>
          A modern API
          <br />
          for the <span className={poiretOne.className}>Jedi Archives</span>
        </Typography>
      </div>
      <div className={styles.Logo}>
        <HolocronCube />
      </div>
    </section>
  )
}
