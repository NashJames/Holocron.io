import Image from 'next/image'
import JediHolocron from '@public/illustrations/jedi-holocron.png'
import styles from './HolocronCube.module.scss'

/// Floating cube of Holocron images
export default function HolocronCube() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cube}>
        <Image src={JediHolocron} alt={'Jedi Holocron SVG'} className={styles.front} />
        <Image src={JediHolocron} alt={'Jedi Holocron SVG'} className={styles.back} />
        <Image src={JediHolocron} alt={'Jedi Holocron SVG'} className={styles.top} />
        <Image src={JediHolocron} alt={'Jedi Holocron SVG'} className={styles.bottom} />
        <Image src={JediHolocron} alt={'Jedi Holocron SVG'} className={styles.left} />
        <Image src={JediHolocron} alt={'Jedi Holocron SVG'} className={styles.right} />
      </div>
      <div className={styles.shadow}></div>
    </div>
  )
}
