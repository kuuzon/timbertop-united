import { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';

// Local modules
import * as styles from './ProductsMenu.css'
import useAuth from '../../hooks/useAuth';
import FilterMenu from '../../components/common/FilterMenu';
import TuLink from '../../components/common/TuLink';
import TuLoader from '../../components/common/TuLoader';
import ProductsList from '../../components/features/products/ProductsList';

function ProductsMenu({ products, fetchProducts, productLinks, productCategory }) {
  // HOOK: CONTEXT FOR AUTH
  const { user } = useAuth();

  // HOOK: SETTING COMPONENT STATE (& init values)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // HOOK: ON-LOAD SIDE EFFECTS
  const effectRan = useRef(false);
  useEffect(() => {
    console.log("Effect Ran");
    if (effectRan.current === false) {
      try {
        fetchProducts();

      } catch (err) {
        console.log(err?.response);
        if(err.response.status === 500) {
          setError(true); 
        } else {
          setError(false);
        }
      }
      setLoading(false);

      // CLEAN UP FUNCTION
      return () => {
        console.log("Unmounted");
        effectRan.current = true;
      }
    }
  }, [fetchProducts]);

  // CONDITIONAL LOAD: ERROR
  if (error) {
    return (
      <Container className="text-center mt-4">
        <p>Error page</p>
      </Container>
    )
  }

  // CONDITIONAL LOAD: LOADING
  if (loading) {
    return (
      <Container className="text-center mt-4">
        <TuLoader />
      </Container>
    )
  }

  // DEFAULT LOAD: SUCCESS API CALL
  return (
    <Container className="text-center mt-4">
      <h1 className={styles.menuTitle}>{productCategory}</h1>

      {/* FILTER LINK MENU */}
      <Container className="my-4">
        <FilterMenu productLinks={productLinks} />
      </Container>

      {/* ADMIN SECTION: AUTHORISATION REQUIRED */}
      { user && <div className="admin-section text-center mt-4">
        <TuLink to="#">Add Product</TuLink>
      </div>}

      {/* Dynamic Products Menu */}
      {products.length === 0 && <h4 className={styles.productsWarning}>No {productCategory} gear available</h4>}
      {products.length > 0 && <ProductsList products={products} />}
    </Container>
  )
}

export default ProductsMenu