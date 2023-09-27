import * as styles from './TuLabel.css'
import { Form } from 'react-bootstrap';

function TuLabel({ labelName }) {
  return (
    <Form.Label className={styles.styledLabel}>{labelName}</Form.Label>
  )
}

export default TuLabel