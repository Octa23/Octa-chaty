import {ChakraProvider} from "@chakra-ui/react";

import {UserProvider} from "../context/UserContext";

import "../styles/globals.css";
function MyApp({Component, pageProps}) {
  return (
    <ChakraProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ChakraProvider>
  );
}

export default MyApp;
