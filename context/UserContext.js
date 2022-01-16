import {createContext, useEffect, useState} from "react";

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

      console.log(response.user);
    });
  };

  const data = {handleClick, user};

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export {UserProvider};
export default UserContext;
