import Image from 'next/image'
import JediHolocron from '@public/illustrations/jedi-holocron.png'
import styles from './HolocronCube.module.scss'

/** Displays a rotating cube using multiple translated images */
export default function HolocronCube() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Cube}>
        <Image src={JediHolocron} alt={'Jedi Holocron SVG'} className={styles.Front} />
        <Image src={JediHolocron} alt={'Jedi Holocron SVG'} className={styles.Back} />
        <Image src={JediHolocron} alt={'Jedi Holocron SVG'} className={styles.Top} />
        <Image src={JediHolocron} alt={'Jedi Holocron SVG'} className={styles.Bottom} />
        <Image src={JediHolocron} alt={'Jedi Holocron SVG'} className={styles.Left} />
        <Image src={JediHolocron} alt={'Jedi Holocron SVG'} className={styles.Right} />
      </div>
      <div className={styles.Shadow}></div>
    </div>
  )
}