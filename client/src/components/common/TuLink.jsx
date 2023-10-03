import { Link } from 'react-router-dom';
import * as styles from './TuLink.css'

const TuLink = ({ to, children, smLink, mdLink, outline }) => {
  return (
    <Link 
      className={`
        ${styles.navlink} 
        ${smLink ? styles.smLink : mdLink ? styles.mdLink : styles.lgLink}
        ${outline ? styles.outlineLink : styles.filledLink}
      `}
      to={to}
    >
      {children}
    </Link>
  )
}

export default TuLink