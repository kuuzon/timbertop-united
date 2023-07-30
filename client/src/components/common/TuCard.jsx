import * as styles from './TuCard.css'

const TuCard = ({title, authform, children}) => {
  return (
    <div className={authform ? styles.authForm : styles.generalForm}>
      <div className={styles.container}>
        <div className={styles.leadCard}>
          <p className={styles.cardTitle}>{title}</p>
          <div>{children}</div>
        </div>        
      </div>
    </div>
  )
}

export default TuCard