// CENTRAL ROUTE FILE
// Import express and router
const express = require('express'); 
const router = express.Router();

// Import sub-routes
const authRoutes = require('./authRoutes');
const restaurantRoutes = require('./restaurantRoutes');

// Setup routes within export function
module.exports = () => {
  // [A] HOME: GET Route
  router.get('/', (req, res) => {
    res.send('Welcome to Geoff\'s App API');
  });

  // [B] Sub-Routes
  // auth routes: http://localhost:5000/api/auth
  router.use('/auth', authRoutes());
  // restaurant routes: http://localhost:5000/api/restaurants
  router.use('/restaurants', restaurantRoutes());

  return router
}