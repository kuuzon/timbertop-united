import { Link } from 'react-router-dom';
import * as styles from './TuLink.css'

const TuLink = ({ to, children, smLink, outline }) => {
  return (
    <Link 
      className={`
        ${styles.navlink} 
        ${smLink ? styles.smLink : styles.mdLink}
        ${outline ? styles.outlineLink : styles.filledLink}
      `}
      to={to}
    >
      {children}
    </Link>
  )
}

export default TuLink