// CENTRAL ROUTE FILE
// Import express and router 
const express = require('express'); 
const router = express.Router();

// Import modules
const RestaurantPolicy = require('../policies/restaurantPolicy');
const FilePolicy = require('../policies/filePolicy');
const VerifyAuth = require('../middleware/verifyAuth');
const fileServerUpload = require('../middleware/fileServerUpload');
const RestaurantController = require('../controllers/restaurantController');

// Setup routes within export function
module.exports = () => {
  // RESTAURANT ROUTES
  // GET Route
  router.get('/', 
    RestaurantController.getRestaurant
  );
  // POST Route
  router.post('/', 
    [RestaurantPolicy.validateRestaurant,
    FilePolicy.filesPayloadExists,
    FilePolicy.fileSizeLimiter,
    FilePolicy.fileExtLimiter(['.png', '.jpg', '.jpeg', '.gif']),
    VerifyAuth.auth,
    fileServerUpload],
    RestaurantController.postRestaurant
  );
  // GET BY ID Route
  router.get('/:id',
    RestaurantController.getRestaurantById
  );
  // UPDATE BY ID Route
  router.put('/:id',
    [RestaurantPolicy.validateRestaurant,
    FilePolicy.filesPayloadExists,
    FilePolicy.fileSizeLimiter,
    FilePolicy.fileExtLimiter(['.png', '.jpg', '.jpeg', '.gif']),
    VerifyAuth.auth,
    fileServerUpload],
    RestaurantController.putRestaurantById
  );
  // DELETE BY ID Route
  router.delete('/:id',
    [VerifyAuth.auth,
    VerifyAuth.admin],
    RestaurantController.deleteRestaurantById
  );

  return router
}