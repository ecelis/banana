import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const config = {
  apiKey: process.env.BANANA_FIREBASE_API_KEY,
  authDomain: process.env.BANANA_AUTH_DOMAIN,
  projectId: process.env.BANANA_PROJECT_ID,
  storageBucket: process.env.BANANA_STORAGE_BUCKET,
  messagingSenderId: process.env.BANANA_MESSAGING_ID,
  appId: process.env.BANANA_APP_ID,
  measurementId: process.env.BANANA_MEASUREMENT_ID
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
