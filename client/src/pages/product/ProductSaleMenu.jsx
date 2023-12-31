import { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';

// Local modules
import * as styles from './ProductSaleMenu.css'
import useAuth from '../../hooks/useAuth';
import TuLink from '../../components/common/TuLink';
import TuLoader from '../../components/common/TuLoader';
import productService from '../../services/productService';
import ProductsList from '../../components/features/products/ProductsList';

function ProductSaleMenu() {
  const { user } = useAuth();
  // HOOK: SETTING COMPONENT STATE
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // HOOK: Prevention of useEffect calling TWICE (React v18)
  const effectRan = useRef(false);

  // HOOK: ON-LOAD SIDE EFFECTS
  useEffect(() => {
    console.log("Effect Ran");
    if (effectRan.current === false) {
      fetchCurrency();
      setLoading(false);

      // CLEAN UP FUNCTION
      return () => {
        console.log("Unmounted");
        effectRan.current = true;
      }
    }
  }, []);

  // COMPONENT FUNCTIONS
  async function fetchCurrency() {
    try {
      // API Request (refactored)
      const response = await productService.getOnSale();
      const data = await response.data;
      console.log(data);
      setData(data);
    } catch(err) {
      console.log(err?.response);
      if(err.response.status === 500) {
        setError(true); 
      } else {
        setError(false);
      }
    }
  }

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
      <h1 className={styles.menuTitle}>Sale</h1>

      {/* ADMIN SECTION: AUTHORISATION REQUIRED */}
      { user && <div className="admin-section text-center mt-4">
        <TuLink to="#">Add Product</TuLink>
      </div>}

      {/* Sale Menu */}
      {data.length > 0 && <ProductsList title="Kits & Apparel" products={data} />}
    </Container>
  )
}

export default ProductSaleMenu