// CENTRAL ROUTE FILE
// Import express and router
const express = require('express'); 
const router = express.Router();

// Import sub-routes
const authRoutes = require('./authRoutes');
const productRoutes = require('./productRoutes');

// Setup routes within export function
module.exports = () => {
  // [A] HOME: GET Route
  router.get('/', (req, res) => {
    res.send('Welcome to the Timbertop United API');
  });

  // [B] Sub-Routes
  // auth routes: http://localhost:5000/api/auth
  router.use('/auth', authRoutes());
  // product routes: http://localhost:5000/api/products
  router.use('/products', productRoutes());

  return router
}