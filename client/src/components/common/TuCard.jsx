import * as styles from './TuCard.css'

const TuCard = ({title, authform, children }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.leadCard} ${authform ? styles.authForm : styles.generalForm}`}>
        <p className={styles.cardTitle}>{title}</p>
        <div>{children}</div>
      </div>        
    </div>
  )
}

export default TuCard