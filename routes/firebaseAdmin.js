var admin = require("firebase-admin");

var serviceAccount = require("./serviceAcountKey"); // Asegúrate de que la ruta sea correcta

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://marranito-de3f8-default-rtdb.firebaseio.com"
});

module.exports = admin;