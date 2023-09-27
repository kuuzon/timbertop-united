import * as styles from './TuInput.css';
import { forwardRef } from 'react';
import { Form } from 'react-bootstrap';

// eslint-disable-next-line react/display-name
const TuInput = forwardRef(({ type, placeholder, name, value, onChange }, ref) => {
  if(ref){
    return (
      <Form.Control 
        className={styles.styledInput}
        type={type} 
        placeholder={placeholder} 
        ref={ref}
      />
    )
  }

  return (
    <Form.Control 
      className={styles.styledInput}
      type={type} 
      placeholder={placeholder} 
      name={name}
      value={value}
      onChange={onChange}
    />
  )
});

export default TuInput