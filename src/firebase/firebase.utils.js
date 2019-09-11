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

firebase.initializeApp(firebaseConfig);

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

export const addCollectionAndDocs = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch()
    objectsToAdd.forEach(object => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, object)
    })
    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collections => {
    //Recieves querySnapshot and pulls data into a new array with new values
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();
        return {
            title,
            items,
            id: doc.id,
            routeName: encodeURI(title.toLowerCase())
        }
    })
    //Returns the array as a hashtable
    return transformedCollection.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection
        return acc;
    }, {});
}

export const getCurrentUser = () => {
    return new Promise((res, rej) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            res(userAuth);
        }, rej)
    })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;