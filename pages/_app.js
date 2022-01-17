import {ChakraProvider} from "@chakra-ui/react";

import "../styles/globals.css";
import {UserProvider} from "../context/UserContext";
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
