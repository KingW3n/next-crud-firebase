import firebase from 'firebase'
import 'firebase/firestore'

if(!firebase.apps.length){
    console.log (process.env.NEXT_PUBLIC_FIREBASE_APIKEY)
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APPID
    })
}

export default firebase