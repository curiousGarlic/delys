import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAO2T5GzuxddPAjoUdyFE1BQOsq1qSymz4",
  authDomain: "delys-gifts.firebaseapp.com",
  databaseURL: "https://delys-gifts.firebaseio.com",
  projectId: "delys-gifts",
  storageBucket: "delys-gifts.appspot.com",
  messagingSenderId: "746304938506",
  appId: "1:746304938506:web:c2e781129d130c536ff5f3",
  measurementId: "G-6TM6DVPL40"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
