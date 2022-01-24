import {createContext} from "react";

import useUser from "../hooks/useUser";
const UserContext = createContext();
const UserProvider = ({children}) => {
  const {user, handleLogin, handleLogout} = useUser();
  const data = {user, handleLogout, handleLogin};

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export {UserProvider};
export default UserContext;
