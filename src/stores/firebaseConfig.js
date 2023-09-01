import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  // getFirestore,
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
  CACHE_SIZE_UNLIMITED,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOGlvJoIP-z66KzFcnevST3Qu7ZdjPsOo",
  authDomain: "tripper-97e8e.firebaseapp.com",
  projectId: "tripper-97e8e",
  storageBucket: "tripper-97e8e.appspot.com",
  messagingSenderId: "622482619751",
  appId: "1:622482619751:web:1a573ffec7bbc62b8e43c2",
  measurementId: "G-9L6SHHZW6Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
// const db = getFirestore(app);
const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
    cacheSizeBytes: CACHE_SIZE_UNLIMITED,
  }),
});

export { app, analytics, auth, db, onAuthStateChanged };
