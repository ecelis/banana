# Banana chat

This template should help get you started developing with Vue 3 in Vite.



## Project Setup

```sh
npm install
```

```
npm install -g firebase-tools
firebase login
firebase init
```

- Enable Google Authentication
- Enable Realtime Database

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Firebase local

```
npm run firebase
```

Visit http://localhost:5000/


```js
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
} from 'firebase/firestore';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { getPerformance } from 'firebase/performance';
```
