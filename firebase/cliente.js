import "firebase/compat/auth";
import {getAuth, onAuthStateChanged, GithubAuthProvider, signInWithPopup} from "firebase/auth";
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
  const app = initializeApp(firebaseConfig);
} catch (e) {
  console.log(e);
}
const auth = getAuth();

export const onAuthStateChange = (onChange) => {
  return onAuthStateChanged(auth, (user) => {
    const {displayName, photoURL, email} = user;
    const usuario = {displayName, photoURL, email};

    onChange(usuario);
  });
};

export const loginWithGitHub = () => {
  const githubProvider = new GithubAuthProvider();

  return signInWithPopup(auth, githubProvider);
};
