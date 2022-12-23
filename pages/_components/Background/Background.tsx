import Image from 'next/image'
import styles from './Background.module.scss'
import DeathStarSVG from '@public/illustrations/death-star-bg.svg'

/// Additional Background content (e.g. Illustrations)
export default function Background() {
  return (
    <Image
      alt={'An illustration of the Death Star'}
      className={styles.DeathStar}
      src={DeathStarSVG}
      width="600"
    />
  )
}
