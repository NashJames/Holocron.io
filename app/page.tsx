import styles from './home.module.scss'
import FetchContainer from './_components/FetchContainer'

// Fetch should add to the url under /data/[subject]/[id]#APISearch

export default function Page() {
  return (
    <div className={styles.content}>
      {/* Header? */}
      <div className={styles.title}>
        <h1>holocron.io</h1>
        <code>
          Holocrons were designed as holographic storage devices, built to hold ancient lessons and
          valuable information
        </code>
      </div>
      <FetchContainer />
      {/* Footer? */}
    </div>
  )
}
