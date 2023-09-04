// IMPORTED SERVER MODULES
// External packages
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const helmet = require("helmet");

// Local modules
const config = require('./config/config'); 
const ApiError = require('./utilities/ApiError');
const apiErrorHandler = require('./middleware/apiErrorHandler');
const routes = require('./routes/routes');
const { dbPing } = require('./config/db');
const corsOptions = require('./config/corsOptions');
const debugStartup = require('debug')('app:startup');

// Instantiated Express for Server
const app = express();

// EXPRESS MIDDLEWARE
// HTTP Header-setter security & CORS
app.use(helmet());
app.use(cors(corsOptions));
debugStartup('Helmet & CORS Pre-Flight requests enabled');

// POST request parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
debugStartup('POST parsing middleware enabled for JSON/URL');

// File parsing middleware
app.use(fileUpload({ createParentPath: true }));

// Middlware to track our query performance, status & speed
app.use(morgan('dev'));

// Main routing: http://localhost:5000/api/
app.use('/api', routes());

// Not Found Route
app.use((req, res, next) => {
  next(ApiError.notFound());
});

// Error Handler Middleware
app.use(apiErrorHandler);

// Ping DB & Set Port
dbPing.then(() => {
  app.listen(
    config.port, 
    () => console.log(`Server is running on port: ${config.port}`)
  );
});