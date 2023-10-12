import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'image-gallery-312d1.firebaseapp.com',
  projectId: 'image-gallery-312d1',
  storageBucket: 'image-gallery-312d1.appspot.com',
  messagingSenderId: 'image-gallery-312d1.appspot.com',
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MESSAGINGSENDERID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const projectFirestore = getFirestore(app);
const timestamp = serverTimestamp();

export { auth, projectFirestore, timestamp ,app };
