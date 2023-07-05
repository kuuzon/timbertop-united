// Import modules
const { db } = require('../config/db');
const ApiError = require('../utilities/ApiError');
const { storageBucketUpload, getFileFromUrl, deleteFileFromBucket } = require('../utilities/bucketServices');

// Debug logs
const debugREAD = require('debug')('app:read');
const debugWRITE = require('debug')('app:write');

module.exports = {
  // [1] GET Restaurant (w SORT KEY)
  async getRestaurant(req, res, next){
    try {
      // Store the collection reference in variable & call GET method
      const restaurantRef = db.collection('restaurant');

      // [A] BASE OPTION: All Restaurants
      const snapshot = await restaurantRef.orderBy("name", "asc").get();

      // [B] INDEX OPTION: Top Japanese Restaurants 
      // const snapshot = await restaurantRef.where("cuisine", "==", "japanese").orderBy("rating", "desc").limit(5).get();

      // [C] INDEX OPTION: Cheapest Italian Restaurants
      // const snapshot = await restaurantRef.where("cuisine", "==", "italian").orderBy("cost", "asc").limit(5).get();
  
      // [400 ERROR] Check for User Asking for Non-Existent Documents
      if (snapshot.empty) {
        return next(ApiError.badRequest('The items you were looking for do not exist'));

      // SUCCESS: Push object properties to array and send to client
      } else {
        let docs = [];
        snapshot.forEach(doc => {
          docs.push({
            id: doc.id,
            name: doc.data().name,
            cuisine: doc.data().cuisine,
            rating: doc.data().rating,
            cost: doc.data().cost,
            description: doc.data().description,
            location: doc.data().location,
            tags: doc.data().tags,
            image: doc.data().image,
          });
        });
        res.send(docs);
      }

    // [500 ERROR] Checks for Errors in our Query - issue with route or DB query
    } catch(err) {
      return next(ApiError.internal('The currencies selected could not be found', err));
    }
  },

  // [2] POST Restaurant
  async postRestaurant(req, res, next){
    // (a) Validation (JOI) Direct from Form (refactored)
    debugWRITE(req.body);
    debugWRITE(req.files);
    debugWRITE(res.locals);

    // (b) File Upload to Storage Bucket
    let downloadURL = null;
    try {      
      const filename = res.locals.filename;
      downloadURL = await storageBucketUpload(filename);

    // [500 ERROR] Checks for Errors in our File Upload
    } catch(err) {
      return next(ApiError.internal('An error occurred in uploading the image to storage', err));
    }
    
    // (c) Store the restaurant document query in variable & call ADD method (NOT using SET())
    try {
      const restaurantRef = db.collection('restaurant');
      const response = await restaurantRef.add({
        name: req.body.name,
        cuisine: req.body.cuisine,
        rating: Number(req.body.rating),
        cost: Number(req.body.cost),
        description: req.body.description,
        location: req.body.location,
        tags: req.body.tags,
        image: downloadURL
      });
      console.log(`Added Restaurant with ID: ${response.id}`);
      res.send(response.id);

    // [500 ERROR] Checks for Errors in our Query - issue with route or DB query
    } catch(err) {
      return next(ApiError.internal('Your request could not be saved at this time', err));
    }
  },

  // [3] GET Restaurant BY ID
  async getRestaurantById(req, res, next){
    // Test: Check ID passed via URL query string parameters
    debugREAD(req.params);

    try {
      // Store the restaurant document query in variable & call GET method for ID
      const restaurantRef = db.collection('restaurant').doc(req.params.id);
      const doc = await restaurantRef.get();

      // [400 ERROR] Check for User Asking for Non-Existent Documents
      if (!doc.exists) {
        return next(ApiError.badRequest('The restaurant you were looking for does not exist'));

      // SUCCESS: Send back the specific document's data
      } else {
        res.send(doc.data());
      }

    // [500 ERROR] Checks for Errors in our Query - issue with route or DB query
    } catch(err) {
      return next(ApiError.internal('Your request could not be processed at this time', err));
    }
  },

  // [4] PUT Restaurant BY ID
  async putRestaurantById(req, res, next){
    // (a) Validation (JOI) Direct from Form (refactored)
    debugWRITE(req.params);
    debugWRITE(req.body);
    debugWRITE(req.files);
    debugWRITE(res.locals);

    // (b1) File Upload to Storage Bucket
    // IMAGE CHANGED: If the image is updated, a new file will be saved under req.files
    // NOTE: We will call standard file uploader + we will ALSO need to delete the OLD image URL from the storage location (if there is one)
    let downloadURL = null;
    try {      
      if (req.files){
        // (i) Storage-Upload
        const filename = res.locals.filename;
        downloadURL = await storageBucketUpload(filename);

        // (ii) Delete OLD image version in Storage Bucket, if it exists
        if (req.body.uploadedFile) {
          debugWRITE(`Deleting old image in storage: ${req.body.uploadedFile}`);
          const bucketResponse = await deleteFileFromBucket(req.body.uploadedFile);
        }
      // (b2) IMAGE NOT CHANGED: We just pass back the current downloadURL and pass that back to the database, unchanged!
      } else if (req.body.image) {
        console.log(`No change to image in DB`);
        downloadURL = req.body.image;
        
      } else {
        return next(ApiError.badRequest('The file you are trying to upload cannot be edited at this time'));
      }

    // [500 ERROR] Checks for Errors in our File Upload
    } catch(err) {
      return next(ApiError.internal('An error occurred in saving the image to storage', err));
    }

    // (c) Store the restaurant document query in variable & call UPDATE method for ID
    try {
      const restaurantRef = db.collection('restaurant').doc(req.params.id);
      const response = await restaurantRef.update({
        name: req.body.name,
        cuisine: req.body.cuisine,
        rating: Number(req.body.rating),
        cost: Number(req.body.cost),
        description: req.body.description,
        location: req.body.location,
        tags: req.body.tags,
        image: downloadURL
      });
      res.send(response);

    // [500 ERROR] Checks for Errors in our Query - issue with route or DB query
    } catch(err) {
      return next(ApiError.internal('Your request could not be processed at this time', err));
    }
  },

  // [5] DELETE Restaurant BY ID
  async deleteRestaurantById(req, res, next){
    // (a) Delete document image file from storage 
    try {
      // (i) Store the restaurant document query in variable & call GET method for ID
      const restaurantRef = db.collection('restaurant').doc(req.params.id);
      const doc = await restaurantRef.get();

      // [400 ERROR] Check for User Asking for Non-Existent Documents
      if (!doc.exists) {
        return next(ApiError.badRequest('The restaurant you were looking for does not exist'));
      } 
      
      // (ii) Store downloadURL and obtain uploadedFile in storage bucket
      const downloadURL = doc.data().image;
      const uploadedFile = getFileFromUrl(downloadURL);

      // (iii) Call storage bucket delete function & delete previously uploadedFile
      const bucketResponse = await deleteFileFromBucket(uploadedFile);

      // (b) Delete document from Cloud Firestore
      if (bucketResponse) {
        // Call DELETE method for ID (with PRECONDITION parameter to check document exists)
        // NOTE: We defined restaurantRef earlier!
        const response = await restaurantRef.delete({exists:true});

        // SUCCESS: Issue back response for timebeing
        res.send(response);
      }

    // [500 ERROR] Checks for Errors in our Query - issue with route or DB query
    } catch(err) {
      return next(ApiError.internal('Your request could not be saved at this time', err));
    }
  }
}