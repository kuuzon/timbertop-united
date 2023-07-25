import * as styles from './ProductCart.css';
import Offcanvas from "react-bootstrap/Offcanvas";

function ProductCart({ show, handleClose, products }) {
  return (
    <Offcanvas 
      show={show} 
      onHide={handleClose}
      placement="end"
      scroll={true}
      backdrop={true}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className={styles.cartHeader}>Shopping Cart &#40;{products.length}&#41;</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Dynamic products coming soon ...
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default ProductCart;
