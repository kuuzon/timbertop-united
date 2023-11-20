// DATABASE CONFIGURATION
var admin = require("firebase-admin");
const config = require("./config");
const dbStartup = require('debug')('app:db');
const debugError500 = require('debug')('app:error500');

try {
  dbStartup('Attempting database connection...');
  // Setup of db credentials & options
  let serviceAccountKey;
  if(config.env === "development" || config.env === "preview"){
    serviceAccountKey = config.db.google_account_credentials;
  } else if(config.env = "production"){
    // DOCS: https://firebase.google.com/docs/reference/admin/node/firebase-admin.app
    serviceAccountKey = {
      type: process.env.TYPE,
      project_id: process.env.PROJECT_ID,
      private_key_id: process.env.PRIVATE_KEY_ID,
      client_id: process.env.CLIENT_ID,
      auth_uri: process.env.AUTH_URI,
      token_uri: process.env.TOKEN_URI,
      auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
    };
  }
  // OPTIONS: Grants admin access to Firebase services + bucket services
  const firebaseAppOptions = {
    credential: admin.credential.cert(serviceAccountKey),
    storageBucket: config.db.storageBucket
  };
  
  // Initialise firebase services & set core database APIs
  admin.initializeApp(firebaseAppOptions);
  const db = admin.firestore();
  const bucket = admin.storage().bucket();
  
  // Export variable objects for use in our application
  module.exports = { db, bucket };

// DEBUG: Unhandled error will be logged to console
} catch(err) {
  debugError500(err);
}