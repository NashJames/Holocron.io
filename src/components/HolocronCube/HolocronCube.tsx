import Image from 'next/image'

import JediHolocron from '@public/illustrations/jedi-holocron.png'

import styles from './HolocronCube.module.scss'

/** Displays a rotating cube using multiple translated images */
export function HolocronCube() {
  const ImageProps = { src: JediHolocron, alt: 'Jedi Holocron Cube Face' }
  return (
    <div className={styles.wrapper}>
      <div className={styles.cube}>
        {/* eslint-disable jsx-a11y/alt-text */}
        <Image {...ImageProps} className={styles.front} />
        <Image {...ImageProps} className={styles.back} />
        <Image {...ImageProps} className={styles.top} />
        <Image {...ImageProps} className={styles.bottom} />
        <Image {...ImageProps} className={styles.left} />
        <Image {...ImageProps} className={styles.right} />
      </div>
      <div className={styles.shadow} />
    </div>
  )
}
