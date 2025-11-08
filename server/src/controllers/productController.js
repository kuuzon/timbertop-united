// Import modules
const { db } = require('../config/db');
const ApiError = require('../utilities/ApiError');
const { cloudinaryImageUpload, getFileIdFromUrl, cloudinaryDeleteImage } = require('../lib/cloudinaryImageUploadService')

// Debug logs
const debugREAD = require('debug')('app:read');
const debugWRITE = require('debug')('app:write');

module.exports = {
  // [1A] GET ALL Products (w SORT KEY)
  async getAllProducts(req, res, next){
    try {
      // Store the collection reference in variable & call GET method
      const productRef = db.collection('products');
      const snapshot = await productRef.orderBy("name", "asc").get();
  
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
            description: doc.data().description,
            category: doc.data().category,
            price: doc.data().price,
            sizes: doc.data().sizes,
            texture: doc.data().texture,
            onSale: doc.data().onSale,
            isAvailable: doc.data().isAvailable,
            image: doc.data().image,
          });
        });
        res.send(docs);
      }

    // [500 ERROR] Checks for Errors in our Query - issue with route or DB query
    } catch(err) {
      return next(ApiError.internal('The items selected could not be found', err));
    }
  },

  // [1B] GET onSale Products (w INDEXING)  
  async getOnSaleProducts(req, res, next){
    try {
      // Store the collection reference in variable & call GET method
      const productRef = db.collection('products');
      const snapshot = await productRef.where("onSale", "==", "true").orderBy("name", "asc").limit(10).get();
      // const snapshot = await productRef.where("onSale", "==", "true").orderBy("name", "desc").limit(10).get();
  
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
            description: doc.data().description,
            category: doc.data().category,
            price: doc.data().price,
            sizes: doc.data().sizes,
            texture: doc.data().texture,
            onSale: doc.data().onSale,
            isAvailable: doc.data().isAvailable,
            image: doc.data().image,
          });
        });
        res.send(docs);
      }

    // [500 ERROR] Checks for Errors in our Query - issue with route or DB query
    } catch(err) {
      return next(ApiError.internal('The items selected could not be found', err));
    }
  },  

  // [2] POST Product
  async postProduct(req, res, next){
    // (a) Validation (JOI) Direct from Form (refactored)
    debugWRITE(req.body);
    debugWRITE(req.files);
    debugWRITE(res.locals);

    // (b) File Upload to Storage Bucket
    let downloadUrl;
    try {      
      const filename = res.locals.filename;
      const uploadResult = await cloudinaryImageUpload(filename);
      downloadUrl = uploadResult.data.secure_url;

    // [500 ERROR] Checks for Errors in our File Upload
    } catch(err) {
      return next(ApiError.internal('An error occurred in uploading the image to storage', err));
    }
    
    // (c) Store the document query in variable & call ADD method (NOT using SET())
    try {
      const productRef = db.collection('products');
      const response = await productRef.add({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: Number(req.body.price),
        sizes: req.body.sizes,
        texture: req.body.texture,
        onSale: req.body.onSale,
        isAvailable: req.body.isAvailable,
        image: downloadUrl
      });
      console.log(`Added Product ID: ${response.id}`);
      res.send(response.id);

    // [500 ERROR] Checks for Errors in our Query - issue with route or DB query
    } catch(err) {
      return next(ApiError.internal('Your request could not be saved at this time', err));
    }
  },

  // [3] GET Product BY ID
  async getProductById(req, res, next){
    // Test: Check ID passed via URL query string parameters
    debugREAD(req.params);

    try {
      // Store the document query in variable & call GET method for ID
      const productRef = db.collection('products').doc(req.params.id);
      const doc = await productRef.get();

      // [400 ERROR] Check for User Asking for Non-Existent Documents
      if (!doc.exists) {
        return next(ApiError.badRequest('The item you were looking for does not exist'));

      // SUCCESS: Send back the specific document's data
      } else {
        res.send(doc.data());
      }

    // [500 ERROR] Checks for Errors in our Query - issue with route or DB query
    } catch(err) {
      return next(ApiError.internal('Your request could not be processed at this time', err));
    }
  },

  // [4] PUT Product BY ID
  async putProductById(req, res, next){
    // (a) Validation (JOI) Direct from Form (refactored)
    debugWRITE(req.params);
    debugWRITE(req.body);
    debugWRITE(req.files);
    debugWRITE(res.locals);

    // (b1) File Upload to Storage Bucket
    // IMAGE CHANGED: If the image is updated, a new file will be saved under req.files
    // NOTE: We will call standard file uploader + we will ALSO need to delete the OLD image URL from the storage location (if there is one)
    let downloadUrl;
    try {      
      if (req.files){
        // (i) Storage-Upload
        const filename = res.locals.filename;
        const uploadResult = await cloudinaryImageUpload(filename);
        downloadUrl = uploadResult.data.secure_url;

        // (ii) Delete OLD image version in Storage Bucket, if it exists
        if (req.body.oldImageUrl) {
          debugWRITE(`Deleting old image in storage: ${req.body.oldImageUrl}`);
          const oldImageId = getFileIdFromUrl(req.body.oldImageUrl)
          const deleteResult = await cloudinaryDeleteImage(oldImageId);
          debugWRITE(deleteResult)
        }

      // (b2) IMAGE NOT CHANGED: We just pass back the current downloadUrl and pass that back to the database, unchanged!
      } else if (req.body.image) {
        console.log(`No change to image in DB`);
        downloadUrl = req.body.image;
        
      } else {
        return next(ApiError.badRequest('The file you are trying to upload cannot be edited at this time'));
      }

    // [500 ERROR] Checks for Errors in our File Upload
    } catch(err) {
      return next(ApiError.internal('An error occurred in saving the image to storage', err));
    }

    // (c) Store the document query in variable & call UPDATE method for ID
    try {
      const productRef = db.collection('products').doc(req.params.id);
      const response = await productRef.update({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: Number(req.body.price),
        sizes: req.body.sizes,
        texture: req.body.texture,
        onSale: req.body.onSale,
        isAvailable: req.body.isAvailable,
        image: downloadUrl
      });
      res.send(response);

    // [500 ERROR] Checks for Errors in our Query - issue with route or DB query
    } catch(err) {
      return next(ApiError.internal('Your request could not be processed at this time', err));
    }
  },

  // [5] DELETE Product BY ID
  async deleteProductById(req, res, next){
    // (a) Delete document image file from storage 
    try {
      // (i) Store the document query in variable & call GET method for ID
      const productRef = db.collection('products').doc(req.params.id);
      const doc = await productRef.get();

      // [400 ERROR] Check for User Asking for Non-Existent Documents
      if (!doc.exists) {
        return next(ApiError.badRequest('The item you were looking for does not exist'));
      } 
      
      // (ii) Store downloadUrl and obtain oldImageId in storage bucket
      const downloadUrl = doc.data().image;
      const oldImageId = getFileIdFromUrl(downloadUrl);

      // (iii) Call storage bucket delete function & delete previously oldImageId
      const cloudResponse = await cloudinaryDeleteImage(oldImageId);
      debugWRITE(cloudResponse?.data);

      // Check image delete has occurred & cue firestore doc deletion
      if(cloudResponse.success){
        const response = await productRef.delete({exists:true});
        res.send(response);
      }

    // [500 ERROR] Checks for Errors in our Query - issue with route or DB query
    } catch(err) {
      return next(ApiError.internal('Your request could not be saved at this time', err));
    }
  }
}