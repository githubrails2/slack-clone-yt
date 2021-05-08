import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAD08a4cKKHk-AFQSCbzpxSLP0om4kUF7M",
	authDomain: "slack-clone-10ea5.firebaseapp.com",
	projectId: "slack-clone-10ea5",
	storageBucket: "slack-clone-10ea5.appspot.com",
	messagingSenderId: "971383392792",
	appId: "1:971383392792:web:81ae1cc0e939ca9812d16d",
	measurementId: "G-PM1DBW4S12",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
