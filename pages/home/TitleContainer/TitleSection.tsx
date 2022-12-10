import styles from './TitleSection.module.scss'

export default function TitleSection() {
  return (
    <section className={styles.content}>
      <h1>holocron.io</h1>
      <code>
        Holocrons were designed as holographic storage devices, built to hold ancient lessons and
        valuable information
      </code>
    </section>
  )
}
