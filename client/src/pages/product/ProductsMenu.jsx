import { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';

// Local modules
import useAuth from '../../hooks/useAuth';
import TuLink from '../../components/common/TuLink';
import TuLoader from '../../components/common/TuLoader';
import productService from '../../services/productService';
import ProductsList from '../../components/features/products/ProductsList';

function ProductsMenu() {
  // HOOK: CONTEXT FOR AUTH
  const { user } = useAuth();

  // HOOK: SETTING COMPONENT STATE (& init values)
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
      const response = await productService.getAll();
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
      <Container className="text-center">
        <p>Error page</p>
      </Container>
    )
  }

  // CONDITIONAL LOAD: LOADING
  if (loading) {
    return (
      <Container className="text-center">
        <TuLoader />
      </Container>
    )
  }

  // DEFAULT LOAD: SUCCESS API CALL
  return (
    <Container className="text-center">
      <h1>Timbertop United Kits &amp; Apparel</h1>
      <p>Get the official 2023/24 Timbertop United Kits, inspired by the iconic TU anniversary crest - celebrating its 20th anniversary</p>

      {/* ADMIN SECTION: AUTHORISATION REQUIRED */}
      { user && <div className="admin-section text-center mt-4">
        <TuLink to="#">Add Product</TuLink>
      </div>}

      {/* Currency Menu */}
      {data.length > 0 && <ProductsList title="Kits & Apparel" products={data} />}
    </Container>
  )
}

export default ProductsMenu