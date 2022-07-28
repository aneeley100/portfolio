import styles from "../styles/Foot.module.css"

export default function Foot() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerText}> © {(new Date().getFullYear())} Andrew Neeley. All Rights Reserved.</div>
    </div>
  )
}