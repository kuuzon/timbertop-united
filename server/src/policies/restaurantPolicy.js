// Import Joi Validation module
const Joi = require('joi');
const ApiError = require('../utilities/ApiError');

module.exports = {
  // [1] POST Validation
  validateRestaurant(req, res, next){
    console.log(req.body);
    const schema = Joi.object({
      name: Joi.string().min(3).max(50).required(),
      cuisine: Joi.string().min(3).max(50).required(),
      rating: Joi.number().required(),
      cost: Joi.number().required(),
      description: Joi.string().min(3).max(2000).required(),
      location: Joi.string().min(3).max(50).required(),
      tags: Joi.array().items(Joi.string()).required(),
      image: Joi.any(),
      uploadedFile: Joi.string()
    });
    
    // Return one of two values
    const { error, value } = schema.validate(req.body);

    // ON VALIDATION ERROR: We call Error Middleware & Pass Bad Request with Dynamic Validation Error Message
    if ( error ) {
      switch(error.details[0].context.key){
        case 'name':
          next(ApiError.badRequest('You must provide a valid name for the restaurant'))
          break

        case 'cuisine':
        case 'description':
          next(ApiError.badRequest('You must provide a valid restaurant cuisine category & description'))
          break    

        case 'rating':
        case 'price':
          next(ApiError.badRequest('You must provide a valid numerical restaurant rating/pricing'))
          break

        case 'location':
          next(ApiError.badRequest('You must provide a valid restaurant suburb location'))
          break   

        case 'tags':
          next(ApiError.badRequest('You must provide at least ONE valid tag for the restaurant'))
          break   

        case 'image':
        case 'uploadedFile':
          next(ApiError.badRequest('The existing image URL or path are not in a valid format - please re-upload the image'))
          break

        default: 
          next(ApiError.badRequest('Invalid Form Information - please check form information and submit again'))
      }

    // ON SUCCSSS: We pass to next middleware
    } else {
      next();
    }
  }
}