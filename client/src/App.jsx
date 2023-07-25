// EXTERNAL LIBRARIES
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// LOCAL MODULES
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  // PRODUCT STATE
  const [products, setProducts] = useState([]);

  return (
    <Routes>
      {/* MAIN LAYOUT WRAPPER & ROUTED CHILDREN */}
      <Route path="/" element={<Layout products={products} />}>
        <Route index element={<Home />} />
        {/* ERROR PAGES */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App