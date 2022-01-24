/* eslint-disable react-hooks/exhaustive-deps */
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

import {loginWithGitHub, onAuthStateChange, Logout} from "../firebase/cliente";

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
    loginWithGitHub();
  };
  const handleLogout = () => {
    Logout();
  };

  return {user, handleLogin, handleLogout};
};

export default useUser;
