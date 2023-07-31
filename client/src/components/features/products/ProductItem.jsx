import { Link } from "react-router-dom"
import * as styles from './ProductItem.css'

function ProductItem(props) {
  return (
    <figure>
      <Link className={styles.productLink} to="#">
        <div className={styles.productCard}>
          {/* IMAGE BOX: PICTURE ELEMENT */}
          <picture>
            <source className={styles.productImage} media="(min-width:768px)" srcSet={props.image} />
            <img className={styles.productCardImage} src={props.image} alt={props.productName} />
          </picture>
          {/* TEXT BOX FOR PRODUCT DETAILS: FIGCAPTION SUBELEMENT */}
          <figcaption className={styles.productCardContent}>
            <h2 className={styles.productCardTitle}>{props.productName}</h2>
            <p className={styles.productCardDescription}>{props.price}</p>
          </figcaption>
        </div>
      </Link>
    </figure>
  )
}

export default ProductItem