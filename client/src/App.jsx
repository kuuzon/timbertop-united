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
import ProductSaleMenu from './pages/product/ProductSaleMenu';
import ProductDetail from './pages/product/ProductDetail';
import AddProduct from './pages/product/AddProduct';
import EditProduct from './pages/product/EditProduct';

function App() {
  // APP-LEVEL STATE
  const [cartProducts, setCartProducts] = useState([]);

  // FUNCTION TO SAVE, UPDATE + REMOVE CART PRODUCTS FROM LOCAL STORAGE

  // PRODUCT-CART FUNCTION: SAVE NEW ITEM TO CART FROM DETAILS
  function addNewProductToCart(newCartProduct){
    // EXISTING PRODUCT ADDED WITH NEW QUANTITY
    const duplicateCartProduct = cartProducts.filter(product => product.id == newCartProduct.id)
    if (duplicateCartProduct.length > 0){
      setCartProducts(cartProducts.map(product => product.id === duplicateCartProduct[0].id 
        ? {
            ...product, 
            quantity: product.quantity + newCartProduct.quantity,
            totalPrice: product.totalPrice + newCartProduct.totalPrice
          }
        : product
      ))
    // UNIQUE PRODUCT ADDED TO CART
    } else {
      setCartProducts(currentProducts => {
        return [
          ...currentProducts,
          newCartProduct
        ]
      })
    }
  }

  return (
    <Routes>
      {/* MAIN LAYOUT WRAPPER & ROUTED CHILDREN */}
      <Route path="/" element={<Layout cartProducts={cartProducts} />}>
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
          <Route path="products" element={<ProductsMenu />} />
          <Route path="sale" element={<ProductSaleMenu />} />
          <Route path="product">
            <Route path=":id" element={<ProductDetail addNewProductToCart={addNewProductToCart}/>}/>
            {/* PRIVATE WRITE PRODUCT ROUTES */}
            <Route element={<PrivateRoutes />}>
              <Route path="add" element={<AddProduct />} />
              <Route path="edit/:id" element={<EditProduct />} />
            </Route>
          </Route>
        </Route>
        {/* ERROR PAGES */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App