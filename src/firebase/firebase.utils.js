import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAVLmbrwmUFyB94jdJjdXVb7-24doQ3M3M",
  authDomain: "crwn-db-b1f1f.firebaseapp.com",
  projectId: "crwn-db-b1f1f",
  storageBucket: "crwn-db-b1f1f.appspot.com",
  messagingSenderId: "321086145171",
  appId: "1:321086145171:web:e221ae616f75e0bc7cc366",
  measurementId: "G-5TZQ9EFZEC",
};

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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
