import Image from 'next/image'

import styles from './HolocronCube.module.scss'

import JediHolocron from '@public/illustrations/jedi-holocron.png'

/** Displays a rotating cube using multiple translated images */
export function HolocronCube() {
  const ImageProps = { src: JediHolocron, alt: 'Jedi Holocron Cube Face' }
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Cube}>
        {/* eslint-disable jsx-a11y/alt-text */}
        <Image {...ImageProps} className={styles.Front} />
        <Image {...ImageProps} className={styles.Back} />
        <Image {...ImageProps} className={styles.Top} />
        <Image {...ImageProps} className={styles.Bottom} />
        <Image {...ImageProps} className={styles.Left} />
        <Image {...ImageProps} className={styles.Right} />
      </div>
      <div className={styles.Shadow} />
    </div>
  )
}
