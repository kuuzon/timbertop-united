// DATABASE CONFIGURATION
var admin = require("firebase-admin");
const config = require("./config");
const dbStartup = require('debug')('app:db');
const debugError500 = require('debug')('app:error500');

try {
  dbStartup('Attempting database connection...');
  // Setup of db credentials & options
  // DOCS: https://firebase.google.com/docs/reference/admin/node/firebase-admin.app
  const serviceAccountObject = {
    type: config.db.type,
    project_id: config.db.project_id,
    private_key_id: config.db.private_key_id,
    private_key: config.db.private_key.replace(/\\n/g, "\n"),
    client_email: config.db.client_email,
    client_id: config.db.client_id,
    auth_uri: config.db.auth_uri,
    token_uri: config.db.token_uri,
    auth_provider_x509_cert_url: config.db.auth_provider_x509_cert_url,
    client_x509_cert_url: config.db.client_x509_cert_url,
    universe_domain: config.db.universe_domain,
  };
  // OPTIONS: Grants admin access to Firebase services + bucket services
  const firebaseAppOptions = {
    credential: admin.credential.cert(serviceAccountObject),
    storageBucket: config.db.storageBucket
  };
  
  // Initialise firebase services & set core database APIs
  admin.initializeApp(firebaseAppOptions);
  const db = admin.firestore();
  const bucket = admin.storage().bucket();
  
  // DB Ping function (dev testing)
  const dbPing = db.listCollections()
  .then(collections => {
    dbStartup("Connected to Cloud Firestore");
    for (let collection of collections) {
      dbStartup(`DB collection: ${collection.id}`);
    }
  });

  // Export variable objects for use in our application
  module.exports = { db, bucket, dbPing };

// DEBUG: Unhandled error will be logged to console
} catch(err) {
  debugError500(err);
}