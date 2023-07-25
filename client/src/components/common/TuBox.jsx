import * as styles from './TuBox.css'
import TuLink from "./TuLink"

const TuBox = ({ title, content, button }) => {
  return (
    <div className={styles.boxSetting}>
      <h1 className={styles.boxTitle}>{title}</h1>
      <p className={styles.boxPara}>{content}</p>
      {button && (<div className={styles.boxButton}>
        <TuLink to={"#"}>{button}</TuLink>
      </div>
      )}
    </div>
  )
}

export default TuBox