import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';

// Local modules
import * as styles from "./ProductDetail.css"
import useAuth from '../../hooks/useAuth';
import productService from '../../services/productService';
import ProductCounter from '../../components/features/cart/ProductCounter';
import TuLoader from '../../components/common/TuLoader';
import TuButton from '../../components/common/TuButton';
import TuLink from '../../components/common/TuLink';

function ProductDetail({ addNewProductToCart }) {
  // HOOK: CONTEXT FOR AUTH
  const { user } = useAuth();

  // REACT-ROUTER DOM HOOKS
  const params = useParams();
  const navigate = useNavigate();

  // HOOK: SETTING COMPONENT STATE (& init values)
  const [productData, setProductData] = useState({
    id: params.id,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // PRODUCT-CART STATES
  const [productCount, setProductCount] = useState(0)

  // Destructure data state nested object properties & instance of useNavigate class (NOTE IMAGE DESTRUCTURED)
  const { id, name, description, category, price, sizes, texture, onSale, isAvailable, image } = productData;

  // HOOK: Prevention of useEffect calling TWICE (React v18)
  const effectRan = useRef(false);
  useEffect(() => {
    console.log("Effect Ran");
    if (effectRan.current === false) {
      fetchProduct();
      setLoading(false);

      // CLEAN UP FUNCTION
      return () => {
        console.log("Unmounted");
        effectRan.current = true;
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // FUNCTIONS
  // [1] PAGE POPULATION
  async function fetchProduct() {
    try {
      const response = await productService.getById(id);
      const fetchedProduct = await response.data
      console.log(fetchedProduct);

      // Using the spread, we create a shallow copy of the original object & overwrite/add with new data
      // NOTE: We could just do setData({...currencyData, ...fetchedCurrency}), but the dependency array then has issues!
      // NOTE: Specifically, we pass a function that has a first param (currencyData) same as the current value of the state, and we set it to state we want in the return of the function!
      setProductData(productOnMount => ({...productOnMount,...fetchedProduct}));

    } catch (err) {
      console.log(err?.response);
      setError(true);
    }
  }

  // [2] ADD PRODUCT TO CART
  function handleAddToCart(){
    if (productCount === 0) return;
    addNewProductToCart({
      ...productData,
      quantity: productCount,
      totalPrice: productCount * productData.price
    });
    navigate('/store/products');
  }

  // [3] DELETION OF DOCUMENT
  const handleDeleteClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Call API - must match server route + pass id to route
      const response = await productService.del(id);
      console.log(response);

      // onSuccess - Redirect
      setLoading(false);
      navigate('/store/products');
      
    } catch (err) {
      console.log(err?.response);
      setError(true);
      window.scroll({top: 0, left: 0, behavior: 'smooth' });
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
      <Container>
        <TuLoader />
      </Container>
    )
  }

  return (
    <Container>
      {/* MAIN PRODUCT SECTION */}
      <div className={styles.productBox}>
        {/* IMAGE BOX: LEFT */}
        <div className={styles.productBoxLeft}>
          <img src={image} alt={name} />
        </div>
        {/* TEXT & PURCHASE AREA: RIGHT */}
        <div className={styles.productBoxRight}>
          <h2>{name}</h2>
          <p>{description}</p>
          <ProductCounter 
            productCount={productCount} 
            setProductCount={setProductCount} 
          />
          <TuButton onClick={handleAddToCart}>Add to Cart</TuButton>
        </div>
      </div>
      <TuLink to={`/store/product/edit/${id}`}>Edit</TuLink>
      <TuButton
        onClick={handleDeleteClick} 
        loadingState={loading}
      >
        {loading ? <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        /> : 'Delete'}
      </TuButton>
    </Container>
  )
}

export default ProductDetail