import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyArzVectCipsLZ86qBVcVIlnbJklsJimZE",
    authDomain: "crown-db-98a45.firebaseapp.com",
    databaseURL: "https://crown-db-98a45.firebaseio.com",
    projectId: "crown-db-98a45",
    storageBucket: "crown-db-98a45.appspot.com",
    messagingSenderId: "750527772710",
    appId: "1:750527772710:web:038ea94007d7a713164ee7"
  }

  export const createUserProfileDocument = async ( userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists){
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user:   ', error)
      }
    }

    return userRef;
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;