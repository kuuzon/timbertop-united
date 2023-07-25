// EXTERNAL LIBRARIES
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// LOCAL MODULES
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ProductsMenu from './pages/product/ProductsMenu';
import NotFound from './pages/NotFound';

function App() {
  // PRODUCT STATE
  const [products, setProducts] = useState([]);

  return (
    <Routes>
      {/* MAIN LAYOUT WRAPPER & ROUTED CHILDREN */}
      <Route path="/" element={<Layout products={products} />}>
        <Route index element={<Home />} />
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