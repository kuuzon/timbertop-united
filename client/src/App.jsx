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

function App() {
  // PRODUCT STATE
  const [products, setProducts] = useState([]);

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
        </Route>
        {/* ERROR PAGES */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App