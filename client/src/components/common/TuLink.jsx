import { Link } from 'react-router-dom';
import * as styles from './TuLink.css'

const TuLink = ({ to, children, smLink }) => {
  return (
    <Link 
      className={`
        ${styles.navlink} 
        ${smLink ? styles.smLink : styles.mdLink}
      `}
      to={to}
    >
      {children}
    </Link>
  )
}

export default TuLink