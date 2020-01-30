import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCfnbNXlkgmjzkR7ST7qUl_AJXw7KhB0-o',
	authDomain: 'crown-db-7278a.firebaseapp.com',
	databaseURL: 'https://crown-db-7278a.firebaseio.com',
	projectId: 'crown-db-7278a',
	storageBucket: 'crown-db-7278a.appspot.com',
	messagingSenderId: '122963472236',
	appId: '1:122963472236:web:da4ca8eb3f3f6ec4204d49',
	measurementId: 'G-Y5FGGFDLDB'
};

const providerGoogle = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp(firebaseConfig);

providerGoogle.setCustomParameters({ prompt: 'select_account' });

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const signInWithGoogle = () => auth.signInWithPopup(providerGoogle);

export const createUserProfileDocument = async (userAuth, otherData) => {
	if (!userAuth) {
		console.log(' no user');
		return;
	}

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const userSnapShot = await userRef.get();

	if (!userSnapShot.exists) {
		console.log(userAuth);
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({ displayName, email, createdAt, ...otherData });
		} catch (error) {
			console.log('Error creating the user ' + error.message);
		}
	}
	return userRef;
};

export default firebase;
