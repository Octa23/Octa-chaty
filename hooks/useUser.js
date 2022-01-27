/* eslint-disable react-hooks/exhaustive-deps */
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

import {loginWithGoogle, onAuthStateChange, Logout} from "../firebase/cliente";

const useUser = () => {
  const [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    onAuthStateChange(setUser);
  }, []);

  useEffect(() => {
    user === null && router.push("/");
  }, [user]);

  const handleLogin = () => {
    loginWithGoogle();
  };
  const handleLogout = () => {
    Logout();
  };

  return {user, handleLogin, handleLogout};
};

export default useUser;
