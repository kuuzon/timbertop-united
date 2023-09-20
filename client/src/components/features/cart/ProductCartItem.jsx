import * as styles from './ProductCartItem.css';
import { priceFormatter } from '../../../utilities/readUtils';

function ProductCartItem({ product }) {
  return (
    <div className={styles.productGrid}>
      <img className={styles.productSnapshot} src={product.image} alt={product.name} />
      <figcaption className={styles.productDetails}>
        <h6 className={styles.productTitle}>{product.name}</h6>
        <p>Quantity: {product.quantity}</p>
        <p className={styles.productPrice}>{priceFormatter(product.totalPrice)}</p>
      </figcaption>
    </div>
  )
}

export default ProductCartItem