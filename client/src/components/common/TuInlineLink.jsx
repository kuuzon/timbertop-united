import * as styles from './TuInlineLink.css'
import { Link } from 'react-router-dom'

function TuInlineLink({ to, descriptiveText, linkText }) {
  return (
    <div className={styles.userNav}>
      <span>{descriptiveText}
        <Link to={to}>{linkText}</Link>
      </span>
    </div>
  )
}

export default TuInlineLink