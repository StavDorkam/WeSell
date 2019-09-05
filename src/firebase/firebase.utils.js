import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDE0ilyTMy1FUTaS64zZD3_D2JI3gD1mvU",
    authDomain: "e-commerce-react-proj.firebaseapp.com",
    databaseURL: "https://e-commerce-react-proj.firebaseio.com",
    projectId: "e-commerce-react-proj",
    storageBucket: "",
    messagingSenderId: "1013907556489",
    appId: "1:1013907556489:web:1a2340e688491ecb"
};

export const createUserProfileDoc = async(userAuth, moreData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({displayName, email, createdAt, ...moreData})
        } catch(err) {
            console.log('Got error in creating user:', err)
        }
    }
    return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;