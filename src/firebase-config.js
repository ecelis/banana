const config = {
  apiKey: import.meta.env.VITE_BANANA_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_BANANA_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_BANANA_PROJECT_ID,
  storageBucket: import.meta.env.VITE_BANANA_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_BANANA_MESSAGING_ID,
  appId: import.meta.env.VITE_BANANA_APP_ID,
  measurementId: import.meta.env.VITE_BANANA_MEASUREMENT_ID
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
