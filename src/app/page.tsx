import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.glass} />
      <div className={styles.shapesContainer}>
        <div className={styles.shapes}>
          <div className={styles.circle1} />
          <div className={styles.square} />
          <div className={styles.circle2} />
        </div>
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>Jefferson Carlos</h1>
      </div>
    </>
  )
}
