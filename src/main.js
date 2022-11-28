import { createApp } from "vue";
import { createPinia } from "pinia";
import { initializeApp } from "firebase/app";
import App from "./App.vue";
import router from "./router";
import "./assets/base.css";
import { getFirebaseConfig } from "./firebase-config";

const app = createApp(App);

app.use(createPinia());
app.use(router);

const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);
app.mount("#app");
