import Image from 'next/image'

import styles from './Asteroids.module.scss'

import AsteroidBlueSVG from '@public/illustrations/asteroid-blue.svg'
import AsteroidPinkSVG from '@public/illustrations/asteroid-pink.svg'
import AsteroidRedSVG from '@public/illustrations/asteroid-red.svg'

/** Collection of animated SVGs */
export default function Asteroids() {
  return (
    <>
      <Image
        alt={'An illustration of a red asteroid'}
        className={`${styles.Asteroid} ${styles.HighPosition} ${styles.Delay6s}`}
        src={AsteroidRedSVG}
        draggable={false}
      />
      <Image
        alt={'An illustration of a red asteroid'}
        className={`${styles.Asteroid} ${styles.LowPosition} ${styles.Delay3s}`}
        src={AsteroidRedSVG}
        draggable={false}
      />

      <Image
        alt={'An illustration of a blue asteroid'}
        className={`${styles.Asteroid} ${styles.MidPosition} `}
        src={AsteroidBlueSVG}
        draggable={false}
      />
      <Image
        alt={'An illustration of a blue asteroid'}
        className={`${styles.Asteroid} ${styles.LowPosition} ${styles.Delay9s}`}
        src={AsteroidBlueSVG}
        draggable={false}
      />

      <Image
        alt={'An illustration of a pink asteroid'}
        className={`${styles.Asteroid} ${styles.HighPosition} ${styles.Delay5s}`}
        src={AsteroidPinkSVG}
        draggable={false}
      />
      <Image
        alt={'An illustration of a pink asteroid'}
        className={`${styles.Asteroid} ${styles.MidPosition} ${styles.Delay1s}`}
        src={AsteroidPinkSVG}
        draggable={false}
      />
    </>
  )
}
