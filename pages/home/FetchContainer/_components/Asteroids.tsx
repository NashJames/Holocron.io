import Image from 'next/image'
import styles from './Asteroids.module.scss'
import AsteroidRedSVG from '@public/illustrations/asteroid-red.svg'
import AsteroidBlueSVG from '@public/illustrations/asteroid-blue.svg'
import AsteroidPinkSVG from '@public/illustrations/asteroid-pink.svg'

/**  */
export default function Asteroids() {
  return (
    <>
      <Image
        alt={'An illustration of a red asteroid'}
        className={`${styles.Asteroid} ${styles.AnimateAsteroidHigh} ${styles.delay6s}`}
        src={AsteroidRedSVG}
        draggable={false}
      />
      <Image
        alt={'An illustration of a red asteroid'}
        className={`${styles.Asteroid} ${styles.AnimateAsteroidLow} ${styles.delay12s}`}
        src={AsteroidRedSVG}
        draggable={false}
      />

      <Image
        alt={'An illustration of a blue asteroid'}
        className={`${styles.Asteroid} ${styles.AnimateAsteroidMid} `}
        src={AsteroidBlueSVG}
        draggable={false}
      />
      <Image
        alt={'An illustration of a blue asteroid'}
        className={`${styles.Asteroid} ${styles.AnimateAsteroidLow} ${styles.delay9s}`}
        src={AsteroidBlueSVG}
        draggable={false}
      />

      <Image
        alt={'An illustration of a pink asteroid'}
        className={`${styles.Asteroid} ${styles.AnimateAsteroidHigh} ${styles.delay12s}`}
        src={AsteroidPinkSVG}
        draggable={false}
      />
      <Image
        alt={'An illustration of a pink asteroid'}
        className={`${styles.Asteroid} ${styles.AnimateAsteroidMid} ${styles.delay6s}`}
        src={AsteroidPinkSVG}
        draggable={false}
      />
    </>
  )
}
