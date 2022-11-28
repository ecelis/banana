import { createApp } from "vue";
import { createPinia } from "pinia";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getPerformance } from "firebase/performance";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { getFirebaseConfig } from "./firebaseConfig";

const app = createApp(App);

app.use(createPinia());
app.use(router);

const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);
app.mount("#app");
