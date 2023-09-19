import * as styles from './ProductCart.css';
import { priceFormatter } from '../../../utilities/readUtils';
import ProductCartItem from './ProductCartItem';
import TuLink from '../../common/TuLink';

import { useState, useEffect } from 'react';
import { sum } from 'lodash'
import Offcanvas from "react-bootstrap/Offcanvas";

function ProductCart({ show, handleClose, cartProducts }) {
  const [productSum, setProductSum] = useState(0);

  useEffect(() => {
    function sumCheckoutAmount(cartProducts){
      if(!cartProducts.length){
        setProductSum(0);
      } else {
        const totalSumArray = cartProducts.map(product => product.quantity * product.price);
        const totalSum = sum(totalSumArray)
        setProductSum(totalSum)
      }
    }
    sumCheckoutAmount(cartProducts)
  }, [cartProducts])

  return (
    <>
      <Offcanvas 
        show={show} 
        onHide={handleClose}
        style={{ display: "none" }}
      ></Offcanvas>
      <div 
        className={`offcanvas offcanvas-end ${styles.cartCanvas} ${show ? 'show' : ""}`} 
        data-bs-scroll="true"
        data-bs-backdrop="true"
        tabIndex="-1"
        aria-labelledby="cartCanvas"
      >
        <div className={`offcanvas-header ${styles.cartHeader}`}>
          <h5 className={styles.cartTitle}>Shopping Cart &#40;{cartProducts.length}&#41;</h5>
          <button 
            type="button" 
            className="btn-close" 
            onClick={handleClose} 
            aria-label="Close"
          ></button>
        </div>
        <div className={`offcanvas-body ${styles.cartBody}`}>
          <div className={styles.cartList}>
            {cartProducts.length > 0 && cartProducts.map( cartProduct => <ProductCartItem 
              key={cartProduct.id}
              product={cartProduct}
            />
            )}
          </div>
        </div>
        <div className="offcanvas-footer">
          <div className={styles.cartFooter}>
            <h6 className={styles.cartFooterTotal}>Subtotal: {priceFormatter(productSum)}</h6>
            <TuLink to="#">Go to Checkout</TuLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCart;
