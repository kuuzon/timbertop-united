import * as styles from './ProductCounter.css'
import TuButton from "../../common/TuButton"

function ProductCounter({ productCount, setProductCount }) {
  function handleIncrement(e){
    e.preventDefault()
    setProductCount(productCount + 1)
  }
  function handleDecrement(e){
    e.preventDefault()
    if(productCount > 0){
      setProductCount(productCount - 1)
    }
  }

  return (
    <div className={styles.btnBox}>
      <TuButton smBtn onClick={handleDecrement}>-</TuButton>
      <span className={styles.counterBox}>{productCount}</span>
      <TuButton smBtn onClick={handleIncrement}>+</TuButton>
    </div>
  )
}

export default ProductCounter