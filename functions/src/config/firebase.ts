import * as admin from "firebase-admin";
const serviceAccount = require("../../src/config/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  //   databaseURL: "https://resource-management-torinit.firebaseio.com",
});

const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true });

export { admin, db };
