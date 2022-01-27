import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  orderBy,
  Timestamp,
  query,
  limit,
  onSnapshot,
} from "firebase/firestore";
import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBpf7ZsBOhUvNMsJ3waOMg13JFyX9Epsl0",
  authDomain: "octa-chaty.firebaseapp.com",
  projectId: "octa-chaty",
  storageBucket: "octa-chaty.appspot.com",
  messagingSenderId: "415339156811",
  appId: "1:415339156811:web:71e967e4c585333ed704ce",
  measurementId: "G-L9Z88QKMXV",
};

try {
  initializeApp(firebaseConfig);
} catch (e) {
  alert(e);
}
const auth = getAuth();
const db = getFirestore();

export const onAuthStateChange = (onChange) => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      const {displayName, photoURL, email, uid} = user;
      const usuario = {displayName, photoURL, email, uid};

      onChange(usuario);
    } else {
      const usuario = null;

      onChange(usuario);
    }
  });
};

export const Logout = () => {
  return signOut(auth);
};

export const loginWithGoogle = () => {
  const googleProvider = new GoogleAuthProvider();

  return signInWithPopup(auth, googleProvider).catch(function (error) {
    console.error(error);
  });
};

export const addData = async ({avatar, displayName, message, userId}) => {
  try {
    await addDoc(collection(db, "messages"), {
      avatar,
      displayName,
      message,
      userId,
      likesCount: 0,
      createdAt: Timestamp.fromDate(new Date()),
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const mapPosts = (querySnapshot) => {
  return querySnapshot.docs.map((doc) => {
    const data = doc.data();
    const id = doc.id;
    const {createdAt} = data;

    return {
      ...data,
      id,
      createdAt: +createdAt.toDate(),
    };
  });
};

export const listenNewPosts = (callback) => {
  const q = query(collection(db, "messages"), orderBy("createdAt", "desc"), limit(20));

  return onSnapshot(q, (querySnapshot) => {
    callback(mapPosts(querySnapshot));
  });
};
