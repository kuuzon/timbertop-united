import * as styles from './ProductsList.css'
import ProductItem from "./ProductItem"
import { priceFormatter } from '../../../utilities/readUtils';

function ProductsList({ products }) {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.productGrid}>
        {products.map( product => (
          <ProductItem 
            key={product.id}
            productName={product.name}
            description={product.description}
            category={product.category}
            price={priceFormatter(product.price)}
            size={product.size}
            texture={product.texture}
            onSale={product.onSale}
            isAvailable={product.isAvailable}
            image={product.image}
            // ADD THUMBNAIL IMAGE
          />
        ))}
      </div>
    </div>
  )
}

export default ProductsList