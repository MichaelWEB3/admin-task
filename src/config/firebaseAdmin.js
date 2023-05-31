import admin from "firebase-admin";

const serviceAccount = require("./empresa-t-firebase-adminsdk-w36sd-c21ec13a4b.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default admin;