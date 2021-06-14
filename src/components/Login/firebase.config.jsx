import firebase from 'firebase'
import 'firebase/auth'

export const firebaseConfig = {
    apiKey: "AIzaSyCVxczAxIy82ENTRbIceql4Sn_CEWj898k",
    authDomain: "telecombd-326bf.firebaseapp.com",
    projectId: "telecombd-326bf",
    storageBucket: "telecombd-326bf.appspot.com",
    messagingSenderId: "189208078294",
    appId: "1:189208078294:web:af64aa4b347c8cf6662677"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth()


export { provider, auth }
