import PropTypes from 'prop-types'
import * as styles from './TuButton.css'
import { Button } from 'react-bootstrap'

const TuButton = ({ children, smBtn, mdBtn, outline, loadingState, onClick }) => {
  return (
    <Button 
      className={`
        ${styles.button} 
        ${smBtn ? styles.smBtn : mdBtn ? styles.mdBtn : styles.lgBtn}
        ${outline ? styles.outlineBtn : styles.filledBtn}
      `}
      type={onClick ? "button" : "submit"} 
      onClick={onClick}
      disabled={loadingState ? 1 : 0}
    >
      {children}
    </Button>
  )
}

TuButton.propTypes = {
  children: PropTypes.any,
  smBtn: PropTypes.bool,
  loadingState: PropTypes.bool,
  onClick: PropTypes.func,
}

export default TuButton