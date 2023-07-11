import PropTypes from 'prop-types'
import * as styles from './TuButton.css'
import { Button } from 'react-bootstrap'

const TuButton = (props) => {
  return (
    <Button className={styles.button}>{props.children}</Button>
  )
}

TuButton.propTypes = {
  children: PropTypes.any 
}

export default TuButton