import {createContext, useEffect, useState} from "react";
import {getAuth, signOut} from "firebase/auth";

import {loginWithGitHub, onAuthStateChange} from "../firebase/cliente";

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChange(setUser);
  }, []);
  const handleClick = () => {
    loginWithGitHub().then((response) => {
      const {displayName, photoURL, email} = response.user;

      setUser({displayName, photoURL, email});
    });
  };

  const handleLogout = () => {
    const auth = getAuth();

    signOut(auth).then(() => setUser(null));
  };

  const data = {handleClick, handleLogout, user};

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export {UserProvider};
export default UserContext;
