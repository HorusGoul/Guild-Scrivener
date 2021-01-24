import admin, { ServiceAccount } from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
  databaseURL: process.env.FIREBASE_URL,
});

export const db = admin.firestore();
