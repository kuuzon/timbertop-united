// EXTERNAL LIBRARIES
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// LOCAL MODULES
import Layout from './components/layout/Layout';
import PrivateRoutes from './components/layout/PrivateRoutes';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import Dashboard from './pages/auth/Dashboard';
import ProductsMenu from './pages/product/ProductsMenu';
import ProductDetail from './pages/product/ProductDetail';

function App() {
  // PRODUCT STATE
  const [products, setProducts] = useState([]);
  function addNewProductToCart(newProduct){
    // EXISTING PRODUCT ADDED WITH NEW QUANTITY
    const duplicateProduct = products.filter(product => product.id == newProduct.id)
    if (duplicateProduct.length > 0){
      setProducts(products.map(product => product.id === duplicateProduct[0].id 
        ? {...product, quantity: product.quantity + newProduct.quantity}
        : product
      ))
    // UNIQUE PRODUCT ADDED TO CART
    } else {
      setProducts(currentProducts => {
        return [
          ...currentProducts,
          newProduct
        ]
      })
    }
  }

  return (
    <Routes>
      {/* MAIN LAYOUT WRAPPER & ROUTED CHILDREN */}
      <Route path="/" element={<Layout products={products} />}>
        <Route index element={<Home />} />
        {/* AUTH */}
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        {/* PRIVATE AUTH ROUTES */}
        <Route element={<PrivateRoutes />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        {/* PRODUCTS API */}
        <Route path="store">
          <Route path="products" element={<ProductsMenu products={products} setProducts={setProducts} />} />
          <Route path="product">
            <Route path=":id" element={<ProductDetail addNewProductToCart={addNewProductToCart}/>}/>
          </Route>
        </Route>
        {/* ERROR PAGES */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App