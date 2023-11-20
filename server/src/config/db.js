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
      type: config.db.type,
      project_id: config.db.project_id,
      private_key_id: config.db.private_key_id,
      private_key: config.db.private_key,
      client_email: config.db.client_email,
      client_id: config.db.client_id,
      auth_uri: config.db.auth_uri,
      token_uri: config.db.token_uri,
      auth_provider_x509_cert_url: config.db.auth_provider_x509_cert_url,
      client_x509_cert_url: config.db.client_x509_cert_url,
      universe_domain: config.db.universe_domain,
    };
  }
  console.log(serviceAccountKey)
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